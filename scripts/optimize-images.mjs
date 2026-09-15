/**
 * Builds the image files that ship in /public from the originals in
 * /image-sources, and writes the manifest the next/image loader reads.
 *
 * Vercel's Image Optimization is metered (5K transformations/month on Hobby).
 * Once that runs out every /_next/image request answers 402 and the site loses
 * its images, so everything here is pre-built and served as a plain CDN file.
 *
 * Deliberately minimal: one display file per image, plus the four social cards.
 * Run after changing anything under /image-sources:  npm run images
 */

import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_DIR = path.join(ROOT, "image-sources");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUTPUT_DIR = path.join(PUBLIC_DIR, "optimized");
const MANIFEST_FILE = path.join(ROOT, "src", "lib", "image-manifest.json");

/** Widest place any screenshot is shown is the 1280px case-study hero. */
const PROJECT_WIDTH = 1440;
/** The portrait never renders above 280 CSS px, so 640 covers retina. */
const PROFILE_WIDTH = 640;
const WEBP = { quality: 78, effort: 6 };
/** Scrapers (WhatsApp especially) reject large cards, so social art stays small. */
const SOCIAL = { width: 1200, height: 630, quality: 74 };

const manifest = {};
const written = [];

async function write(publicPath, pipeline) {
  const target = path.join(PUBLIC_DIR, publicPath);
  await mkdir(path.dirname(target), { recursive: true });
  const { size } = await pipeline.toFile(target);
  written.push({ publicPath, size });
  return publicPath;
}

/**
 * Only builds screenshots the code actually points at, so retired artwork in
 * image-sources costs nothing.
 */
async function referencedProjectImages() {
  const found = new Set();

  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      // The manifest is an output, not a reference.
      else if (/\.tsx?$/.test(entry.name)) {
        const text = await readFile(full, "utf8");
        for (const match of text.matchAll(
          /\/assets\/projects\/[A-Za-z0-9._-]+\.(?:png|jpe?g)/g
        )) {
          found.add(match[0]);
        }
      }
    }
  }

  await walk(path.join(ROOT, "src"));
  return [...found].sort();
}

async function buildProjectImages() {
  const referenced = await referencedProjectImages();
  const available = new Set(
    (await readdir(path.join(SOURCE_DIR, "assets", "projects"))).map(
      (name) => `/assets/projects/${name}`
    )
  );

  for (const src of referenced) {
    if (!available.has(src)) {
      throw new Error(`${src} is referenced in src/ but missing from image-sources/`);
    }

    const relative = src.replace(/^\//, "");
    const file = await write(
      `/optimized/${relative.replace(/\.[^.]+$/, "")}.webp`,
      sharp(path.join(SOURCE_DIR, relative))
        .rotate()
        .resize({ width: PROJECT_WIDTH, withoutEnlargement: true })
        .webp(WEBP)
    );
    manifest[src] = { file };
  }

  const unused = [...available].filter((src) => !referenced.includes(src));
  if (unused.length) {
    console.log(`skipped ${unused.length} unreferenced original(s): ${unused.join(", ")}`);
  }
}

async function buildProfile() {
  const image = sharp(path.join(SOURCE_DIR, "profile.jpg")).rotate();

  const file = await write(
    "/optimized/profile.webp",
    image.clone().resize({ width: PROFILE_WIDTH, withoutEnlargement: true }).webp(WEBP)
  );
  // structuredData.ts publishes this URL as the schema.org Person image.
  await write("/profile.jpg", image.clone().jpeg({ quality: 82, mozjpeg: true }));

  manifest["/profile.jpg"] = { file };
}

async function buildSocialCards() {
  for (const name of await readdir(path.join(SOURCE_DIR, "og"))) {
    if (!/\.(png|jpe?g)$/i.test(name)) continue;
    const social = await write(
      `/og/${name.replace(/\.[^.]+$/, "")}.jpg`,
      sharp(path.join(SOURCE_DIR, "og", name))
        .rotate()
        .resize({ width: SOCIAL.width, height: SOCIAL.height, fit: "cover" })
        .flatten({ background: "#0b0b0b" })
        .jpeg({ quality: SOCIAL.quality, mozjpeg: true })
    );
    manifest[`/og/${name}`] = { social };
  }
}

async function run() {
  if (!existsSync(SOURCE_DIR)) {
    throw new Error(`Missing source directory: ${SOURCE_DIR}`);
  }

  // Clean rebuild, so renamed or dropped artwork never lingers in /public.
  await rm(OUTPUT_DIR, { recursive: true, force: true });

  await buildProjectImages();
  await buildProfile();
  await buildSocialCards();

  const ordered = Object.fromEntries(
    Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b))
  );
  await writeFile(MANIFEST_FILE, `${JSON.stringify(ordered, null, 2)}\n`);

  const total = written.reduce((sum, file) => sum + file.size, 0);
  console.log(
    `${written.length} files written to /public, ${(total / 1024 / 1024).toFixed(2)} MB total`
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

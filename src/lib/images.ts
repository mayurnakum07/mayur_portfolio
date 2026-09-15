import manifestJson from "./image-manifest.json";

export type ImageManifestEntry = {
  /** The one pre-built WebP served for this image, e.g. "/optimized/profile.webp". */
  file?: string;
  /** 1200x630 JPEG for OG/Twitter cards. */
  social?: string;
};

/** Used when an image has no card of its own. */
const DEFAULT_SOCIAL_CARD = "/og/projects.jpg";

const manifest = manifestJson as unknown as Record<string, ImageManifestEntry>;

/** Source path as written in components, e.g. "/assets/projects/devli.png". */
export function imagePath(src: string): string {
  return manifest[src]?.file ?? src;
}

/** Social cards must be a modest 1200x630, never the multi-MB original. */
export function socialImagePath(src: string): string {
  return manifest[src]?.social ?? DEFAULT_SOCIAL_CARD;
}

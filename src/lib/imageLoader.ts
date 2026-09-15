import { imagePath } from "./images";

/**
 * next/image loader wired up in next.config.mjs. It points at the WebP files
 * built ahead of time by scripts/optimize-images.mjs, so images are served
 * straight from the CDN and never spend a metered Vercel image transformation.
 * There is a single file per image, so the requested width is irrelevant.
 */
export default function staticImageLoader({ src }: { src: string }): string {
  return imagePath(src);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Images are pre-built to static WebP by scripts/optimize-images.mjs, so the
    // metered /_next/image optimizer is bypassed entirely. Note that adding
    // formats here (AVIF especially) invalidates every cached transformation,
    // which is what exhausted the quota in the first place.
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
    // One file exists per image, so a single candidate keeps srcset honest.
    deviceSizes: [1440],
    imageSizes: [640],
  },
};

export default nextConfig;

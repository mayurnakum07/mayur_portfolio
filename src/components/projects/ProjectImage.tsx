import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  /** Passed straight to next/image so phones do not download desktop assets. */
  sizes: string;
  className?: string;
  priority?: boolean;
}

/**
 * Fill-mode project image. The parent must be positioned and carry the aspect
 * ratio. Placeholder artwork is authored as SVG, which the image optimizer
 * cannot process — those are served as-is.
 */
export default function ProjectImage({
  src,
  alt,
  sizes,
  className = "",
  priority = false,
}: ProjectImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      unoptimized={src.endsWith(".svg")}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={`object-cover ${className}`}
    />
  );
}

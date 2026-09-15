import ProjectImage from "@/components/projects/ProjectImage";
import { cn } from "@/lib/utils";

interface ArtifactFrameProps {
  src: string;
  alt: string;
  sizes: string;
  caption?: string;
  interactive?: boolean;
  priority?: boolean;
  className?: string;
  aspectClass?: string;
}

export default function ArtifactFrame({
  src,
  alt,
  sizes,
  caption,
  interactive = false,
  priority = false,
  className,
  aspectClass = "aspect-[16/10]",
}: ArtifactFrameProps) {
  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "artifact-frame",
          aspectClass,
          interactive ? "artifact-frame--interactive" : "artifact-frame--static"
        )}
      >
        <ProjectImage
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          fit="contain"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-meta-sm text-paper-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

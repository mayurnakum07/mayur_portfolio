interface TechChipsProps {
  technologies: string[];
}

export default function TechChips({ technologies }: TechChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-border/50 bg-surface-2/40 px-2.5 py-1 text-[13px] text-muted-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

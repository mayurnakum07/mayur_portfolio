interface TechChipsProps {
  technologies: string[];
  /** Chips shown before the rest collapse into a "+N" chip. Omit to show all. */
  max?: number;
}

export default function TechChips({ technologies, max }: TechChipsProps) {
  const shown = max ? technologies.slice(0, max) : technologies;
  const overflow = technologies.length - shown.length;

  return (
    <ul className="flex flex-wrap gap-2">
      {shown.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-border/50 bg-surface-2/40 px-2.5 py-1 text-[13px] text-muted-foreground"
        >
          {tech}
        </li>
      ))}

      {overflow > 0 && (
        <li
          className="rounded-md border border-dashed border-border/50 px-2.5 py-1 text-[13px] text-muted-foreground/70"
          title={technologies.slice(shown.length).join(", ")}
        >
          +{overflow} more
        </li>
      )}
    </ul>
  );
}

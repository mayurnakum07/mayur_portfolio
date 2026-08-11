import type { Project } from "@/data/projects";

interface ProjectMetaRowProps {
  project: Project;
}

export default function ProjectMetaRow({ project }: ProjectMetaRowProps) {
  const items = [
    project.role && { label: "Role", value: project.role },
    { label: "Platform", value: project.platforms.join(" · ") },
    { label: "Year", value: project.year },
    project.client && { label: "Client", value: project.client },
  ].filter(Boolean) as { label: string; value: string }[];

  /**
   * A label above its value, not an inline run separated by dots — dots wrap to
   * the start of a line and read as orphaned punctuation.
   */
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-4">
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <dt className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/55">
            {item.label}
          </dt>
          <dd className="mt-1 text-[13px] leading-snug text-foreground/80">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

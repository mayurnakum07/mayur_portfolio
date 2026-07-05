import type { Project } from "@/data/projectData";

interface ProjectMetaRowProps {
  project: Project;
}

export default function ProjectMetaRow({ project }: ProjectMetaRowProps) {
  const items = [
    { label: "Role", value: project.role },
    { label: "Platform", value: project.platform.join(" · ") },
    { label: "Year", value: project.year },
    { label: "Status", value: project.status },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-[14px] text-muted-foreground">
      {items.map((item, i) => (
        <span key={item.label} className="inline-flex items-center">
          {i > 0 && (
            <span aria-hidden className="mx-3 text-border/80">
              ·
            </span>
          )}
          <span>
            <span className="text-muted-foreground/55">{item.label}</span>{" "}
            <span className="text-foreground/75">{item.value}</span>
          </span>
        </span>
      ))}
    </div>
  );
}

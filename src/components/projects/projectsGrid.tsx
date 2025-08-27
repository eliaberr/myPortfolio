import { ProjectsCard } from "./projectsCard";

export function ProjectsGrid() {
  return (
    <div className="mt-10 grid gap-20">
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
    </div>
  );
}
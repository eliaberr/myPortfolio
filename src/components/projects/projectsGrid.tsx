import { useLanguage } from "../../lib/i18n/useLanguage";
import type { ProjectsGridProps } from "../../lib/types/projectsGridType";
import { projects } from "../../lib/utils/projects";
import { ProjectsCard } from "./projectsCard";

export function ProjectsGrid({ onClick }: ProjectsGridProps) {
  const reverce = (index: number) => {
    const test = index % 2;
    if (test == 0) {
      return false;
    } else {
      return true;
    }
  };
    const { t } = useLanguage();

  return (
    <div className="mt-10 grid gap-20">
      {projects.map((item, index) => (
        <ProjectsCard
          idProject={item.id}
          projectCategory={item.projectCategory}
          resume={t(`projectResume${item.id}`)}
          title={t(`projectTitle${item.id}`)}
          urlImg={item.ulrImg}
          key={index}
          reverse={reverce(index)}
          onClick={() => onClick?.(item.id)}
        />
      ))}
    </div>
  );
}

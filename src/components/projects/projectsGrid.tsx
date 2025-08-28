import { projects } from "../../utils/projects";
import { ProjectsCard } from "./projectsCard";

export function ProjectsGrid() {
    const reverce = (index: number) => {
      let test = index%2
      if (test == 0) {
        return false
      } else {
        return true
      }
    }

    return (
        <div className="mt-10 grid gap-20">
            {projects.map((item, index) => (
                <ProjectsCard
                    projectCategory={item.projectCategory}
                    resume={item.resume}
                    title={item.name}
                    urlImg={item.ulrImg}
                    key={index}
                    reverse={reverce(index)}
                />
            ))}
        </div>
    );
}

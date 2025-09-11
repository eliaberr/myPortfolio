import { useState } from "react";
import { ProjectsModal } from "../components/modal/projectsModal";
import { ProjectsGrid } from "../components/projects/projectsGrid";

export function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [idProject, setIdProject] = useState(Number);
  const handleOpen = (id: number) => {
    setIdProject(id - 1);
    setShowModal(true);
  };

  return (
    <section id="projects" className="bg-[#F5F5F5] text-black pt-20 pb-20 ">
      <div className="px-5 mx-auto md:px-24 md:w-[1120px]">
        <div className="text-center">
          <h2 className="font-bold text-[34px]">Meus Projetos</h2>
          <p className="text-gray-500 text-sm mx-auto md:max-w-2xl">
            Alguns dos meus trabalhos desenvolvidos como freelancer, voltados
            para atender demandas reais, e por projetos acadêmicos realizados em
            cursos e na faculdade, que contribuíram significativamente para a
            ampliação dos meus conhecimentos.
          </p>
        </div>
        <ProjectsGrid onClick={handleOpen} />
      </div>
      {showModal ? (
        <ProjectsModal
          idProject={idProject}
          onClick={() => setShowModal(false)}
        />
      ) : (
        ""
      )}
    </section>
  );
}

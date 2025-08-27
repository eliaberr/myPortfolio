import { ProjectsGrid } from "../components/projects/projectsGrid";

export function Projects() {
  return (
    <section className="bg-[#F5F5F5] text-black pt-20 pb-20 ">
      <div className="w-[1120px] px-24 mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-[34px]">Meus Projetos</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Alguns dos meus projetos foram desenvolvidos em âmbito acadêmico e
            outros criados para resolver necessidades reais, aplicando práticas
            de desenvolvimento full stack com tecnologias modernas.
          </p>
        </div>
        <ProjectsGrid/>
      </div>
    </section>
  );
}

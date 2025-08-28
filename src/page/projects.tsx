import { ProjectsGrid } from "../components/projects/projectsGrid";

export function Projects() {
    return (
        <section className="bg-[#F5F5F5] text-black pt-20 pb-20 ">
            <div className="w-[1120px] px-24 mx-auto">
                <div className="text-center">
                    <h2 className="font-bold text-[34px]">Meus Projetos</h2>
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                        Alguns dos meus trabalhos desenvolvidos como freelancer,
                        voltados para atender demandas reais, e por projetos
                        acadêmicos realizados em cursos e na faculdade, que
                        contribuíram significativamente para a ampliação dos
                        meus conhecimentos.
                    </p>
                </div>
                <ProjectsGrid />
            </div>
        </section>
    );
}

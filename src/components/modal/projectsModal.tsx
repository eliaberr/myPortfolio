import { IoMdClose } from "react-icons/io";
import type { ProjectsModalProps } from "../../lib/types/projectsModalType";
import { projects } from "../../lib/utils/projects";
import { infoButton, infoProjects } from "../../lib/utils/infoModal";
import { motion } from "motion/react";
import { useLanguage } from "../../lib/i18n/useLanguage";

export function ProjectsModal({ onClick, idProject }: ProjectsModalProps) {
  const { t } = useLanguage();

  const descriptionProjects = [];

  for (let i = 0; i < 5; i++) {
    descriptionProjects.push(
      t(`project_${idProject + 1}_description_paragraph_${i + 1}`)
    );
  }

  const titleModalInfo = (title: string) => {
    if (title === "Nome do Projeto") {
      return t("projectNameModalInfo");
    } else if (title === "Tipo do Projeto") {
      return t("projectCategoryModalInfo");
    } else if (title === "Tecnologias Ultilizadas") {
      return t("projectTechnologysModalInfo");
    } else if (title === "Bibliotecas Ultilizadas") {
      return t("projectLibrariesModalInfo");
    }
  };

  return (
    <motion.div
      className="mx-auto h-screen flex flex-col justify-center items-center fixed top-0 backdrop-blur-md text-center lg:w-full py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className="bg-white w-[95%] shadow-blue-950 shadow px-3 py-10 rounded relative overflow-auto lg:w-[1000px] lg:h-[700px] lg:flex lg:flex-row lg:px-10"
        key="modal"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.2, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <button
          onClick={onClick}
          className="fixed top-6 right-5 w-7 h-7 border rounded-full flex justify-center items-center text-red-600 cursor-pointer hover:bg-red-600 hover:text-black lg:absolute lg:top-1 lg:right-2"
        >
          <IoMdClose />
        </button>
        <div className="text-start flex flex-col lg:flex-2">
          <img
            src={projects[idProject].ulrImg}
            alt="teste"
            className="w-[300px] flex-2 mx-auto rounded lg:mx-0"
          />
          <div className="mt-5 flex flex-col justify-centers gap-5 flex-3 py-5 pe-10 font-semibold">
            {infoProjects(
              idProject,
              t(`projectTitle${idProject + 1}`),
              t(`projectCategory${idProject + 1}`)
            ).map((item) => (
              <h2>
                {titleModalInfo(item.title)}:
                <span className="font-normal"> {item.name}</span>
              </h2>
            ))}
          </div>
          <div className="grid grid-cols-8 flex-2 gap-4 text-white ">
            {infoButton(idProject)
              .filter((item) => item.link && item.link.trim() !== "")
              .map((item) => (
                <a
                  href={item.link}
                  target="_blank"
                  className="col-span-3 h-12 bg-[#0D1117] rounded flex justify-center gap-3 items-center cursor-pointer hover:bg-[#14233b]"
                >
                  <span>{<item.icon />}</span>
                  {item.title}
                </a>
              ))}
          </div>
        </div>
        <div className="mt-10 grid text-start gap-3 overflow-auto lg:mt-0 lg:flex-2">
          <h2 className="font-bold">{t("projectDetailsModalInfo")}</h2>
          {descriptionProjects.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

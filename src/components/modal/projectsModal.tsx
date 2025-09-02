import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import imgCardTest from "../../assets/imgCardTest.png";
import type { ProjectsModalProps } from "../../types/projectsModalType";
import { projects } from "../../utils/projects";

export function ProjectsModal({ onClick, idProject }: ProjectsModalProps) {
  const project = projects[idProject];
  const infoProjects = [
    {
      title: "Nome do Projeto:",
      name: project.name,
    },
    {
      title: "Tipo do Projeto:",
      name: project.projectCategory,
    },
    {
      title: "Tecnologias Ultilizadas:",
      name: project.technologiesUsed,
    },
    {
      title: "Bibliotecas Ultilizadas:",
      name: project.libraries,
    },
  ];
  const infoButton = [
    {
      title: "Back-End",
      icon: <FaGithub />,
      link: project.urlButton.backEnd,
    },
    {
      title: "Front-End",
      icon: <FaGithub />,
      link: project.urlButton.frontEnd,
    },
    {
      title: "Deploy",
      icon: <FaGlobe />,
      link: project.urlButton.deploy,
    },
    {
      title: "Video",
      icon: <FaYoutube />,
      link: project.urlButton.video,
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center fixed top-0 backdrop-blur-md text-center">
      <div className="bg-white w-[1000px] h-[700px] shadow-blue-950 shadow px-10 py-10 rounded flex relative">
        <button
          onClick={onClick}
          className="absolute top-2 right-3 w-7 h-7 border rounded-full flex justify-center items-center text-red-600 cursor-pointer hover:bg-red-600 hover:text-black"
        >
          <IoMdClose />
        </button>
        <div className="flex-2 text-start flex flex-col">
          <img src={imgCardTest} alt="teste" className="w-[300px] flex-2" />
          <div className="mt-5 flex flex-col justify-centers gap-5 flex-3 py-5 pe-10 font-semibold">
            {infoProjects.map((item) => (
              <h2>
                {item.title}
                <span className="font-normal">{item.name}</span>
              </h2>
            ))}
          </div>
          <div className="grid grid-cols-8 flex-2 gap-4  text-white ">
            {infoButton
              .filter((item) => item.link && item.link.trim() !== "")
              .map((item) => (
                <a href={item.link} target="_blank" className="col-span-3 h-12 bg-[#0D1117] rounded flex justify-center gap-3 items-center cursor-pointer hover:bg-[#14233b]">
                  <span>{item.icon}</span>
                  {item.title}
                </a>
              ))}
          </div>
        </div>
        <div className="flex-2 grid text-start gap-3 overflow-auto">
          {project.description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

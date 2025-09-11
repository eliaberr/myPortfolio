import { IoMdClose } from "react-icons/io";
import type { ProjectsModalProps } from "../../types/projectsModalType";
import { projects } from "../../utils/projects";
import { infoButton, infoProjects } from "../../utils/infoModal";

export function ProjectsModal({ onClick, idProject }: ProjectsModalProps) {
  return (
    <div className="mx-auto h-screen flex flex-col justify-center items-center fixed top-0 backdrop-blur-md text-center lg:w-full py-5">
      <div className="bg-white w-[95%] shadow-blue-950 shadow px-3 py-10 rounded relative overflow-auto lg:w-[1000px] lg:h-[700px] lg:flex lg:flex-row lg:px-10">
        <button
          onClick={onClick}
          className="absolute top-2 right-3 w-7 h-7 border rounded-full flex justify-center items-center text-red-600 cursor-pointer hover:bg-red-600 hover:text-black"
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
            {infoProjects(idProject).map((item) => (
              <h2>
                {item.title}
                <span className="font-normal">{item.name}</span>
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
          <h2 className="font-bold">Descrição de Projeto:</h2>
          {projects[idProject].description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

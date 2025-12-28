import { projects } from "./projects";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";

export function infoProjects(idProjects: number, projectTitle: string, projectCategory: string) {
  const infoProjects = [
    {
      title: "Nome do Projeto",
      name: projectTitle,
    },
    {
      title: "Tipo do Projeto",
      name: projectCategory,
    },
    {
      title: "Tecnologias Ultilizadas",
      name: projects[idProjects].technologiesUsed,
    },
    {
      title: "Bibliotecas Ultilizadas",
      name: projects[idProjects].libraries,
    },
  ];
  return infoProjects
}

export function infoButton(idProjects: number) {
  const infoButton = [
    {
      title: "Back-End",
      icon: FaGithub,
      link: projects[idProjects].urlButton.backEnd,
    },
    {
      title: "Front-End",
      icon: FaGithub,
      link: projects[idProjects].urlButton.frontEnd,
    },
    {
      title: "Deploy",
      icon: FaGlobe,
      link: projects[idProjects].urlButton.deploy,
    },
    {
      title: "Video",
      icon: FaYoutube,
      link: projects[idProjects].urlButton.video,
    },
  ];
  return infoButton
}



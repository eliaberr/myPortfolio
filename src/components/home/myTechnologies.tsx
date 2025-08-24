import { FaNodeJs, FaJava, FaDocker } from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";

export function MyTechnologies() {
  const technologies = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Node.JS", icon: <FaNodeJs /> },
    { name: "Next.JS", icon: <SiNextdotjs /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Docker", icon: <FaDocker /> },
  ];
  return (
    <div className="mt-10">
      <h3>Tech Stack</h3>
      <div className="flex justify-start">
        <div className="flex justify-start">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="hover:bg-[#1B1B1B] w-[80px] hover:w-[150px] h-14 px-1 text-3xl flex items-center gap-1 rounded-lg group relative
                 transition-all duration-300 ease-in-out origin-left"
            >
              {item.icon}
              <span
                className="text-base hidden opacity-0 transform -translate-x-3 
                   transition-all duration-300 ease-in-out group-hover:grid
                   group-hover:opacity-100 group-hover:translate-x-0"
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
{/* <div className="flex justify-start ">
  {" "}
  {technologies.map((item, index) => (
    <div
      key={index}
      className="hover:bg-[#1B1B1B] w-[80px] hover:w-[150px] h-14 px-1 text-3xl flex items-center gap-1 rounded-lg group relative"
    >
      {" "}
      {item.icon}{" "}
      <span className="text-base hidden group-hover:grid">{item.name}</span>{" "}
    </div>
  ))}{" "}
</div>; */}

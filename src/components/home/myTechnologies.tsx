import { FaNodeJs, FaJava, FaDocker, FaAngular } from "react-icons/fa";
import {
    SiSpringboot,
    SiTypescript,
    SiNextdotjs,
    SiJavascript,
} from "react-icons/si";

export function MyTechnologies() {
  const technologies = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="group-hover:text-[#F7DF1E]" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="group-hover:text-[#3178C6]" />,
    },
    {
      name: "Java",
      icon: <FaJava className="group-hover:text-[#007396]" />,
    },
    {
      name: "Node.JS",
      icon: <FaNodeJs className="group-hover:text-[#68A063]" />,
    },
    {
      name: "Next.JS",
      icon: <SiNextdotjs className="group-hover:text-gray-400" />,
    },
    {
      name: "Angular",
      icon: <FaAngular className="group-hover:text-[#DD0031]" />,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="group-hover:text-[#6DB33F]" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="group-hover:text-[#0db7ed]" />,
    },
  ];
    return (
        <div className="mt-20 text-center lg:text-start lg:py-10">
            <h3>Tech Stack</h3>
            <div className="flex justify-start">
                <div className="grid grid-cols-4 w-[350px] mt-5 mx-auto lg:flex lg:w-auto lg:ms-10 lg:mt-0">
                    {technologies.map((item, index) => (
                        <div
                            key={index}
                            className="hover:bg-[#1B1B1B] cursor-pointer w-[80px] hover:w-[150px] h-14 px-1 text-3xl flex justify-center items-center gap-2 rounded-lg group relative
                                      transition-all duration-300 ease-in-out origin-left lg:justify-start"
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
import  { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Contact() {
  const infoButton = [
    {
      name: "Email",
      icon: <MdEmail/>,
      action: "",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin/>,
      action: "",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp/>,
      action: "",
    },
  ];

  return (
    <div className="w-full bg-[#0D1117] text-center pt-10">
      <h2 className="font-bold text-[34px]">Meus Contatos</h2>
      <div className="flex flex-col justify-center gap-10 my-5">
        {infoButton.map((item) => (
          <button className="w-[250px] h-10 rounded mx-auto flex justify-center cursor-pointer gap-3 items-center border border-transparent bg-[#1c2431] hover:bg-[#0D1117] hover:border-white hover:scale-105 transition-all duration-500 ">
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

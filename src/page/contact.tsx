import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { openEmial, openLinkedin, openWhatsApp } from "../utils/linksSocialMidias";

export function Contact() {
  const infoButton = [
    {
      name: "Email",
      icon: <MdEmail />,
      action: openEmial,
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      action: openLinkedin,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      action: openWhatsApp,
    },
  ];

  return (
    <div id="contacts" className="flex flex-col gap-2 max-w-xl mx-auto text-center py-10">
      <h2 className="font-bold text-[34px]">Entre em Contato</h2>
      <p className="text-gray-500 text-sm  mx-auto">
        Quer saber mais sobre meus projetos, trocar ideias ou até mesmo fechar
        uma parceria? Me mande uma mensagem pelo WhatsApp, e-mail ou LinkedIn
        clicando nos botões abaixo.
      </p>
      <div className="flex justify-between gap-10 mt-10">
        {infoButton.map((item) => (
          <button
            onClick={item.action}
            className="w-[150px] h-12 rounded mx-auto flex justify-center cursor-pointer gap-3 items-center border border-transparent bg-[#1c2431] hover:bg-[#0D1117] hover:border-white hover:scale-105 transition-all duration-500 "
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
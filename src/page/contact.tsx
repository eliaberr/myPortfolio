import { motion } from "motion/react";
import { infoButton } from "../utils/buttonsFooter";

export function Contact() {
  return (
    <motion.div
      id="contacts"
      className="flex flex-col gap-2 max-w-xl mx-auto text-center py-10"
      initial={{opacity: 0, y:20}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration:2}}
      viewport={{once: true, amount: 0.2}}
    >
      <h2 className="font-bold text-[34px]">Entre em Contato</h2>
      <p className="text-gray-500 text-sm  mx-auto">
        Quer saber mais sobre meus projetos, trocar ideias ou até mesmo fechar
        uma parceria? Me mande uma mensagem pelo WhatsApp, e-mail ou LinkedIn
        clicando nos botões abaixo.
      </p>
      <div className="flex justify-between gap-2 mt-10 px-2 lg:px-0 lg:gap-10">
        {infoButton.map((item) => (
          <button
            onClick={item.action}
            className="w-[150px] h-12 rounded mx-auto flex justify-center cursor-pointer gap-3 items-center border border-transparent
                       bg-[#1c2431] hover:bg-[#0D1117] hover:border-white hover:scale-105 transition-all duration-500 "
          >
            {<item.icon />}
            {item.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

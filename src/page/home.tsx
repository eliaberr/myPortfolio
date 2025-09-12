import { motion } from "motion/react";
import imgDev from "../assets/imgDev.jpeg";
import { MyTechnologies } from "../components/home/myTechnologies";
import { openWhatsApp } from "../utils/linksSocialMidias";

export function Home() {
  return (
    <section id="home">
      <motion.div
        className="lg:w-[1120px] lg:h-[600px] mx-auto flex flex-col justify-center px-5 py-20 lg:px-24"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: -0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="flex flex-col justify-center gap-5 w-[350px] h-[274px] text-center lg:text-start lg:w-[450px]">
            <h1 className="text-[44px] font-bold">Eliabe Rodrigues</h1>
            <p className="text-sm ">
              Olá, sou desenvolvedor Full Stack! Gosto de unir criatividade e
              tecnologia para transformar ideias em projetos reais, sempre
              buscando aprender mais e entregar soluções com qualidade
            </p>
            <button
              onClick={openWhatsApp}
              className="w-[307px] mx-auto h-16 bg-[#3F8E00] rounded-sm cursor-pointer hover:bg-[#408e00bc] lg:mx-0 "
            >
              Contate me
            </button>
          </div>
          <div className="mt-10">
            <img
              className="w-[350px] h-[350px] object-cover rounded-full shadow-2xl shadow-[#efe4d433] "
              src={imgDev}
              alt="imgUser"
            />
          </div>
        </div>
        <MyTechnologies />
      </motion.div>
    </section>
  );
}

import imgDev from "../assets/imgDev.jpeg";
import { MyTechnologies } from "../components/home/myTechnologies";

export function Home() {
  return (
    <section className="w-[1120px] h-[600px] mx-auto flex flex-col justify-center px-24">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center gap-5 w-[450px] h-[274px]">
          <h1 className="text-[44px] font-bold">Eliabe Rodrigues</h1>
          <p className="text-sm ">
            Olá, sou desenvolvedor Full Stack! Gosto de unir criatividade e
            tecnologia para transformar ideias em projetos reais, sempre
            buscando aprender mais e entregar soluções com qualidade
          </p>
          <button className="w-[307px] h-16 bg-[#3F8E00] rounded-sm cursor-pointer hover:bg-[#008e09] ">
            Contate me
          </button>
        </div>
        <div>
          <img
            className="w-[350px] h-[350px] object-cover rounded-full shadow-2xl shadow-[#efe4d433] "
            src={imgDev}
            alt="imgUser"
          />
        </div>
      </div>
      <MyTechnologies/>
    </section>
  );
}

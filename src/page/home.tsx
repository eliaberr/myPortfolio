import imgTeste from "../assets/imgTeste.jpeg";
import { MyTechnologies } from "../components/home/myTechnologies";

export function Home() {
  return (
    <section className="w-[1120px] h-[600px] mx-auto flex flex-col justify-center px-24">
      <div className="flex justify-between ">
        <div className="flex flex-col justify-center gap-5 w-[450px] h-[274px]">
          <h1 className="text-[44px] font-bold">Eliabe Rodrigues</h1>
          <p className="text-sm ">
            Olá, sou desenvolvedor Full Stack! Gosto de unir criatividade e
            tecnologia para transformar ideias em projetos reais, sempre
            buscando aprender mais e entregar soluções com qualidade
          </p>
          <button className="w-[307px] h-16 bg-[#3F8E00] rounded-sm">
            Contate me
          </button>
        </div>
        <div>
          <img
            className="w-[350px] rounded-full "
            src={imgTeste}
            alt="teste"
          />
        </div>
      </div>
      <MyTechnologies/>
    </section>
  );
}

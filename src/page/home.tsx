import imgDev from "../assets/imgDev.jpeg";
import { MyTechnologies } from "../components/home/myTechnologies";
import { openWhatsApp } from "../utils/linksSocialMidias";

export function Home() {
    return (
        <section
            id="home"
            className="md:w-[1120px] md:h-[600px] mx-auto flex flex-col justify-center px-5 py-20 animate-fade-left md:px-24"
        >
            <div className="flex justify-between items-center flex-col md:flex-row">
                <div className="flex flex-col justify-center gap-5 w-[350px] h-[274px] text-center md:text-start md:w-[450px]">
                    <h1 className="text-[44px] font-bold">Eliabe Rodrigues</h1>
                    <p className="text-sm ">
                        Olá, sou desenvolvedor Full Stack! Gosto de unir
                        criatividade e tecnologia para transformar ideias em
                        projetos reais, sempre buscando aprender mais e entregar
                        soluções com qualidade
                    </p>
                    <button
                        onClick={openWhatsApp}
                        className="w-[307px] mx-auto h-16 bg-[#3F8E00] rounded-sm cursor-pointer hover:bg-[#408e00bc] md:mx-0 "
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
        </section>
    );
}

import { SocialMidia } from "./socialMidia";

export function OptionsNavBar() {
    return (
        <div className="text-gray-300 grid grid-cols-12 ">
            <div className="col-span-8 grid grid-cols-5 col-start-2 text-sm">
            <a className="hover:underline text-center w-fit" href="#home">Home</a>
            {
                //<a className="hover:underline text-center w-fit" href="">Sobre mim</a>
            }
            <a className="hover:underline text-center w-fit" href="#projects">Projetos</a>
            <a className="hover:underline text-center w-fit" href="#contacts">Contatos</a>
            </div>
            <SocialMidia/>
        </div>
    )
}
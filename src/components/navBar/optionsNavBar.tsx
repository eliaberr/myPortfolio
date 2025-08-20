import { SocialMidia } from "./socialMidia";

export function OptionsNavBar() {
    return (
        <div className="text-gray-300 grid grid-cols-12 ">
            <div className="col-span-8 grid grid-cols-5 col-start-2 text-sm">
            <a href="">Home</a>
            <a href="">Sobre mim</a>
            <a href="">Projetos</a>
            <a href="">Contatos</a>
            <a href="">Test</a>
            </div>
            <SocialMidia/>
        </div>
    )
}
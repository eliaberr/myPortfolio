export function OptionsNavBar({className}:{className?:string}) {
    return (
        <div className={`text-sm ${className ? className : "col-span-8 grid grid-cols-5 col-start-2"}`}>
            <a className="hover:underline text-center w-fit" href="#home">
                Home
            </a>
            {
                //<a className="hover:underline text-center w-fit" href="">Sobre mim</a>
            }
            <a className="hover:underline text-center w-fit" href="#projects">
                Projetos
            </a>
            <a className="hover:underline text-center w-fit" href="#contacts">
                Contatos
            </a>
        </div>
    );
}

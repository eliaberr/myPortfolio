export default function Footer() {
    const easterEgg = () => {
        alert("Obrigado por visitar meu portfólio! 🤝😉 ");
    };
    return (
        <footer className="bg-[#1B1B1B] w-full py-3">
            <h2 className="text-center text-sm">
                Desenvovido por{" "}
                <span
                    onClick={easterEgg}
                    className="hover:text-[#3F8E00] cursor-pointer"
                >
                    Eliabe Rodrigues
                </span>
                .
            </h2>
        </footer>
    );
}

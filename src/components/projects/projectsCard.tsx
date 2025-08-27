import imgCardTest from "../../assets/imgCardTest.png";

export function ProjectsCard() {
  return (
    <div className="max-w-[890px] mx-auto h-[300px] grid grid-cols-12 overflow-hidden gap-2 relative">
      <span className="absolute bg-blue-300 px-2 text-[12px] text-blue-600 font-bold rounded-full">Freelancer</span>
      <div className="col-span-6 my-auto">
        <h2 className="text-2xl font-bold">Casamento Lais e Eliabe</h2>
        <p className="text-sm mt-3">
          Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis. Per aumento de cachacis, eu
          reclamis. Eu nunca mais boto a boca num copo de cachaça, agora eu só
          uso canudis! Negão é teu passadis, eu sou faxa pretis.
        </p>
        <button className="w-44 h-9 rounded text-white bg-blue-600 mt-10">
          saiba mais
        </button>
      </div>
      <img src={imgCardTest} alt="imgteste" className="col-span-6" />
    </div>
  );
}

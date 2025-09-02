import { useEffect, useState } from "react";
import type { ProjectsCardProps } from "../../types/projectsCardType";

export function ProjectsCard({
    projectCategory,
    title,
    resume,
    urlImg,
    reverse,
    onClick
}: ProjectsCardProps) {
    const [cardPrimaryColor, setCardPrimaryColor] = useState("bg-blue-300");
    const [cardTextPrimaryColor, setCardTextPrimaryColor] =
        useState("text-blue-700");
    const [buttonPrimaryColor, setButtonPrimaryColor] = useState("bg-blue-700");
    const [hoverButtonPrimaryColor, setHoverButtonPrimaryColor] = useState("hover:bg-blue-800");

    useEffect(() => {
        const colorCard = () => {
            if (projectCategory === "Projeto Real") {
                setCardPrimaryColor("bg-orange-300");
                setCardTextPrimaryColor("text-orange-700");
                setButtonPrimaryColor("bg-orange-700");
                setHoverButtonPrimaryColor("hover:bg-orange-800");
            } else {
                if (projectCategory === "Freelancer") {
                    setCardPrimaryColor("bg-emerald-300");
                    setCardTextPrimaryColor("text-emerald-700");
                    setButtonPrimaryColor("bg-emerald-700");
                    setHoverButtonPrimaryColor("hover:bg-emerald-800");
                } else {
                    if (projectCategory === "Projeto Acadêmico") {
                        setCardPrimaryColor("bg-indigo-300");
                        setCardTextPrimaryColor("text-indigo-700");
                        setButtonPrimaryColor("bg-indigo-700");
                        setHoverButtonPrimaryColor("hover:bg-indigo-800");
                    }
                }
            }
        };
        colorCard();
    }, [projectCategory]);

    return (
        <div
            className={`max-w-[890px] mx-auto h-[300px] flex overflow-hidden gap-3 ${
                reverse ? "flex-row-reverse" : ""
            }`}
        >
            <div className="my-auto flex-1 relative">
                <span
                    className={`absolute -top-7 left-0 px-2 text-[12px] font-bold rounded-full ${cardPrimaryColor} ${cardTextPrimaryColor}`}
                >
                    {projectCategory}
                </span>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-sm mt-3 h-32">{resume}</p>
                <button
                    type="button"
                    className={`w-44 h-9 rounded mt-7 flex-1 text-white cursor-pointer ${buttonPrimaryColor} ${hoverButtonPrimaryColor}`}
                    onClick={onClick}
                >
                    Saiba mais
                </button>
            </div>
            <img src={urlImg} alt={urlImg} />
        </div>
    );
}

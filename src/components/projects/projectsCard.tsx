import { useEffect, useState } from "react";
import type { ProjectsCardProps } from "../../types/projectsCardType";

export function ProjectsCard({
    projectCategory,
    title,
    resume,
    urlImg,
    reverse,
    onClick,
}: ProjectsCardProps) {
    const [cardPrimaryColor, setCardPrimaryColor] = useState("bg-blue-300");
    const [cardTextPrimaryColor, setCardTextPrimaryColor] =
        useState("text-blue-700");
    const [buttonPrimaryColor, setButtonPrimaryColor] = useState("bg-blue-700");
    const [hoverButtonPrimaryColor, setHoverButtonPrimaryColor] =
        useState("hover:bg-blue-800");

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
            className={`mx-auto h-[500px] flex overflow-hidden gap-3 md:max-w-[890px] flex-col-reverse md:h-[300px] md:flex-row animate-fade-up animate-once ${
                reverse ? "md:flex-row-reverse" : ""
            }`}
        >
            <div className="my-auto relative flex-1/2">
                <span
                    className={`absolute -top-[30px] left-0 px-2 text-[12px] font-bold rounded-bl md:rounded-full md:-top-7 ${cardPrimaryColor} ${cardTextPrimaryColor}`}
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
            <div className="flex-1/2 h-full">
                <img className="h-full rounded" src={urlImg} alt={urlImg} />
            </div>
        </div>
    );
}

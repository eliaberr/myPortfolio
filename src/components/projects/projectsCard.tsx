import { useEffect, useState } from "react";
import type { ProjectsCardProps } from "../../lib/types/projectsCardType";
import { motion } from "motion/react";
import { useLanguage } from "../../lib/i18n/useLanguage";

export function ProjectsCard({
  idProject,
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
  const { t } = useLanguage();

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
    <motion.div
      className={`mx-auto h-[500px] flex overflow-hidden gap-3 lg:max-w-[890px] flex-col-reverse lg:h-[300px] lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      initial={reverse ? { x: 20, opacity: 0 } : { x: -20, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="my-auto relative flex-1/2">
        <span
          className={`absolute -top-[30px] left-0 px-2 text-[12px] font-bold rounded-bl lg:rounded-full lg:-top-7 ${cardPrimaryColor} ${cardTextPrimaryColor}`}
        >
          {t(`projectCategory${idProject}`)}
        </span>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm mt-3 h-32">{resume}</p>
        <button
          type="button"
          className={`w-44 h-9 rounded mt-7 flex-1 text-white cursor-pointer ${buttonPrimaryColor} ${hoverButtonPrimaryColor}`}
          onClick={onClick}
        >
          {t("titleButton")}
        </button>
      </div>
      <div className="flex-1/2 h-full">
        <img className="h-full rounded" src={urlImg} alt={urlImg} />
      </div>
    </motion.div>
  );
}

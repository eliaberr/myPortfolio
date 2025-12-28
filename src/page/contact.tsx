import { motion } from "motion/react";
import { getInfoButtons } from "../lib/utils/buttonsFooter";
import { useLanguage } from "../lib/i18n/useLanguage";

export function Contact() {
  const { t } = useLanguage();

  return (
    <motion.div
      id="contacts"
      className="flex flex-col gap-2 max-w-xl mx-auto text-center py-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="font-bold text-[34px]">{t(`contactTitle`)}</h2>
      <p className="text-gray-500 text-sm  mx-auto">
        {t(`contactDescription`)}
      </p>
      <div className="flex justify-between gap-2 mt-10 px-2 lg:px-0 lg:gap-10">
        {getInfoButtons(t("mensageWhatsApp")).map((item) => (
          <button
            onClick={item.action}
            className="w-[150px] h-12 rounded mx-auto flex justify-center cursor-pointer gap-3 items-center border border-transparent
                       bg-[#1c2431] hover:bg-[#0D1117] hover:border-white hover:scale-105 transition-all duration-500 "
          >
            {<item.icon />}
            {item.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

import { useState } from "react";
import { ProjectsModal } from "../components/modal/projectsModal";
import { ProjectsGrid } from "../components/projects/projectsGrid";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "../lib/i18n/useLanguage";

export function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [idProject, setIdProject] = useState(Number);
  const handleOpen = (id: number) => {
    setIdProject(id - 1);
    setShowModal(true);
  };
  
  const { t } = useLanguage();
  
  return (
    <section id="projects" className="bg-[#F5F5F5] text-black pt-20 pb-20 ">
      <div className="px-5 mx-auto lg:px-24 lg:w-[1120px]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="font-bold text-[34px]">{t("projectTitleSection")}</h2>
          <p className="text-gray-500 text-sm mx-auto lg:max-w-2xl">
            {t("projectDescriptionSection")}
          </p>
        </motion.div>

        <ProjectsGrid onClick={handleOpen} />
      </div>
      <AnimatePresence mode="wait">
        {showModal && (
          <ProjectsModal
            idProject={idProject}
            onClick={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

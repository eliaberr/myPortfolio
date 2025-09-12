import { FaHamburger } from "react-icons/fa";
import { OptionsNavBar } from "./optionsNavBar";
import { SocialMidia } from "./socialMidia";
import { MenuMobile } from "./menuMobile";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <div className="text-gray-300 grid-cols-12 hidden bg-[#1B1B1B] lg:w-[1120px] lg:grid h-[70px] mx-auto place-content-center rounded-b-xl">
          <OptionsNavBar />
          <SocialMidia />
        </div>
        <div className="grid lg:hidden relative">
          <button
            onClick={() => setOpenMenu(true)}
            className={`w-10 h-10 items-center justify-center text-3xl absolute end-5 top-5 ${
              openMenu ? "hidden" : "flex"
            }`}
          >
            <FaHamburger />
          </button>
          <AnimatePresence>
            {openMenu && (
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <MenuMobile onClick={() => setOpenMenu(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
}

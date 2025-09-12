import { motion } from "motion/react";
import { OptionsNavBar } from "./optionsNavBar";
import { IoMdClose } from "react-icons/io";

export function MenuMobile({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      initial={{ x: 144 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      exit={{ x: 144 }}
      className="bg-white/95 text-black h-screen w-36 fixed end-0 z-20"
    >
      <div className="flex justify-end">
        <button onClick={onClick} className="text-3xl text-red-400">
          <IoMdClose />
        </button>
      </div>
      <OptionsNavBar className="flex flex-col gap-5 pt-14 px-3" />
    </motion.div>
  );
}

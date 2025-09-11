import { OptionsNavBar } from "./optionsNavBar";
import { IoMdClose } from "react-icons/io";

export function MenuMobile({ onClick }: { onClick: () => void }) {
    return (
        <div className="bg-white/95 text-black h-screen w-36 fixed end-0">
            <div className="flex justify-end">
                <button onClick={onClick} className="text-3xl text-red-400">
                    <IoMdClose />
                </button>
            </div>
            <OptionsNavBar className="flex flex-col gap-5 pt-14 px-3" />
        </div>
    );
}

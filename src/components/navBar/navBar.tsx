import { FaHamburger } from "react-icons/fa";
import { OptionsNavBar } from "./optionsNavBar";
import { SocialMidia } from "./socialMidia";
import { MenuMobile } from "./menuMobile";
import { useState } from "react";

export function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <nav>
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
                {openMenu && <MenuMobile onClick={() => setOpenMenu(false)} />}
            </div>
        </nav>
    );
}

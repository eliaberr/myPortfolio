import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { openGitHub, openLinkedin } from "../../lib/utils/linksSocialMidias";

export function SocialMidia() {
    return (
        <div className="flex justify-center gap-10 text-2xl col-span-3">
            <button onClick={openLinkedin} className="hover:text-white cursor-pointer"><FaLinkedinIn /></button>
            <button onClick={openGitHub} className="hover:text-white cursor-pointer"><FaGithub /></button>
        </div>
    );
}
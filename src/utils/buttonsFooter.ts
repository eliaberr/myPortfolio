import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { openEmial, openLinkedin, openWhatsApp } from "./linksSocialMidias";

export const infoButton = [
    {
      name: "Email",
      icon: MdEmail,
      action: openEmial,
    },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      action: openLinkedin,
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      action: openWhatsApp,
    },
  ];
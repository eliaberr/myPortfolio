import { useLanguage } from "../../lib/i18n/useLanguage";

export function OptionsNavBar({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <div
      className={`text-sm ${
        className ? className : "col-span-7 grid grid-cols-5 col-start-2"
      }`}
    >
      <a className="hover:underline text-center w-fit" href="#home">
        {t("home")}
      </a>
      <a className="hover:underline text-center w-fit" href="#projects">
        {t("projects")}
      </a>
      <a className="hover:underline text-center w-fit" href="#contacts">
        {t("contact")}
      </a>
    </div>
  );
}

import { useLanguage } from "../../lib/i18n/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  const easterEgg = () => {
    alert(`${t(`footerEasterEggs`)} 🤝😉`);
  };

  return (
    <footer className="bg-[#1B1B1B] w-full py-3">
      <h2 className="text-center text-sm">
        {t(`fotterDescription`)}{" "}
        <span
          onClick={easterEgg}
          className="hover:text-[#3F8E00] cursor-pointer underline"
        >
          Eliabe Rodrigues
        </span>
        .
      </h2>
    </footer>
  );
}

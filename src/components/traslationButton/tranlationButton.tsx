import flagBR from "../../assets/flagBR.png";
import flagUSA from "../../assets/flagUSA.png";
import { useLanguage } from "../../lib/i18n/useLanguage";

export function TranslationButton() {
  const { languageUsed, toggleLanguage } = useLanguage();
  const isEnglish = languageUsed === "en";

  const teste = async () => {
    await toggleLanguage();
    console.log("clicou");
  }

  return (
    <button
      type="button"
      onClick={teste}
      aria-label="Toggle language"
      className="relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition bg-zinc-800 overflow-hidden"
    >
      <span
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-90"
        style={{ backgroundImage: `url(${isEnglish ? flagUSA : flagBR})` }}
      />
      <span
        className={`relative z-10 inline-block h-6 w-6 transform rounded-full bg-white/85 transition
          ${isEnglish ? "translate-x-5" : "translate-x-0"}`}
      />
    </button>
  );
}

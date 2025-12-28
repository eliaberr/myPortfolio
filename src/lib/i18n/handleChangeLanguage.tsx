import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageContext";

type Props = { children: ReactNode };

export function LanguageProvider({ children }: Props) {
  const { t, i18n } = useTranslation();
  const [languageUsed, setLanguageUsed] = useState<string>(i18n.language);

  const changeLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
    setLanguageUsed(lang);
  };

  const toggleLanguage = async () => {
    const next = languageUsed === "pt" ? "en" : "pt";
    await changeLanguage(next);
  };

  return (
    <LanguageContext.Provider
      value={{ t, languageUsed, changeLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
export { LanguageContext };


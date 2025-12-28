import { createContext } from "react";
import type { TFunction } from "i18next";

export type LanguageContextValue = {
  t: TFunction;
  languageUsed: string;
  changeLanguage: (lang: string) => Promise<void>;
  toggleLanguage: () => Promise<void>;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

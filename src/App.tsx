import { NavBar } from "./components/navBar/navBar";
import { Home } from "./page/home";
import { Projects } from "./page/projects";
import { Contact } from "./page/contact";
import Footer from "./components/footer/footer";
import { LanguageProvider } from "./lib/i18n/handleChangeLanguage";

export default function App() {
  return (
    <LanguageProvider>
      <div className={`w-full mx-auto`}>
        <NavBar />
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

import { NavBar } from "./components/navBar/navBar";
import { Home } from "./page/home";
import { Projects } from "./page/projects";
import { Contact } from "./page/contact";

export default function App() {
  return (
    <main className={`w-full mx-auto`}>
      <NavBar/>
      <Home/>
      <Projects/>
      <Contact/>
    </main>
  );
}
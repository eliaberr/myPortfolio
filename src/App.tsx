import { NavBar } from "./components/navBar/navBar";
import { Home } from "./page/home";

export default function App() {
  return (
    <main className={`w-full mx-auto`}>
      <NavBar/>
      <Home/>
    </main>
  );
}
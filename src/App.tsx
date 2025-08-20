import { NavBar } from "./components/navBar/navBar";
import { Home } from "./page/home";

function App() {
  return (
    <main className={`w-full bg-amber-300 mx-auto`}>
      <NavBar/>
      <Home/>
    </main>
  );
}
export default App;

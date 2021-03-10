import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Home1 from "./components/home1";
import Services from "./components/services";
import Skills from "./components/skills";
import PauseOnHover from "./components/team";

function App() {
  return (
    <div className="App">
      <Home1 />
      <About />
      <Services />
      <Skills />
      <PauseOnHover />
      <Contact />
    </div>
  );
}

export default App;


import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import GitStat from "./components/github/GitStat";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import Skill from "./components/Skills/Skill";

function App() {
  

  return (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <GitStat />
      <Contact />
    </div>
  );
}

export default App;

import Layout from "./components/layout/Layout";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </Layout>
  );
}

export default App;

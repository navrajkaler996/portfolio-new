import Header from "./layouts/Header";
import ContactMe from "./pages/ContactMe";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Education />
      <ContactMe />
      <Projects />
    </>
  );
}

export default App;

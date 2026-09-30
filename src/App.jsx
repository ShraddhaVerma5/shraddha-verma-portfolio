import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <a href="#about" className="skip-link">Skip to content</a>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Contact />
      <ChatBot />
    </div>
  );
}

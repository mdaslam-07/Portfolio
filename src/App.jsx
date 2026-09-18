import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Internships from "./components/Internships";
import Achievements from "./components/Achievements";
import GithubSection from "./components/GithubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-ink min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Internships />
        <Achievements />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
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
        <Education />
        <Skills />
        <Projects />
        <Internships />
        <Achievements />
        <Certifications />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

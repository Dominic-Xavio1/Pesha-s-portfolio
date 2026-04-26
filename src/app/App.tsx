import { ThemeProvider } from "./contexts/ThemeContext";
import HeroSection from "./components/HeroSection";
import MultitaskerIntro from "./components/MultitaskerIntro";
import Soundscape from "./components/Soundscape";
import TheStudio from "./components/TheStudio";
import AboutSection from "./components/AboutSection";
import PlatformsSection from "./components/PlatformsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background overflow-x-hidden transition-colors duration-500">
        <ThemeToggle />
        <HeroSection />
        <MultitaskerIntro />
        <AboutSection />
        <Soundscape />
        <PlatformsSection />
        <TheStudio />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
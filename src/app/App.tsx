import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import MultitaskerIntro from "./components/MultitaskerIntro";
import Soundscape from "./components/Soundscape";
import TheStudio from "./components/TheStudio";
import AboutSection from "./components/AboutSection";
import PlatformsSection from "./components/PlatformsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import DocumentsModal from "./components/DocumentsModal";
import FloatingDownloadButton from "./components/FloatingDownloadButton";
import { useState } from "react";

export default function App() {
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);

  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-background overflow-x-hidden transition-colors duration-500">
          <Navigation />
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <MultitaskerIntro />
            <AboutSection onDocumentsClick={() => setIsDocumentsOpen(true)} />
          </section>
          <section id="soundscape">
            <Soundscape />
          </section>
          <section id="platforms">
            <PlatformsSection />
          </section>
          <section id="studio">
            <TheStudio />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
          <Footer />

          {/* Documents Modal */}
          <DocumentsModal
            isOpen={isDocumentsOpen}
            onClose={() => setIsDocumentsOpen(false)}
          />
        </div>
      </ThemeProvider>

      {/* Floating Download Button - Completely independent of all layout containers */}
      <FloatingDownloadButton onClick={() => setIsDocumentsOpen(true)} />
    </>
  );
}
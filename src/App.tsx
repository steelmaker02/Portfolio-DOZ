import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/Layout/SmoothScroll';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import AbstractBackground from './components/Layout/AbstractBackground';
import Preloader from './components/UI/Preloader';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Portfolio from './components/Sections/Portfolio';
import AILab from './components/Sections/AILab';
import Contact from './components/Sections/Contact';
import CustomCursor from './components/UI/CustomCursor';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const styleLabel = "color: #3B82F6; font-weight: bold; font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 1px; padding-right: 8px;";
    const styleValue = "color: #A1A1AA; font-family: 'JetBrains Mono', monospace; font-size: 12px;";

    console.log(
      `%cCREATOR%c Dmytro Zaiats\n%cROLE   %c Mediengestalter i.A.\n%cSTATUS %c Suche Pflichtpraktikum (ab 09.2026)\n%cCONTACT%c zaiats.design@gmail.com`,
      styleLabel, styleValue,
      styleLabel, styleValue,
      styleLabel, styleValue,
      styleLabel, styleValue
    );
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode='wait'>
        {isLoading && (
          <Preloader
            key="preloader"
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <SmoothScroll>
        <div className="bg-background min-h-screen text-white selection:bg-accent selection:text-white relative">

          <AbstractBackground />

          <Navbar />

          <main className="relative z-10">
            <Hero />
            <About />
            <Portfolio />
            <AILab />
            <Contact />
          </main>

          <div className="relative z-10">
            <Footer />
          </div>

        </div>
      </SmoothScroll>
    </>
  );
};

export default App;
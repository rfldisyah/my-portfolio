import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // #7 — simple toggle, no delay, no overlay animation
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        // #7 — transition-colors duration-300 handles smooth theme switch via CSS
        <div className={`min-h-screen transition-colors duration-300 relative ${
          darkMode
            ? 'bg-[#0d1b2a] text-slate-300 bg-grid-pattern-dark'
            : 'bg-white text-slate-700 bg-grid-pattern'
        }`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} lang={lang} setLang={setLang} />
          <main className="relative z-10">
            <Hero darkMode={darkMode} lang={lang} key={lang} />
            {/* About sudah mencakup Education di dalamnya */}
            <About darkMode={darkMode} lang={lang} />
            <Experience darkMode={darkMode} lang={lang} />
            <Projects darkMode={darkMode} lang={lang} />
            <Contact darkMode={darkMode} lang={lang} />
          </main>
          <Footer darkMode={darkMode} lang={lang} />
        </div>
      )}
    </>
  );
}

export default App;

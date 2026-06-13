import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar({ darkMode, toggleDarkMode, lang, setLang }) {
  const navLinks = [
    { name: lang === 'en' ? 'Home' : 'Beranda',       target: 'home' },
    { name: lang === 'en' ? 'About' : 'Tentang',      target: 'about' },
    { name: lang === 'en' ? 'Experience' : 'Pengalaman', target: 'experience' },
    { name: lang === 'en' ? 'Projects' : 'Proyek',   target: 'projects' },
    { name: lang === 'en' ? 'Contact' : 'Kontak',    target: 'contact' },
  ];
  const [activeTab, setActiveTab] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Native Scroll Spy
  useEffect(() => {
    const spyTargets = ['home', 'about', 'experience', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset deteksi active tab
      
      for (const target of spyTargets) {
        const el = document.getElementById(target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Pemicu awal saat render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler Scroll Nativ (Tanpa delay 0ms)
  const scrollToSection = (e, target) => {
    e.preventDefault();
    setActiveTab(target);
    setMobileOpen(false);
    
    const el = document.getElementById(target);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* ─── Desktop Floating Pill ──────────────────────────── */}
      <div className="fixed top-5 left-0 right-0 z-50 hidden sm:flex justify-center px-4 pointer-events-none">
        <nav
          id="navbar"
          className={`pointer-events-auto rounded-2xl px-3 py-1.5 flex items-center gap-2 shadow-md border backdrop-blur-md transition-colors duration-300 ${
            darkMode
              ? 'bg-slate-950/80 border-slate-800/60 text-slate-300'
              : 'bg-white/90 border-slate-200/70 text-slate-700'
          }`}
        >
          <ul className="flex items-center">
            {navLinks.map((link) => {
              const isActive = activeTab === link.target;
              return (
                <li key={link.target} className="relative">
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => scrollToSection(e, link.target)}
                    className={`relative block cursor-pointer px-3 py-2 text-xs transition-colors duration-200 select-none ${
                      isActive
                        ? darkMode ? 'text-[#99B9C9] font-bold' : 'text-[#577B95] font-bold'
                        : darkMode
                        ? 'text-slate-450 hover:text-[#99B9C9] font-medium'
                        : 'text-slate-500 hover:text-[#577B95] font-medium'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <span className={`h-4 w-px shrink-0 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />

          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className={`px-2 py-1.5 rounded-xl text-[10px] font-bold border transition-colors duration-200 cursor-pointer ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/60'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
            aria-label="Toggle Language"
          >
            {lang === 'en' ? 'ID' : 'EN'}
          </button>

          <button
            onClick={toggleDarkMode}
            className={`p-1.5 rounded-lg transition-colors duration-200 cursor-pointer ${
              darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-400 hover:text-slate-700'
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <FaSun size={13} /> : <FaMoon size={13} />}
          </button>
        </nav>
      </div>

      {/* ─── Mobile Top Bar ────────────────────────────────── */}
      <div className={`fixed top-0 left-0 right-0 z-50 sm:hidden flex items-center justify-between px-5 py-3 backdrop-blur-md border-b transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-950/90 border-slate-800/60'
          : 'bg-white/95 border-slate-100'
      }`}>
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="cursor-pointer font-mono font-extrabold text-sm tracking-wider"
        >
          <span className={darkMode ? 'text-white' : 'text-[#182330]'}>heyfal</span>
          <span className="text-[#577B95]">.dev</span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className={`px-1.5 py-0.5 rounded text-[10px] font-bold border transition-colors duration-200 ${
              darkMode
                ? 'border-slate-800 text-slate-350 hover:text-white bg-slate-900/60'
                : 'border-slate-200 text-slate-650 hover:text-slate-800 bg-white shadow-sm'
            }`}
            aria-label="Toggle Language"
          >
            {lang === 'en' ? 'ID' : 'EN'}
          </button>
          <button onClick={toggleDarkMode} className={`p-1.5 cursor-pointer ${darkMode ? 'text-amber-400' : 'text-slate-500'}`} aria-label="Toggle Theme">
            {darkMode ? <FaSun size={13} /> : <FaMoon size={13} />}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex flex-col gap-[5px] cursor-pointer p-1"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-250 ${darkMode ? 'bg-white' : 'bg-slate-700'} ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 rounded-full transition-all duration-250 ${darkMode ? 'bg-white' : 'bg-slate-700'} ${mobileOpen ? 'opacity-0 w-0' : 'w-3.5'}`} />
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-250 ${darkMode ? 'bg-white' : 'bg-slate-700'} ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ─── Mobile Dropdown ────────────────────────────────── */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className={`fixed top-[52px] left-0 right-0 z-40 sm:hidden px-4 py-3 border-b shadow-lg transition-colors duration-300 ${
            darkMode ? 'bg-slate-950/95 border-slate-800/60' : 'bg-white/98 border-slate-100'
          }`}
        >
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.target;
              return (
                <li key={link.target}>
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => scrollToSection(e, link.target)}
                    className={`block px-4 py-2.5 rounded-xl text-sm cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? darkMode ? 'text-[#99B9C9] font-bold' : 'text-[#577B95] font-bold'
                        : darkMode ? 'text-slate-450 hover:text-[#99B9C9] font-medium' : 'text-slate-500 hover:text-[#577B95] font-medium'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </>
  );
}

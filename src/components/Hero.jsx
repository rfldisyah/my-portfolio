import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload, FaArrowRight, FaReact, FaJs, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { portfolioData } from '../constants/portfolioData';

export default function Hero({ darkMode }) {
  const { name, title, bio, subtitle, socials, cvUrl, avatar } = portfolioData.personalInfo;

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Hi ..';
  const chars = Array.from(fullText);

  useEffect(() => {
    const currentLength = Array.from(text).length;
    let timer;

    if (!isDeleting && currentLength === chars.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && currentLength === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 1000);
    } else {
      timer = setTimeout(() => {
        const nextLength = isDeleting ? currentLength - 1 : currentLength + 1;
        setText(chars.slice(0, nextLength).join(''));
      }, isDeleting ? 100 : 180);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-12 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-[15%] left-[10%] w-80 h-80 rounded-full bg-[#577B95]/10 dark:bg-[#577B95]/15 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[#99B9C9]/10 dark:bg-[#99B9C9]/15 blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

        {/* ── LEFT: Bio & Socials ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="lg:col-span-4 flex flex-col gap-5 text-center lg:text-left lg:items-start lg:pr-4 order-3 lg:order-1"
        >
          {/* Label */}
          <div className="flex items-center justify-center lg:justify-start gap-1.5">
            <span className="h-px w-5 bg-[#577B95] rounded-full" />
            <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.18em] ${darkMode ? 'text-[#99B9C9]' : 'text-[#577B95]'}`}>
              Ringkasan
            </span>
          </div>

          {/* Bio */}
          <p className={`text-xs md:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {bio ? bio.substring(0, 160) + '...' : subtitle}
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-2.5">
            {[
              { icon: <FaGithub />,   url: socials.github,             label: 'GitHub',    external: true  },
              { icon: <FaLinkedin />, url: socials.linkedin,           label: 'LinkedIn',  external: true  },
              { icon: <FaInstagram />,url: socials.instagram,          label: 'Instagram', external: true  },
              { icon: <FaEnvelope />, url: `mailto:${socials.email}`,  label: 'Email',     external: false },
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.url}
                target={soc.external ? '_blank' : undefined}
                rel={soc.external ? 'noopener noreferrer' : undefined}
                className={`p-2 rounded-lg border transition-all duration-300 hover:-translate-y-0.5 ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 hover:border-[#99B9C9]/50 hover:text-[#99B9C9] text-slate-400'
                    : 'bg-white border-slate-200 hover:border-[#577B95]/55 hover:text-[#577B95] text-slate-500 shadow-sm hover:shadow-md'
                }`}
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── CENTER: Hey + Name + Avatar + Title + Available ─ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
          className="lg:col-span-4 flex flex-col items-center gap-4 order-1 lg:order-2"
        >
          {/* Hey + Name */}
          <div className="text-center space-y-3">
            <div className={`text-sm font-mono font-bold tracking-[0.12em] flex items-center justify-center gap-0.5 min-h-[22px] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              <span>{text}</span>
              <span className="w-[1.5px] h-3.5 bg-slate-400 dark:bg-slate-500 animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-black tracking-wide leading-normal sm:leading-normal md:leading-normal text-slate-900 dark:text-white">
              <span className="block sm:inline">I&apos;m</span>{' '}
              <span className="bg-gradient-to-r from-[#577B95] to-[#99B9C9] bg-clip-text text-transparent block sm:inline">
                {name}
              </span>
            </h1>
          </div>

          {/* Avatar */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[220px] h-[220px] md:w-[260px] md:h-[260px] bg-gradient-to-tr from-[#577B95] to-[#99B9C9] opacity-20 dark:opacity-30 blur-2xl rounded-full" />
            
            {/* Floating Tech Icons */}
            {/* React (Top-Left) */}
            <motion.div
              className={`absolute z-20 p-2 rounded-xl border shadow-md flex items-center justify-center top-2 -left-4 sm:-left-6 md:-left-8 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800'
                  : 'bg-white/80 border-slate-200/60'
              }`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaReact className="text-[#61DAFB] text-base sm:text-lg md:text-xl" />
            </motion.div>

            {/* JS (Top-Right) */}
            <motion.div
              className={`absolute z-20 p-2 rounded-xl border shadow-md flex items-center justify-center top-10 -right-4 sm:-right-6 md:-right-8 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800'
                  : 'bg-white/80 border-slate-200/60'
              }`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.4, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaJs className="text-[#F7DF1E] text-base sm:text-lg md:text-xl" />
            </motion.div>

            {/* Tailwind (Bottom-Left) */}
            <motion.div
              className={`absolute z-20 p-2 rounded-xl border shadow-md flex items-center justify-center bottom-12 -left-3 sm:-left-5 md:-left-7 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800'
                  : 'bg-white/80 border-slate-200/60'
              }`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.8, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiTailwindcss className="text-[#38BDF8] text-base sm:text-lg md:text-xl" />
            </motion.div>

            {/* CSS3/HTML5 (Bottom-Right) */}
            <motion.div
              className={`absolute z-20 p-2 rounded-xl border shadow-md flex items-center justify-center bottom-4 -right-3 sm:-right-5 md:-right-7 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800'
                  : 'bg-white/80 border-slate-200/60'
              }`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaHtml5 className="text-[#E34F26] text-base sm:text-lg md:text-xl" />
            </motion.div>

            <div className="relative z-10 w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[265px] lg:h-[265px] bg-gradient-to-r from-[#577B95] to-[#99B9C9] p-[3px] animate-blob-morph shadow-xl">
              <div className="w-full h-full bg-[#182330] overflow-hidden animate-blob-morph">
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100"
                />
              </div>
            </div>
          </div>

          {/* Title badge */}
          <div className={`px-4 py-1.5 rounded-full border text-xs font-bold font-mono tracking-wider ${
            darkMode
              ? 'bg-slate-900/50 border-slate-700 text-slate-300'
              : 'bg-white border-slate-200 text-slate-600 shadow-sm'
          }`}>
            {title}
          </div>

          {/* Available to Work — di bawah title */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border ${
            darkMode
              ? 'bg-emerald-950/30 border-emerald-800/40'
              : 'bg-emerald-50 border-emerald-200'
          }`}>
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              Available to Work
            </span>
          </div>
        </motion.div>

        {/* ── RIGHT: Tagline + Value Props + CTA ──────────── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="lg:col-span-4 flex flex-col gap-5 text-center lg:text-left lg:items-start lg:pl-4 order-2 lg:order-3"
        >
          {/* Tagline */}
          <div className="space-y-1.5">
            <p className={`text-[10px] font-mono font-bold uppercase tracking-[0.18em] ${darkMode ? 'text-[#99B9C9]' : 'text-[#577B95]'}`}>
              — What I do
            </p>
            <p className={`text-base md:text-lg font-extrabold tracking-tight leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Turning ideas into{' '}
              <span className="bg-gradient-to-r from-[#577B95] to-[#99B9C9] bg-clip-text text-transparent">
                elegant digital products.
              </span>
            </p>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 w-full justify-center lg:justify-start">
            <a
              href={cvUrl}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-xs rounded-xl border font-semibold transition-all duration-250 hover:-translate-y-0.5 ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-700 text-slate-300 hover:bg-slate-800/60 hover:border-slate-600'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-[#577B95]/50 shadow-sm hover:shadow-md'
              }`}
            >
              <FaDownload size={11} />
              Download CV
            </a>
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-xs rounded-xl cursor-pointer bg-gradient-to-r from-[#577B95] to-[#99B9C9] text-white font-semibold shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250"
            >
              Proyek Saya
              <FaArrowRight size={10} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

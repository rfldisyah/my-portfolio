import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { portfolioData } from '../constants/portfolioData';

export default function Hero({ darkMode }) {
  const { name, title, subtitle, bio, socials, cvUrl, avatar } = portfolioData.personalInfo;

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-12 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-[15%] left-[10%] w-80 h-80 rounded-full bg-[#577B95]/10 dark:bg-[#577B95]/15 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[#99B9C9]/10 dark:bg-[#99B9C9]/15 blur-3xl -z-10 animate-pulse delay-1000"></div>

      {/* Tighter max-w-5xl, and lg:gap-2/lg:gap-0 for closer columns */}
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* Left Side: Greeting & Call to Action (Col-span 4) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-4 flex flex-col space-y-4 text-center lg:text-right lg:items-end lg:pr-6 order-2 lg:order-1"
        >
          <div className="flex items-center justify-center lg:justify-end gap-2">
            <span className="h-[2px] w-6 bg-[#577B95] rounded-full"></span>
            <span className="text-[#577B95] dark:text-[#99B9C9] font-mono font-bold tracking-widest text-xs uppercase">
              Developer & Designer
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-slate-900 dark:text-white">
            Saya <span className="bg-gradient-to-r from-[#577B95] to-[#99B9C9] bg-clip-text text-transparent">{name}</span>
          </h1>

          <h2 className={`text-sm md:text-base font-bold font-mono ${darkMode ? 'text-slate-350' : 'text-slate-755'}`}>
            {title}
          </h2>

          {/* Shrunk Unduh CV button */}
          <div className="pt-2 flex justify-center lg:justify-end">
            <a
              href={cvUrl}
              className={`px-3.5 py-1.5 text-xs rounded-lg border font-semibold flex items-center gap-1.5 hover:-translate-y-0.5 transition-all duration-250 ${
                darkMode
                  ? 'bg-slate-900/30 border-slate-700 text-slate-300 hover:bg-slate-800/60'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
              }`}
            >
              Unduh CV <FaDownload size={10} />
            </a>
          </div>
        </motion.div>

        {/* Center: Abstract Morphing Blob Avatar (Col-span 4) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="lg:col-span-4 flex flex-col justify-center items-center relative py-4 order-1 lg:order-2"
        >
          {/* Neon Glow Circle Behind Avatar */}
          <div className="absolute w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[310px] lg:h-[310px] bg-gradient-to-tr from-[#577B95] to-[#99B9C9] opacity-20 dark:opacity-30 blur-2xl rounded-full"></div>

          {/* Morphing Image Frame Container - Scaled up on desktop */}
          <div className="relative z-10 w-[210px] h-[210px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] bg-gradient-to-r from-[#577B95] to-[#99B9C9] p-[3px] animate-blob-morph shadow-xl">
            <div className="w-full h-full bg-[#182330] overflow-hidden animate-blob-morph">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Philosophy Bio & Socials (Col-span 4) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-4 flex flex-col space-y-4 text-center lg:text-left lg:items-start lg:pl-6 order-3"
        >
          <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-0.5">
            <span className="h-px w-5 bg-[#577B95] rounded-full" />
            <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.18em] ${darkMode ? 'text-[#99B9C9]' : 'text-[#577B95]'}`}>Ringkasan</span>
          </div>
          
          <p className={`text-xs md:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-655'}`}>
            {bio ? bio.substring(0, 160) + '...' : subtitle}
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-3 py-0.5">
            {[
              { icon: <FaGithub />, url: socials.github, label: 'GitHub', external: true },
              { icon: <FaLinkedin />, url: socials.linkedin, label: 'LinkedIn', external: true },
              { icon: <FaInstagram />, url: socials.instagram, label: 'Instagram', external: true },
              { icon: <FaEnvelope />, url: `mailto:${socials.email}`, label: 'Email', external: false }
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

          {/* Shrunk Proyek Saya button */}
          <div className="pt-1 flex justify-center lg:justify-start">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="px-3.5 py-1.5 text-xs rounded-lg cursor-pointer bg-gradient-to-r from-[#577B95] to-[#99B9C9] text-white font-semibold flex items-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-250"
            >
              Proyek Saya <FaArrowRight size={10} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

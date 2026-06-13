import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiRedux, SiNestjs,
  SiPostgresql, SiExpo, SiSocketdotio, SiGatsby, SiGraphql,
  SiStripe, SiTypescript, SiExpress,
} from 'react-icons/si';
import { portfolioData } from '../constants/portfolioData';

// Peta nama teknologi → ikon + warna
const TECH_ICONS = {
  'React':         { icon: FaReact,       color: '#61DAFB' },
  'React Native':  { icon: FaReact,       color: '#61DAFB' },
  'Next.js':       { icon: SiNextdotjs,   color: '#000', darkColor: '#fff' },
  'Tailwind CSS':  { icon: SiTailwindcss, color: '#06B6D4' },
  'TypeScript':    { icon: SiTypescript,  color: '#3178C6' },
  'Redux Toolkit': { icon: SiRedux,       color: '#764ABC' },
  'Zustand':       { icon: SiRedux,       color: '#764ABC' },
  'Node.js':       { icon: FaNodeJs,      color: '#339933' },
  'Express.js':    { icon: SiExpress,     color: '#888', darkColor: '#ccc' },
  'NestJS':        { icon: SiNestjs,      color: '#E0234E' },
  'MongoDB':       { icon: SiMongodb,     color: '#47A248' },
  'PostgreSQL':    { icon: SiPostgresql,  color: '#4169E1' },
  'Expo':          { icon: SiExpo,        color: '#000', darkColor: '#fff' },
  'Stripe':        { icon: SiStripe,      color: '#635BFF' },
  'Socket.io':     { icon: SiSocketdotio, color: '#010101', darkColor: '#fff' },
  'Gatsby.js':     { icon: SiGatsby,      color: '#663399' },
  'GraphQL':       { icon: SiGraphql,     color: '#E10098' },
  'Git':           { icon: FaGitAlt,      color: '#F05032' },
};

export default function Projects({ darkMode, lang }) {
  const projects = portfolioData[lang].projects;
  const [showAll, setShowAll] = useState(false);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const INITIAL_PROJECTS_COUNT = 3;
  
  // Tampilkan 3 proyek pertama secara vertikal
  const featuredProjects = projects.slice(0, INITIAL_PROJECTS_COUNT);
  // Sisanya akan masuk ke slide horizontal saat di-expand
  const additionalProjects = projects.slice(INITIAL_PROJECTS_COUNT);
  const hasMoreProjects = projects.length > INITIAL_PROJECTS_COUNT;

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-4 md:px-10 relative overflow-hidden transition-colors duration-300 bg-transparent"
    >
      <div className="absolute top-[20%] left-[-8%] w-72 h-72 rounded-full bg-[#99B9C9]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <span className={`inline-block text-xs font-mono font-bold uppercase tracking-[0.18em] mb-3 ${darkMode ? 'text-[#99B9C9]' : 'text-[#577B95]'}`}>
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'en' ? 'Featured' : 'Project'}{' '}
            <span className="bg-gradient-to-r from-[#577B95] to-[#99B9C9] bg-clip-text text-transparent">
              {lang === 'en' ? 'Projects' : 'Pilihan'}
            </span>
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#577B95] to-[#99B9C9] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Proyek Pertama: Alternating Row Layout */}
        <div className="space-y-20 md:space-y-28">
          {featuredProjects.map((proj, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 35 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-stretch gap-8 md:gap-14 w-full ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Image Column */}
                <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md aspect-video flex-shrink-0">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
                  />
                  {/* Hover Link Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <ProjectLinks proj={proj} />
                  </div>
                  <CategoryBadge cat={proj.category} darkMode={darkMode} />
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-between py-2 text-left space-y-4">
                  <div className="space-y-3">
                    <div>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                        darkMode ? 'text-[#99B9C9]' : 'text-[#577B95]'
                      }`}>
                        {proj.category}
                      </span>
                      <h3 className={`text-xl md:text-2xl font-black tracking-tight mt-1 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {proj.title}
                      </h3>
                    </div>
                    <p className={`text-xs md:text-sm leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-655'
                    }`}>
                      {proj.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-1">
                    {/* Tech stack badge list */}
                    <TechLogos tags={proj.tags} darkMode={darkMode} />

                    {/* Explicit Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      {proj.githubUrl !== '#' && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-3.5 py-1.5 rounded-lg border text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                            darkMode
                              ? 'bg-slate-900/60 border-slate-800 text-slate-355 hover:text-white hover:bg-slate-855'
                              : 'bg-white border-slate-200 text-slate-600 hover:text-[#577B95] hover:border-[#577B95]/50 hover:bg-slate-50'
                          }`}
                        >
                          <FaGithub size={12} />
                          <span>Source Code</span>
                        </a>
                      )}
                      {proj.liveUrl !== '#' && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-gradient-to-r from-[#577B95] to-[#99B9C9] text-white hover:shadow-md shadow-[#577B95]/15"
                        >
                          <FaExternalLinkAlt size={10} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proyek Tambahan: Geser Menyamping (Horizontal Scroll) */}
        <AnimatePresence>
          {showAll && hasMoreProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden mt-20 pt-10 border-t border-slate-200 dark:border-slate-800/80"
            >
              <div className="text-left mb-6">
                <h3 className={`text-base md:text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'More Projects' : 'Proyek Lainnya'}
                </h3>
                <p className={`text-[10px] font-mono mt-0.5 ${darkMode ? 'text-slate-450' : 'text-slate-500'}`}>
                  {lang === 'en'
                    ? 'Swipe sideways to see other project history.'
                    : 'Geser menyamping untuk melihat riwayat proyek lainnya.'}
                </p>
              </div>

              {/* Slider Row */}
              <div className="flex overflow-x-auto gap-6 pb-6 pt-2 scrollbar-thin scroll-smooth snap-x snap-mandatory">
                {additionalProjects.map((proj) => (
                  <div key={proj.title} className="snap-start shrink-0">
                    <div
                      className={`w-[290px] sm:w-[330px] rounded-2xl border overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                        darkMode
                          ? 'bg-slate-900/40 border-slate-800 hover:border-[#99B9C9]/30'
                          : 'bg-white border-slate-200 hover:border-[#577B95]/30 shadow-sm'
                      }`}
                    >
                      <div className="relative overflow-hidden aspect-video">
                        <img src={proj.image} alt={proj.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104 grayscale-[15%] group-hover:grayscale-0" />
                        <CategoryBadge cat={proj.category} darkMode={darkMode} />
                      </div>
                      
                      <div className="p-5 flex flex-col flex-grow justify-between space-y-4 text-left">
                        <div>
                          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${
                            darkMode ? 'text-[#99B9C9]' : 'text-[#577B95]'
                          }`}>
                            {proj.category}
                          </span>
                          <h4 className={`text-sm font-extrabold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{proj.title}</h4>
                          <p className={`text-xs leading-relaxed mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{proj.description}</p>
                        </div>
                        
                        <div className="space-y-4 pt-1">
                          <TechLogos tags={proj.tags} darkMode={darkMode} />
                          
                          <div className="flex items-center gap-2.5">
                            {proj.githubUrl !== '#' && (
                              <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer"
                                className={`px-3 py-1.5 rounded-lg border text-[10px] font-bold transition-all duration-200 flex items-center gap-1 ${
                                  darkMode
                                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                                    : 'bg-white border-slate-200 text-slate-650 hover:text-[#577B95] hover:bg-slate-50'
                                }`}>
                                <FaGithub size={11} />
                                <span>Code</span>
                              </a>
                            )}
                            {proj.liveUrl !== '#' && (
                              <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-200 flex items-center gap-1 bg-gradient-to-r from-[#577B95] to-[#99B9C9] text-white">
                                <FaExternalLinkAlt size={9} />
                                <span>Live Demo</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        {hasMoreProjects && (
          <div className="mt-20 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer inline-flex items-center gap-2 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 text-[#99B9C9] hover:bg-[#99B9C9]/10 hover:border-[#99B9C9]/35'
                  : 'bg-white border-slate-200 text-[#577B95] hover:border-[#577B95] hover:bg-slate-50 shadow-sm'
              }`}
            >
              {showAll ? (
                <span>{lang === 'en' ? 'Show Less' : 'Tampilkan Lebih Sedikit'}</span>
              ) : (
                <span>{lang === 'en' ? 'View All Projects' : 'Lihat Semua Proyek'} ({projects.length})</span>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Sub-components ───────────────────────────────────────── */

function TechLogos({ tags, darkMode }) {
  return (
    <div className="flex flex-nowrap sm:flex-wrap items-center gap-1.5 overflow-x-auto sm:overflow-x-visible pb-1 sm:pb-0 whitespace-nowrap sm:whitespace-normal scrollbar-none snap-x">
      {tags.map((tag) => {
        const tech = TECH_ICONS[tag];
        if (!tech) {
          return (
            <span key={tag} className={`snap-start shrink-0 text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-500'
            }`}>
              {tag}
            </span>
          );
        }
        const IconComp = tech.icon;
        const color = darkMode && tech.darkColor ? tech.darkColor : tech.color;
        return (
          <span
            key={tag}
            className={`snap-start shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[9px] font-mono font-bold ${
              darkMode
                ? 'bg-slate-950/40 border-slate-850 text-slate-350'
                : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}
          >
            <IconComp style={{ color }} className="text-[10px] shrink-0" />
            <span>{tag}</span>
          </span>
        );
      })}
    </div>
  );
}

function ProjectLinks({ proj }) {
  return (
    <>
      {proj.githubUrl !== '#' && (
        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-[#577B95] border border-white/20 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
          <FaGithub size={16} />
        </a>
      )}
      {proj.liveUrl !== '#' && (
        <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-[#99B9C9] hover:text-[#182330] border border-white/20 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
          <FaExternalLinkAlt size={14} />
        </a>
      )}
    </>
  );
}

function CategoryBadge({ cat, darkMode }) {
  return (
    <span className={`absolute top-3 left-3 px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase rounded-lg ${
      darkMode ? 'bg-slate-950/80 text-[#99B9C9] border border-slate-800' : 'bg-white/90 text-[#577B95] border border-slate-200'
    }`}>
      {cat}
    </span>
  );
}

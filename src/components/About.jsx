import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaSearch,
  FaTimes,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiGraphql,
  SiMysql,
  SiPhp,
  SiLaravel,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { portfolioData } from '../constants/portfolioData';

// Peta ikon ke komponen react-icons
const iconMap = {
  FaReact: <FaReact className="text-[#61DAFB]" />,
  SiTailwindcss: <SiTailwindcss className="text-[#06B6D4]" />,
  SiTypescript: <SiTypescript className="text-[#3178C6]" />,
  SiRedux: <SiRedux className="text-[#764ABC]" />,
  FaNodeJs: <FaNodeJs className="text-[#339933]" />,
  BiLogoPostgresql: <BiLogoPostgresql className="text-[#4169E1]" />,
  SiMongodb: <SiMongodb className="text-[#47A248]" />,
  SiMysql: <SiMysql className="text-[#4479A1]" />,
  SiPhp: <SiPhp className="text-[#777BB4]" />,
  SiLaravel: <SiLaravel className="text-[#FF2D20]" />,
  FaGitAlt: <FaGitAlt className="text-[#F05032]" />,
  FaDocker: <FaDocker className="text-[#2496ED]" />,
  FaFigma: <FaFigma className="text-[#F24E1E]" />,
  SiGraphql: <SiGraphql className="text-[#E10098]" />,
};

// Skema warna kategori untuk tag cloud (menggunakan warna palet baru)
const categoryColors = {
  'Frontend': 'border-[#577B95]/30 text-[#577B95] dark:text-[#99B9C9] bg-[#577B95]/5',
  'Backend & Database': 'border-[#99B9C9]/30 text-cyan-600 dark:text-[#99B9C9] bg-[#99B9C9]/5',
  'Mobile': 'border-slate-400/35 text-slate-700 dark:text-slate-300 bg-slate-500/5',
  'Lainnya / Tools': 'border-[#577B95]/20 text-slate-650 dark:text-slate-400 bg-slate-100/5'
};

export default function About({ darkMode }) {
  const { bio } = portfolioData.personalInfo;
  const stats = portfolioData.stats;
  const skills = portfolioData.skills;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCertificates = portfolioData.certificates.filter((cert) => {
    const q = searchQuery.toLowerCase();
    return (
      cert.title.toLowerCase().includes(q) ||
      cert.issuer.toLowerCase().includes(q)
    );
  });



  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 px-6 md:px-12 relative overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-[#0d1b28]/50' : 'bg-transparent'
      }`}
    >
      {/* Background Decor */}
      <div className="absolute top-[20%] right-[-10%] w-72 h-72 rounded-full bg-[#577B95]/5 blur-3xl"></div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Konsep & <span className="bg-gradient-to-r from-[#577B95] to-[#99B9C9] bg-clip-text text-transparent">Keahlian</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#577B95] to-[#99B9C9] mx-auto mt-4 rounded-full"></div>
          <p className={`mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Filosofi kerja saya dipadukan dengan data performa dan senjata andalan pemrograman.
          </p>
        </div>

        {/* Centered Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`w-full max-w-3xl p-8 rounded-tl-3xl rounded-br-3xl border relative text-center mb-12 ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-205'
          } shadow-sm`}
        >
          {/* Corner abstract mark */}
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-[#577B95] rounded-tl-3xl"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-[#99B9C9] rounded-br-3xl"></div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#577B95] rounded-full" />
            <span className={`text-xs font-mono font-bold uppercase tracking-[0.18em] ${darkMode ? 'text-[#99B9C9]' : 'text-[#577B95]'}`}>Filosofi Kerja</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#577B95] rounded-full" />
          </div>
          <p className={`leading-relaxed text-sm md:text-base ${darkMode ? 'text-slate-350' : 'text-slate-650'}`}>
            {bio}
          </p>
        </motion.div>

        {/* Centered Stats Row */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-tr-2xl rounded-bl-2xl border text-center transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-slate-900/30 border-slate-850 hover:border-[#99B9C9]/40' 
                  : 'bg-white border-slate-200 hover:border-[#577B95]/40'
              }`}
            >
              <span className="block text-3xl md:text-4xl font-black bg-gradient-to-r from-[#577B95] to-[#99B9C9] bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className={`block mt-2 text-[10px] font-mono tracking-wider uppercase ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Centered Tech Stack & Keahlian */}
        <div className="w-full max-w-4xl space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#577B95] rounded-full" />
            <span className={`text-xs font-mono font-bold uppercase tracking-[0.18em] ${darkMode ? 'text-[#99B9C9]' : 'text-[#577B95]'}`}>Tech Stack &amp; Keahlian</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#577B95] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((catGroup) => (
              <div
                key={catGroup.category}
                className={`p-4 sm:p-5 rounded-2xl border relative flex flex-col justify-between overflow-hidden ${
                  darkMode ? 'bg-slate-900/20 border-slate-800' : 'bg-slate-100/30 border-slate-200/60'
                }`}
              >
                {/* Dotted helper grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none rounded-2xl"></div>

                <div className="relative z-10">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider mb-3 block ${
                    darkMode ? 'text-slate-450' : 'text-[#577B95]'
                  }`}>
                    {catGroup.category}
                  </span>

                  {/* Horizontal scroll on mobile (flex-nowrap), wraps on desktop (flex-wrap) */}
                  <div className="flex flex-nowrap md:flex-wrap gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none snap-x snap-mandatory">
                    {catGroup.items.map((skill, idx) => {
                      const randomDuration = 4 + (idx % 3);
                      const randomDelay = (idx % 5) * 0.2;

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.2 }}
                          className="snap-start shrink-0"
                        >
                          <motion.div
                            animate={{
                              y: [0, -2, 0]
                            }}
                            transition={{
                              y: {
                                duration: randomDuration,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: randomDelay
                              }
                            }}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold shadow-sm cursor-default transition-all duration-300 hover:shadow-md ${
                              categoryColors[catGroup.category] || 'border-slate-350 bg-slate-50 text-slate-700'
                            }`}
                          >
                            <span className="text-sm shrink-0">
                              {iconMap[skill.icon] || '⚡'}
                            </span>
                            <span className="whitespace-nowrap">{skill.name}</span>
                            <span className="text-[9px] font-mono font-medium opacity-60">
                              {skill.level}
                            </span>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Section */}
        <div className="w-full max-w-4xl mt-20 pt-16 border-t border-slate-500/10 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2 justify-start">
              <FaGraduationCap className="text-[#577B95] dark:text-[#99B9C9] text-xl" />
              <h3 className={`text-base md:text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Pendidikan</h3>
            </div>
            
            <div className="space-y-10 relative border-l-2 border-slate-200 dark:border-slate-800/80 pl-6 ml-3">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <span className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors duration-300 ${
                    darkMode ? 'bg-[#0d1b2a] border-slate-800' : 'bg-white border-slate-200'
                  } group-hover:bg-[#577B95] dark:group-hover:bg-[#99B9C9] group-hover:border-transparent`} />
                  
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold font-mono tracking-wider text-slate-500 bg-slate-500/5 px-2 py-0.5 rounded border border-slate-500/10 mb-2">
                    <FaCalendarAlt className="text-[#577B95] dark:text-[#99B9C9] shrink-0" size={8} />
                    {edu.duration}
                  </span>
                  <h4 className={`text-sm md:text-base font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {edu.institution}
                  </h4>
                  <p className="text-xs font-semibold text-[#577B95] dark:text-[#99B9C9] font-mono mt-0.5 mb-2.5">
                    {edu.degree}
                  </p>
                  {edu.score && (
                    <span className={`inline-block px-2.5 py-0.5 rounded-lg text-[9px] font-bold font-mono mb-3 ${
                      darkMode 
                        ? 'bg-slate-950 border border-slate-850 text-slate-400' 
                        : 'bg-slate-200/40 border border-slate-200 text-slate-750'
                    }`}>
                      {edu.score}
                    </span>
                  )}
                  <ul className="space-y-1.5 text-xs leading-relaxed">
                    {edu.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className={`flex items-start gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        <FaAward className="text-[#99B9C9] shrink-0 mt-0.5" size={13} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Certificates */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2 justify-start">
              <FaAward className="text-[#577B95] dark:text-[#99B9C9] text-xl" />
              <h3 className={`text-base md:text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Sertifikasi Utama</h3>
            </div>

            <div className="space-y-4">
              {portfolioData.certificates.filter(c => c.featured).map((cert, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-4 transition-all duration-300 ${
                    darkMode
                      ? 'bg-slate-900/40 border-slate-800 hover:border-[#99B9C9]/30'
                      : 'bg-white border-slate-200 hover:border-[#577B95]/30 shadow-sm'
                  }`}
                >
                  <div>
                    <h4 className={`text-xs font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {cert.title}
                    </h4>
                    <p className="text-[10px] font-mono text-slate-500 mt-1 font-semibold">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  {cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-xl border text-xs transition-colors duration-200 shrink-0 ${
                        darkMode
                          ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700'
                          : 'bg-white border-slate-200 text-slate-500 hover:text-[#577B95] hover:border-[#577B95]/50'
                      }`}
                      title="Lihat Kredensial"
                    >
                      <FaExternalLinkAlt size={10} />
                    </a>
                  )}
                </div>
              ))}

              <button
                onClick={() => setIsModalOpen(true)}
                className={`w-full py-2.5 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                  darkMode
                    ? 'bg-slate-900/40 border-slate-800 text-[#99B9C9] hover:bg-[#99B9C9]/10 hover:border-[#99B9C9]/35'
                    : 'bg-white border-slate-200 text-[#577B95] hover:border-[#577B95] hover:bg-slate-50'
                }`}
              >
                Lihat Semua Sertifikat ({portfolioData.certificates.length})
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Certificates Gallery Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className={`relative z-10 w-full max-w-xl rounded-2xl border shadow-xl flex flex-col max-h-[80vh] overflow-hidden ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm md:text-base font-extrabold tracking-tight">Galeri Sertifikasi & Penghargaan</h3>
                  <p className={`text-[9px] font-mono mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Daftar seluruh pelatihan akademis & sertifikasi kompetensi.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    darkMode ? 'hover:bg-slate-800 text-slate-450 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <FaTimes size={13} />
                </button>
              </div>

              {/* Search Bar */}
              <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <FaSearch className="text-slate-400 text-xs shrink-0" />
                <input
                  type="text"
                  placeholder="Cari sertifikat berdasarkan nama atau penerbit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full text-xs bg-transparent focus:outline-none placeholder-slate-400 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                />
              </div>

              {/* Scrollable list */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3">
                {filteredCertificates.length > 0 ? (
                  filteredCertificates.map((cert, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition-all ${
                        darkMode
                          ? 'bg-slate-950/40 border-slate-850 hover:border-slate-750'
                          : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <h4 className={`text-xs font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {cert.title}
                        </h4>
                        <p className="text-[10px] font-mono text-slate-500 mt-1 font-semibold">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      {cert.credentialUrl !== '#' && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-3 py-1.5 rounded-lg border text-[9px] font-mono font-bold transition-all duration-200 flex items-center gap-1 shrink-0 ${
                            darkMode
                              ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
                              : 'bg-white border-slate-200 text-slate-650 hover:text-[#577B95] hover:border-[#577B95]/50'
                          }`}
                        >
                          <span>Kredensial</span>
                          <FaExternalLinkAlt size={8} />
                        </a>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-center text-xs text-slate-500 py-8">
                    Tidak ada sertifikat yang cocok dengan pencarian Anda.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

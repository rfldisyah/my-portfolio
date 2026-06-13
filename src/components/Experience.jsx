import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../constants/portfolioData';

export default function Experience({ darkMode, lang }) {
  const experiences = portfolioData[lang].experiences;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 px-4 md:px-10 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#0d1b28]/40' : 'bg-transparent'
      }`}
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-[-5%] w-80 h-80 rounded-full bg-[#99B9C9]/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block text-xs font-mono font-bold uppercase tracking-[0.18em] mb-3 ${darkMode ? 'text-[#99B9C9]' : 'text-[#577B95]'}`}>
            {lang === 'en' ? 'Career' : 'Karir'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'en' ? 'Working' : 'Alur'}{' '}
            <span className="bg-gradient-to-r from-[#577B95] to-[#99B9C9] bg-clip-text text-transparent">
              {lang === 'en' ? 'Experience' : 'Karir'}
            </span>
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#577B95] to-[#99B9C9] mx-auto mt-4 rounded-full" />
        </div>

        {/* ─── Timeline ─────────────────────────────────────── */}
        <div className="relative">
          {/* Vertical left line */}
          <div className={`absolute left-[19px] md:left-[27px] top-0 bottom-0 w-px border-l-2 border-dashed ${
            darkMode ? 'border-slate-700/60' : 'border-slate-200'
          } z-0`} />

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative flex items-start gap-4 md:gap-6 pl-1"
              >
                {/* ── Dot / Icon ── */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <span className="relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11">
                    <span className="animate-ping absolute w-full h-full rounded-full bg-[#577B95]/15" />
                    <span className={`relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-xl border-2 shadow-sm ${
                      darkMode
                        ? 'bg-[#0d1b2a] border-[#99B9C9]/50 text-[#99B9C9]'
                        : 'bg-white border-[#577B95]/40 text-[#577B95]'
                    }`}>
                      <FaBriefcase size={12} />
                    </span>
                  </span>
                </div>

                {/* ── Card ── */}
                <div className={`flex-1 p-5 md:p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  darkMode
                    ? 'bg-slate-900/40 border-slate-800 hover:border-[#99B9C9]/30'
                    : 'bg-white border-slate-200 hover:border-[#577B95]/30 hover:shadow-[0_4px_20px_rgba(87,123,149,0.08)]'
                }`}>
                  {/* Top row: Role + Duration Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className={`text-sm md:text-base font-extrabold tracking-tight leading-snug ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        <span className="text-xs font-bold font-mono text-[#577B95] dark:text-[#99B9C9] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#577B95] dark:bg-[#99B9C9] shrink-0" />
                          {exp.company}
                        </span>
                        {exp.location && (
                          <span className={`text-[10px] font-mono flex items-center gap-1 ${
                            darkMode ? 'text-slate-500' : 'text-slate-400'
                          }`}>
                            <FaMapMarkerAlt size={8} />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Duration badge */}
                    <span className={`self-start shrink-0 inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border whitespace-nowrap ${
                      darkMode
                        ? 'bg-slate-900 border-slate-800 text-slate-400'
                        : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}>
                      {exp.duration}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className={`h-px mb-3 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`} />

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className={`relative text-xs md:text-sm leading-relaxed pl-4 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        <span className="absolute left-0 top-[7px] w-1.5 h-1.5 bg-[#577B95]/50 dark:bg-[#99B9C9]/50 rounded-full" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

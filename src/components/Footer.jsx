import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaAngleUp } from 'react-icons/fa';
import { portfolioData } from '../constants/portfolioData';

export default function Footer({ darkMode }) {
  const { name, socials } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      id="footer"
      className={`py-10 px-6 md:px-12 border-t transition-colors duration-300 bg-transparent ${
        darkMode
          ? 'border-[#233549] text-slate-500'
          : 'border-slate-100/80 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name / Brand */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="cursor-pointer font-mono font-extrabold text-lg tracking-wider"
        >
          <span className={darkMode ? 'text-white' : 'text-[#182330]'}>
            heyfal
          </span>
          <span className="text-[#577B95] dark:text-[#99B9C9]">.dev</span>
        </a>

        {/* Copyright */}
        <p className="text-xs font-mono font-medium">
          &copy; {currentYear} {name}. All rights reserved.
        </p>

        {/* Socials & Back To Top */}
        <div className="flex items-center space-x-5">
          <div className="flex space-x-3">
            {[
              { icon: <FaGithub size={17} />, url: socials.github, label: 'GitHub' },
              { icon: <FaLinkedin size={17} />, url: socials.linkedin, label: 'LinkedIn' },
              { icon: <FaInstagram size={17} />, url: socials.instagram, label: 'Instagram' },
              { icon: <FaEnvelope size={17} />, url: `mailto:${socials.email}`, label: 'Email', external: false },
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.url}
                target={soc.external === false ? undefined : '_blank'}
                rel={soc.external === false ? undefined : 'noopener noreferrer'}
                className={`transition-colors duration-200 hover:text-[#577B95] dark:hover:text-[#99B9C9] ${
                  darkMode ? 'text-slate-500' : 'text-slate-400'
                }`}
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Quick back to top */}
          <a
            href="#home"
            onClick={scrollToTop}
            className={`p-2 rounded-xl border cursor-pointer hover:-translate-y-1 transition-all duration-300 ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-[#233549] hover:text-white'
                : 'bg-white border-slate-200 text-slate-500 hover:bg-[#577B95] hover:text-white hover:border-[#577B95]'
            }`}
            title="Kembali ke atas"
          >
            <FaAngleUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

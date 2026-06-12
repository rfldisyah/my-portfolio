import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);
  const fullText = 'heyfal.dev';

  // Typewriter effect — pakai substring agar selalu mulai dari 'h'
  useEffect(() => {
    let index = 0;
    let cancelled = false;

    const typeTimer = setInterval(() => {
      if (cancelled) return;
      index++;
      setText(fullText.substring(0, index));
      if (index >= fullText.length) clearInterval(typeTimer);
    }, 55);

    return () => {
      cancelled = true;
      clearInterval(typeTimer);
    };
  }, []);


  // Progress bar — total 1.2 detik
  useEffect(() => {
    const duration = 1200;
    const interval = 16;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 180);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -30,
        transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center max-w-xs w-full px-6">
        {/* Logo Text */}
        <div className="flex items-center font-mono text-2xl md:text-3xl font-extrabold tracking-wider mb-8 text-[#182330]">
          <span>{text}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.65, ease: 'steps(2)' }}
            className="w-[3px] h-7 bg-[#577B95] ml-1 inline-block rounded-sm"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-[#577B95]/15 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#577B95] to-[#99B9C9] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <span className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#577B95]/60 font-mono font-bold">
          {Math.min(Math.round(progress), 100)}%
        </span>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';

export default function ThemeSlideTransition({ isAnimating, onComplete }) {
  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-9999 pointer-events-none">
      {/* Lembar kertas ke-1 (Medium Blue) */}
      <motion.div
        initial={{ clipPath: 'circle(0% at 95% 5%)' }}
        animate={{ clipPath: ['circle(0% at 95% 5%)', 'circle(160% at 95% 5%)', 'circle(160% at 95% 5%)'] }}
        transition={{
          duration: 0.38,
          times: [0, 0.55, 1],
          ease: [0.76, 0, 0.24, 1]
        }}
        className="absolute inset-0 bg-[#577B95]"
      />
      {/* Lembar kertas ke-2 (Light Teal) */}
      <motion.div
        initial={{ clipPath: 'circle(0% at 95% 5%)' }}
        animate={{ clipPath: ['circle(0% at 95% 5%)', 'circle(160% at 95% 5%)', 'circle(160% at 95% 5%)'] }}
        transition={{
          duration: 0.38,
          delay: 0.04,
          times: [0, 0.55, 1],
          ease: [0.76, 0, 0.24, 1]
        }}
        onAnimationComplete={onComplete}
        className="absolute inset-0 bg-[#99B9C9]"
      />
    </div>
  );
}

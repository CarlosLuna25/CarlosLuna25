import { motion, useReducedMotion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

const floatVariants = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const lineVariants = {
  hidden: { width: 0 },
  visible: (i: number) => ({
    width: ["0%", `${[45, 65, 85][i]}%`],
    transition: {
      duration: 1.2,
      delay: i * 0.12,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  }),
};

const FloatingShape = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute ${className}`}
    variants={floatVariants}
    initial="float"
    animate="float"
    transition={{ delay }}
    aria-hidden="true"
  />
);

export const CyberpunkPortfolioHero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative w-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] max-w-[280px] sm:max-w-[340px] md:max-w-[400px] flex items-center justify-center pointer-events-none select-none py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Elementos geométricos - escala para mobile */}
      <FloatingShape
        className="top-2 sm:top-4 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-accent-cyan/40"
        delay={0}
      />
      <FloatingShape
        className="top-[20%] sm:top-1/4 -left-1 sm:-left-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 border-accent-purple/40"
        delay={0.5}
      />
      <FloatingShape
        className="bottom-8 sm:bottom-12 left-0 sm:left-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full border border-neon-pink/30"
        delay={1}
      />
      <FloatingShape
        className="top-6 sm:top-8 right-2 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 border border-accent-cyan/30 rotate-45"
        delay={0.3}
      />

      {/* Pantalla (sin base) */}
      <motion.div
        className="relative z-10 w-[90%] sm:w-[88%] flex flex-col items-center"
        variants={itemVariants}
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, -5, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }
        }
      >
        <motion.div
          className="relative w-full aspect-[4/3] max-w-[320px] bg-gradient-to-b from-[#0d0a14] to-[#0a0610] border-2 border-accent-purple/50 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(112,0,255,0.2)] sm:shadow-[0_0_50px_rgba(112,0,255,0.2)]"
          style={{
            transform: "perspective(800px) rotateX(-4deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Barra de ventana */}
          <div className="h-5 sm:h-6 md:h-7 bg-black/60 flex items-center px-2 sm:px-3 gap-1.5 sm:gap-2 border-b border-white/5">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80 shadow-[0_0_4px_rgba(239,68,68,0.6)] sm:shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_4px_rgba(234,179,8,0.6)] sm:shadow-[0_0_6px_rgba(234,179,8,0.6)]" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80 shadow-[0_0_4px_rgba(34,197,94,0.6)] sm:shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
          </div>

          {/* Contenido estilo IDE - responsive */}
          <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="h-1 sm:h-1.5 rounded-full bg-accent-cyan/70"
                style={{ maxWidth: `${[45, 65, 85][i]}%` }}
              />
            ))}

            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-4">
              <motion.div
                className="h-10 sm:h-12 md:h-14 bg-gray-800/60 border border-gray-600/30 rounded-lg"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { opacity: [0.5, 0.8, 0.5] }
                }
                transition={
                  shouldReduceMotion ? { duration: 0 } : { duration: 2, repeat: Infinity }
                }
              />
              <motion.div
                className="h-10 sm:h-12 md:h-14 rounded-full border-2 border-accent-cyan/60 shadow-[0_0_10px_rgba(0,242,255,0.3)] sm:shadow-[0_0_15px_rgba(0,242,255,0.3)]"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { scale: [0.98, 1.04, 0.98] }
                }
                transition={
                  shouldReduceMotion ? { duration: 0 } : { duration: 2, repeat: Infinity }
                }
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

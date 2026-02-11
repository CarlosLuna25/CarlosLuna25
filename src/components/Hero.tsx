// SOLID: Single Responsibility - Componente dedicado solo al Hero
// import { AnimatedAtom } from './AnimatedAtom';
import { CyberpunkPortfolioHero } from './AnimatedLaptop';

export const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('proyectos');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="max-w-7xl mx-auto mb-24 flex flex-col lg:flex-row items-center justify-between gap-12 px-4 md:px-8 lg:px-12 relative">


      {/* Hero Mesh Background */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-radial from-accent-purple/10 via-transparent to-transparent -z-10 pointer-events-none" aria-hidden="true" />
      <div className="lg:w-2/3 space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 glass-card px-4 py-2 border-accent-cyan/30">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" aria-hidden="true"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" aria-hidden="true"></span>
          </div>
          <span className="font-mono text-accent-cyan text-xs tracking-widest uppercase">
            Disponible para proyectos
          </span>
        </div>

        {/* Tag Line */}
        <div>
          <span className="font-mono text-gray-500 text-sm mb-3 block tracking-widest uppercase">
            // Full Stack Architect
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 scroll-mt-24" style={{ textWrap: 'balance' }}>
            Construyo arquitecturas <br />
            <span className="gradient-text">escalables</span> que <br />
            cobran vida.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-8" style={{ textWrap: 'pretty' }}>
            Especializado en el desarrollo de aplicaciones robustas con enfoque en rendimiento,
            escalabilidad y una experiencia de usuario impecable.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={handleContactClick}
            className="group relative bg-accent-cyan text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white transition-colors focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Iniciar Proyecto
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <button
            onClick={handleProjectsClick}
            className="group glass-card px-8 py-4 rounded-full font-bold text-sm text-white hover:bg-white/10 hover:border-accent-purple/50 transition-all focus-visible:ring-2 focus-visible:ring-accent-purple focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
          >
            <span className="flex items-center gap-2">
              Ver Proyectos
              <svg
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Quick Stats */}
        {/* <div className="flex flex-wrap gap-8 pt-4 border-t border-gray-800/50">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors" aria-hidden="true">
              <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold tabular-nums">50+</div>
              <div className="text-xs text-gray-500">Proyectos</div>
            </div>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors" aria-hidden="true">
              <svg className="w-5 h-5 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold tabular-nums">30+</div>
              <div className="text-xs text-gray-500">Clientes</div>
            </div>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/20 transition-colors" aria-hidden="true">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold tabular-nums">5+</div>
              <div className="text-xs text-gray-500">Años</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Animated Atom Representation */}
      <div className="lg:w-1/3 flex justify-center relative sm:w-full w-full">
        {/* <div className="hero-container"> </div> */}
        <CyberpunkPortfolioHero />
        {/* <AnimatedAtom /> */}
        {/* <img src="/computer.jpg" alt="Animated Atom" className="w-64 h-64" /> */}
      </div>
    </header>
  );
};

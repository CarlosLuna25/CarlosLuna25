import { FaCloud, FaCode, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs, SiTypescript } from "react-icons/si";

// SOLID: Single Responsibility - Sección "Sobre Mí"
export const AboutSection = () => {
  const stats = [
    { value: '5+', label: 'Años de Experiencia' },
    { value: '50+', label: 'Proyectos Completados' },
    { value: '30+', label: 'Clientes Satisfechos' },
  ];
  const skills = [
    { name: 'Full Stack', icon: <FaCode /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <RiNextjsFill /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'NestJS', icon: <SiNestjs /> },
    { name: "laravel", icon: <FaLaravel /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Cloud', icon: <FaCloud /> },

  ];

  return (
    <section id="sobre-mi" className="max-w-7xl mx-auto mb-24 px-4 md:px-8 lg:px-12 scroll-mt-24">
      <div className="glass-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-accent-cyan opacity-30" aria-hidden="true" />
        <div className="absolute bottom-12 left-12 w-16 h-16 border-b-2 border-l-2 border-accent-purple opacity-30" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <span className="text-gray-500 uppercase tracking-widest text-sm font-mono">
                Hola
              </span>
              <h2 className="text-5xl md:text-6xl font-black mt-2 mb-6 scroll-mt-24" style={{ textWrap: 'balance' }}>
                SOY <span className="gradient-text">CARLOS</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed" style={{ textWrap: 'pretty' }}>
                Ingeniero en Sistemas apasionado por el desarrollo web. Especializado en
                crear aplicaciones robustas y escalables con tecnologías modernas. Mi enfoque
                se centra en escribir código limpio, mantener las mejores prácticas y entregar
                soluciones que realmente impacten.
              </p>
            </div>

            {/* Stats with Checkmarks */}
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group"
                >
                  {/* Checkmark Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-accent-cyan"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  {/* Stat Content */}
                  <div>
                    <span className="text-3xl font-black gradient-text tabular-nums">
                      {stat.value}
                    </span>
                    <span className="text-gray-400 ml-4 text-sm">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm font-mono border border-white/10 hover:border-accent-cyan/50 hover:bg-white/10 transition-all duration-300"
                >
                  {skill.icon}
                  <span className="text-sm">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Image/Visual */}
          <div className="relative lg:pl-12">
            {/* Decorative Background Shape */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-full blur-3xl -z-10" />

            {/* Main Visual Container */}
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-accent-cyan/20 rounded-3xl" />
              <div className="absolute -inset-2 border border-accent-purple/30 rounded-3xl" />

              {/* Image Placeholder / Avatar Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                {/* Icon/Avatar Placeholder - Puedes reemplazar con tu foto */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  {/* <svg 
                    className="w-64 h-64 text-gray-700 opacity-30" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg> */}
                  <div className="bg-transparent w-70 h-70 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img
                      src="/Avatar2.png"
                      alt="Carlos Luna - Ingeniero en Sistemas y Full Stack Developer"
                      width="280"
                      height="280"
                      className="min-w-full object-cover rounded-2xl transform scale-85"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 z-20" aria-hidden="true">
                  <div className="w-2 h-8 bg-accent-cyan rounded-full" />
                  <div className="w-8 h-2 bg-accent-cyan rounded-full mt-1" />
                </div>

                <div className="absolute bottom-8 left-8 z-20" aria-hidden="true">
                  <div className="w-2 h-8 bg-accent-purple rounded-full" />
                  <div className="w-8 h-2 bg-accent-purple rounded-full mt-1" />
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                  <div className="glass-card px-6 py-2 border-accent-cyan/30">
                    <span className="text-xs font-mono text-accent-cyan">
                      // Ingeniero en Sistemas
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Dots */}
              <div className="absolute -top-4 right-1/4 w-3 h-3 rounded-full bg-accent-cyan animate-pulse" aria-hidden="true" />
              <div className="absolute top-1/4 -right-4 w-2 h-2 rounded-full bg-accent-purple animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
              <div className="absolute bottom-1/4 -left-4 w-2 h-2 rounded-full bg-accent-cyan animate-pulse" style={{ animationDelay: '0.5s' }} aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" aria-hidden="true" />
      </div>
    </section>
  );
};

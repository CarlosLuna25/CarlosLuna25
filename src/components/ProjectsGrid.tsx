// SOLID: Single Responsibility - Grid de proyectos destacados
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ProjectsGrid = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      metric: 'Reduje el tiempo de carga en un 40%',
      tags: ['React', 'Stripe', 'Redis'],
      gradient: 'from-orange-600/20 to-orange-900/40',
      hoverColor: 'group-hover:text-orange-400',
    },
    {
      id: 2,
      title: 'SaaS Analytics Dashboard',
      metric: 'Soportó +10k usuarios activos simultáneos',
      tags: ['Next.js', 'GraphQL', 'AWS Lambda'],
      gradient: 'from-purple-600/20 to-blue-900/40',
      hoverColor: 'group-hover:text-purple-400',
      borderColor: 'border-accent-purple/20',
    },
  ];

  return (
    <section ref={containerRef} id="proyectos" className="max-w-7xl mx-auto mb-24 px-4 md:px-8 lg:px-12 scroll-mt-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2 scroll-mt-24" style={{ textWrap: 'balance' }}>Proyectos Destacados</h2>
          <p className="text-gray-500" style={{ textWrap: 'pretty' }}>Soluciones reales a problemas complejos.</p>
        </div>
        <a 
          href="#proyectos" 
          className="text-sm font-bold border-b border-accent-cyan pb-1 text-accent-cyan hover:opacity-80 focus-visible:outline-2 focus-visible:outline-accent-cyan focus-visible:outline-offset-4 transition-opacity"
        >
          Ver todo el archivo
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <button 
            key={project.id} 
            className="project-card group cursor-pointer text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-3xl"
            onClick={() => console.log(`Ver proyecto: ${project.title}`)}
            aria-label={`Ver detalles del proyecto ${project.title}`}
          >
            <div className={`glass-card overflow-hidden h-80 mb-6 relative ${project.borderColor || ''}`}>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" aria-hidden="true" />
              
              {/* Content */}
              <div className="absolute bottom-6 left-8 z-20">
                <h3 className={`text-2xl font-bold transition-colors ${project.hoverColor}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 italic">{project.metric}</p>
              </div>
              
              {/* Background */}
              <div 
                className={`w-full h-full bg-gradient-to-br ${project.gradient} transform group-hover:scale-110 transition-transform duration-700`}
                aria-hidden="true"
              />
            </div>
            
            {/* Tags */}
            <div className="flex gap-3 flex-wrap">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono pointer-events-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

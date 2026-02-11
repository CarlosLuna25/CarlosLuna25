// SOLID: Single Responsibility - Componente de navegación
import { handleNavClick } from '../utils/smoothScroll';

export const Navigation = () => {
  const navItems = [
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Stack', href: '#stack' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="flex justify-between items-center mb-16 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="font-bold text-xl tracking-tighter uppercase">
       Carlos Luna
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="hover:text-white focus-visible:outline-2 focus-visible:outline-accent-cyan focus-visible:outline-offset-4 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
      
      <button 
        onClick={() => {
          const contactSection = document.getElementById('contacto');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-accent-cyan focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark transition-colors"
      >
        Hablemos
      </button>
    </nav>
  );
};

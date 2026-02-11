// SOLID: Open/Closed Principle - Fácil agregar nuevas secciones sin modificar existentes
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechStackGrid } from './components/TechStackGrid';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useCustomCursor } from './hooks/useCustomCursor';

function App() {
  useCustomCursor();

  return (
    <div className="min-h-screen bg-bg-dark text-white p-4 md:p-8 lg:p-12 relative">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent-cyan focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Saltar al contenido principal
      </a>
      
      {/* Custom Cursor */}
      <div 
        id="custom-cursor" 
        className="custom-cursor hidden md:block"
        aria-hidden="true"
      />

      {/* Hero Mesh Background */}
      <div className="fixed top-0 right-0 w-[60%] h-full pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-radial from-accent-purple/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main id="main-content">
          <Hero />
          <TechStackGrid />
          <AboutSection />
          <ProjectsGrid />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

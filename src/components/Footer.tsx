import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

// SOLID: Single Responsibility - Componente para el footer
export const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/carlosluna25', icon: <FaGithub size={20} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/carlosluna25', icon: <FaLinkedin size={20} /> },
    { name: 'X', href: 'https://x.com/carlosluna25', icon: <FaXTwitter size={20} /> },
    { name: 'Instagram', href: 'https://instagram.com/carlosluna25', icon: <FaInstagram size={20} /> },
  ];

  return (
    <footer className="max-w-7xl mx-auto border-t border-gray-900 pt-12 pb-24 flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-8 lg:px-12">
      {/* Status */}
      <div className="text-center md:text-left">
        <p className="text-xs font-mono text-gray-600 mb-2">ESTADO ACTUAL</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-bold">Disponible para nuevos proyectos</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-8 text-gray-500">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white focus-visible:outline-2 focus-visible:outline-accent-cyan focus-visible:outline-offset-4 transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-700">
        © 2026 Carlos Luna. Todos los derechos reservados.
      </p>
    </footer>
  );
};

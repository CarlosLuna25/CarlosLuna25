// SOLID: Single Responsibility - Configuración global de la aplicación

export const SITE_CONFIG = {
  name: 'Carlos.dev',
  title: 'Carlos - Full Stack Developer',
  description: 'Portafolio de Carlos - Desarrollador Full Stack especializado en React, TypeScript y Node.js',
  author: 'Carlos',
  email: 'carlosluna2509@gmail.com',
  github: 'https://github.com/carlosluna25',
  linkedin: 'https://linkedin.com/in/carlosluna25',
  x: 'https://x.com/carlosluna25',
  instagram: 'https://instagram.com/carlosluna25',
};

export const ANIMATION_CONFIG = {
  cursorGlow: {
    size: 384, // 96 * 4 (w-96)
    opacity: 0.05,
    blur: 120,
  },
  heroOrbs: {
    moveSpeed: 0.3,
    floatDuration: 6000,
  },
  cards: {
    hoverScale: 1.02,
    transitionDuration: 300,
  },
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const COLORS = {
  midnight: {
    900: '#0a0a0a',
    800: '#121218',
    700: '#1a1a24',
  },
  neon: {
    cyan: '#00f0ff',
    violet: '#b800ff',
    pink: '#ff00e5',
  },
};

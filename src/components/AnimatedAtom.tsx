// SOLID: Single Responsibility - Componente de átomo animado

// Generar posiciones de estrellas una sola vez (constante fuera del componente)
const generateStars = () => 
  Array.from({ length: 20 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    opacity: Math.random() * 0.7 + 0.3,
  }));

const stars = generateStars();

export const AnimatedAtom = () => {
  return (
    <div className="relative w-64 h-64" aria-hidden="true">
      {/* Rotating Borders - más sutiles */}
      <div className="absolute inset-0 border-2 border-accent-cyan/20 rounded-3xl rotate-12 animate-float" />
      <div className="absolute inset-0 border-2 border-accent-purple/20 rounded-3xl -rotate-12 animate-float-delayed" />
      
      {/* SVG Atom Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 200 200" 
          className="w-56 h-56"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glow Effects */}
          <defs>
            <filter id="glow-cyan">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="glow-purple">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="glow-pink">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Gradientes para las órbitas */}
            <linearGradient id="gradient-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#00f2ff" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#00f2ff" stopOpacity="0.8"/>
            </linearGradient>
            
            <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7000ff" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#7000ff" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#7000ff" stopOpacity="0.8"/>
            </linearGradient>
            
            <linearGradient id="gradient-pink" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff00e5" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#ff00e5" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#ff00e5" stopOpacity="0.8"/>
            </linearGradient>
          </defs>

          {/* Núcleo Central */}
          <circle 
            cx="100" 
            cy="100" 
            r="12" 
            fill="url(#gradient-cyan)"
            filter="url(#glow-cyan)"
            className="animate-pulse-slow"
          />
          <circle 
            cx="100" 
            cy="100" 
            r="8" 
            fill="#ffffff"
            opacity="0.9"
          />

          {/* Órbita 1 - Cyan (horizontal) */}
          <g className="orbit-1 animate-pulse">
            <ellipse 
              cx="100" 
              cy="100" 
              rx="70" 
              ry="25" 
              fill="none" 
              stroke="url(#gradient-cyan)" 
              strokeWidth="2"
              opacity="0.6"
            />
            {/* Electrón 1 */}
            <circle 
              cx="170" 
              cy="100" 
              r="5" 
              fill="#00f2ff"
              filter="url(#glow-cyan)"
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 70,100 a 70,25 0 1,0 140,0 a 70,25 0 1,0 -140,0"
              />
            </circle>
          </g>

          {/* Órbita 2 - Purple (diagonal) */}
          <g className="orbit-2" transform="rotate(60 100 100)">
            <ellipse 
              cx="100" 
              cy="100" 
              rx="70" 
              ry="25" 
              fill="none" 
              stroke="url(#gradient-purple)" 
              strokeWidth="2"
              opacity="0.6"
            />
            {/* Electrón 2 */}
            <circle 
              cx="170" 
              cy="100" 
              r="5" 
              fill="#7000ff"
              filter="url(#glow-purple)"
            >
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path="M 70,100 a 70,25 0 1,0 140,0 a 70,25 0 1,0 -140,0"
              />
            </circle>
          </g>

          {/* Órbita 3 - Pink (diagonal opuesta) */}
          <g className="orbit-3" transform="rotate(120 100 100)">
            <ellipse 
              cx="100" 
              cy="100" 
              rx="70" 
              ry="25" 
              fill="none" 
              stroke="url(#gradient-pink)" 
              strokeWidth="2"
              opacity="0.6"
            />
            {/* Electrón 3 */}
            <circle 
              cx="170" 
              cy="100" 
              r="5" 
              fill="#ff00e5"
              filter="url(#glow-pink)"
            >
              <animateMotion
                dur="3.5s"
                repeatCount="indefinite"
                path="M 70,100 a 70,25 0 1,0 140,0 a 70,25 0 1,0 -140,0"
              />
            </circle>
          </g>

          {/* Órbita 4 - Cyan Secondary (más grande) */}
          <g className="orbit-4" transform="rotate(30 100 100)">
            <ellipse 
              cx="100" 
              cy="100" 
              rx="85" 
              ry="30" 
              fill="none" 
              stroke="url(#gradient-cyan)" 
              strokeWidth="1.5"
              opacity="0.4"
            />
            {/* Electrón 4 */}
            <circle 
              cx="185" 
              cy="100" 
              r="4" 
              fill="#00f2ff"
              filter="url(#glow-cyan)"
              opacity="0.8"
            >
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M 85,100 a 85,30 0 1,0 170,0 a 85,30 0 1,0 -170,0"
              />
            </circle>
          </g>
        </svg>
      </div>

      {/* Partículas de fondo (estrellas) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

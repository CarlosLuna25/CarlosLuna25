// SOLID: Single Responsibility - Grid de tecnologías del stack principal
export const TechStackGrid = () => {
  return (
    <section id="stack" className="max-w-7xl mx-auto mb-24 px-4 md:px-8 lg:px-12">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 scroll-mt-24">
        Core Stack
        <div className="h-[1px] bg-gray-800 grow" aria-hidden="true" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(160px,auto)]">
        {/* Main Tech - Large Card */}
        <div className="glass-card col-span-1 md:col-span-2 row-span-2 p-8 flex flex-col justify-between bg-gradient-to-br from-white/5 to-accent-purple/10">
          <div className="flex justify-between items-start">
            <div className="bg-black/50 p-4 rounded-2xl border border-white/10">
              <svg className="w-12 h-12" viewBox="0 0 180 180" fill="white" aria-hidden="true">
                <path d="M119.1 0H60.9l29.1 50.4L119.1 0zm0 0h60.9L149 30.2 119.1 0zM0 0h60.9L30.9 30.2 0 0zm149 149h30.9v30.9H149V149zm-89.1 0L30.9 179.8 0 149h59.9zm89.1 0L119.1 179.8 89.2 149H149zm-59.1-29.3L60.9 149h58.2l-29-29.3zM90 69.7L60.9 40h58.2L90 69.7z" />
              </svg>
            </div>
            <span className="text-xs font-mono text-accent-purple">SSR FAVORITO</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2" style={{ textWrap: 'balance' }}>Next.js + NestJS</h3>
            <p className="text-gray-400 text-sm" style={{ textWrap: 'pretty' }}>
              Arquitecturas Full Stack unificadas para un SEO perfecto y APIs ultrarrápidas.
            </p>
          </div>
        </div>

        {/* AWS */}
        <div className="glass-card p-6 flex flex-col justify-center items-center gap-4">
          <svg className="w-12 h-12" viewBox="0 0 256 256" fill="#FF9900" aria-hidden="true">
            <path d="M72.5 144.5c0 5.3-1.1 9.7-3.2 13-2.2 3.4-5.4 5.1-9.7 5.1-2.6 0-4.9-.8-6.9-2.5-2-1.7-3.4-3.9-4-6.7h-.2l-.8 7.7H40V113h8.4v16.4h.1c1.3-3 3-5.2 5.1-6.7 2.1-1.5 4.5-2.2 7.2-2.2 4.2 0 7.5 1.7 9.8 5.2 2.3 3.5 3.5 8.3 3.5 14.5v4.3zm-8.3-4.1c0-3.8-.7-6.8-2.1-8.9-1.4-2.1-3.4-3.2-6-3.2-2 0-3.6.7-4.9 2-1.3 1.4-2.1 3.2-2.4 5.5v10.2c.3 2.4 1.1 4.3 2.5 5.7 1.4 1.4 3.1 2.1 5.2 2.1 2.4 0 4.3-1 5.6-3.1 1.3-2.1 2-5 2-8.7v-1.6zm45.2-16.9l-10.9 27.7c-1.8 4.8-4.8 7.2-8.9 7.2-1.5 0-2.9-.3-4.3-.9v-6.9l1.8.1c1.2 0 2.1-.2 2.9-.7.7-.5 1.4-1.5 1.9-2.9l1-2.5-9.8-21.1h8.8l5.6 14.1 5.4-14.1h8.5zm27.7 0l-10.9 27.7c-1.8 4.8-4.8 7.2-8.9 7.2-1.5 0-2.9-.3-4.3-.9v-6.9l1.8.1c1.2 0 2.1-.2 2.9-.7.7-.5 1.4-1.5 1.9-2.9l1-2.5-9.8-21.1h8.8l5.6 14.1 5.4-14.1h8.5z" />
          </svg>
          <span className="font-bold tracking-widest text-sm">CLOUD OPS</span>
        </div>

        {/* Databases */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="w-3 h-3 rounded-full bg-blue-500" />
          </div>
          <div>
            <h4 className="font-bold">Databases</h4>
            <p className="text-xs text-gray-500">PostgreSQL , MySQL , MongoDB</p>
          </div>
        </div>

        {/* Terminal Mockup */}
        <div className="glass-card col-span-1 md:col-span-2 p-6 bg-black/40 font-mono text-xs leading-relaxed">
          <div className="flex gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <p className="text-gray-500">$ status --latest-projects</p>
          <p className="text-accent-cyan">&gt;&gt; Fetching active repositories…</p>
          <p className="text-white">● Carlos Portfolio <span className="text-gray-600">v1.0.0</span></p>
          <p className="text-white">● TecnoCarlos <span className="text-gray-600">v2.4.0</span></p>
          <p className="text-white">● Cryo blood bank website <span className="text-gray-600">v1.1.2</span></p>
          <p className="text-white animate-pulse">_</p>
        </div>

        {/* Docker */}
        <div className="glass-card p-6 flex flex-col justify-center items-center gap-2 border-accent-cyan/20">
          <svg className="w-10 h-10" viewBox="0 0 256 185" fill="#2496ED" aria-hidden="true">
            <path d="M250 77.48c-3.21-2.23-10.62-3.07-16.77-2.23-1.15-8.38-5.74-15.68-13.82-22.14l-4.7-3.74-3.07 4.97c-3.91 6.31-5.59 17.45-3.66 25.22 1.34 5.36 4.14 10.04 8.23 13.74-3.42 1.87-8.63 3.74-16.23 3.74H2.06l-.77 4.02c-2.35 12.46-2.35 51.43 22.8 81.35 19.18 22.84 47.89 34.46 85.31 34.46 81.16 0 141.15-37.42 168.76-105.23 11.01.23 34.65.69 46.83-23.09.31-.62 1.15-2.35 3.66-8.02l1.34-3.06-5.99-4.19zm-230.4-4.5h27.61v26.92H19.6V72.98zm0-31.46h27.61v26.93H19.6V41.52zm29.73 31.46h27.62v26.92H49.33V72.98zm0-31.46h27.62v26.93H49.33V41.52zm29.72 31.46h27.62v26.92H79.05V72.98zm0-31.46h27.62v26.93H79.05V41.52zm0-31.23h27.62v26.92H79.05V10.29zm29.73 62.69h27.61v26.92h-27.61V72.98zm0-31.46h27.61v26.93h-27.61V41.52zm29.73 31.46h27.61v26.92h-27.61V72.98zm0-31.46h27.61v26.93h-27.61V41.52z" />
          </svg>
          <span className="text-[10px] font-mono uppercase text-gray-500">Contenedores</span>
        </div>
      </div>
    </section>
  );
};

# 🚀 Carlos Portfolio - The Kinetic Stack

Un portafolio web moderno y dinámico construido con React, TypeScript y Tailwind CSS, siguiendo los principios SOLID para garantizar código mantenible y escalable.

## 🎨 Características del Diseño

### Concepto Visual
- **Tema**: "The Kinetic Stack" - Representando el dinamismo del código
- **Paleta**: Fondo negro profundo con gradientes de Cyan Eléctrico a Violeta Neón
- **Estilo**: Bento Grid evolucionado con efectos de Glassmorphism

### Secciones Principales

1. **Hero Section**
   - Tipografía gigante con gradiente animado
   - Modelo 3D minimalista que reacciona al movimiento del ratón
   - Nodos orbitales animados
   - Efectos de blur en orbes de fondo

2. **Bento Grid de Tecnologías**
   - Tarjetas de diferentes tamaños con layout responsivo
   - Micro-interacciones al pasar el cursor
   - Tarjeta grande para el stack principal
   - Secciones categorizadas: Frontend, Backend, Database, DevOps

3. **Sección de Proyectos ("The Deep Dive")**
   - Scroll horizontal con navegación
   - Efecto de profundidad en tarjetas
   - El fondo cambia de tono según el proyecto activo
   - Métricas reales de cada proyecto
   - Indicadores de progreso

4. **Footer**
   - Enlaces sociales con efectos hover
   - Información de contacto
   - Links rápidos

## 🏗️ Arquitectura SOLID

### 1. Single Responsibility Principle (SRP)
Cada componente tiene una única responsabilidad:

- `Hero.tsx` - Solo maneja la sección hero
- `BentoGrid.tsx` - Solo maneja el grid de tecnologías
- `ProjectsSection.tsx` - Solo maneja la sección de proyectos
- `TechCard.tsx` - Solo renderiza una tarjeta de tecnología
- `ProjectCard.tsx` - Solo renderiza una tarjeta de proyecto
- `BentoCard.tsx` - Componente reutilizable para tarjetas del bento grid
- `GradientText.tsx` - Solo maneja texto con gradiente
- `Footer.tsx` - Solo maneja el footer

### 2. Open/Closed Principle (OCP)
El código está abierto para extensión pero cerrado para modificación:

- `App.tsx` permite agregar nuevas secciones sin modificar las existentes
- Los componentes aceptan props para personalización sin cambiar su implementación
- Los estilos se extienden mediante clases de Tailwind

### 3. Liskov Substitution Principle (LSP)
Los componentes son intercambiables:

- Todas las tarjetas (BentoCard, TechCard, ProjectCard) pueden usarse de forma consistente
- Los hooks personalizados pueden reemplazarse sin afectar el comportamiento

### 4. Interface Segregation Principle (ISP)
Interfaces específicas y bien definidas en `types/index.ts`:

- `Technology` - Define la estructura de una tecnología
- `Project` - Define la estructura de un proyecto
- `BentoCardProps` - Props específicas para BentoCard
- `ProjectMetric` - Estructura de métricas de proyecto

### 5. Dependency Inversion Principle (DIP)
Los componentes dependen de abstracciones (props/interfaces), no de implementaciones concretas:

- Los datos están separados en `data/portfolio.ts`
- Los tipos están definidos en `types/index.ts`
- Los componentes reciben datos a través de props

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React (SRP)
│   ├── Hero.tsx
│   ├── BentoGrid.tsx
│   ├── BentoCard.tsx
│   ├── TechCard.tsx
│   ├── ProjectsSection.tsx
│   ├── ProjectCard.tsx
│   ├── GradientText.tsx
│   └── Footer.tsx
├── hooks/              # Custom Hooks (SRP)
│   └── useCursorGlow.ts
├── types/              # Definiciones de tipos (ISP)
│   └── index.ts
├── data/               # Datos de la aplicación (SRP)
│   └── portfolio.ts
├── App.tsx            # Componente principal (OCP)
├── index.css          # Estilos globales con Tailwind
└── main.tsx           # Entry point
```

## 🎯 Tecnologías Utilizadas

- **React 19** - Librería UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Vite** - Build tool ultra rápido

## 🚀 Instalación y Uso

```bash
# 1. Instalar dependencias
npm install

# 2. Instalar Tailwind CSS (si no está instalado)
npm install -D tailwindcss @tailwindcss/vite

# 3. Ejecutar en desarrollo
npm run dev

# 4. Compilar para producción
npm run build

# 5. Previsualizar build
npm run preview
```

> **Nota:** Este proyecto usa Tailwind CSS v4 con el plugin de Vite. No necesitas `postcss.config.js` ni `tailwind.config.js`.

## 🎨 Personalización

### Colores
Los colores neón se pueden personalizar en `src/index.css`:

```css
@theme {
  --color-midnight-900: #0a0a0a;
  --color-midnight-800: #121218;
  --color-midnight-700: #1a1a24;
  
  --color-neon-cyan: #00f0ff;
  --color-neon-violet: #b800ff;
  --color-neon-pink: #ff00e5;
}
```

### Datos del Portfolio
Actualiza tus datos en `src/data/portfolio.ts`:

- `technologies` - Array de tecnologías
- `projects` - Array de proyectos
- `mainStack` - Tu stack principal

### Animaciones
Las animaciones están definidas en `src/index.css` y pueden ajustarse:

- `animate-gradient` - Gradiente animado
- `animate-float` - Efecto de flotación
- `animate-pulse-slow` - Pulso lento

```css
@theme {
  --animate-gradient: gradient 8s linear infinite;
  --animate-float: float 6s ease-in-out infinite;
}
```

## 🌟 Características Interactivas

1. **Efecto de Cursor Glow**: El cursor deja un rastro luminoso
2. **Animaciones de Hover**: Cada elemento responde al hover del ratón
3. **Nodos 3D Interactivos**: El modelo 3D sigue el movimiento del cursor
4. **Scroll Horizontal**: Navegación suave de proyectos
5. **Cambio Dinámico de Fondo**: El fondo se adapta al proyecto activo
6. **Efectos de Glassmorphism**: Tarjetas con efecto de vidrio esmerilado

## 📱 Responsive Design

El portafolio es completamente responsive:

- **Mobile**: Layout vertical optimizado
- **Tablet**: Grid adaptativo de 2 columnas
- **Desktop**: Full bento grid de 4 columnas

## 🔧 Mejoras Futuras

- [ ] Integración con CMS para contenido dinámico
- [ ] Dark/Light mode toggle
- [ ] Animaciones con Framer Motion
- [ ] Blog integrado
- [ ] Sistema de contacto con EmailJS
- [ ] Analytics con Google Analytics

## 📄 Licencia

MIT License - Libre para uso personal y comercial

---

**Hecho con ❤️ y React + Tailwind**

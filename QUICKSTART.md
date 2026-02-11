# 🚀 Guía Rápida - Portfolio de Carlos

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Si Tailwind no está instalado, ejecuta:
npm install -D tailwindcss @tailwindcss/vite

# 3. Iniciar servidor de desarrollo
npm run dev
```

> **Nota:** Usamos Tailwind CSS v4 con el plugin de Vite. No necesitas PostCSS ni archivos de configuración adicionales.

## 📝 Personalización Rápida

### 1. Datos Personales
Edita `/src/constants/config.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'TuNombre.dev',
  email: 'tu@email.com',
  github: 'https://github.com/tuusuario',
  linkedin: 'https://linkedin.com/in/tuusuario',
  twitter: 'https://twitter.com/tuusuario',
};
```

### 2. Tecnologías y Proyectos
Edita `/src/data/portfolio.ts`:

**Actualizar Tecnologías:**
```typescript
export const technologies: Technology[] = [
  { name: 'React', icon: '⚛️', category: 'frontend', level: 95 },
  // Agrega las tuyas aquí...
];
```

**Actualizar Proyectos:**
```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Tu Proyecto',
    description: 'Descripción corta',
    longDescription: 'Descripción completa',
    tags: ['React', 'Node.js'],
    metrics: [
      { label: 'Usuarios', value: '10k+', icon: '👥' },
    ],
    image: '🚀', // Emoji o ruta de imagen
    color: '#00f0ff',
  },
];
```

### 3. Sección "Sobre Mí"
Edita `/src/components/AboutSection.tsx`:
- Busca la sección "Mi Historia"
- Actualiza los párrafos con tu información personal
- Ajusta las competencias y sus porcentajes

### 4. Información de Contacto
Edita `/src/components/ContactSection.tsx`:
- Actualiza el array `contactInfo` con tus datos reales

### 5. Colores del Tema
Edita `/src/index.css` en la sección `@theme`:

```css
@theme {
  --color-neon-cyan: #00f0ff;    /* Color primario */
  --color-neon-violet: #b800ff;  /* Color secundario */
  --color-neon-pink: #ff00e5;    /* Color acento */
}
```

## 🎨 Componentes Disponibles

### BentoCard
Tarjeta reutilizable del grid:
```tsx
<BentoCard 
  size="large"  // 'small' | 'medium' | 'large'
  title="Título"
  description="Descripción"
  hoverable={true}
>
  {/* Tu contenido */}
</BentoCard>
```

### GradientText
Texto con gradiente animado:
```tsx
<GradientText animated={true}>
  Tu texto aquí
</GradientText>
```

## 📁 Estructura de Componentes (SOLID)

```
src/
├── components/       # Todos siguen SRP (Single Responsibility)
├── hooks/           # Custom hooks reutilizables
├── types/           # Interfaces TypeScript (ISP)
├── data/            # Datos de la aplicación
├── utils/           # Funciones utilitarias
└── constants/       # Configuración global
```

## 🎯 Características Principales

✅ **Hero Section** - Entrada impactante con animaciones
✅ **Bento Grid** - Grid de tecnologías responsivo
✅ **Proyectos** - Scroll horizontal con métricas
✅ **Sobre Mí** - Historia y habilidades
✅ **Contacto** - Formulario y enlaces sociales
✅ **Navegación** - Smooth scroll entre secciones
✅ **Footer** - Links y redes sociales

## 🚀 Build para Producción

```bash
# Compilar
npm run build

# Preview del build
npm run preview
```

Los archivos compilados estarán en `/dist`

## 📱 Responsive

El diseño es 100% responsive:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Efectos Especiales

1. **Cursor Glow**: Rastro luminoso que sigue al cursor
2. **Glassmorphism**: Efecto de vidrio esmerilado en tarjetas
3. **Gradientes Animados**: Transiciones suaves de color
4. **Hover Effects**: Micro-interacciones en todos los elementos
5. **Smooth Scroll**: Navegación fluida entre secciones

## 🔧 Solución de Problemas

### Tailwind no funciona
```bash
npm install -D tailwindcss @tailwindcss/vite
```

### Los estilos no se aplican
Asegúrate que `index.css` tiene:
```css
@import "tailwindcss";
```

Y que `vite.config.ts` incluye:
```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Errores de TypeScript
```bash
npm run build
# Revisa los errores en la consola
```

## 📚 Recursos

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)

---

¡Listo para personalizar tu portafolio! 🎉

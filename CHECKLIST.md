# ✅ Checklist de Personalización del Portafolio

## 📋 Antes de Comenzar

- [ ] Node.js instalado (v18 o superior)
- [ ] Editor de código listo (VS Code recomendado)
- [ ] Git instalado
- [ ] Terminal/consola disponible

---

## 🚀 Paso 1: Instalación

```bash
cd /Users/leackstat/Desktop/TecnoCarlos/CarlosPortfolio
npm install
npm run dev
```

- [ ] Dependencias instaladas sin errores
- [ ] Servidor de desarrollo corriendo
- [ ] Sitio visible en `http://localhost:5173`

---

## ✏️ Paso 2: Personalización Básica

### Configuración General
Archivo: `src/constants/config.ts`

- [ ] Cambiar `name` a tu nombre
- [ ] Actualizar `email` con tu correo
- [ ] Poner tu URL de GitHub
- [ ] Poner tu URL de LinkedIn
- [ ] Poner tu URL de Twitter/X (opcional)

### Datos del Portafolio
Archivo: `src/data/portfolio.ts`

#### Tecnologías
- [ ] Revisar lista de `technologies`
- [ ] Agregar tecnologías que usas
- [ ] Eliminar las que no usas
- [ ] Ajustar `level` (1-100) según tu experiencia
- [ ] Cambiar `icon` (emojis o texto)

#### Stack Principal
- [ ] Actualizar `mainStack` con tus tecnologías principales
- [ ] Cambiar descripciones

#### Proyectos
- [ ] Agregar tus proyectos reales
- [ ] Para cada proyecto actualizar:
  - [ ] `title` - Nombre del proyecto
  - [ ] `description` - Descripción corta
  - [ ] `longDescription` - Descripción detallada
  - [ ] `tags` - Tecnologías usadas
  - [ ] `metrics` - Estadísticas reales
  - [ ] `image` - Emoji o URL de imagen
  - [ ] `liveUrl` - Link al proyecto vivo
  - [ ] `githubUrl` - Link al repositorio
  - [ ] `color` - Color de acento (hex)

---

## 📝 Paso 3: Textos y Contenido

### Hero Section
Archivo: `src/components/Hero.tsx`

- [ ] Línea 42: Cambiar texto del badge "💻 Full Stack Developer"
- [ ] Línea 49-50: Personalizar frase principal
- [ ] Línea 54: Actualizar descripción personal

### Sección "Sobre Mí"
Archivo: `src/components/AboutSection.tsx`

- [ ] Líneas 30-43: Escribir tu historia personal (3 párrafos)
- [ ] Líneas 50-53: Ajustar competencias y niveles
- [ ] Líneas 67-90: Revisar highlights (íconos y textos)

### Footer
Archivo: `src/components/Footer.tsx`

- [ ] Línea 15: Cambiar email en `socialLinks`
- [ ] Líneas 16-18: Actualizar URLs de LinkedIn, GitHub, Twitter
- [ ] Línea 28: Cambiar "Carlos.dev" por tu nombre

### Contacto
Archivo: `src/components/ContactSection.tsx`

- [ ] Líneas 25-42: Actualizar `contactInfo` con tus datos reales

---

## 🎨 Paso 4: Estilos y Colores

### Colores del Tema
Archivo: `tailwind.config.js`

- [ ] Probar diferentes colores neón:
  - Cyan: `#00f0ff` (actual)
  - Violet: `#b800ff` (actual)
  - Pink: `#ff00e5` (actual)
- [ ] Ajustar según tu marca personal

### Fuente
Archivo: `src/index.css`

- [ ] Línea 6: Cambiar fuente si quieres (actual: Inter)
- [ ] Opcional: Importar Google Fonts en `index.html`

---

## 🖼️ Paso 5: Assets y Media

### Favicon
- [ ] Crear tu propio favicon
- [ ] Reemplazar `/public/vite.svg`
- [ ] Actualizar referencia en `index.html`

### Imágenes de Proyectos
- [ ] Crear screenshots de tus proyectos
- [ ] Guardar en `/public/projects/`
- [ ] Actualizar `image` en `portfolio.ts`

### Preview Image (Open Graph)
- [ ] Crear imagen de preview (1200x630px)
- [ ] Guardar como `/public/preview.png`
- [ ] Actualizar meta tags en `index.html`

---

## 🔍 Paso 6: SEO y Meta Tags

Archivo: `index.html`

- [ ] `<title>` - Tu nombre y título
- [ ] `<meta name="description">` - Tu descripción profesional
- [ ] `<meta name="keywords">` - Tus skills principales
- [ ] `<meta name="author">` - Tu nombre
- [ ] Open Graph tags (líneas og:*)
- [ ] Twitter Card tags (líneas twitter:*)

---

## 🧪 Paso 7: Testing

### Navegación
- [ ] Probar todos los links del navbar
- [ ] Verificar smooth scroll funciona
- [ ] Botón "Descargar CV" (agregar tu CV)

### Responsive
- [ ] Mobile (< 768px)
  - [ ] Layout se adapta
  - [ ] Texto legible
  - [ ] Botones clickeables
- [ ] Tablet (768-1024px)
  - [ ] Grid de 2 columnas funciona
- [ ] Desktop (> 1024px)
  - [ ] Todas las animaciones activas
  - [ ] Grid completo visible

### Animaciones
- [ ] Cursor glow funciona
- [ ] Hero: orbes se mueven con el mouse
- [ ] Hero: nodos orbitales giran
- [ ] Cards: hover effect funciona
- [ ] Proyectos: scroll horizontal suave
- [ ] Proyectos: fondo cambia al hover

### Formulario
- [ ] Campos son editables
- [ ] Validación funciona
- [ ] Submit dispara acción
- [ ] Opcional: Conectar a backend (EmailJS, Formspree, etc.)

---

## 📊 Paso 8: Optimización

### Performance
- [ ] Ejecutar `npm run build`
- [ ] Sin errores de build
- [ ] Tamaño del bundle razonable (< 500KB)

### Lighthouse (Chrome DevTools)
- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 90

### Validación
- [ ] Sin errores en consola del navegador
- [ ] Sin warnings de React
- [ ] Ejecutar `npm run lint` - sin errores

---

## 🚀 Paso 9: Deployment

### Pre-Deploy
- [ ] Crear repositorio en GitHub
- [ ] Push del código
- [ ] README actualizado

### Deploy (elegir uno)

#### Opción A: Vercel
- [ ] Cuenta en Vercel creada
- [ ] Repositorio conectado
- [ ] Deploy automático configurado
- [ ] Dominio personalizado (opcional)

#### Opción B: Netlify
- [ ] Cuenta en Netlify creada
- [ ] Sitio deployado
- [ ] Configuración de build correcta
- [ ] Dominio personalizado (opcional)

#### Opción C: GitHub Pages
- [ ] gh-pages instalado
- [ ] package.json configurado
- [ ] vite.config.ts actualizado
- [ ] Ejecutado `npm run deploy`

---

## ✨ Paso 10: Post-Deploy

### Verificación Final
- [ ] Sitio accesible desde URL pública
- [ ] Todas las secciones cargan
- [ ] Links externos funcionan
- [ ] Formulario funciona
- [ ] Mobile responsive
- [ ] Performance óptimo

### Promoción
- [ ] Agregar link en LinkedIn
- [ ] Agregar link en GitHub profile
- [ ] Compartir en redes sociales
- [ ] Agregar a CV

### Analytics (Opcional)
- [ ] Google Analytics configurado
- [ ] Vercel Analytics activo
- [ ] Monitoreo de visitas

---

## 🎯 Mejoras Futuras

### Funcionalidades
- [ ] Blog integrado
- [ ] Sistema de testimonios
- [ ] Galería de imágenes
- [ ] Dark/Light mode
- [ ] Multiidioma (i18n)

### Contenido
- [ ] Agregar más proyectos
- [ ] Escribir casos de estudio
- [ ] Agregar certificaciones
- [ ] Timeline de experiencia

### Técnico
- [ ] Tests unitarios
- [ ] E2E tests
- [ ] CI/CD pipeline
- [ ] Monitoreo de errores (Sentry)

---

## 📞 ¿Necesitas Ayuda?

### Documentación
- [ ] Leer `README.md`
- [ ] Revisar `QUICKSTART.md`
- [ ] Consultar `ESTRUCTURA_SOLID.md`
- [ ] Ver `DEPLOYMENT.md`

### Recursos
- [ ] React Docs: https://react.dev
- [ ] Tailwind Docs: https://tailwindcss.com
- [ ] TypeScript Docs: https://www.typescriptlang.org

---

## ✅ Checklist Completada

Una vez que hayas marcado todos los ítems:

🎉 **¡Felicidades! Tu portafolio está listo para el mundo.**

Ahora es momento de:
1. Compartirlo en redes sociales
2. Incluirlo en tus aplicaciones de trabajo
3. Mostrárselo a reclutadores
4. Seguir agregando proyectos

---

**Fecha de inicio:** __________
**Fecha de completado:** __________
**URL del sitio:** __________

---

*Mantén este archivo actualizado conforme haces mejoras*

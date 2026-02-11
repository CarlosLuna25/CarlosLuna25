# 🚀 Guía de Despliegue

## Opciones de Hosting Recomendadas

### 1. Vercel (Recomendado) ⚡

**Ventajas:**
- Deploy automático desde GitHub
- CDN global
- SSL gratis
- Zero-config

**Pasos:**

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Para producción
vercel --prod
```

**O desde la interfaz web:**
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente Vite
4. ¡Haz clic en Deploy!

---

### 2. Netlify 🌐

**Pasos:**

1. Build settings:
```
Build command: npm run build
Publish directory: dist
```

2. Archivo `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

3. Deploy:
```bash
# Con Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

---

### 3. GitHub Pages 📄

**Pasos:**

1. Instalar gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Actualizar `package.json`:
```json
{
  "homepage": "https://tuusuario.github.io/tu-repo",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Actualizar `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/tu-repo/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. Cloudflare Pages ☁️

**Pasos:**

1. Configuración de build:
```
Build command: npm run build
Build output directory: dist
```

2. Variables de entorno (si las necesitas):
```
NODE_VERSION=18
```

3. Deploy automático al hacer push a GitHub

---

## 🔧 Pre-Deploy Checklist

Antes de desplegar, asegúrate de:

### ✅ Configuración

- [ ] Actualizar `src/constants/config.ts` con tu información real
- [ ] Actualizar `src/data/portfolio.ts` con tus proyectos
- [ ] Cambiar emails y enlaces sociales
- [ ] Personalizar textos en `AboutSection.tsx`
- [ ] Revisar meta tags en `index.html`

### ✅ Optimización

```bash
# Verificar el build
npm run build

# Preview del build
npm run preview

# Verificar errores
npm run lint
```

### ✅ SEO y Meta Tags

Actualizar `index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO -->
  <title>Tu Nombre - Full Stack Developer</title>
  <meta name="description" content="Portafolio de [Tu Nombre] - Desarrollador Full Stack especializado en React, TypeScript y Node.js" />
  <meta name="keywords" content="desarrollador, full stack, react, typescript, node.js" />
  <meta name="author" content="Tu Nombre" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tu-sitio.com/" />
  <meta property="og:title" content="Tu Nombre - Full Stack Developer" />
  <meta property="og:description" content="Portafolio profesional de desarrollo web" />
  <meta property="og:image" content="https://tu-sitio.com/preview.png" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://tu-sitio.com/" />
  <meta property="twitter:title" content="Tu Nombre - Full Stack Developer" />
  <meta property="twitter:description" content="Portafolio profesional de desarrollo web" />
  <meta property="twitter:image" content="https://tu-sitio.com/preview.png" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
</head>
```

### ✅ Performance

```bash
# Analizar el bundle
npm run build -- --mode analyze

# Verificar tamaño
du -sh dist/
```

**Optimizaciones incluidas:**
- ✅ Minificación de JS/CSS
- ✅ Tree-shaking automático
- ✅ Lazy loading de componentes
- ✅ Optimización de imágenes
- ✅ CSS purging con Tailwind

---

## 🌍 Dominio Personalizado

### Para Vercel:

1. Ve a Project Settings > Domains
2. Agrega tu dominio
3. Configura los DNS:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Para Netlify:

1. Ve a Domain Settings
2. Agrega custom domain
3. Configura DNS:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: tu-sitio.netlify.app
```

---

## 📊 Analytics (Opcional)

### Google Analytics

1. Crear cuenta en [analytics.google.com](https://analytics.google.com)

2. Agregar al `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics

```bash
npm i @vercel/analytics

# En App.tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      {/* Tu contenido */}
      <Analytics />
    </>
  );
}
```

---

## 🐛 Troubleshooting

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de build en producción
```bash
# Verifica localmente
npm run build
npm run preview
```

### Estilos no se cargan
- Verifica que `index.css` tenga las directivas de Tailwind
- Asegúrate que `postcss.config.js` existe
- Limpia cache: `rm -rf node_modules/.vite`

### Rutas 404
- Agrega reglas de rewrite en tu hosting
- Para Vercel, crea `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 📈 Post-Deployment

### Verificar que todo funciona:

- [ ] Navegación smooth scroll
- [ ] Animaciones funcionando
- [ ] Formulario de contacto
- [ ] Links sociales correctos
- [ ] Responsive en mobile
- [ ] Performance (Lighthouse score > 90)
- [ ] SEO (Lighthouse score > 90)

### Herramientas de Testing:

1. **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
2. **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
3. **Lighthouse**: En Chrome DevTools

---

## 🔄 Continuous Deployment

**Con Git:**

```bash
# 1. Hacer cambios
git add .
git commit -m "feat: nueva sección"
git push origin main

# 2. Deploy automático se activa en:
#    - Vercel
#    - Netlify
#    - Cloudflare Pages
```

---

## 📝 Resumen Rápido

```bash
# Build local
npm run build

# Preview
npm run preview

# Deploy Vercel (más fácil)
vercel

# Deploy Netlify
netlify deploy --prod

# Deploy GitHub Pages
npm run deploy
```

---

**¡Tu portafolio está listo para el mundo! 🌍✨**

# 📐 Estructura SOLID del Proyecto

Este documento explica cómo se aplican los principios SOLID en este portafolio.

## 🎯 Principios SOLID

### 1. Single Responsibility Principle (SRP)
**"Una clase debe tener una sola razón para cambiar"**

#### ✅ Implementación:

**Cada componente tiene una única responsabilidad:**

```
Hero.tsx              → Solo maneja la sección hero
BentoGrid.tsx         → Solo maneja el grid de tecnologías
ProjectsSection.tsx   → Solo maneja la sección de proyectos
TechCard.tsx          → Solo renderiza una tarjeta de tecnología
ProjectCard.tsx       → Solo renderiza una tarjeta de proyecto
AboutSection.tsx      → Solo maneja la sección "Sobre Mí"
ContactSection.tsx    → Solo maneja la sección de contacto
Footer.tsx            → Solo maneja el footer
Navigation.tsx        → Solo maneja la navegación
```

**Separación de responsabilidades en archivos:**

```
/data/portfolio.ts    → Solo almacena datos
/types/index.ts       → Solo define tipos
/utils/smoothScroll.ts → Solo funciones de scroll
/constants/config.ts  → Solo configuración
/hooks/useCursorGlow.ts → Solo lógica del cursor
```

**Ejemplo de violación (❌):**
```typescript
// MAL: Un componente que hace todo
function Portfolio() {
  // Lógica de navegación
  // Lógica de proyectos
  // Lógica de formulario de contacto
  // Renderizado de todo
}
```

**Ejemplo correcto (✅):**
```typescript
// BIEN: Componentes separados
function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <BentoGrid />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
```

---

### 2. Open/Closed Principle (OCP)
**"Abierto para extensión, cerrado para modificación"**

#### ✅ Implementación:

**El componente App.tsx permite agregar nuevas secciones sin modificar las existentes:**

```typescript
// EXTENSIBLE: Agregar nueva sección sin modificar código existente
function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <BentoGrid />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      {/* PUEDES AGREGAR: <TestimonialsSection /> sin tocar nada más */}
      <Footer />
    </div>
  );
}
```

**BentoCard es extensible mediante props:**

```typescript
// No necesitas modificar BentoCard para cambiar su comportamiento
<BentoCard 
  size="large"        // Extensión: tamaño
  hoverable={false}   // Extensión: comportamiento
  className="custom"  // Extensión: estilos
>
  {/* Cualquier contenido */}
</BentoCard>
```

**Configuración centralizada permite extensión:**

```typescript
// constants/config.ts
export const SITE_CONFIG = {
  // Agregar nuevas configuraciones sin cambiar componentes
  name: 'Carlos.dev',
  theme: 'dark',
  // NUEVA: analytics: 'GA-XXX',
};
```

---

### 3. Liskov Substitution Principle (LSP)
**"Los objetos de una subclase deben poder reemplazar objetos de la clase base"**

#### ✅ Implementación:

**Todas las tarjetas son intercambiables:**

```typescript
// Todas estas tarjetas pueden usarse de forma consistente
<BentoCard size="medium">...</BentoCard>
<TechCard tech={techData} />
<ProjectCard project={projectData} onHover={handleHover} />

// Todas aceptan children, className y siguen el mismo patrón visual
```

**Props consistentes en componentes similares:**

```typescript
// Patrón consistente de props
interface CardProps {
  className?: string;
  children: ReactNode;
  hoverable?: boolean;
}

// Cualquier card puede sustituir a otra sin romper la UI
```

---

### 4. Interface Segregation Principle (ISP)
**"Los clientes no deben depender de interfaces que no usan"**

#### ✅ Implementación:

**Interfaces específicas en /types/index.ts:**

```typescript
// ✅ BIEN: Interfaces específicas y focalizadas

export interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  // ... solo lo que Project necesita
}

export interface BentoCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  hoverable?: boolean;
}

// ❌ MAL: Interface gigante que todos deben implementar
interface EverythingProps {
  // 50 propiedades que pocos componentes usan
}
```

**Props opcionales para mayor flexibilidad:**

```typescript
// Los componentes solo reciben lo que necesitan
<BentoCard title="Título" />  // Solo título
<BentoCard size="large" />    // Solo tamaño
<BentoCard hoverable={false} /> // Solo comportamiento
```

---

### 5. Dependency Inversion Principle (DIP)
**"Depende de abstracciones, no de concreciones"**

#### ✅ Implementación:

**Componentes dependen de interfaces (abstracciones), no de implementaciones:**

```typescript
// ✅ BIEN: Componente depende de la interfaz
interface ProjectCardProps {
  project: Project;  // Abstracción (interface)
  onHover: (color: string | null) => void;
}

export const ProjectCard = ({ project, onHover }: ProjectCardProps) => {
  // No le importa de dónde viene project
  // Solo que cumpla con la interface Project
};
```

**Datos inyectados, no hardcodeados:**

```typescript
// ✅ BIEN: Datos vienen de fuera
import { projects } from '../data/portfolio';

function ProjectsSection() {
  return (
    <>
      {projects.map(project => (
        <ProjectCard project={project} />
      ))}
    </>
  );
}

// ❌ MAL: Datos hardcodeados en el componente
function ProjectsSection() {
  const projects = [
    { title: "Proyecto 1" },
    // ...
  ];
}
```

**Hooks personalizados abstraen lógica:**

```typescript
// ✅ BIEN: El componente depende de la abstracción (hook)
function App() {
  useCursorGlow(); // No le importa CÓMO funciona
  // Solo que existe y hace su trabajo
}

// La implementación está oculta en el hook
export const useCursorGlow = () => {
  // Detalles de implementación
};
```

---

## 📊 Beneficios de esta Arquitectura

### 1. **Mantenibilidad** 🔧
- Fácil encontrar y modificar código
- Cada archivo tiene un propósito claro
- Los cambios están aislados

### 2. **Escalabilidad** 📈
- Agregar nuevas secciones sin tocar las existentes
- Extender componentes sin modificarlos
- Reutilizar componentes en diferentes contextos

### 3. **Testabilidad** ✅
- Componentes pequeños y focalizados
- Fácil crear tests unitarios
- Dependencias inyectadas facilitan mocking

### 4. **Reusabilidad** ♻️
- Componentes genéricos (BentoCard, GradientText)
- Hooks compartidos (useCursorGlow)
- Utilidades reutilizables (smoothScroll)

### 5. **Legibilidad** 📖
- Código autodocumentado
- Nombres descriptivos
- Estructura clara y lógica

---

## 🛠️ Ejemplos Prácticos

### Agregar una Nueva Sección

```typescript
// 1. Crear componente con SRP
// src/components/TestimonialsSection.tsx
export const TestimonialsSection = () => {
  return (
    <section>
      {/* Tu código */}
    </section>
  );
};

// 2. Agregar al App (OCP)
// src/App.tsx
import { TestimonialsSection } from './components/TestimonialsSection';

function App() {
  return (
    <>
      <ProjectsSection />
      <TestimonialsSection /> {/* Nueva sección */}
      <ContactSection />
    </>
  );
}

// 3. Agregar tipos si es necesario (ISP)
// src/types/index.ts
export interface Testimonial {
  author: string;
  content: string;
  avatar: string;
}

// 4. Agregar datos (DIP)
// src/data/portfolio.ts
export const testimonials: Testimonial[] = [
  // ...
];
```

### Extender un Componente

```typescript
// No modificas BentoCard, solo lo extiendes
<BentoCard
  size="large"
  className="bg-gradient-to-br from-neon-cyan/10"
  hoverable={true}
  // Nuevas props pueden agregarse sin romper nada
>
  <MiNuevoContenido />
</BentoCard>
```

---

## 📚 Recursos Adicionales

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Clean Code by Robert Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [React Design Patterns](https://www.patterns.dev/posts/react-patterns)

---

**Este proyecto es un ejemplo de cómo aplicar SOLID en React/TypeScript de manera práctica y efectiva.** 🚀

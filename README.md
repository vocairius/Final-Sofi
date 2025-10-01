# Sofi 15 - Landing Page de Fotos

Una landing page moderna y minimalista para entregar fotos de una celebración de 15 años.

## Características

- 🎨 Diseño moderno y minimalista
- 📱 Totalmente responsive
- 🖼️ Carrusel de fotos con Swiper.js
- 📦 Descarga de fotos en formato ZIP
- ⚡ Optimizado para Vercel
- 🎯 Tipografía sobria y profesional

## Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── components/
│   ├── HeroSection.tsx     # Sección hero
│   ├── PhotoCarousel.tsx   # Carrusel de fotos
│   └── DownloadSection.tsx # Sección de descarga
├── public/
│   ├── chiquitos/          # Fotos de los chicos
│   └── principal/          # Fotos de la cámara principal
└── ...
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build para Producción

```bash
npm run build
```

## Deploy en Vercel

### Opción 1: Deploy desde GitHub (Recomendado)

1. **Sube el código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sofi15 landing page"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/sofi15-photos.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Conecta tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

### Opción 2: Deploy directo con Vercel CLI

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Sigue las instrucciones** en la terminal

## Agregar Fotos

1. Coloca las fotos de los chicos en `public/chiquitos/`
2. Coloca las fotos principales en `public/principal/`
3. Las fotos se mostrarán automáticamente en el carrusel
4. Las descargas ZIP se generarán dinámicamente

## Tecnologías

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Swiper.js
- JSZip
- File-saver

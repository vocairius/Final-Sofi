'use client'

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/Rollo3Cumple-42.jpg)' }}
    >
      {/* Overlay para mejorar la legibilidad si es necesario */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Contenido mínimo - solo el indicador de scroll */}
      <div className="relative z-10 min-h-screen flex items-end justify-center pb-16">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-white/80 text-sm font-light tracking-wider uppercase">Explorar</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
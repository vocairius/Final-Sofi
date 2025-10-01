'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Título Principal - Alineado a la izquierda */}
          <div className="text-left">
            <h1 className="text-2xl md:text-3xl font-light text-white tracking-wider">
              SOFI
            </h1>
            <p className="text-base text-accent font-semibold tracking-wide">
              15 AÑOS
            </p>
          </div>
          
          {/* Navegación */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#galeria" className="text-white/90 hover:text-accent transition-colors duration-300 text-sm font-light tracking-wider uppercase">
              Galería
            </a>
            <a href="#descarga" className="text-white/90 hover:text-accent transition-colors duration-300 text-sm font-light tracking-wider uppercase">
              Descarga
            </a>
            <a href="#contacto" className="text-white/90 hover:text-accent transition-colors duration-300 text-sm font-light tracking-wider uppercase">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

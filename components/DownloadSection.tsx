'use client'

import { useState } from 'react'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

interface DownloadSectionProps {
  selectedCollection: string | null
  onSelectCollection: (collection: string | null) => void
}

const collections = [
  {
    id: 'chiquitos',
    title: 'Fotos de los Chicos',
    description: 'Todas las fotos grupales, momentos espontáneos y las mejores tomas de los invitados más jóvenes.',
    icon: '👶',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'principal',
    title: 'Cámara Principal',
    description: 'Fotos profesionales de alta calidad, retratos formales y los momentos más importantes de la celebración.',
    icon: '📸',
    color: 'from-yellow-500 to-orange-600'
  }
]

export default function DownloadSection({ selectedCollection, onSelectCollection }: DownloadSectionProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async (collectionId: string) => {
    setIsDownloading(true)
    try {
      const zip = new JSZip()
      
      // Definir las fotos para cada colección
      const photos = collectionId === 'chiquitos' 
        ? [
            'Rollo1FotosSofi-01.jpg', 'Rollo1FotosSofi-02.jpg', 'Rollo1FotosSofi-03.jpg',
            'Rollo1FotosSofi-04.jpg', 'Rollo1FotosSofi-05.jpg', 'Rollo1FotosSofi-06.jpg',
            'Rollo1FotosSofi-07.jpg', 'Rollo1FotosSofi-08.jpg', 'Rollo1FotosSofi-09.jpg',
            'Rollo1FotosSofi-10.jpg', 'Rollo1FotosSofi-11.jpg', 'Rollo1FotosSofi-12.jpg',
            'Rollo1FotosSofi-13.jpg', 'Rollo1FotosSofi-14.jpg', 'Rollo1FotosSofi-15.jpg',
            'Rollo1FotosSofi-16.jpg', 'Rollo1FotosSofi-17.jpg', 'Rollo1FotosSofi-18.jpg',
            'Rollo1FotosSofi-19.jpg', 'Rollo1FotosSofi-20.jpg', 'Rollo1FotosSofi-21.jpg',
            'Rollo1FotosSofi-22.jpg', 'Rollo1FotosSofi-23.jpg', 'Rollo1FotosSofi-24.jpg',
            'Rollo1FotosSofi-25.jpg', 'Rollo1FotosSofi-26.jpg', 'Rollo1FotosSofi-27.jpg',
            'Rollo1FotosSofi-28.jpg', 'Rollo1FotosSofi-29.jpg', 'Rollo1FotosSofi-30.jpg',
            'Rollo1FotosSofi-31.jpg', 'Rollo1FotosSofi-32.jpg', 'Rollo1FotosSofi-33.jpg',
            'Rollo1FotosSofi-34.jpg', 'Rollo1FotosSofi-35.jpg', 'Rollo1FotosSofi-36.jpg',
            'Rollo1FotosSofi-37.jpg', 'Rollo1FotosSofi-38.jpg', 'Rollo1FotosSofi-39.jpg',
            'Rollo1FotosSofi-40.jpg', 'Rollo1FotosSofi-41.jpg', 'Rollo1FotosSofi-42.jpg',
            'Rollo1FotosSofi-43.jpg', 'Rollo1FotosSofi-44.jpg', 'Rollo1FotosSofi-45.jpg',
            'Rollo1FotosSofi-46.jpg', 'Rollo1FotosSofi-47.jpg', 'Rollo1FotosSofi-48.jpg',
            'Rollo1FotosSofi-49.jpg', 'Rollo1FotosSofi-50.jpg', 'Rollo1FotosSofi-51.jpg',
            'Rollo1FotosSofi-52.jpg', 'Rollo1FotosSofi-53.jpg'
          ]
        : [
            'Rollo2Cumple-01.jpg', 'Rollo2Cumple-02.jpg', 'Rollo2Cumple-03.jpg',
            'Rollo2Cumple-04.jpg', 'Rollo2Cumple-05.jpg', 'Rollo2Cumple-06.jpg',
            'Rollo2Cumple-07.jpg', 'Rollo2Cumple-08.jpg', 'Rollo2Cumple-09.jpg',
            'Rollo2Cumple-10.jpg', 'Rollo2Cumple-11.jpg', 'Rollo2Cumple-12.jpg',
            'Rollo2Cumple-13.jpg', 'Rollo2Cumple-14.jpg', 'Rollo2Cumple-15.jpg',
            'Rollo2Cumple-16.jpg', 'Rollo2Cumple-17.jpg', 'Rollo2Cumple-18.jpg'
          ]
      
      // Descargar cada foto y agregarla al ZIP
      for (const photo of photos) {
        try {
          const response = await fetch(`/${collectionId}/${photo}`)
          if (response.ok) {
            const blob = await response.blob()
            zip.file(photo, blob)
          }
        } catch (error) {
          console.warn(`No se pudo cargar la foto: ${photo}`)
        }
      }
      
      // Generar y descargar el ZIP
      const content = await zip.generateAsync({ type: 'blob' })
      saveAs(content, `sofi15_${collectionId}.zip`)
      
    } catch (error) {
      console.error('Error downloading photos:', error)
      alert('Error al descargar las fotos. Por favor, intenta de nuevo.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section id="descarga" className="py-32 px-4 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-wide">
            Descarga tus Fotos
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Elige la colección que más te guste y descarga todas las fotos en formato ZIP
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </div>

        {/* Info Banner */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-12 rounded-r-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800">
                <strong>Todas las fotos están en alta resolución.</strong> Los archivos se descargarán automáticamente en formato ZIP. 
                Si tienes problemas, intenta usar un navegador actualizado.
              </p>
            </div>
          </div>
        </div>

        {/* Collection Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-accent/50 hover:scale-105 cursor-pointer ${
                selectedCollection === collection.id ? 'ring-2 ring-accent bg-white/10' : ''
              }`}
              onClick={() => onSelectCollection(collection.id)}
            >
              <div className="text-center">
                {/* Icon */}
                <div className={`w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br ${collection.color} flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  {collection.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-light text-white mb-6 tracking-wide">
                  {collection.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 mb-8 leading-relaxed text-lg font-light">
                  {collection.description}
                </p>
                
                {/* Download Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDownload(collection.id)
                  }}
                  disabled={isDownloading}
                  className="group/btn relative w-full py-4 px-8 bg-transparent border-2 border-accent text-accent font-light tracking-wider uppercase text-sm rounded-full hover:bg-accent hover:text-primary transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isDownloading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Descargando...
                      </>
                    ) : (
                      <>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Descargar ZIP
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            Recuerdos para Toda la Vida
          </h3>
          <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            Gracias por permitirnos ser parte de este momento tan especial. 
            Que estas fotos guarden para siempre la magia de este día único.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
          <p className="text-accent font-semibold text-xl mt-4">
            Celebración de 15 Años
          </p>
          <p className="text-text-muted mt-2">
            2025 - Un día inolvidable
          </p>
        </div>
      </div>
    </section>
  )
}

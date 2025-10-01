'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

interface Photo {
  src: string
  alt: string
  filename: string
}

export default function PhotoCarousel() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        // Las 7 fotos específicas para el carrusel
        const carouselPhotos = [
          { src: '/principal/Rollo3Cumple-01.jpg', alt: 'Foto de 15 Años 1', filename: 'Rollo3Cumple-01.jpg' },
          { src: '/principal/Rollo3Cumple-13.jpg', alt: 'Foto de 15 Años 2', filename: 'Rollo3Cumple-13.jpg' },
          { src: '/principal/Rollo3Cumple-15.jpg', alt: 'Foto de 15 Años 3', filename: 'Rollo3Cumple-15.jpg' },
          { src: '/principal/Rollo3Cumple-21.jpg', alt: 'Foto de 15 Años 4', filename: 'Rollo3Cumple-21.jpg' },
          { src: '/principal/Rollo3Cumple-50.jpg', alt: 'Foto de 15 Años 5', filename: 'Rollo3Cumple-50.jpg' },
          { src: '/principal/Rollo3Cumple-48.jpg', alt: 'Foto de 15 Años 6', filename: 'Rollo3Cumple-48.jpg' },
          { src: '/principal/Rollo3Cumple-45.jpg', alt: 'Foto de 15 Años 7', filename: 'Rollo3Cumple-45.jpg' },
        ]
        
        setPhotos(carouselPhotos)
      } catch (error) {
        console.error('Error loading photos:', error)
        setPhotos([])
      } finally {
        setLoading(false)
      }
    }

    loadPhotos()
  }, [])
  return (
    <section id="galeria" className="py-32 px-4 bg-gradient-to-b from-primary via-secondary to-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide">
            Galería de Imágenes
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Aquí unos momentos emocionantes que capturamos.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8"></div>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="swiper-container"
          >
            {loading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-800 animate-pulse">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {photo.alt}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>

          {/* Navigation buttons */}
          <div className="swiper-button-prev !text-white/80 hover:!text-accent !text-3xl !transition-colors !duration-300 !opacity-0 group-hover:!opacity-100"></div>
          <div className="swiper-button-next !text-white/80 hover:!text-accent !text-3xl !transition-colors !duration-300 !opacity-0 group-hover:!opacity-100"></div>
          
          {/* Pagination */}
          <div className="swiper-pagination !bottom-[-60px] [&_.swiper-pagination-bullet]:!bg-white/30 [&_.swiper-pagination-bullet-active]:!bg-accent [&_.swiper-pagination-bullet]:!w-3 [&_.swiper-pagination-bullet]:!h-3 [&_.swiper-pagination-bullet]:!mx-2"></div>
        </div>
      </div>
    </section>
  )
}

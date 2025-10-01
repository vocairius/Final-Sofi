'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PhotoCarousel from '@/components/PhotoCarousel'
import DownloadSection from '@/components/DownloadSection'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-primary">
      <Header />
      <HeroSection />
      <PhotoCarousel />
      <DownloadSection 
        selectedCollection={selectedCollection}
        onSelectCollection={setSelectedCollection}
      />
    </main>
  )
}

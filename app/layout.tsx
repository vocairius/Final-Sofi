import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sofi - 15 Años | Fotos',
  description: 'Un día para recordar - Descarga las mejores fotos de la celebración',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Montserrat, Bebas_Neue } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
})

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Voy A Cambiar FC | Fútbol Amateur en Puente Alto',
  description: 'Sitio oficial de Voy A Cambiar FC, equipo de fútbol 7 y futbolito amateur de Puente Alto. Noticias, partidos, resultados, calendario y plantilla.',
  keywords: [
    'fútbol amateur',
    'equipo fútbol 7',
    'futbolito',
    'Puente Alto',
    'fútbol amateur Puente Alto',
    'club de fútbol 7',
    'Voy A Cambiar FC',
  ],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    title: 'Voy A Cambiar FC | Fútbol Amateur en Puente Alto',
    description: 'Equipo de fútbol 7 y futbolito amateur de Puente Alto.',
    siteName: 'Voy A Cambiar FC',
    images: [{ url: '/images/voy_a_cambiar.png', alt: 'Escudo de Voy A Cambiar FC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voy A Cambiar FC | Fútbol Amateur en Puente Alto',
    description: 'Equipo de fútbol 7 y futbolito amateur de Puente Alto.',
    images: ['/images/voy_a_cambiar.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${bebasNeue.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  )
}

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
  title: 'Voy A Cambiar FC | Club de Fútbol Amateur',
  description: 'Bienvenido al sitio oficial del Voy A Cambiar FC. Noticias, calendario de partidos, resultados y plantilla del equipo.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
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

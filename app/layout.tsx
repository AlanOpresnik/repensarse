import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "RE-PENSARSE | Psicología Online para tu Bienestar Emocional",
  icons: {
    icon: '/favicon.ico'
  },
  description:
    "Terapia psicológica online profesional y empática. Acompañamiento individual, orientación vocacional, ansiedad, autoestima, y más. Empezá tu camino de autoconocimiento con RE-PENSARSE.",
  openGraph: {
    title: "RE-PENSARSE | Psicología Online para tu Bienestar Emocional",
    description:
      "Terapia psicológica online profesional y empática. Acompañamiento individual, orientación vocacional, ansiedad, autoestima, y más.",
    url: "https://www.repensarseonline.com",
    siteName: "RE-PENSARSE | Psicología Online",
    images: [
      {
        url: "https://www.repensarseonline.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "RE-PENSARSE - Psicología Online",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RE-PENSARSE | Psicología Online para tu Bienestar Emocional",
    description:
      "Descubrí un espacio seguro y profesional para tu bienestar emocional. Terapia online accesible, humana y efectiva.",
    images: [
      "https://www.repensarseonline.com/Logo.png",
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

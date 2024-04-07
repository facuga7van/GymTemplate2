import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CsNavbar from './components/Navbar'
import Footer from './components/Footer'
import Crossfit from './crossfit/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gimnasio',
  description: 'Lorem ipsum',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CsNavbar/>
        <div className="bg-fixed"/>
        {children}
        <Footer/> 
      </body>
    </html>
  )
}

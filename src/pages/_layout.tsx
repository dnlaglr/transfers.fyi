import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

interface LayoutProps {
  children: ReactNode
}

const InterFont = Inter({ subsets: ['latin'] });

export default function Layout({ children } : LayoutProps) {
  return (
    <main className={InterFont.className}>
      <Navbar />
      {children}
    </main>
  )
}
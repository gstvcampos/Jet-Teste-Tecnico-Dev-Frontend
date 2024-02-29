import { cn } from '@/lib/ultis'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test tecnico Jet',
  description: 'teste front end para Jet Test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-bt" className="!scroll-smooth" data-theme="light">
      <body className={cn(inter.className, 'font-sans antialiased')}>
        <main className="relative flex min-h-dvh flex-col text-[#111928]">
          {children}
        </main>
      </body>
    </html>
  )
}

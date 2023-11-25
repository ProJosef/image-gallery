import type { Metadata } from 'next'
import './globals.css'
import NavBar from './components/NavBar'

export const revalidate = 3600 // revalidate at most every hour

export const metadata: Metadata = {
  title: 'Image Gallery',
  description: 'Image Gallery App By Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <main className='max-w-6xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}

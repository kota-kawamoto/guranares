import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '不動産売買の専門企業',
  description: '不動産売買の専門企業です。豊富な経験と実績を持つプロフェッショナルが、お客様の不動産取引をサポートいたします。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-xs leading-5 text-gray-500">
                &copy; {new Date().getFullYear()} SEA. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 
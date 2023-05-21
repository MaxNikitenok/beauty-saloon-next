import './globals.css'
import { Cormorant_Garamond } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700']
})

export const metadata = {
  title: 'Delote-Beauty',
  description: 'Beauty saloon Delote-Beauty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={cormorant.className}>{children}</body>
    </html>
  )
}

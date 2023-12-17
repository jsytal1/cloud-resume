import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { fetchMetadata } from '@/app/lib/data';

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata(
): Metadata {
  const metadata = fetchMetadata();
  return metadata;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

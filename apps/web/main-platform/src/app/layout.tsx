import type { Metadata } from 'next'
import { BaseLayout } from '@/components/layout'

import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'UTravel',
  description: "We're here for you. Worlwide",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  )
}

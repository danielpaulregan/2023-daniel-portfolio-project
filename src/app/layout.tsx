import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Daniel Regan - Portfolio',
  description: 'A software portfolio for Daniel Regan, which is itself a 2023 software project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

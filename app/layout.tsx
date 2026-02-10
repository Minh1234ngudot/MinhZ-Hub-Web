import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MinhZ Hub",
  description: "MinhZ Hub Web",
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

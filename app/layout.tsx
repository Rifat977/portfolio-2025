import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Abdullah Al Mamun - Backend Developer",
  description:
    "Professional portfolio of Abdullah Al Mamun, a Backend Developer specializing in Python, Django, and Cloud technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}


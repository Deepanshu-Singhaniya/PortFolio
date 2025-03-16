import "./globals.css"
import { Outfit } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import CustomCursor from "@/components/CustomCursor"
import { Analytics } from "@/components/Analytics"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata = {
  title: "Deepanshu Singhaniya - Software Engineer",
  description:
    "Portfolio of Deepanshu Singhaniya, a Software Engineer specializing in full-stack web development and machine learning.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
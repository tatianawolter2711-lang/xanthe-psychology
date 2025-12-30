import type React from "react"
import type { Metadata } from "next"
import { Crimson_Pro, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata = {
  title: "Dr Xanthe Wolter-Ferguson | HCPC Counselling Psychologist | Witney & Oxford",
  description: "Warm, evidence-based therapy for anxiety, depression, trauma, and life transitions. In-person and online sessions in Witney and Oxford. HCPC registered.",
  keywords: ["Counselling Psychologist Witney", "Therapist Oxford", "Dr Xanthe Wolter-Ferguson", "Psychotherapy Oxfordshire", "HCPC registered psychologist"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${crimsonPro.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

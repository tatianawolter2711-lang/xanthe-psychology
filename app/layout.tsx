import type React from "react"
import type { Metadata } from "next"
import { Crimson_Pro, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { StructuredData } from "@/components/structured-data"
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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.xwolterferguson.co.uk'),
  title: "Dr Xanthe Wolter-Ferguson | HCPC Counselling Psychologist | Witney & Oxford",
  description: "Warm, evidence-based therapy for anxiety, depression, trauma, and life transitions. In-person and online sessions in Witney and Oxford. HCPC registered.",
  keywords: [
    "Counselling Psychologist Witney",
    "Therapist Oxford",
    "Dr Xanthe Wolter-Ferguson",
    "Psychotherapy Oxfordshire",
    "HCPC registered psychologist",
    "psychologist near me Oxfordshire",
    "private therapist Witney",
    "anxiety therapist Oxford",
    "trauma therapy Oxfordshire",
    "depression counselling Oxford",
    "online therapy UK",
    "CBT therapist Witney",
    "EMDR therapy Oxford",
  ],
  openGraph: {
    title: "Dr Xanthe Wolter-Ferguson | Counselling Psychologist",
    description: "Warm, evidence-based therapy for anxiety, depression, trauma, and life transitions. In-person sessions in Witney and Oxford, or online across the UK.",
    url: 'https://www.xwolterferguson.co.uk',
    siteName: 'Dr Xanthe Wolter-Ferguson',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Dr Xanthe Wolter-Ferguson | Counselling Psychologist",
    description: "Warm, evidence-based therapy for anxiety, depression, trauma, and life transitions. Witney, Oxford & Online.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${crimsonPro.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

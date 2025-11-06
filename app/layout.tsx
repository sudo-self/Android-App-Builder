import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://apk.jessejesse.com"),
  title: "Android APK Builder – Build Apps in Seconds",
  description:
    "Build Android apps in seconds with our APK Builder. Upload your website, configure settings, and generate custom APKs instantly with GitHub Actions.",
  generator: "Github actions",

  openGraph: {
    title: "Android APK Builder – Build Apps in Seconds",
    description:
      "Build Android apps in seconds with our APK Builder. Upload your website, configure settings, and generate custom APKs instantly with GitHub Actions.",
    url: "https://apk.jessejesse.com",
    siteName: "APK Builder",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "APK Builder",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Android APK Builder – Build Apps in Seconds",
    description:
      "Build Android apps in seconds with our APK Builder. Upload your website, configure settings, and generate custom APKs instantly with GitHub Actions.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}


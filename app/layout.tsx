import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://apk.jessejesse.com"),
  title: "APK Builder",
  description:
    "Instantly generate customized Android APKs using your website. Upload, configure, and build in seconds with automated GitHub Actions. Try it now.",
  generator: "Github actions",

  openGraph: {
    title: "APK Builder",
    description:
      "Instantly generate customized Android APKs using your website. Upload, configure, and build in seconds with automated GitHub Actions. Try it now.",
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
    title: "APK Builder",
    description:
      "Instantly generate customized Android APKs using your website. Upload, configure, and build in seconds with automated GitHub Actions. Try it now.",
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


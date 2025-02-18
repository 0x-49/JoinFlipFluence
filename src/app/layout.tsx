import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://joinflipfluence.com'),
  title: "FlipFluence - Hidden Walmart Clearance Deals & Money-Making Opportunities",
  description: "Join FlipFluence to discover hidden Walmart clearance deals! Find $399 TVs for $99, tools for pennies, and exclusive money-making opportunities. Get access to our deal-finding tools and expert community.",
  keywords: ["Walmart clearance", "hidden deals", "retail arbitrage", "FlipFluence", "money making", "reselling", "clearance finds", "retail deals"],
  authors: [{ name: "FlipFluence" }],
  creator: "FlipFluence",
  publisher: "FlipFluence",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://joinflipfluence.com',
    title: 'FlipFluence - Hidden Walmart Clearance Deals & Money-Making Opportunities',
    description: 'Join FlipFluence to discover hidden Walmart clearance deals! Find $399 TVs for $99, tools for pennies, and exclusive money-making opportunities.',
    siteName: 'FlipFluence',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlipFluence - Hidden Walmart Clearance Deals',
    description: 'Join FlipFluence to discover hidden Walmart clearance deals! Find $399 TVs for $99, tools for pennies, and more!',
    creator: '@flipfluence',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: {
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180'
    }
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

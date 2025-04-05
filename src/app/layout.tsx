import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script'; // Keep Script import
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://joinflipfluence.com'
  },
  metadataBase: new URL('https://joinflipfluence.com'),
  title: "FlipFluence - Hidden Walmart Clearance Deals & Money-Making Opportunities",
  description: "Join FlipFluence to discover hidden Walmart clearance deals! Find $399 TVs for $99, tools for pennies, and exclusive money-making opportunities. Get access to our deal-finding tools and expert community. Start saving money today!",
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
    icon: [ // Provide multiple icons
      { url: 'https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/flipfluence.jpg', type: 'image/jpeg' },
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' } // Keep fallback
    ],
    apple: {
      // Update apple touch icon as well, assuming the jpg is acceptable
      url: 'https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/flipfluence.jpg',
      type: 'image/jpeg',
      // sizes: '180x180' // Size might not be accurate for the jpg
    }
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
};

// Define the structure for the JSON-LD data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "FlipFluence",
      "url": "https://joinflipfluence.com",
      // Use the S3 logo URL here as well for consistency
      "logo": "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/flipfluence.jpg",
      "description": "FlipFluence is the premier reselling community platform, helping members generate income through strategic retail and online arbitrage, specializing in hidden Walmart clearance deals.",
      "sameAs": [
        // Add social media links if available
        "https://www.instagram.com/flipfluence_hustles/",
        "https://www.tiktok.com/@flipfluence_"
      ]
    },
    {
      "@type": "WebSite",
      "name": "FlipFluence", // Add name to WebSite schema
      "url": "https://joinflipfluence.com",
      "description": "Join FlipFluence to discover hidden Walmart clearance deals! Find $399 TVs for $99, tools for pennies, and exclusive money-making opportunities.", // Add description
      "publisher": { // Link publisher to Organization
         "@type": "Organization",
         "name": "FlipFluence"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
           "@type": "EntryPoint",
           // Update target to use query parameter format
           "urlTemplate": "https://joinflipfluence.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

// Add explicit return type : JSX.Element
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element { // Add return type annotation
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inject combined structured data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

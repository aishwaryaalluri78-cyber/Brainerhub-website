import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BrainerHub Solutions - Software Development Company in India',
    template: '%s | BrainerHub Solutions'
  },
  description: 'Create tech-advanced, future-proof, and scalable digital solutions with a leading software development company in India. Delivering software solutions to build intelligent enterprises with speed and agility.',
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'UI/UX design',
    'blockchain development',
    'AI/ML development',
    'DevOps services',
    'India',
    'BrainerHub Solutions'
  ],
  authors: [{ name: 'BrainerHub Solutions' }],
  creator: 'BrainerHub Solutions',
  publisher: 'BrainerHub Solutions',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.brainerhub.com',
    siteName: 'BrainerHub Solutions',
    title: 'BrainerHub Solutions - Software Development Company in India',
    description: 'Create tech-advanced, future-proof, and scalable digital solutions with a leading software development company in India.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BrainerHub Solutions - Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrainerHub Solutions - Software Development Company in India',
    description: 'Create tech-advanced, future-proof, and scalable digital solutions with a leading software development company in India.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

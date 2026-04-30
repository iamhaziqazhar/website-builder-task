import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import PageTransition from '@/components/PageTransition';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://websitebuildertask.netlify.app'),
  title: {
    default: 'VertexStudio — Brand Strategy & Digital Design Agency',
    template: '%s | VertexStudio',
  },
  description:
    'VertexStudio is a premium brand strategy and digital design agency helping ambitious brands grow through sharp strategy, stunning design, and technology that scales.',
  keywords: [
    'digital agency',
    'brand strategy',
    'UI/UX design',
    'web development',
    'Brooklyn design studio',
    'creative agency New York',
    'premium branding',
    'conversion optimization',
  ],
  authors: [{ name: 'VertexStudio' }],
  creator: 'VertexStudio',
  publisher: 'VertexStudio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VertexStudio — Brand Strategy & Digital Design Agency',
    description: 'Helping ambitious brands grow through sharp strategy, stunning design, and technology that scales.',
    url: 'https://websitebuildertask.netlify.app',
    siteName: 'VertexStudio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VertexStudio — Brand Strategy & Digital Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VertexStudio — Brand Strategy & Digital Design Agency',
    description: 'Helping ambitious brands grow through sharp strategy, stunning design, and technology that scales.',
    creator: '@vertexstudio',
    images: ['/og-image.png'],
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
  other: {
    'geo.region': 'US-NY',
    'geo.placename': 'Brooklyn',
    'geo.position': '40.7142;-73.9614',
    ICBM: '40.7142, -73.9614',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextTopLoader
          color="var(--accent)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px var(--accent),0 0 5px var(--accent)"
        />
        <ThemeProvider>
          <Navbar />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

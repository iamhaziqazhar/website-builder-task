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
  metadataBase: new URL('https://vertexstudio.io'),
  title: {
    default: 'VertexStudio — Brand Strategy & Digital Design Agency',
    template: '%s | VertexStudio',
  },
  description:
    'VertexStudio is a premium brand strategy and digital design agency helping ambitious brands grow through sharp strategy, stunning design, and technology that scales.',
  keywords: ['digital agency', 'brand strategy', 'UI/UX design', 'web development'],
  openGraph: { type: 'website', locale: 'en_US', siteName: 'VertexStudio' },
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

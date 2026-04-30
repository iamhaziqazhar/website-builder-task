import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'VertexStudio — Brand Strategy & Digital Design Agency',
  description: 'VertexStudio is a premium brand strategy and digital design agency helping ambitious brands grow through sharp strategy, stunning design, and technology that scales.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VertexStudio — Brand Strategy & Digital Design Agency',
    description: 'Helping ambitious brands grow through sharp strategy, stunning design, and technology that scales.',
    url: 'https://websitebuildertask.netlify.app',
  },
};

export default function HomePage() {
  return <HomeContent />;
}

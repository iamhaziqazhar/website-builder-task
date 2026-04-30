import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about VertexStudio, our journey, our values, and the talented team behind our award-winning digital solutions.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About VertexStudio — Our Story & Team',
    description: 'Discover the simple belief that started it all and meet the team building the future of digital design.',
    url: 'https://websitebuildertask.netlify.app/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

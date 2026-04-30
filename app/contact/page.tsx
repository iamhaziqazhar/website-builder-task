import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with VertexStudio. Whether you have a question about our services or want to start a new project, we are here to help.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact VertexStudio — Let\'s Start a Conversation',
    description: 'Reach out to us via email, phone, or visit our Brooklyn studio. We look forward to hearing from you.',
    url: 'https://websitebuildertask.netlify.app/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

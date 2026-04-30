'use client';

import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Plus } from 'lucide-react';

const contactInfo = [
  { id:'info-email',   icon: Mail, title:'Email Us', val:'hello@vertexstudio.io',
    href:'mailto:hello@vertexstudio.io', note:'Lorem ipsum dolor sit.' },
  { id:'info-phone',   icon: Phone, title:'Call Us',  val:'+1 (415) 882-7743',
    href:'tel:+14158827743', note:'Sed do eiusmod tempor.' },
  { id:'info-address', icon: MapPin, title:'Our Studio', val:'240 Kent Ave, Brooklyn, NY',
    href:'https://maps.google.com/?q=240+Kent+Ave+Brooklyn+NY', note:'Ut enim ad minim veniam.' },
];

const faqs = [
  { id:'faq-1', q:'Lorem ipsum dolor sit amet?',
    a:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.' },
  { id:'faq-2', q:'Consectetur adipiscing elit?',
    a:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit." },
  { id:'faq-3', q:'Sed do eiusmod tempor incididunt?',
    a:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet." },
];

export default function ContactContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="contact-hero" className="pt-40 px-6 pb-20 bg-[var(--hero-grad)] relative overflow-hidden border-b border-border">
        <div className="app-container">
          <h1 className="t-hero anim-fade-up d1 text-fg max-w-[640px] mb-6">
            Start with a{' '}<span className="italic pr-4 text-accent">conversation.</span>
          </h1>
          <p className="t-base c-muted anim-fade-up d2 max-w-[480px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* ── Form + Info ───────────────────────────────────────── */}
      <section id="contact-main" className="section bg-page">
        <div className="app-container grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Form */}
          <div>
            <h2 className="t-lg text-fg mb-4">Send us a message</h2>
            <p className="t-base c-muted mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-12">
            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(info => (
                <a key={info.id} id={info.id} href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card p-7 flex gap-6 items-center no-underline">
                  <div className="w-10 h-10 rounded-sm bg-bg-alt border border-border flex items-center justify-center text-accent flex-shrink-0">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="t-xs c-muted mb-1">{info.title}</div>
                    <div className="font-semibold text-base text-fg mb-1">{info.val}</div>
                    <div className="t-sm c-muted">{info.note}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* FAQ */}
            <div id="faq-section">
              <h3 className="t-md text-fg mb-8">Common Questions</h3>
              <div className="flex flex-col gap-4">
                {faqs.map(f => (
                  <details key={f.id} id={f.id} className="group bg-surface border border-border rounded-[var(--r-md)] p-6 cursor-pointer">
                    <summary className="text-base font-semibold text-fg list-none flex justify-between items-center gap-4 cursor-pointer">
                      {f.q}
                      <span className="text-accent transition-transform duration-300 group-open:rotate-45"><Plus size={20} /></span>
                    </summary>
                    <p className="t-sm c-muted mt-4 leading-[1.7]">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

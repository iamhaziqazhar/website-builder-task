'use client';

import Link from 'next/link';
import { Target, Eye, ShieldCheck, Heart, Zap, ExternalLink } from 'lucide-react';

const team = [
  { id:'elena', name:'Elena Marchetti', role:'Co-Founder & Creative Director',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    specialty:'Brand Identity' },
  { id:'james', name:'James Okafor', role:'Co-Founder & Head of Engineering',
    avatar: 'https://i.pravatar.cc/150?u=james',
    bio:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    specialty:'Architecture' },
  { id:'nina', name:'Nina Vasquez', role:'Head of Strategy & Growth',
    avatar: 'https://i.pravatar.cc/150?u=nina',
    bio:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.",
    specialty:'Growth Strategy' },
];

const stats = [
  { id:'stat-1', val:'2017', label:'Year Founded' },
  { id:'stat-2', val:'150+', label:'Clients Served' },
  { id:'stat-3', val:'250+', label:'Projects Shipped' },
  { id:'stat-4', val:'18',   label:'Countries Reached' },
];

const values = [
  { icon: Heart, title:'Craft Over Speed', desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { icon: ShieldCheck, title:'Radical Honesty',  desc:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: Zap, title:'Outcome-Driven',   desc:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
];

export default function AboutContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="about-hero" className="pt-40 px-6 pb-24 bg-hero-grad relative overflow-hidden border-b border-border">
        <div className="app-container">
          <h1 className="t-hero anim-fade-up d1 text-fg max-w-[700px] mb-6">
            We started with a{' '}
            <span className="italic pr-4 text-accent">simple belief.</span>
          </h1>
          <p className="t-base text-fg-muted anim-fade-up d2 max-w-[540px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section id="our-story" className="section bg-bg">
        <div className="app-container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="t-lg text-fg mb-8">Our Journey</h2>
            <p className="t-base text-fg-muted mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="t-base text-fg-muted mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="t-base text-fg-muted">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          {/* Quote Panel */}
          <div className="relative">
            <div className="bg-surface rounded-xl py-14 px-12 text-fg border border-border shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden relative group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
               <div className="absolute top-0 right-0 p-8 text-accent opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} strokeWidth={1} />
              </div>
              <p className="text-xl leading-[1.6] mb-10 font-medium relative z-10">
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
                  <img src="https://i.pravatar.cc/100?u=elena" alt="Elena" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-[0.9375rem]">Elena Marchetti</div>
                  <div className="text-[0.8125rem] text-fg-muted">Co-Founder & Creative Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────── */}
      <section id="mission-vision" className="section bg-alt border-t border-border">
        <div className="app-container">
          <div className="text-center mb-16">
            <h2 className="t-xl text-fg max-w-[500px] mx-auto">Purpose & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div id="mission-card" className="card group">
              <div className="text-accent bg-accent-soft w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"><Target size={32} /></div>
              <div className="t-xs text-fg-muted mb-4">Our Mission</div>
              <h3 className="t-md text-fg mb-4">Lorem ipsum dolor sit amet.</h3>
              <p className="t-sm text-fg-muted leading-[1.7]">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            {/* Vision */}
            <div id="vision-card" className="card group">
              <div className="text-accent bg-accent-soft w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"><Eye size={32} /></div>
              <div className="t-xs text-fg-muted mb-4">Our Vision</div>
              <h3 className="t-md text-fg mb-4">Consectetur adipiscing elit.</h3>
              <p className="t-sm text-fg-muted leading-[1.7]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
            </div>
            {/* Values */}
            <div className="flex flex-col gap-6">
              {values.map(v => (
                <div key={v.title} className="card p-6 flex gap-5 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white flex-shrink-0 group-hover:rotate-12 transition-transform">
                    <v.icon size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-semibold text-base text-fg mb-2">{v.title}</div>
                    <p className="t-sm text-fg-muted">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <section id="team" className="section bg-bg border-t border-border">
        <div className="app-container">
          <div className="text-center mb-16">
            <h2 className="t-xl text-fg max-w-[500px] mx-auto mb-4">Our Team</h2>
            <p className="t-base text-fg-muted max-w-[400px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(m => (
              <article key={m.id} id={`team-${m.id}`} className="card group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-border group-hover:border-accent transition-colors duration-500">
                    <img src={m.avatar} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-surface border border-border p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={14} className="text-accent" />
                  </div>
                </div>
                <h3 className="t-md text-fg mb-1">{m.name}</h3>
                <p className="text-[0.8125rem] font-medium text-fg-muted mb-6">{m.role}</p>
                <p className="t-sm text-fg-muted leading-[1.7] mb-8">{m.bio}</p>
                <div className="pt-6 border-t border-border flex justify-between items-center">
                  <span className="t-xs text-fg-muted">Expertise: <span className="text-fg">{m.specialty}</span></span>
                  <div className="w-8 h-8 rounded-full bg-bg-alt flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} className="text-fg" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section id="stats" className="section bg-dark-bg border-t border-dark-border">
        <div className="app-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map(s => (
              <div key={s.id} id={s.id} className="group">
                <div className="stat-num mb-3 group-hover:scale-110 transition-transform duration-500 inline-block">{s.val}</div>
                <div className="text-[0.875rem] text-dark-muted font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="about-cta" className="section bg-bg text-center">
        <div className="app-container max-w-[700px]">
          <h2 className="t-xl text-fg mb-6">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="t-base text-fg-muted mb-12">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg" id="about-cta-btn">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

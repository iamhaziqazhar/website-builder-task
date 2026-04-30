'use client';

import Link from 'next/link';
import { 
  TrendingUp, 
  CheckCircle, 
  DraftingCompass, 
  Layout, 
  Code, 
  BarChart, 
  Users, 
  Clock, 
  Infinity,
  Star,
  ArrowUpRight
} from 'lucide-react';

const services = [
  { num: '01', title: 'Brand Strategy', tag: 'Strategy', icon: DraftingCompass,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
  { num: '02', title: 'UI/UX Design', tag: 'Design', icon: Layout,
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
  { num: '03', title: 'Web Development', tag: 'Engineering', icon: Code,
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { num: '04', title: 'Growth Marketing', tag: 'Growth', icon: BarChart,
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
];

const testimonials = [
  { 
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    name: 'Alex Johnson', 
    role: 'CEO, TechFlow',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  { 
    id: 2,
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    name: 'Sarah Miller', 
    role: 'Product Lead, Creatively',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  { 
    id: 3,
    quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    name: 'David Wilson', 
    role: 'Marketing Director, BrightScale',
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
];

const whyUs = [
  { stat: '97%', label: 'Client Retention', icon: Users, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { stat: '3×',  label: 'Avg. Revenue Growth', icon: TrendingUp, desc: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
  { stat: '48h', label: 'Response Guarantee', icon: Clock, desc: 'Excepteur sint occaecat cupidatat non proident.' },
  { stat: '∞',   label: 'Revisions Included', icon: Infinity, desc: 'Duis aute irure dolor in reprehenderit in voluptate.' },
];

export default function HomeContent() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section id="hero" className="min-h-[100svh] flex items-center bg-hero-grad relative overflow-hidden pt-[68px] border-b border-border">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[length:40px_40px] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

        <div className="app-container relative z-10 py-20 px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Text */}
            <div className="flex flex-col items-start">
              <h1 className="t-hero anim-fade-up d1 text-fg mb-6 max-w-[640px]">
                We build brands<br />that{' '}
                <span className="grad-text italic pr-4">move markets.</span>
              </h1>
              <p className="t-base text-fg-muted anim-fade-up d2 max-w-[480px] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="anim-fade-up d3 flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary btn-lg" id="hero-cta">Start a Project</Link>
                <Link href="/about" className="btn btn-outline btn-lg" id="hero-about">Our Process</Link>
              </div>
              {/* Trust strip */}
              <div className="anim-fade-up d5 flex flex-wrap items-center gap-6 mt-16">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full bg-surface border border-border overflow-hidden ${i > 1 ? '-ml-2.5' : ''}`}>
                        <img src={`https://i.pravatar.cc/50?u=${i}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-fg text-[0.85rem] leading-none">★★★★★</div>
                    <div className="t-xs text-fg-muted mt-1">150+ happy clients</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-border" />
                {[['$40M+', 'Revenue'], ['250+', 'Shipped']].map(([v, l]) => (
                  <div key={v}>
                    <div className="font-bold text-[1.125rem] text-fg tracking-[-0.02em]">{v}</div>
                    <div className="t-xs text-fg-muted mt-px">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Modern Interactive Visuals */}
            <div className="hidden lg:flex relative justify-center lg:-translate-y-12">
              <div className="relative w-full max-w-[440px]">
                {/* Main Growth Card */}
                <div className="anim-float bg-surface rounded-2xl p-10 border border-border w-full shadow-[0_30px_60px_rgba(0,0,0,0.04)] relative z-[2]">
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <div className="t-xs text-fg-muted flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block"></span>
                        Growth Metrics
                      </div>
                      <div className="text-[2.75rem] font-extrabold tracking-[-0.04em] text-fg leading-[1.1] mt-1">+127%</div>
                    </div>
                    <div className="p-2 rounded-lg bg-bg-alt border border-border text-accent">
                      <TrendingUp size={20} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    {[['Brand Perception', '↑ 84%'], ['Lead Quality', '↑ 61%'], ['Conversion Rate', '↑ 43%']].map(([k, v]) => (
                      <div key={k} className="flex justify-between pb-4 border-b border-bg-alt">
                        <span className="t-sm text-fg-muted font-medium">{k}</span>
                        <span className="font-bold text-[0.875rem] text-accent">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex-1 h-1 bg-bg-alt rounded-sm overflow-hidden">
                      <div className="w-3/4 h-full bg-accent rounded-sm"></div>
                    </div>
                    <span className="t-xs font-bold text-fg">75% Target</span>
                  </div>
                </div>

                {/* Floating "Active Now" Badge */}
                <div className="absolute -top-5 -right-5 bg-fg text-bg py-3 px-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-[3] flex items-center gap-2.5 animate-[float_5s_ease-in-out_infinite_alternate-reverse]">
                  <span className="w-2 h-2 bg-[#00FF94] rounded-full inline-block shadow-[0_0_10px_#00FF94]"></span>
                  <span className="text-[0.8125rem] font-bold">Active Now</span>
                </div>

                {/* Secondary "Recent Win" Notification */}
                <div className="absolute -bottom-10 -left-5 bg-surface border border-border py-4 px-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] z-[9] max-w-[240px] animate-[float_7s_ease-in-out_infinite]">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-md bg-accent-soft flex items-center justify-center text-accent">
                      <CheckCircle size={16} />
                    </div>
                    <div>
                      <div className="text-[0.75rem] font-bold text-fg">Success Story</div>
                      <div className="text-[0.75rem] text-fg-muted mt-0.5">Project complete with 200% ROI.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────── */}
      <section id="services" className="section bg-bg">
        <div className="app-container">
          <div className="text-center mb-16">
            <h2 className="t-xl text-fg mx-auto">
              End-to-end expertise,<br />one team.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <article key={s.num} id={`service-${s.num}`} className="card group p-8 min-h-[320px] flex flex-col">
                {/* Visual Feedback on Interaction */}
                <div className="absolute top-0 right-0 p-6 text-accent opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>

                <div className="flex justify-between items-start mb-6">
                  <div className="text-accent bg-accent-soft p-3 rounded-lg"><s.icon size={24} /></div>
                </div>
                <h3 className="t-md text-fg mb-3">{s.title}</h3>
                <p className="t-sm text-fg-muted leading-[1.6] mb-auto">{s.desc}</p>
                
                <Link href="/contact" className="text-[0.8125rem] font-bold text-fg flex items-center gap-2 group-hover:text-accent transition-colors duration-300 mt-6">
                  Enquire Now <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                {/* Clean hover line indicator */}
                <div className="absolute left-0 bottom-0 w-0 h-[3px] bg-accent transition-[width] duration-400 ease-in-out group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────────── */}
      <section id="why-us" className="section bg-[#0C0C0C] border-t border-white/10">
        <div className="app-container relative">
          <div className="text-center mb-16">
            <h2 className="t-xl text-white max-w-[600px] mx-auto">
              Built different.<br />Measured by impact.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(w => (
              <div key={w.stat} id={`why-${w.stat}`} className="card-dark text-center flex flex-col items-center p-8 min-h-[280px]">
                <div className="text-accent bg-[rgba(255,255,255,0.05)] p-4 rounded-xl mb-6"><w.icon size={32} /></div>
                <div className="stat-num mb-4">{w.stat}</div>
                <div className="font-semibold text-base text-white mb-3">{w.label}</div>
                <p className="text-[0.875rem] text-white/60 leading-[1.65]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section id="testimonials" className="section bg-alt border-t border-border">
        <div className="app-container">
          <div className="text-center mb-16">
            <h2 className="t-xl text-fg max-w-[500px] mx-auto">Client Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.id} id={`testimonial-${t.id}`} className="card m-0 flex flex-col gap-6 p-8 min-h-[340px]">
                {/* Top: Avatar + Name */}
                <div className="flex items-center gap-4 pb-6 border-b border-border">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-border">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-[0.9375rem] text-fg">{t.name}</div>
                    <div className="text-[0.8125rem] text-fg-muted">{t.role}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={16} fill="#F5A623" color="#F5A623" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-base leading-[1.6] text-fg italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section id="cta" className="section bg-[#0C0C0C] border-t border-white/10">
        <div className="app-container text-center relative max-w-[700px]">
          <h2 className="t-xl text-white mb-6">
            Let&apos;s talk about your next project.
          </h2>
          <p className="t-base text-white/60 mb-12 max-w-[500px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg" id="cta-primary">Start a Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}

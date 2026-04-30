import Link from 'next/link';

const cols = {
  company: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }],
  services: [{ label: 'Brand Strategy', href: '/#services' }, { label: 'UI/UX Design', href: '/#services' },
  { label: 'Web Development', href: '/#services' }, { label: 'Growth Marketing', href: '/#services' }],
  connect: [{ label: 'LinkedIn', href: '#' }, { label: 'Twitter/X', href: '#' }, { label: 'Dribbble', href: '#' }, { label: 'GitHub', href: '#' }],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="site-footer" className="bg-bg text-fg-muted border-t border-border">
      <div className="max-w-[1100px] mx-auto py-20 px-6 pb-14">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-12 mb-16">
          {/* Brand */}
          <div className="col-span-3 md:col-span-1">
            <Link href="/" className="no-underline inline-flex items-center gap-2 mb-6">
              <span className="text-base font-extrabold text-fg tracking-[-0.03em]">
                Vertex<span className="text-accent">Studio</span>
              </span>
            </Link>
            <p className="text-[0.875rem] leading-[1.7] max-w-[240px] mb-6">
              We craft bold digital experiences that help brands grow, connect, and lead.
            </p>
            <a href="mailto:hello@vertexstudio.io" className="text-[0.875rem] font-semibold text-fg no-underline hover:text-accent transition-colors duration-200">
              hello@vertexstudio.io
            </a>
          </div>
          {/* Cols */}
          {(Object.entries(cols) as [string, { label: string; href: string }[]][]).map(([title, links]) => (
            <div key={title}>
              <p className="text-[0.6875rem] font-bold tracking-[0.08em] uppercase text-fg mb-6">
                {title}
              </p>
              <ul className="list-none flex flex-col gap-3">
                {links.map(l => (
                  <li key={l.label} >
                    <Link href={l.href} className="text-[0.875rem] text-fg-muted no-underline hover:text-accent transition-colors duration-200">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px bg-border mb-10" />
        <div className="flex flex-row justify-between items-center gap-4">
          <p className="text-[0.7rem] sm:text-[0.8125rem] m-0">&copy; {year} VertexStudio, Inc.</p>
          <div className="flex gap-4 sm:gap-8">
            {['Privacy', 'Terms', 'Cookies'].map(t => (
              <a key={t} href="#" className="text-[0.7rem] sm:text-[0.8125rem] text-fg-muted no-underline opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon, Menu, X } from 'lucide-react';

const links = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setOpen(false), 0);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header id="site-header" className={`fixed top-0 left-0 right-0 z-[100] transition-[background-color,border-color,box-shadow] duration-300 ease-in-out ${scrolled ? 'bg-nav-bg backdrop-blur-[20px] border-b border-border shadow-[0_2px_20px_rgba(0,0,0,0.06)]' : 'bg-transparent border-b border-transparent'}`}>
      <nav className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" id="nav-logo" className="no-underline flex items-center gap-2">
          <span className="text-[1.0625rem] font-extrabold text-fg tracking-[-0.03em]">
            Vertex<span className="text-accent">Studio</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex list-none items-center gap-0.5">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  id={`nav-${l.label.toLowerCase()}`}
                  className={`block py-2 px-4 rounded-lg text-[0.9375rem] no-underline transition-all duration-200 ease-in-out ${active ? 'font-semibold text-accent' : 'font-medium text-fg hover:text-accent'}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="w-[38px] h-[38px] rounded-[10px] bg-bg-alt border-[1.5px] border-border flex items-center justify-center cursor-pointer text-fg transition-all duration-200 ease-in-out flex-shrink-0 hover:bg-accent-soft hover:border-accent hover:text-accent"
          >
            {theme === 'light' ? <Moon size={18} strokeWidth={2.5} /> : <Sun size={18} strokeWidth={2.5} />}
          </button>

          {/* CTA */}
          <Link href="/contact" className="btn btn-primary btn-sm hidden md:inline-flex" id="nav-cta">
            Start a Project
          </Link>

          {/* Hamburger */}
          <button
            id="nav-hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden w-[38px] h-[38px] rounded-[10px] bg-bg-alt border-[1.5px] border-border flex items-center justify-center cursor-pointer text-fg"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div id="nav-mobile-drawer" className={`overflow-hidden bg-nav-bg backdrop-blur-[20px] transition-[max-height] duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? 'max-h-[360px] border-t border-border' : 'max-h-0 border-none'}`}>
        <ul className="list-none py-4 px-6 flex flex-col gap-1">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} id={`nav-mob-${l.label.toLowerCase()}`} className={`block py-3.5 px-4 rounded-[10px] text-base no-underline ${pathname === l.href ? 'font-semibold text-accent' : 'font-medium text-fg hover:text-accent'}`}>{l.label}</Link>
            </li>
          ))}
          <li className="mt-2">
            <Link href="/contact" className="btn btn-primary w-full">
              Start a Project →
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

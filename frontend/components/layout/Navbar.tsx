'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Properties', href: '/properties' },
  { label: 'About',      href: '/about'      },
  { label: 'Blog',       href: '/blog'       },
  { label: 'Contact',    href: '/contact'    },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  /* transparent over hero only on home + not scrolled */
  const transparent = isHome && !scrolled && !open;

  return (
    <>
      <nav
        style={{ height: 'var(--spacing-navbar)' }}
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-400',
          scrolled || !isHome || open
            ? 'bg-white/95 backdrop-blur-md border-b border-[var(--color-neutral-200)]'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
      >
        <div className="container-site h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 rounded flex items-center justify-center bg-[var(--color-accent)]">
              <span className="font-display font-bold text-lg text-white">E</span>
            </div>
            <span className={[
              'font-display font-bold text-xl tracking-tight transition-colors duration-300',
              transparent ? 'text-white' : 'text-[var(--color-primary)]',
            ].join(' ')}>
              EstateHaven
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href || pathname.startsWith(href + '/');
              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    'relative text-sm font-medium tracking-wide no-underline pb-1 transition-colors duration-250',
                    transparent
                      ? active ? 'text-[var(--color-accent-light)]' : 'text-white/90'
                      : active ? 'text-[var(--color-accent)]'       : 'text-[var(--color-neutral-900)]',
                  ].join(' ')}
                >
                  {label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-[var(--color-accent)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+15551234567"
              className={[
                'hidden md:flex items-center gap-1.5 text-sm no-underline transition-colors duration-250',
                transparent ? 'text-white/80' : 'text-[var(--color-neutral-500)]',
              ].join(' ')}
            >
              <Phone size={13} />
              +1 (555) 123-4567
            </a>

            <Link href="/contact" className="btn btn-primary btn-sm hidden md:inline-flex">
              Get in Touch
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className={[
                'md:hidden p-1.5 rounded transition-colors',
                transparent ? 'text-white' : 'text-[var(--color-primary)]',
              ].join(' ')}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{ top: 'var(--spacing-navbar)' }}
        className={[
          'fixed inset-x-0 bottom-0 z-40 bg-white flex flex-col',
          'transition-transform duration-350 ease-[var(--ease-smooth)]',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="flex flex-col px-6 pt-4 overflow-y-auto">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={[
                'py-5 font-display text-2xl font-semibold no-underline border-b border-[var(--color-neutral-100)] transition-colors',
                pathname === href ? 'text-[var(--color-accent)]' : 'text-[var(--color-neutral-900)]',
              ].join(' ')}
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-8 pb-8">
            <Link href="/contact" className="btn btn-primary btn-lg w-full">Get in Touch</Link>
            <a href="tel:+15551234567" className="btn btn-ghost btn-lg w-full">
              <Phone size={16} /> +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

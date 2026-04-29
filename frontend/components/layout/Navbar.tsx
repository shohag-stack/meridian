"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Logo from "../ui/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || !isHome || open
            ? "bg-white/95 backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="container-site flex items-center justify-between md:gap-40 h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo color={transparent ? "white" : "black"} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-between w-full gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const active =
                pathname === href || pathname.startsWith(href + "/");

              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    "relative text-base font-medium transition-colors no-underline overflow-hidden h-[2em] my-2 group",
                    transparent
                      ? active
                        ? "text-white"
                        : "text-white/80"
                      : active
                        ? "text-accent"
                        : "text-neutral-900",
                  ].join(" ")}
                >
                  <div className="flex flex-col transition-transform font-display duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-3/6">
                    {/* Original */}
                    <div className="leading-[1.6] line-clamp-1">
                      {label}
                    </div>

                    {/* Duplicate */}
                    <div className="leading-[1.6] line-clamp-2">
                      {label}
                    </div>
                  </div>
                  {active && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <Link href="/contact" className="btn-gradient ml-4">
              Get in Touch
            </Link>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className={[
              "md:hidden p-2 rounded-md transition-colors",
              transparent ? "text-white" : "text-neutral-900",
            ].join(" ")}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={[
          "fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        style={{ paddingTop: "5rem" }}
      >
        <div className="flex flex-col px-6">
          {/* Links */}
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={[
                  "py-4 text-xl font-semibold border-b border-neutral-100 no-underline",
                  pathname === href ? "text-accent" : "text-neutral-900",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Get in Touch
            </Link>

            <a
              href="tel:+15551234567"
              className="btn btn-ghost w-full flex items-center justify-center gap-2"
            >
              <Phone size={16} /> +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

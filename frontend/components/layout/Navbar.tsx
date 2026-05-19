"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, PhoneCall } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "../ui/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
{ label: "Accommodations", href: "/accommodations" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const NAV_NUMBER = [{ label: "+6662 191-4945" }, { label: "+6662 161-4965" }];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: <FaFacebook /> },
  { label: "Twitter", href: "https://twitter.com", icon: <FaTwitter /> },
  { label: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
  { label: "LinkedIn", href: "https://linkedin.com", icon: <FaLinkedin /> },
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
        <div className="container-site">
          <div className={`flex items-center justify-between md:gap-40 py-2`}>
            <div className="flex justify-center items-center">
              <PhoneCall
                className={`${transparent ? "text-white" : "text-black"}`}
                size={16}
              />
              <div className="flex">
                {NAV_NUMBER.map((num, index) => (
                  <Link
                    href={`tel:${num.label}`}
                    className={`${transparent ? "text-white" : "text-black"} ${index !== NAV_NUMBER.length - 1 ? transparent ? "border-r border-neutral-50/40" : "border-r border-neutral-300" : "" } px-4 font-medium text-sm`}
                    key={num.label}
                  >
                    {num.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex justify-end gap-4">
              {SOCIAL_LINKS.map(({href, icon }) => {
                const active =
                  pathname === href || pathname.startsWith(href + "/");

                return (
                  <Link
                    key={href}
                    href={href}
                    className={[
                      "relative flex items-center justify-center overflow-hidden h-5 w-5 group",
                      transparent
                        ? active
                          ? "text-white"
                          : "text-white/80"
                        : active
                          ? "text-accent"
                          : "text-neutral-900",
                    ].join(" ")}
                  >
                    <div className="flex flex-col items-center">
                      {/* Original */}
                      <div className="h-5 flex items-center justify-center">
                        {icon}
                      </div>
                    </div>
                    {active && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={`flex items-center justify-between md:gap-40 h-16 md:h-15 border-t ${transparent ? "border-neutral-100/30" : "border-neutral-200"}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo color={transparent ? "white" : "black"} />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex justify-end gap-8">
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
                          ? "text-primary"
                          : "text-neutral-900",
                    ].join(" ")}
                  >
                    <div className="flex flex-col transition-transform font-medium duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-3/6">
                      {/* Original */}
                      <div className="leading-[1.6] line-clamp-1">{label}</div>

                      {/* Duplicate */}
                      <div className="leading-[1.6] line-clamp-2">{label}</div>
                    </div>
                    {active && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

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

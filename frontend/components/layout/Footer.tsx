import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, MessageCircle, Share2, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const FOOTER_LINKS = {
  Properties: [
    { label: 'For Sale',         href: '/properties?status=for-sale'  },
    { label: 'For Rent',         href: '/properties?status=for-rent'  },
    { label: 'Featured Listings',href: '/properties?featured=true'    },
    { label: 'New Listings',     href: '/properties?new=true'         },
  ],
  Company: [
    { label: 'About Us',  href: '/about'       },
    { label: 'Our Team',  href: '/about#team'  },
    { label: 'Blog',      href: '/blog'        },
    { label: 'Careers',   href: '/careers'     },
  ],
  Services: [
    { label: 'Buy a Home',          href: '/services/buy'        },
    { label: 'Sell a Home',         href: '/services/sell'       },
    { label: 'Property Management', href: '/services/management' },
    { label: 'Investment',          href: '/services/investment' },
  ],
};

const SOCIALS = [
  { Icon: MessageCircle, href: '#', label: 'Instagram' },
  { Icon: Globe,         href: '#', label: 'Facebook'  },
  { Icon: Share2,        href: '#', label: 'X / Twitter'},
  { Icon: ExternalLink,  href: '#', label: 'LinkedIn'  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">

      {/* Main grid */}
      <div className="container-site pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand — spans 2 cols on large */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image src={'/img/logo.svg'} width={182} height={30} alt='estate-heaven-logo' />
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-8 max-w-xs">
              Redefining the luxury real estate experience. We connect discerning buyers and sellers with exceptional properties.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/55 transition-all duration-250 hover:bg-accent hover:border-accent hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="eyebrow text-accent mb-5">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/55 no-underline transition-colors duration-200 hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { Icon: MapPin,  text: '1400 Fifth Ave, Suite 300\nNew York, NY 10010' },
            { Icon: Phone,   text: '+1 (555) 123-4567'       },
            { Icon: Mail,    text: 'hello@estatehaven.com'   },
          ].map(({ Icon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <Icon size={15} className="text-accent mt-0.5 shrink-0" />
              <span className="text-sm text-white/55 whitespace-pre-line leading-relaxed">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-wrap justify-between items-center gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} EstateHaven. All rights reserved. Template by{' '}
            <a href="https://rayso.studio" className="text-accent no-underline">rayso.studio</a>
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <Link key={item} href="#" className="text-xs text-white/35 no-underline hover:text-white/60 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

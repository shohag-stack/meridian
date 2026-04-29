import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden min-h-125 md:min-h-290">
        <Image className='object-cover' src={'/img/footer-bg.png'} fill alt='estate-heaven-footer' />
      <div className="absolute inset-0 bg-cover"/>
      <div className="flex flex-col justify-between min-h-125 md:min-h-290 relative z-10 text-center section">
        <div>
              <span className="eyebrow block mb-4">Ready to Begin?</span>
            <h2 className="heading-2 text-neutral-950 max-w-3xl mx-auto mb-6">
              Let's Find Your Perfect Property Together
            </h2>
            <p className="text-lg text-neutral-700 mx-auto max-w-lg font-semibold mb-10 leading-relaxed">
              Our expert team is ready to guide you through every step of your real estate journey.
            </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/properties" className="btn btn-primary btn-lg">
            Browse Properties <ArrowRight size={17} />
          </Link>
          <Link href="/contact" className="btn btn-white btn-lg">
            Speak to an Agent
          </Link>
        </div>
      </div>
    </section>
  );
}
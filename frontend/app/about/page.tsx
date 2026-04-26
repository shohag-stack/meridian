import type { Metadata } from "next";
import { AGENTS } from "@/data/data";
import PageHeader from "@/components/sections/PageHeader";
import Image from "next/image";
import { VALUES, MILESTONES } from "@/data/page/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EstateHaven — our story, our team, and our commitment to exceptional real estate service.",
};


export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHeader
        path="/img/listingbg1.png"
        eyebrow="Our Story"
        title="Redefining the Real Estate Experience"
        subtitle="Since 2009, EstateHaven has been connecting discerning buyers and sellers with exceptional properties — and delivering a level of service that turns transactions into lifelong relationships."
      />

      {/* Mission */}
      <section className="section">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="eyebrow block mb-3">Our Mission</span>
              <h2 className="heading-1 mb-6">
                More Than Transactions We Build Legacies
              </h2>
              <p className="text-xl text-neutral-900 font-semibold leading-relaxed mb-5">
                We believe that finding the right home is one of life's most
                meaningful experiences. Our mission is to make that process
                extraordinary — combining market expertise, personal attention,
                and access to the finest properties.
              </p>
              <p className="text-neutral-700 font-medium leading-relaxed">
                Every client receives our full commitment. We don't just find
                properties — we listen deeply, understand your vision, and work
                tirelessly until we've found the perfect match.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-ratio-3/4 relative h-[700px] overflow-hidden">
                <Image
                  src="/img/about-page.png"
                  alt="Our team"
                  className="block object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark">
        <div className="w-full">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-3">What Drives Us</span>
            <h2 className="heading-1 text-neutral-50">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ image, title, description }) => (
              <div
                key={title}
                className="relative h-150 overflow-hidden group"
              >
                  <Image src={image} alt="rayso-studio-real-estate-estate-heaven" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />

                  <div className="absolute inset-0 group-hover:bg-black/20 transition-all" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-0 z-10 flex flex-col justify-end text-white p-10">
                <h3 className="font-display heading-4 font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-md font-medium text-neutral-50 leading-relaxed">
                  {description}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-3">Our Journey</span>
            <h2 className="heading-1">Milestones That Matter</h2>
          </div>
          <div className="max-w-2xl mx-auto relative">
            <div className="flex flex-col">
              {MILESTONES.map(({ year, event, desc },i) => (
                <div key={year} className="relative bg-white p-8 flex flex-col items-start gap-6
               border border-neutral-100
               -mt-6 first:mt-0
               transition-all duration-500 ease-out
               hover:-translate-y-3 hover:shadow-xl
               hover:bg-accent group"
    style={{ zIndex: 10 + i }}>
                  <div className="shrink-0 text-right font-display heading-5 font-bold text-accent pt-0.5 transition-colors duration-500
                group-hover:text-neutral-950">
                    {year}
                  </div>
                  <div className="relative">
                    
                    <h3 className="font-display heading-5 font-semibold mb-1">
                      {event}
                    </h3>
                    <p className="text-base text-neutral-700 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-cream" id="team">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-3">The People Behind It All</span>
            <h2 className="heading-1">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AGENTS.map((agent) => (
              <div
                key={agent._id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ paddingBottom: "100%" }}
                >
                  <img
                    src={typeof agent.photo === "string" ? agent.photo : ""}
                    alt={agent.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="divider-accent block mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-1">
                    {agent.name}
                  </h3>
                  <p className="eyebrow mb-4">{agent.title}</p>
                  {agent.bio && (
                    <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                      {agent.bio}
                    </p>
                  )}
                  <div className="flex gap-6">
                    {agent.listings && (
                      <div>
                        <div className="font-display text-xl font-bold text-primary">
                          {agent.listings}
                        </div>
                        <div className="text-xs text-neutral-400 uppercase tracking-wider">
                          Active
                        </div>
                      </div>
                    )}
                    {agent.soldProperties && (
                      <div>
                        <div className="font-display text-xl font-bold text-primary">
                          {agent.soldProperties}
                        </div>
                        <div className="text-xs text-neutral-400 uppercase tracking-wider">
                          Sold
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

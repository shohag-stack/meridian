import type { Metadata } from "next";
import { AGENTS } from "@/data/data";
import PageHeader from "@/components/sections/PageHeader";
import Image from "next/image";
import { VALUES, MILESTONES } from "@/data/page/about";
import Mission from "@/components/sections/Mission";
import Values from "@/components/sections/Values";
import Timeline from "@/components/sections/Timeline";
import Team from "@/components/sections/Team";

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
      <Mission />

      {/* Values */}
      <Values />

      {/* Timeline */}
      <Timeline />

      {/* Team */}
      <Team />
    </>
  );
}

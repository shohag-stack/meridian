import FacilitiesCta from "@/components/sections/FacilitiesCta";
import FacilitiesGrid from "@/components/sections/FacilitiesGrid";
import Faq from "@/components/sections/Faq";
import VideoCta from "@/components/sections/VideoCta";
import PageHeader from "@/components/ui/PageHeader";
import {facilitiesHeader } from "@/data/data";

export default function Page() {
  return (
    <section>
      <PageHeader header={facilitiesHeader} />
      <FacilitiesGrid />
      <FacilitiesCta />
      <Faq />
      <VideoCta />
    </section>
  );
}

import { getGalleries } from "@/(core)/fetch/getGalleries";
import GalleryContainer from "@/components/sections/GalleryContainer";
import PageHeader from "@/components/ui/PageHeader";
import { galleryHeader } from "@/data/data";

export default async function page() {
  const galleries = await getGalleries();

  return (
    <>
      <PageHeader header={galleryHeader} />
      <GalleryContainer filteredGalleries={galleries} />
    </>
  );
}

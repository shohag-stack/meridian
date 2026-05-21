import AccommodationCard from '@/components/ui/AccommodationCard';
import { getAccommodations } from '@/(core)/fetch/getAccomodations';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

export default async function Accommodations() {
  const ACCOMMODATIONS = await getAccommodations()
  const featured = ACCOMMODATIONS.filter(p => p.featured).slice(0, 3);

  return (
    <section className="section-cream">
      <div className="container-site">
        <div className="flex justify-center text-center items-end mb-14 flex-wrap gap-6">
          <div className='max-w-lg'>
            <span className="eyebrow block">Accomodations</span>
            <SectionHeader title='Welcome to The World of Luxury and Comfort' description='Phi Phi the Beach Resort is a dream location for any visitor looking for either an eventful or relaxing holiday. Situated on the quiet Long Beach, which overlooks the stunning Maya bay island' />
            <div className='flex justify-center mt-10'>
                <Image src="/img/trust-badge.svg" alt="Vector" width={300} height={300} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map(p => <AccommodationCard key={p._id} accommodation={p} />)}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PropertyCard from '@/components/ui/PropertyCard';
import { PROPERTIES } from '@/data/data';

export default function FeaturedProperties() {
  const featured = PROPERTIES.filter(p => p.featured).slice(0, 3);

  return (
    <section className="section">
      <div className="container-site">
        <div className="flex justify-between items-end mb-14 flex-wrap gap-6">
          <div>
            <span className="eyebrow block mb-3">Handpicked for You</span>
            <h2 className="heading-1 text-[var(--color-neutral-900)]">
              Featured <em className="italic text-[var(--color-accent)]">Listings</em>
            </h2>
            <span className="divider-accent mt-4" />
          </div>
          <Link href="/properties" className="btn btn-secondary">
            View All Properties <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map(p => <PropertyCard key={p._id} property={p} />)}
        </div>
      </div>
    </section>
  );
}

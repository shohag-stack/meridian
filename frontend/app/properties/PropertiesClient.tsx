'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, Grid3X3, List, X, Search } from 'lucide-react';
import PropertyCard from '@/components/ui/PropertyCard';
import { PROPERTIES } from '@/data/data';
import type { PropertyFilters, PropertyStatus, PropertyType } from '@/types';

const PROPERTY_TYPES = [
  { value: 'all',       label: 'All Types'   },
  { value: 'house',     label: 'House'       },
  { value: 'apartment', label: 'Apartment'   },
  { value: 'condo',     label: 'Condo'       },
  { value: 'villa',     label: 'Villa'       },
  { value: 'penthouse', label: 'Penthouse'   },
  { value: 'townhouse', label: 'Townhouse'   },
];

const PRICE_RANGES = [
  { label: 'Any Price', min: 0, max: Infinity     },
  { label: 'Under $1M', min: 0, max: 1_000_000    },
  { label: '$1M – $3M', min: 1_000_000, max: 3_000_000 },
  { label: '$3M – $6M', min: 3_000_000, max: 6_000_000 },
  { label: '$6M+',      min: 6_000_000, max: Infinity   },
];

const SORT_OPTIONS = [
  { value: 'newest',     label: 'Newest First'       },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'area-desc',  label: 'Largest First'      },
];

export default function PropertiesClient() {
  const searchParams = useSearchParams();
  const [view, setView]               = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters]         = useState<PropertyFilters>({
    status: (searchParams.get('status') as PropertyStatus) || 'all',
    type:   (searchParams.get('type')   as PropertyType)   || 'all',
    sortBy: 'newest',
  });
  const [priceRange, setPriceRange]   = useState({ min: 0, max: Infinity });
  const [bedsMin, setBedsMin]         = useState(0);

  const filtered = useMemo(() => {
    let r = [...PROPERTIES];
    if (filters.status && filters.status !== 'all') r = r.filter(p => p.status === filters.status);
    if (filters.type   && filters.type   !== 'all') r = r.filter(p => p.type   === filters.type);
    if (priceRange.max !== Infinity) r = r.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);
    if (bedsMin > 0) r = r.filter(p => p.bedrooms >= bedsMin);
    switch (filters.sortBy) {
      case 'price-asc':  r.sort((a, b) => a.price - b.price); break;
      case 'price-desc': r.sort((a, b) => b.price - a.price); break;
      case 'area-desc':  r.sort((a, b) => b.area  - a.area);  break;
      default: r.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return r;
  }, [filters, priceRange, bedsMin]);

  const activeCount = [
    filters.status !== 'all', filters.type !== 'all',
    priceRange.max !== Infinity, bedsMin > 0,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setFilters({ status: 'all', type: 'all', sortBy: 'newest' });
    setPriceRange({ min: 0, max: Infinity });
    setBedsMin(0);
  };

  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--color-primary)]" style={{ paddingTop: 'calc(var(--spacing-navbar) + 4rem)', paddingBottom: '3rem' }}>
        <div className="container-site">
          <span className="eyebrow block mb-2">Browse Listings</span>
          <h1 className="heading-1 text-white mb-2">All Properties</h1>
          <p className="text-lg text-white/55">{PROPERTIES.length} exclusive listings available</p>
        </div>
      </div>

      <div className="container-site pt-10 pb-24">

        {/* ── Toolbar ──────────────────────────────────────── */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8 pb-6 border-b border-[var(--color-neutral-200)]">

          <div className="flex items-center gap-3 flex-wrap">
            {/* Status tabs */}
            <div className="flex gap-1 p-1 bg-[var(--color-neutral-100)] rounded-full">
              {(['all', 'for-sale', 'for-rent'] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setFilters(f => ({ ...f, status: s }))}
                  className={[
                    'btn btn-sm rounded-full border-none',
                    filters.status === s
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-transparent text-[var(--color-neutral-400)]',
                  ].join(' ')}
                >
                  {s === 'all' ? 'All' : s === 'for-sale' ? 'For Sale' : 'For Rent'}
                </button>
              ))}
            </div>

            {/* Filters btn */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={['flex items-center gap-2 btn btn-sm', showFilters ? 'btn-secondary' : 'btn-ghost'].join(' ')}
            >
              <SlidersHorizontal size={14} /> Filters
              {activeCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[var(--color-accent)] text-white text-[0.6rem] font-bold flex items-center justify-center">
                  {activeCount}
                </span>
              )}
            </button>

            {activeCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-[var(--color-neutral-400)] bg-transparent border-none cursor-pointer hover:text-[var(--color-neutral-700)]"
              >
                <X size={12} /> Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-[var(--color-neutral-400)]">
              {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
            </span>

            <select
              className="input select w-auto text-sm"
              value={filters.sortBy}
              onChange={e => setFilters(f => ({ ...f, sortBy: e.target.value as PropertyFilters['sortBy'] }))}
            >
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>

            {/* View toggle */}
            <div className="flex border border-[var(--color-neutral-200)] rounded-lg overflow-hidden">
              {([['grid', Grid3X3], ['list', List]] as const).map(([mode, Icon]) => (
                <button
                  key={mode}
                  onClick={() => setView(mode)}
                  className={[
                    'px-3 py-2 border-none cursor-pointer transition-all duration-200 flex items-center',
                    view === mode
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-transparent text-[var(--color-neutral-400)] hover:bg-[var(--color-neutral-100)]',
                  ].join(' ')}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Filter panel ─────────────────────────────────── */}
        {showFilters && (
          <div className="bg-white rounded-2xl border border-[var(--color-neutral-200)] p-7 mb-8"
            style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="label-text">Property Type</label>
                <select className="input select" value={filters.type || 'all'}
                  onChange={e => setFilters(f => ({ ...f, type: e.target.value as PropertyType | 'all' }))}>
                  {PROPERTY_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>
              <div>
                <label className="label-text">Price Range</label>
                <select className="input select"
                  onChange={e => { const r = PRICE_RANGES[+e.target.value]; setPriceRange({ min: r.min, max: r.max }); }}>
                  {PRICE_RANGES.map((r, i) => <option key={i} value={i}>{r.label}</option>)}
                </select>
              </div>
              <div>
                <label className="label-text">Min. Bedrooms</label>
                <select className="input select" value={bedsMin} onChange={e => setBedsMin(+e.target.value)}>
                  <option value={0}>Any</option>
                  {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}+ Beds</option>)}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ── Results ──────────────────────────────────────── */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 flex flex-col items-center gap-4">
            <Search size={48} className="text-[var(--color-neutral-300)]" />
            <h3 className="heading-3">No properties found</h3>
            <p className="text-[var(--color-neutral-500)] mb-2">Try adjusting your filters.</p>
            <button onClick={clearFilters} className="btn btn-secondary">Clear Filters</button>
          </div>
        ) : view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map(p => <PropertyCard key={p._id} property={p} />)}
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {filtered.map(p => <PropertyCard key={p._id} property={p} variant="horizontal" />)}
          </div>
        )}
      </div>
    </>
  );
}

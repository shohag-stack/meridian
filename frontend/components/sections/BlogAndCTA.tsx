import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS, formatDate } from '@/data/data';
import Image from 'next/image';

export function BlogPreviewSection() {
  return (
    <section className="section-cream">
      <div className="container-site">
        <div className="flex justify-between items-end mb-14 flex-wrap gap-6">
          <div>
            <span className="eyebrow block mb-3">Insights & Advice</span>
            <h2 className="heading-1 text-neutral-900">
              Latest from Our Blog
            </h2>
          </div>
          <Link href="/blog" className="btn btn-secondary">
            All Articles <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="block no-underline group overflow-hidden bg-white card-hover"
            >
              <div className="relative overflow-hidden aspect-ratio-4/3" style={{ paddingBottom: '56%' }}>
                <Image
                  fill
                  src={typeof post.mainImage === 'string' ? post.mainImage : ''}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold uppercase tracking-widest bg-white/95 text-neutral-900 px-3 py-1">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-neutral-900 leading-snug mb-3 line-clamp-2 hover:text-accent transition-all">
                  {post.title}
                </h3>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

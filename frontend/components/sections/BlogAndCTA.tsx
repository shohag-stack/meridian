import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS, formatDate } from '@/data/data';

export function BlogPreviewSection() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="flex justify-between items-end mb-14 flex-wrap gap-6">
          <div>
            <span className="eyebrow block mb-3">Insights & Advice</span>
            <h2 className="heading-1 text-neutral-900">
              Latest from<br /><em className="italic text-accent">Our Blog</em>
            </h2>
            <span className="divider-accent mt-4" />
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
              className="block no-underline group rounded-2xl overflow-hidden bg-white border border-neutral-200 card-hover"
            >
              <div className="relative overflow-hidden" style={{ paddingBottom: '56%' }}>
                <img
                  src={typeof post.mainImage === 'string' ? post.mainImage : ''}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-widest bg-white/95 text-primary rounded-full px-3 py-1">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={typeof post.author.photo === 'string' ? post.author.photo : ''}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xs font-semibold text-neutral-900">{post.author.name}</div>
                    <div className="text-xs text-neutral-400">{formatDate(post.publishedAt)}</div>
                  </div>
                  {post.readingTime && (
                    <div className="ml-auto flex items-center gap-1 text-xs text-neutral-400">
                      <Clock size={11} />{post.readingTime} min
                    </div>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-1.5 mt-5 text-sm font-semibold text-accent">
                  Read More <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1920&h=600&fit=crop)' }}
      />
      <div className="absolute inset-0 overlay-solid" />

      <div className="container-site section relative z-10 text-center">
        <span className="eyebrow block mb-4">Ready to Begin?</span>
        <h2 className="heading-1 text-white max-w-xl mx-auto mb-6">
          Let's Find Your Perfect Property Together
        </h2>
        <p className="text-lg text-white/65 max-w-md mx-auto mb-10 leading-relaxed">
          Our expert team is ready to guide you through every step of your real estate journey.
        </p>
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

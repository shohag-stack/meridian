import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, formatDate } from '@/data/data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Real estate insights, market trends, buying guides, and neighbourhood spotlights from the EstateHaven team.',
};

const CATEGORIES = ['All', 'Market Insights', "Buyer's Guide", 'Neighborhoods', 'Investment', 'Design & Renovation'];

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest      = BLOG_POSTS.slice(1);

  return (
    <>
      {/* Header */}
      <section className="page-header text-center">
        <div className="container-site relative z-10">
          <span className="eyebrow block mb-3">Insights & Advice</span>
          <h1 className="heading-1 text-white mb-4">The EstateHaven Blog</h1>
          <p className="text-lg text-white/60 max-w-md mx-auto">
            Market intelligence, expert advice, and stories from the world of real estate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">

          {/* Category pills */}
          <div className="flex gap-2 flex-wrap mb-14">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={[
                  'btn btn-sm',
                  cat === 'All' ? 'btn-secondary' : 'btn-ghost',
                ].join(' ')}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block no-underline mb-16 rounded-3xl overflow-hidden bg-white border border-neutral-200 card-hover"
            
            
            
          >
            <article className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
              {/* Image */}
              <div className="relative overflow-hidden min-h-80">
                <img
                  src={typeof featured.mainImage === 'string' ? featured.mainImage : ''}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center p-10 lg:p-14">
                <span className="badge badge-sale mb-5 w-fit">
                  Featured · {featured.category}
                </span>
                <h2 className="heading-2 mb-4 leading-snug">{featured.title}</h2>
                <p className="text-neutral-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mb-6 flex-wrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={typeof featured.author.photo === 'string' ? featured.author.photo : ''}
                      alt={featured.author.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">{featured.author.name}</div>
                      <div className="text-xs text-neutral-400">{formatDate(featured.publishedAt)}</div>
                    </div>
                  </div>
                  {featured.readingTime && (
                    <div className="flex items-center gap-1.5 text-sm text-neutral-400 ml-auto">
                      <Clock size={13}/> {featured.readingTime} min read
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                  Read Article <ArrowRight size={14}/>
                </div>
              </div>
            </article>
          </Link>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map(post => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group block no-underline rounded-2xl overflow-hidden bg-white border border-neutral-200 card-hover"
                
                
                
              >
                <article>
                  <div className="relative overflow-hidden" style={{ paddingBottom: '58%' }}>
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
                      <span className="text-xs text-neutral-400">
                        {post.author.name} · {formatDate(post.publishedAt)}
                      </span>
                      {post.readingTime && (
                        <div className="ml-auto flex items-center gap-1 text-xs text-neutral-400">
                          <Clock size={11}/>{post.readingTime}m
                        </div>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-neutral-900 leading-snug mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 mt-5 text-sm font-semibold text-accent">
                      Read More <ArrowRight size={13}/>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

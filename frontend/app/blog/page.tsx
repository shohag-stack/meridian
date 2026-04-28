import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, formatDate } from '@/data/data';
import PageHeader from '@/components/sections/PageHeader';
import PostCard from '@/components/ui/PostCard';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Real estate insights, market trends, buying guides, and neighbourhood spotlights from the EstateHaven team.',
};


export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest      = BLOG_POSTS.slice(1);

  return (
    <>
      {/* Header */}
      <PageHeader eyebrow='The eastern heaven blog' title='Insights & Advice' subtitle='Market intelligence, expert advice, and stories from the world of real estate.' path='/img/listingbg1.png' />
      <section className="section">
        <div className="container-site">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block no-underline mb-16 overflow-hidden bg-white card-hover"
            
            
            
          >
            <article className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
              {/* Image */}
              <div className="relative overflow-hidden min-h-20">
                <Image
                  src={typeof featured.mainImage === 'string' ? featured.mainImage : ''}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  width={1920}
                  height={1080}
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center p-10 lg:p-14">
                <span className="badge badge-sale mb-5 w-fit">
                  Featured · {featured.category}
                </span>
                <h2 className="heading-4 mb-4 leading-none">{featured.title}</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mb-6 flex-wrap">
                  <div className="flex items-center gap-3">
                    <Image
                      src={typeof featured.author.photo === 'string' ? featured.author.photo : ''}
                      alt={featured.author.name}
                      className="w-11 h-11 object-cover rounded-full"
                      width={110}
                      height={110}
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
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

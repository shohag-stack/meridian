import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS, formatDate } from '@/data/data';
import Image from 'next/image';
import PostCard from '../ui/PostCard';

export function BlogPreviewSection() {

  const featured = BLOG_POSTS.slice(0,3)
  return (
    <section className="section-cream">
      <div className="container-site">
        <div className="flex justify-between items-end mb-14 flex-wrap gap-6">
          <div>
            <span className="eyebrow block mb-3">Insights & Advice</span>
            <h2 className="heading-2 text-neutral-900">
              Latest from Our Blog
            </h2>
          </div>
          <Link href="/blog" className="btn btn-secondary">
            All Articles <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@/components/ui/PostCard";
import Image from "next/image";
import {getBlogs, getBlogBySlug} from "@/(core)/fetch/getBlogs";
import { Clock } from "lucide-react";
import { formatDate } from "@/data/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Real estate insights, market trends, buying guides, and neighbourhood spotlights from the EstateHaven team.",
};

export default async function BlogPage() {

  const blogPosts = await getBlogs();

  const featured = blogPosts[0];

  console.log("showing blog posts & featured posts", blogPosts, featured)

  if (!featured && blogPosts.length === 0) {
    return (
      <div className="container-site section mt-24">
      <h2 className="heading-3 text-center">No blog posts found.</h2>
    </div>
    )
  }

  return (
    <>
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
                  src={featured.mainImage}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  width={1920}
                  height={1080}
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center p-10 lg:p-14 group">
                <h2 className="heading-4 mb-4 leading-none group-hover:text-accent transition-all">
                  {featured.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-sm text-neutral-700 flex gap-2 ">
                        <Clock size={18} /> {formatDate(featured.publishedAt)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

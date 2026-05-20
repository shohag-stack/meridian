import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import {formatDate } from "@/data/data";
import { getBlogBySlug, getBlogs } from "@/(core)/fetch/getBlogs";
import { PortableText } from "@portabletext/react";
import urlFor from "@/(core)/sanity/lib/image";
import { PortableTextComponents } from "@portabletext/react";
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const BLOG_POSTS = await getBlogs();
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}



const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <img
        src={urlFor(value).url()}
        alt=""
        className="my-8 w-full h-auto"
      />
    )
  },
  block: {
    h1: ({children})=> (<h1 className="capitalize leading-20 heading-1 my-2">{children}</h1>),
    h2: ({children})=> (<h2 className="lowercase heading-2 my-2">{children}</h2>),
    h3: ({children})=> (<h3 className="heading-3 my-2">{children}</h3>),
    h4: ({children})=> (<h4 className="heading-4 py-4">{children}</h4>),
    h5: ({children})=> (<h5 className="heading-5">{children}</h5>),
    h6: ({children})=> (<h6 className="heading-6">{children}</h6>),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent pl-4 italic my-6 text-lg">
        {children}
      </blockquote>
    ),

    normal: ({ children }) => (
      <p className="text-lg text-neutral-700 leading-relaxed mb-4">
        {children}
      </p>
    ),
  },

}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug({slug});
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug({ slug });
  const BLOG_POSTS = await getBlogs();

  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p._id !== post._id).slice(0, 2);

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="bg-primary"
        style={{
          paddingTop: "calc(var(--spacing-navbar) + 1.5rem)",
          paddingBottom: "1.5rem",
        }}
      >
        <div className="container-site">
          <nav className="flex items-center gap-2 text-sm text-white/50 flex-wrap">
            <Link
              href="/"
              className="text-white/50 no-underline hover:text-white/80 transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={13} />
            <Link
              href="/blog"
              className="text-white/50 no-underline hover:text-white/80 transition-colors"
            >
              Blog
            </Link>
            <ChevronRight size={13} />
            <span className="text-white/85 truncate max-w-xs">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero image */}
      <section
        className="relative overflow-hidden"
        style={{ paddingBottom: "45%", minHeight: 420 }}
      >
        <img
          src={typeof post.mainImage === "string" ? post.mainImage : ""}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%)",
          }}
        />
        <div className="container-site absolute bottom-12 left-1/2 -translate-x-1/2 w-full">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-5">{post.title}</h1>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-1.5 text-sm text-neutral-300">
                <Calendar size={13} /> {formatDate(post.publishedAt)}
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-1.5 text-sm text-neutral-300">
                  <Clock size={13} /> {post.readingTime} min read
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">
            {post.body ? (
              <article>
                <PortableText value={post.body} components={portableComponents} />
              </article>
            ) : (
              <article>
                {/* Lead paragraph */}
                <p className="text-xl text-neutral-900 font-medium leading-relaxed pb-8 mb-8">
                  {post.excerpt}
                </p>

                {/* Body content — replace with <PortableText> after Sanity is wired up */}
                <div className="text-lg text-neutral-500 leading-relaxed space-y-6">
                  <p>
                    The luxury real estate market continues to evolve at a
                    remarkable pace. Understanding the forces shaping today's
                    high-end property landscape is essential for anyone looking
                    to make strategic decisions — whether buying, selling, or
                    investing.
                  </p>

                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mt-10">
                    The Shifting Landscape
                  </h2>
                  <p>
                    Remote work has fundamentally altered buyer preferences,
                    with a dramatic shift toward larger homes with dedicated
                    office spaces, access to nature, and proximity to secondary
                    markets. The definition of luxury itself is being rewritten
                    — wellness amenities, sustainable design, and smart home
                    integration are now non-negotiable for discerning buyers.
                  </p>

                  <blockquote className="border-l-[3px] border-accent pl-6 my-10 font-display italic text-xl text-neutral-900 leading-snug">
                    "The most sought-after properties today offer more than
                    square footage — they offer a complete lifestyle."
                  </blockquote>

                  <p>
                    Inventory constraints continue to favour sellers in most
                    tier-one markets, but the picture is nuanced. Ultra-luxury
                    properties — those above $10 million — are seeing longer
                    days on market as buyers become more selective. Meanwhile,
                    the $1M–$5M segment remains intensely competitive.
                  </p>

                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mt-10">
                    What Buyers Are Prioritising
                  </h2>
                  <p>
                    Our data from over 400 transactions in the past year reveals
                    clear patterns. Buyers are placing unprecedented value on
                    outdoor space, home wellness facilities, energy efficiency,
                    and technology infrastructure.
                  </p>

                  <p className="text-sm text-neutral-400 italic">
                    {/* TODO: Replace with <PortableText value={post.body} components={ptComponents} /> after Sanity integration */}
                    [Full article body will be rendered from Sanity Portable
                    Text after CMS integration]
                  </p>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mt-12 pt-8 border-t border-neutral-200">
                  {["Real Estate", "Luxury", "Market Trends", "2024"].map(
                    (tag) => (
                      <span key={tag} className="badge badge-outline">
                        {tag}
                      </span>
                    ),
                  )}
                </div>

                {/* Back link */}
                <div className="mt-10 pt-8 border-t border-neutral-200">
                  <Link href="/blog" className="btn btn-ghost btn-sm gap-1.5">
                    <ArrowLeft size={13} /> Back to Blog
                  </Link>
                </div>
              </article>
            )}

            {/* Sidebar */}
            <aside
              className="sticky flex flex-col gap-6"
              style={{ top: "calc(var(--spacing-navbar) + 2rem)" }}
            >
              {/* Related posts */}
              {related.length > 0 && (
                <div className="bg-white p-6">
                  <p className="eyebrow mb-5">Related Articles</p>
                  <div className="flex flex-col gap-5">
                    {related.map((rp) => (
                      <Link
                        key={rp._id}
                        href={`/blog/${rp.slug}`}
                        className="flex gap-3 no-underline group"
                      >
                        <img
                          src={
                            typeof rp.mainImage === "string" ? rp.mainImage : ""
                          }
                          alt={rp.title}
                          className="w-18 h-14 object-cover shrink-0"
                        />
                        <div>
                          <div className="text-sm font-semibold text-neutral-900 leading-snug line-clamp-2 mb-1 group-hover:text-accent transition-colors">
                            {rp.title}
                          </div>
                          <div className="text-xs text-neutral-400">
                            {formatDate(rp.publishedAt)}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Properties CTA */}
              <div className="bg-primary p-7 text-white text-center">
                <h3 className="font-display text-xl font-semibold mb-2">
                  Looking for a Property?
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  Browse our curated listings and find your perfect home.
                </p>
                <Link href="/properties" className="btn btn-primary w-full">
                  View Properties
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types";

export default function PostCard({post}: {post: BlogPost}) {
  return (
    <Link
      key={post._id}
      href={`/blog/${post.slug}`}
      className="block no-underline group overflow-hidden bg-white card-hover group"
    >
      <div
        className="relative overflow-hidden aspect-ratio-4/3"
        style={{ paddingBottom: "56%" }}
      >
        <Image
          fill
          src={typeof post.mainImage === "string" ? post.mainImage : ""}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-neutral-900 leading-snug mb-3 line-clamp-2 group-hover:text-accent transition-all">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

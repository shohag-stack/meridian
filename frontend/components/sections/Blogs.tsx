import React from "react";
import PageHeader from "../ui/PageHeader";
import SectionHeader from "../ui/SectionHeader";
import { getBlogs } from "@/(core)/fetch/getBlogs";
import Image from "next/image";
import Link from "next/link";

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div className="container-site section">
      <SectionHeader eyebrow="Blogs" title="read our latest stories" />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden gap-4">
          {blogs.map((b, i) => (
            <Link
              href={`blog/${b.slug}`}
              key={b._id}
              className="group"
            >
              <div className="aspect-4/3 relative overflow-hidden">
                <Image
                  src={b.mainImage}
                  alt={b.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-neutral-50">
                <h4 className="heading-4 text-neutral-950 group-hover:text-primary transition-colors duration-300">
                  {b.title}
                </h4>
                <p className="line-clamp-2">{b.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

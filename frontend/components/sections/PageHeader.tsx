import Image from "next/image";
import React from "react";

export default function PageHeader({eyebrow,title, subtitle,path}:{eyebrow: string, title: string,subtitle: string, path: string,}) {
  return (
    <div
      className="relative bg-primary min-h-150 flex justify-center items-center"
      style={{
        paddingTop: "calc(var(--spacing-navbar) + 4rem)",
        paddingBottom: "3rem",
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image src={path} alt={title} fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-black/20 z-10"/>
      <div className="container-site relative z-20">
        <span className="font-bold text-neutral-50 block mb-2">{eyebrow}</span>
        <h1 className="heading-1 text-white mb-2 max-w-2xl">{title}</h1>
        <p className="max-w-2xl text-lg text-neutral-50 font-semibold">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

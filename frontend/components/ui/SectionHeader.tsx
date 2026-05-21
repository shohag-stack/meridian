"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitWords } from "../animation/SplitWords";

gsap.registerPlugin(ScrollTrigger);


interface Props {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function SectionHeader({
  eyebrow,
  title = "Welcome to The World of Luxury and Comfort",
  description = "Phi Phi the Beach Resort is a dream location for any visitor looking for either an eventful or relaxing holiday. Situated on the quiet Long Beach, which overlooks the stunning Maya bay island",
}: Props) {
  const rootRef    = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const descRef    = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // All .word spans inside the heading
    const words = root.querySelectorAll<HTMLSpanElement>("h2 .word");

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(words, { yPercent: 110, opacity: 0 });
      gsap.set(eyebrowRef.current, { opacity: 0, y: 12 });
      gsap.set(descRef.current,    { opacity: 0, y: 16 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      });

      // Eyebrow fades in first
      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      // Words slide up in a stagger
      tl.to(
        words,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power4.out",
          stagger: 0.06,
        },
        "-=0.2"
      );

      // Description fades in last
      tl.to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.35"
      );
    }, root);

    return () => ctx.revert();
  }, []);

  
  return (
    <div
      ref={rootRef}
      className="flex justify-center text-center items-end mb-14 flex-wrap gap-6"
    >
      <div className="max-w-lg">
        {eyebrow && (
          <span ref={eyebrowRef} className="eyebrow block mb-2">
            {eyebrow}
          </span>
        )}

        <h2 className="heading-2 text-neutral-950">
          <SplitWords text={title} />
        </h2>

        <p ref={descRef} className=" text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PanelProps {
  src: string;
  title: string;
}

function Panel({ src, title }: PanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef  = useRef<HTMLDivElement>(null);
  const words    = title.split(" ");

  useEffect(() => {
    const panel = panelRef.current;
    const video = videoRef.current;
    const text  = textRef.current;
    if (!panel || !video || !text) return;

    const wordEls = text.querySelectorAll<HTMLSpanElement>(".word");

    const ctx = gsap.context(() => {

      gsap.set(wordEls, { yPercent: 110 });

      // ── Video zoom ─────────────────────────────────────────────
      gsap.fromTo(video, { scale: 1 }, {
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ── Single timeline for word enter → hold → exit ───────────
      // Panel scroll distance = 100vh (sticky).
      // We divide it into 3 phases via the timeline's progress labels.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Phase 1 (0–30%): words rise in
      tl.to(wordEls, {
        yPercent: 0,
        ease: "none",
        duration: 0.3,
      });

      // Phase 2 (30–60%): words hold at centre
      tl.to(wordEls, {
        yPercent: 0,
        ease: "none",
        duration: 0.3,
      });

      // Phase 3 (60–100%): words exit upward
      tl.to(wordEls, {
        yPercent: -120,
        ease: "none",
        duration: 0.4,
      });

    }, panel);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={panelRef} className="sticky top-0 h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/30" />

      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center"
        aria-label={title}
      >
        <div className="heading-1 text-white flex flex-wrap justify-center gap-x-[0.25em]">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden leading-[1.1]">
              <span className="word inline-block will-change-transform">
                {word}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="relative h-[600vh]">
      <Panel src="/videos/pool.mp4" title="Private Pool" />
      <Panel src="/videos/bbq.mp4"  title="Private BBQ"  />
    </section>
  );
}
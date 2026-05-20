"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Features() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // FIRST SECTION (0 → 0.5)
  const firstScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const firstOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const firstY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

  // SECOND SECTION (0.5 → 1)
  const secondScale = useTransform(scrollYProgress, [0.5, 1], [1, 1.2]);
  const secondOpacity = useTransform(scrollYProgress, [0.45, 0.55, 1], [0, 1, 1]);
  const secondY = useTransform(scrollYProgress, [0.5, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative h-[600vh]">

      {/* FIRST */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/pool-2.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ scale: firstScale }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: firstOpacity, y: firstY }}
        >
          <h1 className="heading-1 text-white">Private Pool</h1>
        </motion.div>
      </div>

      {/* SECOND */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/bbq.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ scale: secondScale }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: secondOpacity, y: secondY }}
        >
          <h1 className="heading-1 text-white">Private BBQ</h1>
        </motion.div>
      </div>

    </section>
  );
}
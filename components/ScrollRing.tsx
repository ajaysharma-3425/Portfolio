"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollRing() {
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      setPercentage(Math.round(v * 100));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed bottom-28 right-6 md:bottom-8 md:right-8 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-500/30 flex items-center justify-center z-40 md:z-50"
      animate={{ rotate: percentage * 3.6 }}
      transition={{ duration: 0.1 }}
    >
      <div className="text-cyan-300 font-bold text-base md:text-lg">
        {percentage}%
      </div>
      <svg className="absolute inset-0 w-full h-full">
        <circle
          cx={32}   // half of w-16 (mobile)
          cy={32}
          r={28}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeDasharray={175.9}          // 2 * π * 28 ≈ 175.9
          strokeDashoffset={175.9 - (175.9 * percentage) / 100}
          strokeLinecap="round"
          transform="rotate(-90 32 32)"
          className="md:hidden"            // mobile circle size
        />
        <circle
          cx={40}   // half of w-20 (desktop)
          cy={40}
          r={36}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeDasharray={226.2}
          strokeDashoffset={226.2 - (226.2 * percentage) / 100}
          strokeLinecap="round"
          transform="rotate(-90 40 40)"
          className="hidden md:block"       // desktop circle size
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
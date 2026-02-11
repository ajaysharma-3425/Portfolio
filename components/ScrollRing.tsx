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
      className="fixed bottom-8 right-8 w-20 h-20 rounded-full bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-500/30 flex items-center justify-center z-50"
      animate={{ rotate: percentage * 3.6 }} // full circle = 360°
      transition={{ duration: 0.1 }}
    >
      <div className="text-cyan-300 font-bold text-lg">{percentage}%</div>
      <svg className="absolute inset-0 w-full h-full">
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeDasharray="226.2"
          strokeDashoffset={226.2 - (226.2 * percentage) / 100}
          strokeLinecap="round"
          transform="rotate(-90 40 40)"
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
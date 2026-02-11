"use client";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"
      />
      
      {/* Tech icons floating */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 opacity-10"
      >
        <SiNextdotjs className="w-24 h-24" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 opacity-10"
      >
        <FaReact className="w-20 h-20 text-cyan-400" />
      </motion.div>
    </div>
  );
}
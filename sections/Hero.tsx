"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm Ajay 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 text-xl mb-8"
        >
          MERN Stack Developer building modern and scalable web apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg leading-relaxed text-center max-w-3xl mx-auto"
      >
        I'm a MERN Stack Developer who loves building modern,
        scalable and user-friendly web applications.
        I enjoy working on full-stack projects, solving real
        problems and continuously learning new technologies.
      </motion.p>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux",
  "TypeScript",
  "Tailwind",
  "Git",
  "REST API",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 text-center"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

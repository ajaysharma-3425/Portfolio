"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Freelance",
    year: "2024 - Present",
    desc: "Building full-stack web apps, e-commerce websites and REST APIs.",
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    year: "2023 - 2024",
    desc: "Created multiple React & Next.js projects and improved UI/UX skills.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 max-w-4xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-white/20 pl-10 space-y-14">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-2.5 w-5 h-5 bg-white rounded-full"></div>

            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-400">
              {exp.company} • {exp.year}
            </p>
            <p className="text-gray-500 mt-2">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

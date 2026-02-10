"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Full Stack Web Apps",
    desc: "Modern MERN & Next.js applications from scratch.",
  },
  {
    title: "REST API Development",
    desc: "Secure and scalable backend APIs using Node & Express.",
  },
  {
    title: "UI/UX Implementation",
    desc: "Responsive and modern interfaces with Tailwind.",
  },
];

export default function Services() {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-16 text-center"
      >
        Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border border-white/10 p-6 rounded-xl bg-white/5"
          >
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-white/10 rounded-xl p-6 hover:bg-white/5 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="underline"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

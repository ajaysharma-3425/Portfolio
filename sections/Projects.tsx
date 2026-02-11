"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaCode, FaServer, FaMobileAlt, FaGlobe } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { useInView } from "react-intersection-observer";

// ✅ Projects data – image paths अब सही हैं (public folder के relative)
export const projects = [
  {
    title: "Bite Club",
    description: "A full-featured food ordering platform built with MERN stack featuring real-time cart, user authentication, payment integration, and admin dashboard.",
    live: "https://bite-club.netlify.app",
    github: "https://github.com/bite-club",
    image: "/BiteClub.png",          // ✅ public/BiteClub.png
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
    type: "Full Stack",
    featured: true
  },
  {
    title: "CookBook",
    description: "A full-featured food ordering platform built with MERN stack featuring real-time cart, user authentication, payment integration, and admin dashboard.",
    live: "https://cookbook-new.vercel.app",
    github: "https://github.com/cookbook",
    image: "/cookbook.png", // ✅ public/projects/cookbook.jpg
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
    type: "Full Stack",
    featured: true
  },
  {
    title: "Animal Web",
    description: "A full-featured food ordering platform built with MERN stack featuring real-time cart, user authentication, payment integration, and admin dashboard.",
    live: "https://animalwebnew.vercel.app",
    github: "https://github.com/animalweb",
    image: "/animalWeb.png", // ✅ public/projects/animalweb.jpg
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
    type: "Full Stack",
    featured: true
  },
  {
    title: "iNotebook",
    description: "Secure cloud-based notes application with CRUD operations, user authentication, and rich text editing capabilities.",
    live: "https://inotebooknew.netlify.app",
    github: "https://github.com/",
    image: "/inotbook.png", // ✅ public/projects/inotebook.jpg
    tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    type: "Full Stack",
    featured: true
  },
  {
    title: "Text Utils",
    description: "Advanced text utility application offering multiple tools including word counter, case converter, text summarizer, and formatting utilities.",
    live: "https://text-utils-apk.vercel.app",
    github: "https://github.com/TextUtilsApk",
    image: "/textutils.png", // ✅ public/projects/text-utils.jpg
    tech: ["React", "JavaScript", "CSS3", "Bootstrap"],
    type: "Frontend",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio website built with Next.js 14, featuring animations, dark mode, and SEO optimization.",
    live: "#",
    github: "https://github.com/Portfolio",
    image: "/portfolio.png", // ✅ public/projects/portfolio.jpg
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "Frontend",
    featured: false
  },
  {
    title: "E-Commerce API",
    description: "RESTful API for e-commerce platform with product management, user authentication, and order processing.",
    live: "#",
    github: "https://github.com/",
    image: "/projects/ecommerce-api.jpg", // ✅ public/projects/ecommerce-api.jpg
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    type: "Backend",
    featured: false
  },
  {
    title: "Task Manager",
    description: "Productivity application with task management, team collaboration features, and real-time notifications.",
    live: "#",
    github: "https://github.com/",
    image: "/projects/task-manager.jpg", // ✅ public/projects/task-manager.jpg
    tech: ["React", "Firebase", "Material-UI", "Context API"],
    type: "Full Stack",
    featured: false
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // ✅ हर project के लिए अलग से image error state
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (projectTitle: string) => {
    setImgErrors(prev => ({ ...prev, [projectTitle]: true }));
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work with modern technologies and innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto my-8 rounded-full"></div>
        </motion.div>

        {/* ✅ Featured Projects Grid – Images fixed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const hasImageError = imgErrors[project.title];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
                    {/* ✅ Real image – show only if image exists AND no error */}
                    {project.image && !hasImageError ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          onError={() => handleImageError(project.title)}
                          priority={index < 3} // पहली 3 images priority के साथ load करें
                        />
                      </div>
                    ) : (
                      /* ✅ Fallback placeholder – icon */
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl">
                          {project.type === "Full Stack" ? (
                            <FaServer className="text-cyan-400/30" />
                          ) : project.type === "Frontend" ? (
                            <FaCode className="text-blue-400/30" />
                          ) : (
                            <FaMobileAlt className="text-purple-400/30" />
                          )}
                        </div>
                      </div>
                    )}

                    {/* Project Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          project.type === "Full Stack"
                            ? "bg-cyan-900/50 text-cyan-300 border border-cyan-700/50"
                            : project.type === "Frontend"
                            ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                            : "bg-purple-900/50 text-purple-300 border border-purple-700/50"
                        }`}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-700/50 hover:bg-cyan-700/50 transition-all duration-300"
                          aria-label="Live Demo"
                        >
                          <FaExternalLinkAlt className="w-4 h-4 text-gray-300" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-all duration-300"
                          aria-label="GitHub Repository"
                        >
                          <FaGithub className="w-4 h-4 text-gray-300" />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gray-800/50 border border-gray-700 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Projects (same as before, optionally you can add images here too) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-5 text-gray-300 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
                      {project.type === "Full Stack" ? (
                        <FaServer className="w-4 h-4 text-cyan-400" />
                      ) : project.type === "Frontend" ? (
                        <FaCode className="w-4 h-4 text-blue-400" />
                      ) : (
                        <FaMobileAlt className="w-4 h-4 text-purple-400" />
                      )}
                    </div>
                    <h4 className="font-bold">{project.title}</h4>
                  </div>
                  <div className="flex gap-2">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gray-800/50 rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-800/50 rounded text-gray-300">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">
            Technologies I Use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <SiNextdotjs className="w-8 h-8 text-gray-300" />, name: "Next.js", color: "text-gray-300" },
              { icon: <SiReact className="w-8 h-8 text-cyan-400" />, name: "React", color: "text-cyan-400" },
              { icon: <SiNodedotjs className="w-8 h-8 text-green-500" />, name: "Node.js", color: "text-green-500" },
              { icon: <SiExpress className="w-8 h-8 text-gray-400" />, name: "Express", color: "text-gray-300" },
              { icon: <SiMongodb className="w-8 h-8 text-green-400" />, name: "MongoDB", color: "text-green-400" },
              { icon: <FaGlobe className="w-8 h-8 text-blue-400" />, name: "Full Stack", color: "text-blue-400" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="p-4 rounded-xl bg-gray-800/50 mb-3">{tech.icon}</div>
                <span className={`font-medium ${tech.color}`}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
            Interested in seeing more of my work or collaborating on a project?
            Feel free to check out my GitHub or get in touch for custom solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-gray-300 bg-gray-800 border border-gray-700 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-700 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5 text-gray-300" />
              View All Projects on GitHub
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              Start a Project With Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
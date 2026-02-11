"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaGitAlt, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);

  // Tech stack data
  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-gray-400" />, level: 95, color: "text-gray-800" },
    { name: "React", icon: <FaReact className="w-6 h-6" />, level: 90, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" />, level: 85, color: "text-green-500" },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" />, level: 80, color: "text-green-600" },
    { name: "Express", icon: <SiExpress className="w-6 h-6" />, level: 85, color: "text-gray-300" },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" />, level: 75, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" />, level: 90, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" />, level: 95, color: "text-teal-400" },
  ];

  // Experience timeline
  const experiences = [
    { year: "2023-Present", role: "Full Stack Developer", company: "Freelance/Projects", description: "Building scalable web applications with Next.js and MERN stack" },
    { year: "2022-2023", role: "Frontend Developer", company: "Tech Startup", description: "Developed responsive user interfaces and collaborated with backend teams" },
    { year: "2021-2022", role: "Web Developer", company: "Agency", description: "Created client websites and e-commerce solutions" },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8  text-white overflow-hidden relative">
      {/* Hero-style background with grid pattern and floating elements */}


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Crafting Digital Experiences
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            MERN Stack Developer specializing in modern web applications
          </p>
          {/* Divider line */}
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto my-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Intro & Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl"
            >
              {/* About text section */}
              <div className="mb-10">
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  I'm a <span className="font-semibold text-cyan-300">Full Stack Developer</span> specializing in the <span className="font-semibold text-green-400">MERN stack</span> and <span className="font-semibold text-purple-400">Next.js</span>. With a passion for creating modern, scalable, and user-friendly web applications, I focus on delivering clean code and exceptional user experiences.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  I enjoy tackling complex problems, optimizing performance, and continuously learning new technologies. Whether it's building robust backends with Node.js and Express or crafting responsive interfaces with React and Tailwind CSS, I strive to create solutions that make an impact.
                </p>
              </div>

              {/* Divider line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

              {/* Experience Timeline */}
              <div className="mt-6">
                <h4 className="text-2xl font-bold mb-8 flex items-center">
                  <FaServer className="mr-3 text-cyan-400" />
                  Experience Timeline
                </h4>

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="relative pl-10 pb-6 border-l border-cyan-500/30 last:pb-0"
                    >
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                      <div className="text-cyan-300 font-semibold">{exp.year}</div>
                      <div className="text-xl font-bold mt-1">{exp.role}</div>
                      <div className="text-gray-400 font-medium mb-2">{exp.company}</div>
                      <p className="text-gray-300">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Skills & Tech Stack */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl h-full"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 mr-4">
                  <FaGitAlt className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>

              <p className="text-gray-300 mb-10">
                I work with a wide range of technologies, with a strong focus on the MERN stack and modern development tools:
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`${tech.color} mr-3`}>
                          {tech.icon}
                        </div>
                        <span className="font-semibold">{tech.name}</span>
                      </div>
                      <span className="text-cyan-300 font-bold">{tech.level}%</span>
                    </div>

                    {/* Skill bar */}
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.7 + index * 0.05 }}
                        className={`h-full rounded-full ${tech.name === "Next.js" ? "bg-gradient-to-r from-gray-800 to-gray-300" :
                          tech.name === "React" ? "bg-gradient-to-r from-cyan-400 to-blue-500" :
                            tech.name === "Node.js" ? "bg-gradient-to-r from-green-500 to-green-300" :
                              tech.name === "MongoDB" ? "bg-gradient-to-r from-green-600 to-green-400" :
                                tech.name === "TypeScript" ? "bg-gradient-to-r from-blue-500 to-blue-300" :
                                  "bg-gradient-to-r from-purple-500 to-cyan-400"}`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h4 className="text-2xl font-bold mb-8">Development Focus</h4>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Projects", value: "25+", desc: "Completed" },
                    { label: "Technologies", value: "15+", desc: "Mastered" },
                    { label: "Code Hours", value: "2k+", desc: "This year" },
                    { label: "Satisfaction", value: "100%", desc: "Client Focus" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <motion.div
                        animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-lg font-semibold">{stat.label}</div>
                      <div className="text-gray-400 text-sm">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
            Interested in collaborating on a project or want to discuss technology?
            I'm always open to talking about development, design, and innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-800 border border-gray-700 rounded-full font-semibold text-white hover:bg-gray-700 transition-all duration-300"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
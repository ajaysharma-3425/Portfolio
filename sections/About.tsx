"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaGitAlt,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);

  const techStack = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-6 h-6 text-gray-400" />,
      level: 95,
      color: "text-gray-800",
    },
    {
      name: "React",
      icon: <FaReact className="w-6 h-6" />,
      level: 90,
      color: "text-cyan-400",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="w-6 h-6" />,
      level: 85,
      color: "text-green-500",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-6 h-6" />,
      level: 80,
      color: "text-green-600",
    },
    {
      name: "Express",
      icon: <SiExpress className="w-6 h-6" />,
      level: 85,
      color: "text-gray-300",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-6 h-6" />,
      level: 75,
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-6 h-6" />,
      level: 90,
      color: "text-yellow-400",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-6 h-6" />,
      level: 95,
      color: "text-teal-400",
    },
  ];

  const experiences = [
    {
      year: "2023-Present",
      role: "Full Stack Developer",
      company: "Freelance/Projects",
      description:
        "Building scalable web applications with Next.js and MERN stack",
    },
    {
      year: "2022-2023",
      role: "Frontend Developer",
      company: "Tech Startup",
      description:
        "Developed responsive user interfaces and collaborated with backend teams",
    },
    {
      year: "2021-2022",
      role: "Web Developer",
      company: "Agency",
      description: "Created client websites and e-commerce solutions",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 md:px-8 text-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ========== HEADER ========== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 px-2">
            Crafting Digital Experiences
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            MERN Stack Developer specializing in modern web applications
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto my-6 sm:my-7 md:my-8 rounded-full"></div>
        </motion.div>

        {/* ========== MAIN GRID ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT COLUMN – Intro & Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-700/50 shadow-xl h-full"
            >
              {/* About text */}
              <div className="mb-8 sm:mb-10">
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                  I'm a{" "}
                  <span className="font-semibold text-cyan-300">
                    Full Stack Developer
                  </span>{" "}
                  specializing in the{" "}
                  <span className="font-semibold text-green-400">
                    MERN stack
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-purple-400">
                    Next.js
                  </span>
                  . With a passion for creating modern, scalable, and
                  user-friendly web applications, I focus on delivering clean
                  code and exceptional user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I enjoy tackling complex problems, optimizing performance, and
                  continuously learning new technologies. Whether it's building
                  robust backends with Node.js and Express or crafting responsive
                  interfaces with React and Tailwind CSS, I strive to create
                  solutions that make an impact.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6 sm:my-8"></div>

              {/* Experience Timeline */}
              <div className="mt-4 sm:mt-6">
                <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center">
                  <FaServer className="mr-2 sm:mr-3 text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
                  Experience Timeline
                </h4>
                <div className="space-y-5 sm:space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.1,
                      }}
                      className="relative pl-8 sm:pl-10 pb-5 sm:pb-6 border-l border-cyan-500/30 last:pb-0"
                    >
                      <div className="absolute left-[-6px] sm:left-[-8px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                      <div className="text-cyan-300 font-semibold text-xs sm:text-sm">
                        {exp.year}
                      </div>
                      <div className="text-lg sm:text-xl font-bold mt-1">
                        {exp.role}
                      </div>
                      <div className="text-gray-400 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                        {exp.company}
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {exp.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN – Skills & Tech Stack */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-700/50 shadow-xl h-full"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 mr-3 sm:mr-4">
                  <FaGitAlt className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Technical Skills
                </h3>
              </div>

              <p className="text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">
                I work with a wide range of technologies, with a strong focus on
                the MERN stack and modern development tools:
              </p>

              {/* Skills Grid – single column on mobile, two columns on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.05,
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="bg-gray-800/50 rounded-xl p-3 sm:p-4 lg:p-5 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center">
                        <div className={`${tech.color} mr-2 sm:mr-3`}>
                          {tech.icon}
                        </div>
                        <span className="font-semibold text-sm sm:text-base">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-cyan-300 font-bold text-sm sm:text-base">
                        {tech.level}%
                      </span>
                    </div>

                    {/* Skill bar */}
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.7 + index * 0.05,
                        }}
                        className={`h-full rounded-full ${
                          tech.name === "Next.js"
                            ? "bg-gradient-to-r from-gray-800 to-gray-300"
                            : tech.name === "React"
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                            : tech.name === "Node.js"
                            ? "bg-gradient-to-r from-green-500 to-green-300"
                            : tech.name === "MongoDB"
                            ? "bg-gradient-to-r from-green-600 to-green-400"
                            : tech.name === "TypeScript"
                            ? "bg-gradient-to-r from-blue-500 to-blue-300"
                            : "bg-gradient-to-r from-purple-500 to-cyan-400"
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6 sm:my-8"></div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-4 sm:mt-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                  Development Focus
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
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
                        className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-1 sm:mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-base sm:text-lg font-semibold">
                        {stat.label}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm">
                        {stat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ========== CALL TO ACTION ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center mt-12 sm:mt-14 md:mt-16"
        >
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Interested in collaborating on a project or want to discuss
            technology? I'm always open to talking about development, design,
            and innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300 text-sm sm:text-base"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 sm:px-8 sm:py-3 bg-gray-800 border border-gray-700 rounded-full font-semibold text-white hover:bg-gray-700 transition-all duration-300 text-sm sm:text-base"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
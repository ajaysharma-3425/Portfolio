"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaBuilding,
  FaLaptopCode,
  FaCode,
  FaGraduationCap,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Remote",
    year: "2023 – Present",
    desc: "Building scalable web applications with Next.js and MERN stack, focusing on modern architecture, performance optimization, and best practices.",
    icon: <FaLaptopCode className="w-5 h-5" />,
    tech: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    role: "Frontend Developer",
    company: "Tech Startup",
    year: "2022 – 2023",
    desc: "Developed responsive user interfaces, collaborated with backend teams, implemented state management (Redux), and improved UX.",
    icon: <FaCode className="w-5 h-5" />,
    tech: ["React", "Redux", "Tailwind CSS", "REST APIs"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    role: "Web Developer",
    company: "Digital Agency",
    year: "2021 – 2022",
    desc: "Created client websites and e-commerce solutions, optimized Core Web Vitals, and ensured cross‑browser compatibility.",
    icon: <FaBriefcase className="w-5 h-5" />,
    tech: ["JavaScript", "HTML/CSS", "WordPress", "Bootstrap"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    role: "Junior Developer",
    company: "Internship",
    year: "2020 – 2021",
    desc: "Assisted in developing web applications, learned Git workflow, and contributed to team projects under senior mentorship.",
    icon: <FaBuilding className="w-5 h-5" />,
    tech: ["JavaScript", "React", "Node.js", "Git"],
    gradient: "from-orange-500 to-red-600",
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-8 relative z-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* ========== HEADER ========== */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey — from intern to full‑stack developer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* ========== TIMELINE (DESKTOP ALTERNATING / MOBILE LEFT) ========== */}
        <div className="relative">
          {/* Vertical Line (hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/40 via-blue-600/40 to-transparent"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12 md:space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Desktop Timeline Dot (centered) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-4 border-gray-900 z-20 shadow-lg shadow-cyan-500/30"></div>

                {/* Mobile Timeline Dot (left aligned) */}
                <div className="absolute left-0 md:hidden w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-4 border-gray-900 z-20 shadow-lg shadow-cyan-500/30"></div>

                {/* Year Badge (Desktop - centered, Mobile - left) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-3 z-30">
                  <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-cyan-800/50 shadow-lg">
                    <span className="text-sm font-bold text-cyan-300">{exp.year}</span>
                  </div>
                </div>
                <div className="md:hidden flex items-center mb-2 pl-8">
                  <div className="bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-800/50">
                    <span className="text-xs font-bold text-cyan-300">{exp.year}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } pl-8 md:pl-0`}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="group relative bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 md:p-7 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Gradient Border on Hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} bg-opacity-20 text-white shadow-lg`}
                      >
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                          {exp.role}
                        </h3>
                      </div>
                    </div>

                    {/* Company & Year */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <FaBuilding className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="font-medium text-gray-300">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <FaCalendarAlt className="w-4 h-4 mr-2 text-blue-400" />
                        <span>{exp.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-5 leading-relaxed text-base md:text-lg">
                      {exp.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-xs font-medium bg-gray-800/70 border border-gray-700 rounded-full text-gray-300 hover:bg-gray-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Optional Arrow Indicator */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ========== EDUCATION & CERTIFICATIONS ========== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Education & Credentials
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Degree Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-7 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 shadow-xl hover:shadow-green-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 group-hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap className="w-8 h-8 text-green-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-1">
                    Bachelor of Engineering
                  </h4>
                  <p className="text-cyan-300 font-medium mb-2">
                    Computer Science & Engineering
                  </p>
                  <p className="text-gray-400 mb-3">University Name • 2017 – 2021</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Graduated with First Class Honours. Specialized in web technologies and database systems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-7 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 group-hover:scale-110 transition-transform duration-300">
                  <FaCertificate className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Professional Certifications
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-2"></span>
                      MERN Stack Certification – Udemy
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-2"></span>
                      Next.js 14 & React – Frontend Masters
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-2"></span>
                      TypeScript Fundamentals – Microsoft Learn
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ========== OPEN TO WORK BADGE ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-md rounded-full border border-cyan-800/50 shadow-lg">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-cyan-300 font-semibold tracking-wide">
              🚀 Open for freelance & full‑time opportunities
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Let’s build something amazing together — I’m just an email away.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
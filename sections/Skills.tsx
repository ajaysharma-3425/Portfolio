"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaServer,
  FaDatabase,
  FaCode,
  FaCloud
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiGraphql,
  SiFirebase,
  SiDocker,
  SiPostgresql,
  SiPrisma,
  SiJest
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="w-6 h-6 text-cyan-400" />, level: 95 },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-500" />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-400" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-teal-400" />, level: 95 },
      { name: "Redux", icon: <SiRedux className="w-6 h-6 text-purple-500" />, level: 80 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-500" />, level: 90 },
      { name: "Express", icon: <SiExpress className="w-6 h-6 text-gray-300" />, level: 85 },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-400" />, level: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-400" />, level: 75 },
      { name: "GraphQL", icon: <SiGraphql className="w-6 h-6 text-pink-500" />, level: 70 },
      { name: "REST APIs", icon: <FaServer className="w-6 h-6 text-blue-300" />, level: 90 },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-orange-500" />, level: 90 },
      { name: "Docker", icon: <SiDocker className="w-6 h-6 text-blue-400" />, level: 65 },
      { name: "Firebase", icon: <SiFirebase className="w-6 h-6 text-yellow-500" />, level: 75 },
      { name: "Prisma", icon: <SiPrisma className="w-6 h-6 text-blue-600" />, level: 80 },
      { name: "Jest", icon: <SiJest className="w-6 h-6 text-red-500" />, level: 70 },
      { name: "Cloud Services", icon: <FaCloud className="w-6 h-6 text-blue-300" />, level: 70 },
    ]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-4 md:px-8  text-white overflow-hidden relative">
      {/* Background pattern and floating elements */}


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Tech Stack & Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with and my proficiency levels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto my-8 rounded-full"></div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-xl ${categoryIndex === 0 ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20" :
                    categoryIndex === 1 ? "bg-gradient-to-r from-green-500/20 to-emerald-600/20" :
                      "bg-gradient-to-r from-purple-500/20 to-pink-600/20"
                  } mr-4`}>
                  {categoryIndex === 0 ? <FaReact className="w-6 h-6 text-cyan-400" /> :
                    categoryIndex === 1 ? <FaServer className="w-6 h-6 text-green-400" /> :
                      <FaGitAlt className="w-6 h-6 text-purple-400" />}
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-gray-900/50 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-cyan-300 font-bold text-sm">{skill.level}%</span>
                    </div>

                    {/* Skill Progress Bar */}
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        className={`h-full rounded-full ${categoryIndex === 0 ? "bg-gradient-to-r from-cyan-500 to-blue-600" :
                            categoryIndex === 1 ? "bg-gradient-to-r from-green-500 to-emerald-600" :
                              "bg-gradient-to-r from-purple-500 to-pink-600"
                          }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Additional Tools & Technologies</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Other technologies I'm familiar with and use in my projects
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "HTML5", "CSS3", "SASS", "Bootstrap", "Material-UI",
              "React Query", "Webpack", "Vite", "NPM/Yarn", "Linux",
              "AWS", "Vercel", "Netlify", "GitHub Actions", "CI/CD"
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3+", label: "Years Experience", color: "text-cyan-400" },
              { value: "50+", label: "Projects Built", color: "text-green-400" },
              { value: "20+", label: "Technologies", color: "text-purple-400" },
              { value: "100%", label: "Client Satisfaction", color: "text-blue-400" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1, type: "spring" }}
                  className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
            Continuously learning and exploring new technologies to stay updated with the latest trends in web development.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-full border border-cyan-800/30">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse mr-3"></div>
            <span className="text-cyan-300 font-semibold tracking-wide text-xs sm:text-sm md:text-base">
              🚀 Currently learning: Advanced Next.js & Microservices
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
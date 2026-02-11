"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaPaintBrush, FaMobileAlt, FaCode, FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Full Stack Web Development",
    desc: "End-to-end web application development using modern technologies like Next.js, React, Node.js, and MongoDB.",
    icon: <FaLaptopCode className="w-8 h-8" />,
    features: ["Custom Web Apps", "API Development", "Database Design", "Deployment"],
    tech: ["Next.js", "React", "Node.js", "MongoDB"]
  },
  {
    title: "REST API Development",
    desc: "Secure, scalable, and well-documented RESTful APIs with authentication, rate limiting, and comprehensive testing.",
    icon: <FaServer className="w-8 h-8" />,
    features: ["Express.js APIs", "JWT Authentication", "API Documentation", "Performance Optimization"],
    tech: ["Node.js", "Express", "JWT", "Postman"]
  },
  {
    title: "UI/UX Implementation",
    desc: "Modern, responsive, and user-friendly interfaces using Tailwind CSS, Framer Motion, and component libraries.",
    icon: <FaPaintBrush className="w-8 h-8" />,
    features: ["Responsive Design", "Interactive Animations", "Component Libraries", "User Experience"],
    tech: ["Tailwind CSS", "Framer Motion", "Material-UI", "Shadcn"]
  },
  {
    title: "Frontend Development",
    desc: "Building performant, SEO-friendly, and accessible frontend applications with React and modern frameworks.",
    icon: <FaCode className="w-8 h-8" />,
    features: ["React Applications", "State Management", "Performance", "SEO Optimization"],
    tech: ["React", "TypeScript", "Redux", "Next.js"]
  },
  {
    title: "Performance Optimization",
    desc: "Improving website speed, reducing load times, and optimizing overall performance for better user experience.",
    icon: <FaChartLine className="w-8 h-8" />,
    features: ["Lighthouse Score", "Code Splitting", "Image Optimization", "Caching Strategies"],
    tech: ["Webpack", "Vite", "Lighthouse", "Core Web Vitals"]
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing maintenance, updates, bug fixes, and technical support for existing web applications.",
    icon: <FaShieldAlt className="w-8 h-8" />,
    features: ["Bug Fixes", "Security Updates", "Feature Updates", "Technical Support"],
    tech: ["Monitoring", "Debugging", "Updates", "Documentation"]
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 px-4 md:px-8 relative z-10">
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
            My Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto my-8 rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-500 h-full">
                {/* Service Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <div className="text-cyan-400">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:bg-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 text-white backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center ">My Development Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Planning",
                desc: "Requirements analysis and project planning",
                icon: <FaChartLine className="w-6 h-6" />
              },
              {
                step: "02",
                title: "Design",
                desc: "UI/UX design and architecture planning",
                icon: <FaPaintBrush className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Development",
                desc: "Coding, testing, and implementation",
                icon: <FaCode className="w-6 h-6" />
              },
              {
                step: "04",
                title: "Deployment",
                desc: "Launch, monitoring, and maintenance",
                icon: <FaRocket className="w-6 h-6" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 flex items-center justify-center mx-auto mb-4">
                    <div className="text-cyan-400">
                      {process.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    <span className="text-xs font-bold">{process.step}</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2">{process.title}</h4>
                <p className="text-gray-400 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Technology Focus</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <SiNextdotjs className="w-8 h-8 text-gray-300" />, name: "Next.js", desc: "Full Stack Framework" },
              { icon: <SiReact className="w-8 h-8 text-cyan-400" />, name: "React", desc: "UI Library" },
              { icon: <SiNodedotjs className="w-8 h-8 text-green-500" />, name: "Node.js", desc: "Runtime" },
              { icon: <SiMongodb className="w-8 h-8 text-green-400" />, name: "MongoDB", desc: "Database" },
              { icon: <SiTailwindcss className="w-8 h-8 text-teal-400" />, name: "Tailwind", desc: "CSS Framework" },
              { icon: <SiTypescript className="w-8 h-8 text-blue-500" />, name: "TypeScript", desc: "Type Safety" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="p-4 rounded-xl bg-gray-800/50 mb-3 border border-gray-700/50">
                  {tech.icon}
                </div>
                <span className="font-bold text-white mb-1">{tech.name}</span>
                <span className="text-gray-400 text-sm">{tech.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-800/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to build something amazing. I'm ready to help you bring your ideas to life with clean code and modern solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Get a Free Consultation
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-white bg-gray-800 border border-gray-700 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300"
              >
                View My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown, FaCode, FaLaptopCode } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  const roles = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "Next.js Specialist",
    "Web Application Developer",
    "UI/UX Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 min-h-screen flex flex-col items-center justify-center relative overflow-hidden  text-white px-4 md:px-8">
      {/* Animated background elements */}


      <div className="max-w-6xl mx-auto relative z-10 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            {/* Greeting with animated underline */}
            <div className="relative inline-block mb-6">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"
                style={{ originX: 0 }}
              />
              <p className="text-cyan-400 font-semibold text-lg tracking-wider uppercase">
                Hello, I'm
              </p>
            </div>

            {/* Name with gradient - अब कभी wrap नहीं होगा, और हर screen पर सही size में दिखेगा */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight whitespace-nowrap"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-blue-400">
                Ajay Sharma
              </span>
            </motion.h1>

            {/* Animated role text */}
            <div className="h-20 mb-8 relative">
              <motion.div
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
                    <FaCode className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-gray-300">
                      {roles[textIndex]}
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.5, ease: "linear" }}
                      className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mt-2"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
            >
              I create exceptional digital experiences using cutting-edge technologies.
              Specialized in building scalable web applications with <span className="text-cyan-300 font-semibold">Next.js</span>,
              <span className="text-green-400 font-semibold"> MERN stack</span>, and modern development practices.
            </motion.p>

            {/* Tech stack badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { icon: <SiNextdotjs className="w-5 h-5" />, label: "Next.js", color: "bg-gray-800 border-gray-700" },
                { icon: <SiReact className="w-5 h-5 text-cyan-400" />, label: "React", color: "bg-cyan-900/20 border-cyan-800" },
                { icon: <SiNodedotjs className="w-5 h-5 text-green-500" />, label: "Node.js", color: "bg-green-900/20 border-green-800" },
                { icon: <SiMongodb className="w-5 h-5 text-green-400" />, label: "MongoDB", color: "bg-emerald-900/20 border-emerald-800" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border ${tech.color} backdrop-blur-sm`}
                >
                  {tech.icon}
                  <span className="font-medium">{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-bold text-lg flex items-center gap-3 overflow-hidden shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <span className="relative z-10">View My Projects</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  →
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-gray-700/50 transition-all duration-300"
              >
                <span>Contact Me</span>
                <FaLaptopCode className="group-hover:text-cyan-400 transition-colors duration-300" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-6 mt-12"
            >
              {[
                { icon: <FaGithub />, href: "#", label: "GitHub", color: "hover:text-gray-300" },
                { icon: <FaLinkedin />, href: "#", label: "LinkedIn", color: "hover:text-blue-500" },
                { icon: <FaTwitter />, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 ${social.color} transition-all duration-300 hover:bg-gray-700/50`}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* Outer ring */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 animate-spin-slow">
                {/* Inner container */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black p-6">
                  {/* Profile image container */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-800 relative">
                    {/* Conditional rendering for image */}
                    {!hasImageError ? (
                      <Image
                        src="/MyImage.jpg" // यहाँ path सही 
                        alt="Ajay - MERN Stack Developer"
                        fill
                        className="object-cover"
                        priority
                        onError={() => setHasImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <span className="text-gray-500 text-lg font-semibold">Ajay</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating tech badges around photo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full border border-cyan-500/30 flex items-center justify-center"
              >
                <div className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700">
                  <SiNextdotjs className="w-8 h-8 text-gray-300" />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full border border-blue-500/30 flex items-center justify-center"
              >
                <div className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700">
                  <SiReact className="w-6 h-6 text-cyan-400" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-sm">Scroll Down</span>
          <FaChevronDown className="text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Current role indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed top-10 right-10 py-14 hidden lg:block z-50"
      >
        <div className="p-4 rounded-xl  bg-gray-800/50 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"></div>
            <span className="text-gray-300 font-medium">Currently available for projects</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
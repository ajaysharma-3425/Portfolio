"use client";

import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { useState } from "react";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-4 h-4" />,
      url: "https://github.com/ajaysharma-3425",
      color: "hover:bg-gray-700 "
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-4 h-4" />,
      url: "https://linkedin.com",
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-4 h-4" />,
      url: "https://twitter.com",
      color: "hover:bg-cyan-500"
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-4 h-4" />,
      url: "mailto:sharmajay07984@gmail.com",
      color: "hover:bg-red-500"
    }
  ];

  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-gray-300 hover:text-white" /> },
    { name: "React", icon: <SiReact className="w-4 h-4 text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4 text-teal-400" /> }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative z-10 border-t border-gray-800/50">
      {/* Gradient accent at top */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
      
      <div className="py-12 px-4 md:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand/About */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 mr-3">
                  <FaCode className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  Ajay.dev
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                MERN Stack Developer specializing in building modern, scalable web applications with Next.js, React, and Node.js.
              </p>
              
              {/* Tech stack */}
              <div className="flex items-center gap-3">
                <span className="text-white text-sm">Built with:</span>
                <div className="flex gap-2">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50"
                      title={tech.name}
                    >
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="w-4 h-4 text-cyan-400 mt-1 mr-3" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:sharmajay07984@gmail.com" 
                      className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm"
                    >
                      sharmajay07984@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCode className="w-4 h-4 text-cyan-400 mt-1 mr-3" />
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a 
                      href="https://github.com/ajaysharma-3425" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm"
                    >
                      github.com/ajaysharma-3425
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter / CTA */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Let's Connect</h4>
              <p className="text-gray-400 text-sm mb-6">
                Interested in collaboration or have a project in mind? Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 ${social.color} text-gray-300 hover:text-white transition-all duration-300`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Back to top button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all duration-300 text-sm"
              >
                <FaArrowUp className="w-3 h-3" />
                Back to Top
              </motion.button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center text-gray-500 text-sm">
              <span>© {currentYear} Ajay Sharma. All rights reserved.</span>
              <span className="mx-2">•</span>
              <motion.div
                onMouseEnter={() => setIsHeartHovered(true)}
                onMouseLeave={() => setIsHeartHovered(false)}
                className="flex items-center gap-1"
              >
                <span>Made with</span>
                {isHeartHovered ? (
                  <FaHeart className="w-4 h-4 text-red-500" />
                ) : (
                  <FaRegHeart className="w-4 h-4 text-red-500" />
                )}
                <span>in India</span>
              </motion.div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="/privacy" 
                className="text-gray-500 hover:text-cyan-300 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-gray-500 hover:text-cyan-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a 
                href="/sitemap" 
                className="text-gray-500 hover:text-cyan-300 transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>

          {/* Floating scroll to top button (mobile) */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 md:hidden p-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 shadow-lg shadow-cyan-500/30 z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
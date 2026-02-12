"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiMail,
  FiChevronRight,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const navLinks = [
  { name: "Home", href: "#home", icon: <FiHome className="w-4 h-4" /> },
  { name: "About", href: "#about", icon: <FiUser className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <FiCode className="w-4 h-4" /> },
  { name: "Projects", href: "#projects", icon: <FiBriefcase className="w-4 h-4" /> },
  { name: "Experience", href: "#experience", icon: <FiCode className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <FiMail className="w-4 h-4" /> },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ajaysharma-3425",
    icon: <FiGithub className="w-4 h-4" />,
    color: "hover:text-gray-300 text-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-sharma-082846344/",
    icon: <FiLinkedin className="w-4 h-4" />,
    color: "hover:text-blue-500 text-gray-300",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <FiTwitter className="w-4 h-4" />,
    color: "hover:text-cyan-400 text-gray-300",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active link based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveLink(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/90 backdrop-blur-xl border-b border-gray-800/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <Link
                href="#home"
                className="flex items-center space-x-3 group"
                onClick={() => handleLinkClick("#home")}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-2 rounded-full bg-gray-900 border border-gray-700">
                    <SiNextdotjs className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                    Ajay Sharma
                  </span>
                  <span className="text-xs text-gray-400 -mt-1">
                    MERN Stack Developer
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-gray-800">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeLink === link.href
                        ? "text-white bg-gradient-to-r from-cyan-900/30 to-blue-900/30"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {link.icon}
                      <span>{link.name}</span>
                    </div>
                    {activeLink === link.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 ml-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* ✅ FIXED: Download CV Button - अब सीधा Download होगा */}
              <motion.a
                href="/resume.pdf"
                download="Ajay_Sharma_Resume.pdf" // यहाँ अपने Resume का नाम दें
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full font-semibold text-sm flex items-center space-x-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <span>Download CV</span>
                <FiChevronRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-gray-900/95 backdrop-blur-xl z-50 border-l border-gray-800/50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-gray-800/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">
                        <SiNextdotjs className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">Ajay Sharma</h2>
                        <p className="text-sm text-gray-400">
                          MERN Stack Developer
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-1 px-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => handleLinkClick(link.href)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                            activeLink === link.href
                              ? "bg-gradient-to-r from-cyan-900/30 to-blue-900/30 text-white border border-cyan-800/30"
                              : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-2 rounded-lg ${
                                activeLink === link.href
                                  ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                                  : "bg-gray-800"
                              }`}
                            >
                              {link.icon}
                            </div>
                            <span className="font-medium">{link.name}</span>
                          </div>
                          <FiChevronRight
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeLink === link.href ? "translate-x-1" : ""
                            }`}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack in Mobile Menu */}
                  <div className="mt-12 px-4">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      Tech Stack
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          icon: <SiNextdotjs className="w-5 h-5" />,
                          name: "Next.js",
                          color: "bg-gray-800",
                        },
                        {
                          icon: <FaReact className="w-5 h-5 text-cyan-400" />,
                          name: "React",
                          color: "bg-cyan-900/20",
                        },
                        {
                          icon: <FaNodeJs className="w-5 h-5 text-green-500" />,
                          name: "Node.js",
                          color: "bg-green-900/20",
                        },
                        {
                          icon: <SiTypescript className="w-5 h-5 text-blue-500" />,
                          name: "TypeScript",
                          color: "bg-blue-900/20",
                        },
                      ].map((tech) => (
                        <div
                          key={tech.name}
                          className={`${tech.color} border border-gray-800 rounded-lg p-3 text-center`}
                        >
                          <div className="flex justify-center mb-2">
                            {tech.icon}
                          </div>
                          <span className="text-xs text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-gray-800/50">
                  <div className="flex justify-center space-x-4 mb-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 ${social.color} transition-all duration-300`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>

                  {/* ✅ FIXED: Mobile Download Resume Button */}
                  <motion.a
                    href="/resume.pdf"
                    download="Ajay_Sharma_Resume.pdf"
                    whileTap={{ scale: 0.95 }}
                    className="block w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 z-50"
        style={{
          scaleX: isScrolled ? 1 : 0,
          originX: 0,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
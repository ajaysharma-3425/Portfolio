"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Ajay.dev</h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

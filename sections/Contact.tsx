"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaUser, FaCheckCircle } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!form.subject.trim()) errors.subject = "Subject is required";
    if (!form.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setIsSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      value: "sharmaajay07984@gmail.com",
      link: "mailto:contact@ajay.dev",
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 7990083154",
      link: "tel:+917990083154",
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Location",
      value: "Ahmedabaad, India",
      link: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      platform: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/ajaysharma-3425",
      color: "text-gray-300 hover:bg-gray-700 hover:text-white",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://linkedin.com",
      color: "text-gray-300 hover:bg-blue-600 hover:text-white",
    },
    {
      platform: "Twitter",
      icon: <FaTwitter className="w-5 h-5" />,
      url: "https://twitter.com",
      color: "text-gray-300 hover:bg-cyan-500 hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Have a project in mind or want to discuss opportunities? Let's connect!
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto my-6 sm:my-7 md:my-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 shadow-xl h-full">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mr-3 sm:mr-4">
                  <FaUser className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">
                  Contact Information
                </h3>
              </div>

              <p className="text-gray-300 text-sm sm:text-base mb-8 sm:mb-10">
                Feel free to reach out for collaborations, job opportunities, or just to say hello!
              </p>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center p-3 sm:p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300 mr-3 sm:mr-4">
                      <div className="text-cyan-400 text-sm sm:text-base">
                        {info.icon}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-gray-400">{info.title}</div>
                      <div className="text-sm sm:text-base text-white font-medium break-words">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">
                  Connect with me
                </h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 sm:p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 ${social.color} transition-all duration-300`}
                      aria-label={social.platform}
                    >
                      <span className="text-sm sm:text-base">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 sm:mt-10 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/30">
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse mr-2 sm:mr-3"></div>
                  <span className="text-green-300 text-xs sm:text-sm font-medium">
                    Currently available for new projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 mr-3 sm:mr-4">
                  <FaPaperPlane className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-500">
                  Send a Message
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <FaCheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-green-400">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 px-2">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 sm:px-6 sm:py-3 bg-gray-800 border border-gray-700 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-700 transition-all duration-300"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          required
                          placeholder="John Doe"
                          className={`w-full p-3 sm:p-4 bg-gray-900/50 border ${
                            formErrors.name ? "border-red-500/50" : "border-gray-700/50"
                          } rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all duration-300 text-white text-sm sm:text-base`}
                          value={form.name}
                          onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                            setFormErrors((prev) => ({ ...prev, name: "" }));
                          }}
                        />
                        {formErrors.name && (
                          <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2">
                            {formErrors.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className={`w-full p-3 sm:p-4 bg-gray-900/50 border ${
                            formErrors.email ? "border-red-500/50" : "border-gray-700/50"
                          } rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all duration-300 text-white text-sm sm:text-base`}
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            setFormErrors((prev) => ({ ...prev, email: "" }));
                          }}
                        />
                        {formErrors.email && (
                          <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <input
                        required
                        placeholder="Project Inquiry"
                        className={`w-full p-3 sm:p-4 bg-gray-900/50 border ${
                          formErrors.subject ? "border-red-500/50" : "border-gray-700/50"
                        } rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all duration-300 text-white text-sm sm:text-base`}
                        value={form.subject}
                        onChange={(e) => {
                          setForm({ ...form, subject: e.target.value });
                          setFormErrors((prev) => ({ ...prev, subject: "" }));
                        }}
                      />
                      {formErrors.subject && (
                        <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2">
                          {formErrors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        required
                        placeholder="Tell me about your project..."
                        className={`w-full p-3 sm:p-4 bg-gray-900/50 border ${
                          formErrors.message ? "border-red-500/50" : "border-gray-700/50"
                        } rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all duration-300 text-white text-sm sm:text-base min-h-[120px] sm:min-h-[150px]`}
                        rows={5}
                        value={form.message}
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                          setFormErrors((prev) => ({ ...prev, message: "" }));
                        }}
                      />
                      {formErrors.message && (
                        <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2">
                          {formErrors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${
                      isSubmitting
                        ? "bg-gradient-to-r from-cyan-700 to-blue-800 cursor-not-allowed"
                        : "bg-gradient-to-r from-cyan-600 to-blue-700 hover:shadow-lg hover:shadow-cyan-500/20"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-gray-500 text-xs sm:text-sm text-center">
                    I typically respond within 24 hours. For urgent matters, please email me directly.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
            <SiNextdotjs className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3" />
            <span className="text-gray-400 text-xs sm:text-sm">
              This portfolio was built with Next.js and Tailwind CSS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
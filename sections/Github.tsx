"use client";

import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaUserFriends, FaCalendarAlt, FaCode, FaFire } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// Replace with your actual GitHub username
const GITHUB_USERNAME = "yourusername";

export default function Github() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contributions, setContributions] = useState(0);
  const [repositories, setRepositories] = useState(0);

  // Mock data - in a real app, you'd fetch from GitHub API
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setContributions(1287);
      setRepositories(24);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      label: "Total Contributions",
      value: contributions.toString(),
      icon: <FaCode className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      label: "Public Repositories",
      value: repositories.toString(),
      icon: <FaCodeBranch className="w-5 h-5" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      label: "Stars Earned",
      value: "46",
      icon: <FaStar className="w-5 h-5" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      label: "Followers",
      value: "89",
      icon: <FaUserFriends className="w-5 h-5" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="github" className="py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 mr-4">
              <SiGithub className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              GitHub Activity
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My coding journey and contributions on GitHub
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto my-8 rounded-full"></div>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-20`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}
                >
                  {stat.value}
                </motion.div>
              </div>
              <div className="text-lg font-semibold text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mr-4">
                <FaGithub className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400">GitHub Statistics</h3>
            </div>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=ajaysharma-3425&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117&title_color=22d3ee&text_color=ffffff&icon_color=22d3ee`}
                alt="GitHub Stats"
                className="rounded-xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 mr-4">
                <FaCode className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-purple-400">Top Languages</h3>
            </div>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=ajaysharma-3425&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&title_color=22d3ee&text_color=ffffff&icon_color=22d3ee`}
                alt="Top Languages"
                className="rounded-xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Additional GitHub Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Streak Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 mr-4">
                <FaFire className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-orange-400">Contribution Streak</h3>
            </div>
            <div className="flex justify-center">
              <img
                src={`https://streak-stats.demolab.com/?user=ajaysharma-3425&theme=dark&hide_border=true&background=0d1117&stroke=22d3ee&ring=22d3ee&fire=22d3ee&currStreakLabel=22d3ee`}
                alt="GitHub Streak"
                className="rounded-xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 mr-4">
                <FaCalendarAlt className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-green-400">Contribution Graph</h3>
            </div>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=ajaysharma-3425&theme=react-dark&bg_color=0d1117&color=22d3ee&line=22d3ee&point=ffffff&area=true&hide_border=true`}
                alt="Contribution Graph"
                className="rounded-xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-cyan-400">Recent Activity</h3>
            <div className="flex items-center text-cyan-300">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse mr-2"></div>
              <span className="text-sm font-medium">Active Now</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { action: "Pushed 3 commits to", repo: "portfolio-website", time: "2 hours ago" },
              { action: "Created a new repository", repo: "mern-ecommerce", time: "1 day ago" },
              { action: "Opened a pull request in", repo: "react-components", time: "2 days ago" },
              { action: "Starred repository", repo: "nextjs-boilerplate", time: "3 days ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-gray-800/50 mr-4">
                    <FaCode className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <span className="text-gray-400">{activity.action} </span>
                      <span className="text-cyan-300 font-medium">{activity.repo}</span>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Check out my GitHub profile to see all my projects, contributions, and open-source work.
          </p>
          <motion.a
            href={`https://github.com/ajaysharma-3425`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-green-500 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full font-semibold border border-gray-700 hover:bg-gray-700 transition-all duration-300"
          >
            <FaGithub className="w-5 h-5 mr-3 text-green-500" />
            Visit My GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
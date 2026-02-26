import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const categories = [
    { id: 'languages', label: 'LANGUAGES', icon: <Code2 className="w-4 h-4" /> },
    { id: 'frontend', label: 'FRONTEND', icon: <Globe className="w-4 h-4" /> },
    { id: 'backend', label: 'BACKEND', icon: <Server className="w-4 h-4" /> },
    { id: 'databases', label: 'DATABASES', icon: <Database className="w-4 h-4" /> },
    { id: 'tools', label: 'TOOLS', icon: <Wrench className="w-4 h-4" /> },
  ];

  const skillsData = {
    languages: [
      { name: 'C', level: 75 },
      { name: 'C++', level: 80 },
      { name: 'Java', level: 78 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 88 },
    ],
    frontend: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'Angular', level: 70 },
      { name: 'React', level: 75 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'EJS', level: 80 },
      { name: 'Python', level: 85 },
    ],
    databases: [
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MySQL', level: 75 },
      { name: 'Database Design', level: 80 },
    ],
    tools: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Linux', level: 80 },
      { name: 'PyCharm', level: 75 },
    ],
  };

  const allSkillTags = [
    'C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'ES6+',
    'Angular (Basic)', 'Node.js', 'Express.js', 'REST APIs', 'EJS',
    'MongoDB', 'PostgreSQL', 'Git & GitHub', 'VS Code', 'PyCharm',
    'Linux', 'Crawl4AI'
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-gray-100 via-purple-50 to-gray-100 dark:from-black dark:via-purple-950/10 dark:to-black py-20...">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-xs uppercase tracking-wider mb-6">
            TECHNICAL SKILLS
          </span>
          <h2 className="text-6xl md:text-8xl font-black font-display text-gray-900 dark:text-white leading-none">
            MY
            <br />
            TOOLKIT.
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/50 dark:bg-white/5 text-gray-700 dark:text-gray-400 hover:bg-white/70 dark:hover:bg-white/10'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Progress Bars */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900 dark:text-white font-semibold">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {allSkillTags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-white/70 dark:bg-white/5 hover:bg-purple-100 dark:hover:bg-purple-500/20 border border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/50 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MITRA',
      subtitle: 'AI-Based Legal & Administrative Assistance System',
      status: 'Completed',
      statusColor: 'blue',
      github: 'https://github.com/PixelMonk07/MITRA-legal-assistant',
      description: 'An AI-powered conversational legal and administrative assistant designed for integration with the Department of Justice (India) website. Helps users navigate complex legal and administrative information efficiently.',
      features: [
        'Intent detection and contextual query handling',
        'Conversational text and voice-based interaction',
        'Legal workflow and administrative guidance',
      ],
      tags: ['Python', 'NLP', 'Machine Learning', 'Conversational AI', 'Web Integration', 'DialogueFlow API'],
      gradient: 'from-pink-500/20 to-purple-500/20',
      image: '🏛️',
    },
    {
      title: 'Blogger',
      subtitle: 'Full-Stack Blog Application',
      status: 'Completed',
      statusColor: 'blue',
      github: 'https://github.com/PixelMonk07/appwriteBlog',
      live: 'https://appwrite-blog-lake-one.vercel.app/',
      description: 'A full-stack blog application that allows users to create, read, update, and delete blog posts, focusing on backend logic and clean UI design.',
      features: [
        'CRUD operations for blog posts',
        'Express routing and middleware usage',
        'Server-side rendering with EJS templates',
      ],
      tags: ['Node.js', 'Express.js', 'EJS', 'HTML', 'CSS', 'AppWrite'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      image: '📝',
    },
    {
      title: 'Kharcha',
      subtitle: 'A Simple yet powerful Expense-tracker',
      status: 'Completed',
      statusColor: 'blue',
      github: 'https://github.com/PixelMonk07/expense-tracker-MERN',
      live: 'https://expense-tracker-frontend-9a3u.onrender.com/login',
      description: 'A full-stack expense tracking application that helps users manage their income and expenses with insightful visualizations and data export capabilities.',
      features: [
        'User Authentication',
        'Income Management',
        'Expense Management',
        'Dashboard',
      ],
      tags: ['React', 'Recharts', 'Axios ', 'Moment.js', 'Lucide React', 'JWT', 'MongoDB', 'bcryptjs', 'Node.js', 'Express.js'],
      gradient: 'from-pink-500/20 to-purple-500/20',
      image: '💰',
    },
    {
      title: 'Secrets',
      subtitle: 'Full-Stack App to share secrets anonymously',
      status: 'Completed',
      statusColor: 'blue',
      github: 'https://github.com/PixelMonk07/Secrets-App',
      description: 'A web application that allows users to anonymously share secrets. Built with Node.js, Express, PostgreSQL, and features both local and Google OAuth authentication.',
      features: [
        'User Authentication (Local & Google OAuth)',
        'Secure Password Hashing with bcrypt',
        'Session Management',
        'PostgreSQL Database Integration',
        'Anonymous Secret Sharing',
        'Responsive Bootstrap UI'
      ],
      tags: ['Node.js', 'EJS', 'PostgreSQL', 'Passport.js', 'AppWrite', 'bcrypt'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      image: '🥷',
    },
    {
      title: 'Portfolio',
      subtitle: 'My professional Portfolio website',
      status: 'In Development',
      statusColor: 'green',
      github: 'https://github.com/PixelMonk07/portfolio-website',
      live: 'https://niloypal.netlify.app',
      description: 'My professional portfolio to showcase - My story, skills, projects, and a place to conatct me from all over the world',
      features: [
        'Dynamic Hero with Typewriter Identity Animation',
        'Dark / Light / System Theme Toggle',
        'Smooth Scroll + Animated Navigation',
        'Motion-Enhanced UI (Framer Motion Integration)',
      ],
      tags: ['React', 'Vite', 'TailwindCss', 'Framer-motion', 'Javascript', 'Frontend-development', 'Responsive-design', 'Dark-mode', 'Portfolio-website', 'modern-ui', 'Component-based-architecture', 'SPA'],
      gradient: 'from-pink-500/20 to-purple-500/20',
      image: '💼',
    },
  ];

  const statusColors = {
    green: 'bg-green-500/20 text-green-400 border-green-500/50',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-pink-500/20 rounded-full text-pink-400 text-xs uppercase tracking-wider mb-6">
            FEATURED WORK
          </span>
          <h2 className="text-6xl md:text-8xl font-black font-display text-gray-900 dark:text-white leading-none">
            PROJECTS.
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 flex flex-col"
            >
              {/* Project Image/Icon Header */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-8xl`}>
                {project.image}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide border ${statusColors[project.statusColor]}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Title */}
                <div>
                  <h3 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-purple-400 font-medium">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">→</span>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Github Button */}
                <div className="flex gap-4 pt-6 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className="group/btn px-6 py-3 w-full
                    max-w-[220px] justify-center bg-gray-900 text-white dark:bg-black hover:bg-purple-600 border border-purple-500/50 hover:border-purple-400 rounded-full  font-semibold flex items-center gap-2 transition-all duration-300">
                      <Github className="w-4 h-4" />
                      CODE
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  )}
                  {/* Live Button */}
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className="group/btn px-6 py-3 w-full
                    max-w-[220px] justify-center bg-gray-900 text-white dark:bg-black hover:bg-purple-600 border border-purple-500/50 hover:border-purple-400 rounded-full font-semibold flex items-center gap-2 transition-all duration-300">
                      🔗 LIVE
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const navLinks = ['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} 
              className="text-3xl font-black font-display text-gradient mb-2 cursor-pointer">
              NILOY
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Software Engineer & Full-Stack Developer
            </p>
          </motion.div>

          {/* Center - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Right - Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-6 py-3 bg-purple-100 dark:bg-purple-600/20 hover:bg-purple-200 dark:hover:bg-purple-600 border border-purple-300 dark:border-purple-500/50 hover:border-purple-400 dark:hover:border-purple-400 rounded-full text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              BACK TO TOP
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-gray-500 dark:text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} | Made with ❤️ by Niloy Pal</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

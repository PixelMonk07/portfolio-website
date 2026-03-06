import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import ResumeDownload from './ResumeDownload';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔥 Lock background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navItems = ['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold font-display cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="text-gradient">NILOY</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='hidden md:block'
            >
              <ResumeDownload variant="secondary" />
            </motion.div>

            {/* Right Section */}
            <div className="flex items-center gap-4">

              {/* Mobile Hamburger */}
              <button
                className="md:hidden text-gray-700 dark:text-gray-300"
                onClick={() => setIsOpen(true)}
              >
                <Menu size={26} />
              </button>

              {/* Socials (hide on very small screens if needed) */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="https://github.com/PixelMonk07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/niloypal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 text-white right-0 h-full w-72 bg-black/5 bg-gradient-to-b from-purple-950/30 to-black/10 backdrop-blur-xl border-l border-purple-500/10 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-8 p-6 text-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400 transition-colors"
            >
              {item}
            </a>
          ))}

          <div className="pt-4 md:hidden">
            <ResumeDownload variant="secondary" />
          </div>

          <div className="flex gap-6 pt-8 border-t border-white/10">
            <a
              href="https://github.com/PixelMonk07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/niloypal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
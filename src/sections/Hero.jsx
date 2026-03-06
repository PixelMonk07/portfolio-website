import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import workspaceImg from "../assets/workspace.webp"
import ResumeDownload from '../components/ResumeDownload';

const Hero = () => {
  const words = [
    "NILOY",
    "a FULL-STACK DEV",
    "a SOFTWARE ENGINEER",
    "a BOOKWORM",
    "a GAMER",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentWord = words[index];

    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 60 : 100);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 dark:from-black dark:via-purple-950/20 dark:to-black">
      {/* Gradient Glow Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            {/* Large Name at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-12"
            >
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none">
                <div className='text-gray-900/30 dark:text-white'>
                  <div>Hi</div>
                  <div>I am</div>
                </div>

                <div className="text-gradient inline-block min-h-[1.2em]">
                  {text}
                  <span className="blinking-cursor text-black dark:text-white">|</span>
                </div>
              </h1>
            </motion.div>
          </motion.div>

          {/* Right Side - Developer Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Placeholder for developer image - replace with actual image */}
              <img
                src={workspaceImg}
                alt="Niloy working on his development setup"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            </div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="pt-6"
            >
              <ResumeDownload variant="primary" />
            </motion.div>

            {/* Floating "DEV" text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-8 right-8 text-6xl md:text-8xl font-black text-white/5"
            >
              DEV
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-purple-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

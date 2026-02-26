import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code, Briefcase } from 'lucide-react';

const About = () => {
  const infoCards = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'LOCATION',
      value: 'India',
      color: 'pink',
    },
    {
      icon: <Code className="w-6 h-6" />,
      label: 'FOCUS',
      value: 'Full-Stack Development',
      color: 'blue',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: 'STATUS',
      value: 'Open to Opportunities',
      color: 'yellow',
    },
  ];

  const colorClasses = {
    pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  };

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Vertical Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex items-center justify-start lg:justify-center"
          >
            <div className="relative">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-xs uppercase tracking-wider mb-6 lg:mb-0"
              >
                ABOUT ME
              </motion.span>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black font-display text-gray-900/10 dark:text-white/10 lg:writing-vertical...">
                WHO
                <br className="lg:hidden" />
                <span className="ml-2 lg:ml-0">AM</span>
                <br className="lg:hidden" />
                <span className="ml-2 lg:ml-0">I?</span>
              </h2>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-9 space-y-8"
          >
            {/* Headline */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight"
            >
              "Curiosity is the key that unlocks my potential to do the impossible."
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl"
            >
              Student developer with a passion for building impactful digital solutions. I specialize in 
              full-stack web development and backend-centric application design, combining problem-solving 
              skills with modern technologies to create meaningful software.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-4 pt-8"
            >
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${colorClasses[card.color]}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${colorClasses[card.color]}`}>
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-semibold">
                        {card.label}
                      </p>
                      <p className="text-gray-400 dark:text-white font-semibold">
                        {card.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

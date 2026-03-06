import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B. Tech in ECE',
      institution: 'Narula Institute of Technology',
      location: 'Kolkata, West Bengal',
      duration: '2023 - 2027',
      grade: 'CGPA: 7.5/10',
      highlights: [
        'Relevant coursework: VLSI Design, DSP, Antena Design, Data Structures, DBMS',
        'Former member of IEEE Kolkata-chapter',
        'Participated in multiple hackathons and tech events - for more refer to experience section',
      ],
      color: 'purple',
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Julien Day School',
      location: 'Kolkata, West Bengal',
      duration: '2022 - 2023',
      grade: 'Percentage: 80%',
      highlights: [
        'Science stream with Computer Science',
        'School Cricket Team',
      ],
      color: 'blue',
    },
    {
      degree: 'Secondary School (10th)',
      institution: 'Julien Day School',
      location: 'Kolkata, West Bengal',
      duration: '2020 - 2021',
      grade: 'Percentage: 80%',
      highlights: [
        'Received merit certificate',
        'School Cricket Team'
      ],
      color: 'pink',
    },
  ];

  const colorClasses = {
    purple: {
      badge: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      icon: 'bg-purple-500/20 text-purple-400',
      line: 'bg-purple-500/30',
    },
    blue: {
      badge: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      icon: 'bg-blue-500/20 text-blue-400',
      line: 'bg-blue-500/30',
    },
    pink: {
      badge: 'bg-pink-500/20 text-pink-400 border-pink-500/50',
      icon: 'bg-pink-500/20 text-pink-400',
      line: 'bg-pink-500/30',
    },
  };

  return (
    <section id="education" className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-xs uppercase tracking-wider mb-6">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-6xl md:text-8xl font-black font-display text-gray-900 dark:text-white leading-none">
            EDUCATION.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-pink-500/50 transform md:-translate-x-1/2" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-full ${colorClasses[edu.color].icon} border-4 border-gray-100 dark:border-gray-900 flex items-center justify-center shadow-lg`}
                  >
                    <GraduationCap className="w-8 h-8" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Degree */}
                    <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4 text-lg">
                      {edu.institution}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Grade Badge */}
                    <div className="mb-4">
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${colorClasses[edu.color].badge}`}>
                        <Award className="w-4 h-4" />
                        {edu.grade}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
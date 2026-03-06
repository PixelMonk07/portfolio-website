import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      role: 'Tech-Conference Participant',
      company: 'GDG Kolkata',
      location: 'Kolkata, West Bengal',
      duration: 'Dec 2025',
      type: 'Tech-Event',
      description: 'Learned amazing topics on cloud-security and Google Cloud',
      responsibilities: [
        'Came to know about the cool topics of Cloud-layer Architecture',
        'Got introduced to cloud-security',
        'Got to know about the amazing things can be performed in Google-cloud',
        'Opportunity networking with amazing tech-geeks'
      ],
      technologies: ['FastAPI', 'Dialogflow ES', 'Groq API', 'HTML', 'CSS'],
      link: 'https://gdg.community.dev/gdg-kolkata/',
      color: 'blue',
    },
    {
      role: 'Web-Dev Certificate',
      company: 'UDEMY',
      location: 'Online',
      duration: 'July 2024 - Dec 2025',
      type: 'Certificate',
      description: 'Learned about the world of Web-Dev ',
      responsibilities: [
        'Came to know about the various topics of WEB-Dev',
        'Practiced to solve problems on Web-Designs and Web-Archictecture',
        'Faced multiple hurdles and setbacks, some were solved some were not (trying to fix these through project building)',
      ],
      technologies: ['FastAPI', 'Dialogflow ES', 'Groq API', 'HTML', 'CSS'],
      link: 'https://www.udemy.com/certificate/UC-71e39032-a3eb-497c-b695-a4eb3f024ca0/',
      color: 'purple',
    },
    {
      role: 'Hackathon Participant',
      company: 'KSHITIJ 2025 - IIT KGP',
      location: 'Kharagpur, West Bengal',
      duration: 'Jan 2025',
      type: 'Hackathon',
      description: 'SPARSH - Advanced NLP-based chatbot (for more on this refer to projects section)',
      responsibilities: [
        'Fixed bugs and added features of the chatbot',
        'Trained the chatbot on how to respond to different industry questions',
        'Developed and maintained the demo webite to show the integration of the chatbot',
      ],
      technologies: ['FastAPI', 'Dialogflow ES', 'Groq API', 'HTML', 'CSS'],
      link: 'https://www.ktj.in/',
      color: 'pink',
    },
    {
      role: 'Hackathon Participant',
      company: ' Smart India Hackathon 2024 - College Round',
      location: 'Kolkata, West Bengal',
      duration: 'Dec 2024',
      type: 'Hackathon',
      description: 'MITRA - AI-powered navigation Assistant for DOJ (for more on this refer to projects section)',
      responsibilities: [
        'Trained the chatbot on how to respond to different questions',
        'Developed and maintained the demo webite to show the integration of the chatbot',
      ],
      technologies: ['NLP', 'Web Speech API', 'Python', 'Fast API', 'DialogueFlow API', 'Groq API', 'HTML', 'CSS', 'JS'],
      link: 'https://sih.gov.in/',
      color: 'blue',
    },
    {
      role: 'Hackathon Participant',
      company: 'HACK-O-NiT',
      location: 'Kolkata, West Bengal',
      duration: 'May 2024',
      type: 'Hackathon',
      description: 'Hand-Tracking Gloves - for the blind',
      responsibilities: [
        'Collaborated with other members to build a hardware-based Hand-Tracking Glove, that helps the blind',
        'Developed and maintained responsive web dashboard of the hardware project using pure HTML, CSS, JS (cuz I was a little unaware of the web-dev part)',
        'Participated in code reviews and improved code quality in the hardware project',
      ],
      technologies: ['Arduino', 'Arduino-IDE', 'HTML', 'CSS', 'JS'],
      link: null,
      color: 'purple',
    },
  ];

  const colorClasses = {
    purple: {
      badge: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      icon: 'bg-purple-500/20 text-purple-400',
      tag: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    },
    blue: {
      badge: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      icon: 'bg-blue-500/20 text-blue-400',
      tag: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    },
    pink: {
      badge: 'bg-pink-500/20 text-pink-400 border-pink-500/50',
      icon: 'bg-pink-500/20 text-pink-400',
      tag: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    },
  };

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-b from-gray-100 via-purple-50 to-gray-100 dark:from-black dark:via-purple-950/10 dark:to-black py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-xs uppercase tracking-wider mb-6">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="text-6xl md:text-8xl font-black font-display text-gray-900 dark:text-white leading-none">
            EXPERIENCE.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-pink-500/50 transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
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
                    className={`w-16 h-16 rounded-full ${colorClasses[exp.color].icon} border-4 border-gray-100 dark:border-gray-900 flex items-center justify-center shadow-lg`}
                  >
                    <Briefcase className="w-8 h-8" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Role & Type Badge */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className={`px-3 py-1 rounded-full border text-xs font-semibold uppercase ${colorClasses[exp.color].badge}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Company */}
                    <div className="flex items-center gap-2 mb-4">
                      <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">
                        {exp.company}
                      </p>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                        Key Responsibilities:
                      </h4>
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-lg border text-xs font-medium ${colorClasses[exp.color].tag}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

export default Experience;
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);


    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true)
          formRef.current.reset();

          //Auto Hide toast after 3s
          setTimeout(() => {
            setSuccess(false)
          }, 3000);
        },
        (error) => {
          setLoading(false);
          setError("Failed to send message. Please try again.");
        });
  };

  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'palniloy282@gmail.com',
      href: 'mailto:palniloy282@gmail.com',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub Profile',
      value: 'github.com/PixelMonk07',
      href: 'https://github.com/PixelMonk07',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/niloypal/',
      href: 'https://www.linkedin.com/in/niloypal/',
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-100 via-purple-50 to-gray-100 dark:from-black dark:via-purple-950/10 dark:to-black py-20 relative overflow-hidden">
      {success && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-gray-900 dark:text-white px-6 py-4 rounded-xl shadow-lg animate-slide-in">
          Message sent successfully!
        </div>
      )}
      {error && (
        <div className="fixed bottom-6 right-6 bg-red-600 text-gray-900 dark:text-white px-6 py-4 rounded-xl shadow-lg">
          {error}
        </div>
      )}
      {/* Background Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-400 text-xs uppercase tracking-wider mb-6">
            GET IN TOUCH
          </span>
          <h2 className="text-6xl md:text-8xl font-black font-display text-gray-900 dark:text-white leading-none mb-6">
            LET'S
            <br />
            CONNECT.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 p-6 bg-white/5 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/50 rounded-2xl transition-all duration-300"
              >
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-gray-900 dark:text-white transition-all duration-300">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {link.label}
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium group-hover:text-purple-300 transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-black dark:bg-gradient-to-br dark:from-white/5 dark:to-white/[0.02] border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm uppercase tracking-wider mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 outline-none transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm uppercase tracking-wider mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 outline-none transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm uppercase tracking-wider mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 outline-none resize-none transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`group w-full px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg
                ${loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-purple-500/50 hover:shadow-purple-500/70"
                  }`}
              >
                <Send className={`w-5 h-5 transition-transform ${loading ? "animate-spin" : "group-hover:translate-x-1"}`} />
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

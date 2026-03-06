import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle } from 'lucide-react';

const ResumeDownload = ({ variant = 'primary' }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);

    // Simulate download delay (optional)
    setTimeout(() => {
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/resume/Niloy_Pal_Resume.pdf'; // Path to your resume in public folder
      link.download = 'Niloy_Pal_Resume.pdf'; // Name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloading(false);
      setDownloaded(true);

      // Reset downloaded state after 3 seconds
      setTimeout(() => {
        setDownloaded(false);
      }, 3000);
    }, 500);
  };

  // Primary variant (for Hero/About sections)
  if (variant === 'primary') {
    return (
      <motion.button
        onClick={handleDownload}
        disabled={downloading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg ${
          downloading
            ? 'bg-gray-400 cursor-wait'
            : downloaded
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-purple-500/50 hover:shadow-purple-500/70'
        } text-white`}
      >
        {downloading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <Download className="w-5 h-5" />
            </motion.div>
            Downloading...
          </>
        ) : downloaded ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Downloaded!
          </>
        ) : (
          <>
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </>
        )}
      </motion.button>
    );
  }

  // Secondary variant (for Navbar)
  if (variant === 'secondary') {
    return (
      <motion.button
        onClick={handleDownload}
        disabled={downloading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-3 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 text-sm ${
          downloading
            ? 'bg-gray-400 cursor-wait text-white'
            : downloaded
            ? 'bg-green-600 hover:bg-green-700 text-white'
            : 'bg-purple-600 hover:bg-purple-700 text-white'
        }`}
      >
        {downloading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <Download className="w-4 h-4" />
          </motion.div>
        ) : downloaded ? (
          <CheckCircle className="w-4 h-4" />
        ) : (
          <Download className="w-4 h-4" />
        )}
        <span className='wd-3'>
          {downloading ? 'Downloading...' : downloaded ? 'Downloaded!' : 'Resume'}
        </span>
      </motion.button>
    );
  }

  // Icon only variant (compact)
  return (
    <motion.button
      onClick={handleDownload}
      disabled={downloading}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-2 rounded-lg transition-all duration-300 ${
        downloading
          ? 'bg-gray-400 cursor-wait'
          : downloaded
          ? 'bg-green-600 hover:bg-green-700'
          : 'bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white'
      }`}
      aria-label="Download Resume"
    >
      {downloading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <Download className="w-5 h-5" />
        </motion.div>
      ) : downloaded ? (
        <CheckCircle className="w-5 h-5 text-white" />
      ) : (
        <Download className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default ResumeDownload;
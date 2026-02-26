import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [showOptions, setShowOptions] = useState(false);

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ];

  const currentTheme = themes.find(t => t.value === theme);
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="relative">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setShowOptions(!showOptions)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/5"
        aria-label="Toggle theme"
      >
        <CurrentIcon size={20} />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {showOptions && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowOptions(false)}
            />

            {/* Options Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-40 bg-gray-900 dark:bg-gray-800 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-xl shadow-xl overflow-hidden z-50"
            >
              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                return (
                  <button
                    key={themeOption.value}
                    onClick={() => {
                      setTheme(themeOption.value);
                      setShowOptions(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      theme === themeOption.value
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-300 dark:text-gray-300 light:text-gray-700 hover:bg-purple-500/10'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{themeOption.label}</span>
                    {theme === themeOption.value && (
                      <motion.div
                        layoutId="activeTheme"
                        className="ml-auto w-2 h-2 bg-purple-400 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
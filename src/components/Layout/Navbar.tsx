import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Bridal', path: '/bridal' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Book Now', path: '/book' },
  { name: 'Contact', path: '/contact' },
];

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export default function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 dark:bg-luxury-black/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-rose-gold-500" />
            <span className="font-playfair text-xl sm:text-2xl font-semibold text-white dark:text-white">
              Jugnu's <span className="text-rose-gold-500">Salon</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-montserrat uppercase tracking-wider transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-rose-gold-500'
                    : 'text-white dark:text-white hover:text-rose-gold-500'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-gold-500"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4"> 
           <Link
              to="/book"
              className="hidden md:inline-flex luxury-btn text-xs"
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-luxury-black dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-luxury-black dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-luxury-black border-t border-gray-100 dark:border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-montserrat uppercase tracking-wider transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'bg-rose-gold-500/10 text-rose-gold-500'
                        : 'text-luxury-black dark:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link to="/book" className="luxury-btn w-full text-center">
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Phone, MapPin, Clock, Mail, Facebook, Instagram, Send } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Bridal Makeup', path: '/bridal' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Pricing', path: '/pricing' },
];

const services = [
  { name: 'Bridal Makeup', path: '/services?category=bridal' },
  { name: 'Party Makeup', path: '/services?category=party' },
  { name: 'Hair Services', path: '/services?category=hair' },
  { name: 'Skin Treatments', path: '/services?category=skin' },
  { name: 'Nail Art', path: '/services?category=nails' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-luxury-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-rose-gold-500" />
              <span className="font-playfair text-2xl font-semibold">
                Jugnu's <span className="text-rose-gold-500">Salon</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover your inner beauty at Jugnu's Salon. Premium beauty, hair & bridal makeup services in Jhelum.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-gold-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-gold-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-gold-500 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-rose-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 text-sm hover:text-rose-gold-500 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Deen Arcade, Near Junaid Jamshed,<br />
                  Civil Lines, Jhelum
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-gold-500" />
                <a href="tel:03320004747" className="text-gray-400 text-sm hover:text-rose-gold-500 transition-colors">
                  0332-0004747
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-gold-500" />
                <a href="mailto:info@jugnus.com" className="text-gray-400 text-sm hover:text-rose-gold-500 transition-colors">
                  info@jugnus.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-rose-gold-500" />
                <span className="text-gray-400 text-sm">10:30 AM – 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-12 border-b border-white/10">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="font-playfair text-xl font-semibold mb-2">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Get exclusive offers and beauty tips delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-gold-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="luxury-btn"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Jugnu's Salon – Jhelum Branch. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-rose-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-rose-gold-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

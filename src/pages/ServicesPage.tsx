import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Crown, Scissors, Palette, Hand, Droplet, Flower2, Gem, Heart, Paintbrush2, Eye, Zap, Star } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'bridal', name: 'Bridal' },
  { id: 'makeup', name: 'Makeup' },
  { id: 'hair', name: 'Hair' },
  { id: 'skin', name: 'Skin & Spa' },
  { id: 'nails', name: 'Nails' },
];

const services = [
  // Bridal
  { id: 1, name: 'Bridal Makeup', category: 'bridal', icon: Crown, image: 'https://images.pexels.com/photos/7945689/pexels-photo-7945689.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Complete bridal makeover for your special day with premium products and techniques.' },
  { id: 2, name: 'Nikah Makeup', category: 'bridal', icon: Sparkles, image: 'https://images.pexels.com/photos/1967445/pexels-photo-1967445.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Elegant and traditional Nikah look with delicate makeup styling.' },
  { id: 3, name: 'Mehndi Makeup', category: 'bridal', icon: Flower2, image: 'https://images.pexels.com/photos/1453448/pexels-photo-1453448.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Vibrant and colorful Mehndi look with creative makeup artistry.' },
  { id: 4, name: 'Walima Makeup', category: 'bridal', icon: Gem, image: 'https://images.pexels.com/photos/3757141/pexels-photo-3757141.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Glamorous Walima look with sophisticated styling.' },

  // Makeup
  { id: 5, name: 'Party Makeup', category: 'makeup', icon: Palette, image: 'https://images.pexels.com/photos/3993291/pexels-photo-3993291.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Stunning party looks for all occasions with contouring and highlighting.' },
  { id: 6, name: 'Engagement Makeup', category: 'makeup', icon: Star, image: 'https://images.pexels.com/photos/3757153/pexels-photo-3757153.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Beautiful engagement day makeup with elegant styling.' },

  // Hair
  { id: 7, name: 'Hair Cut', category: 'hair', icon: Scissors, image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Professional haircuts for all styles and preferences.' },
  { id: 8, name: 'Hair Styling', category: 'hair', icon: Sparkles, image: 'https://images.pexels.com/photos/1528610/pexels-photo-1528610.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Creative hair styling for events and special occasions.' },
  { id: 9, name: 'Hair Coloring', category: 'hair', icon: Paintbrush2, image: 'https://images.pexels.com/photos/1303943/pexels-photo-1303943.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Premium hair coloring with ammonia-free products.' },
  { id: 10, name: 'Hair Spa', category: 'hair', icon: Droplet, image: 'https://images.pexels.com/photos/3993425/pexels-photo-3993425.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Relaxing hair spa treatments for deep conditioning.' },
  { id: 11, name: 'Keratin Treatment', category: 'hair', icon: Zap, image: 'https://images.pexels.com/photos/3993295/pexels-photo-3993295.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Professional keratin smoothing treatment for silky hair.' },

  // Skin & Spa
  { id: 12, name: 'Facials', category: 'skin', icon: Heart, image: 'https://images.pexels.com/photos/8524706/pexels-photo-8524706.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Premium facials for glowing, healthy skin.' },
  { id: 13, name: 'Cleanup', category: 'skin', icon: Sparkles, image: 'https://images.pexels.com/photos/3764197/pexels-photo-3764197.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Deep cleansing cleanup for fresh, clean skin.' },
  { id: 14, name: 'Manicure', category: 'skin', icon: Hand, image: 'https://images.pexels.com/photos/4502714/pexels-photo-4502714.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Luxurious manicure for beautiful hands.' },
  { id: 15, name: 'Pedicure', category: 'skin', icon: Hand, image: 'https://images.pexels.com/photos/4500703/pexels-photo-4500703.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Relaxing pedicure for beautiful feet.' },
  { id: 16, name: 'Waxing', category: 'skin', icon: Droplet, image: 'https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Professional waxing services for smooth skin.' },
  { id: 17, name: 'Threading', category: 'skin', icon: Eye, image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Precise threading for perfect eyebrows.' },
  { id: 18, name: 'Skin Treatments', category: 'skin', icon: Heart, image: 'https://images.pexels.com/photos/7862647/pexels-photo-7862647.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Advanced skin treatments for various concerns.' },

  // Nails
  { id: 19, name: 'Nail Art', category: 'nails', icon: Palette, image: 'https://images.pexels.com/photos/1453448/pexels-photo-1453448.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Creative nail art designs for every occasion.' },
  { id: 20, name: 'Eyelash Extensions', category: 'nails', icon: Eye, image: 'https://images.pexels.com/photos/2735485/pexels-photo-2735485.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Beautiful eyelash extensions for stunning eyes.' },
  { id: 21, name: 'Beauty Packages', category: 'nails', icon: Gem, image: 'https://images.pexels.com/photos/3993425/pexels-photo-3993425.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Complete beauty packages for head-to-toe care.' },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-soft-pink-50 dark:bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-rose-gold-500 font-montserrat uppercase tracking-widest text-sm font-semibold">
              Our Services
            </span>
            <h1 className="heading-xl text-luxury-black dark:text-white mt-4 mb-6">
              Premium Beauty{' '}
              <span className="text-rose-gold-500">Services</span>
            </h1>
            <p className="text-body">
              From bridal makeovers to everyday beauty services, we offer a complete range of premium treatments tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-luxury-black">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-montserrat uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-rose-gold-500 text-luxury-black'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white hover:bg-rose-gold-500/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group luxury-card overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-gold-500/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-rose-gold-500" />
                    </div>
                    <h3 className="text-lg font-playfair text-luxury-black dark:text-white">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/book"
                    className="inline-flex items-center text-rose-gold-500 text-sm font-montserrat uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-soft-pink-50 dark:bg-luxury-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="heading-lg text-luxury-black dark:text-white mb-6"
          >
            Can't Find What You're Looking For?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body mb-8"
          >
            Contact us for custom beauty packages and special requests. We're here to fulfill all your beauty needs.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="luxury-btn">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/pricing" className="luxury-btn-outline">
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

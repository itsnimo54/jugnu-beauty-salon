import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Sparkles, Heart, Gem } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const bridalServices = [
  {
    id: 'nikah',
    title: 'Nikah Bridal',
    subtitle: 'Elegant & Traditional',
    icon: Sparkles,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-DJeRbZ6DRh9RpkX60tg0lYBR_e4uOpzV1OUA9Ar2w&s=10',
    description: 'Celebrate your Nikah ceremony with an elegant and sophisticated look. Our traditional bridal makeup enhances your natural beauty while respecting cultural elegance. We focus on soft, dewy skin, subtle contouring, and delicate eye makeup that photographs beautifully.',
    features: ['Traditional Elegant Look', 'Soft Dewy Skin', 'Subtle Contouring', 'Delicate Eye Makeup', 'Premium Products', 'HD Airbrush Makeup'],
    price: 'Rs. 10,000',
  },
  {
    id: 'mehndi',
    title: 'Mehndi Bridal',
    subtitle: 'Vibrant & Colorful',
    icon: Heart,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIkpmOQHpov01_Y2yOrrsUTSvuCVuif0hZ6z9E4vZPA&s=10',
    description: 'Make your Mehndi celebration unforgettable with vibrant and colorful makeup that complements the festive atmosphere. Our artists create stunning looks with bold colors, glitter accents, and creative styling that matches your Mehndi outfit.',
    features: ['Vibrant Color Palette', 'Glitter Accents', 'Creative Eye Art', 'Long-lasting Formula', 'Hair Styling Included', 'Touch-up Kit Provided'],
    price: 'Rs. 20,000',
  },
  {
    id: 'barat',
    title: 'Barat Bridal',
    subtitle: 'Grand & Glamorous',
    icon: Crown,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuO61mCIWPDhMCGjA1qmtKhbnXTiq1NGD6cpS8u0SYQ&s=10',
    description: 'Your Barat day deserves the most glamorous look. Our signature bridal package includes comprehensive makeup, hair styling, and dupatta setting. We create a stunning, camera-ready look that will make you the star of your special day.',
    features: ['Signature Bridal Look', 'Complete Hair Styling', 'Dupatta Setting', 'Premium HD Makeup', 'Highlight & Contour', 'Jewelry Consultation'],
    price: 'Rs. 35,000+',
  },
  {
    id: 'walima',
    title: 'Walima Bridal',
    subtitle: 'Sophisticated Beauty',
    icon: Gem,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJ0S5g4hPw2Th0VCdDx2U5NH0FaLpIDSO7BQ6m_aHTA&s=10',
    description: 'For your Walima reception, we create a sophisticated and refined look that radiates elegance. Our Walima makeup focuses on achieving a flawless, luminous complexion with perfectly sculpted features and elegant styling.',
    features: ['Sophisticated Look', 'Luminous Complexion', 'Perfect Contouring', 'Elegant Hair Styling', 'Long-wear Formula', 'Professional Photography Ready'],
    price: 'Rs. 25,000',
  },
];

export default function BridalPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3013854/pexels-photo-3013854.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Bridal Makeup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-rose-gold-500 font-montserrat uppercase tracking-widest text-sm font-semibold">
              Bridal Makeup Services
            </span>
            <h1 className="heading-xl text-white mt-4 mb-6">
              Your Dream{' '}
              <span className="text-rose-gold-500">Bridal Look</span>
            </h1>
            <p className="text-xl text-gray-300">
              Every bride deserves to feel like a queen on her special day. Our expert bridal artists create stunning looks that last from your first photo to your last dance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bridal Services */}
      {bridalServices.map((service, idx) => (
        <section
          key={service.id}
          className={`section-padding ${idx % 2 === 0 ? 'bg-white dark:bg-luxury-black' : 'bg-soft-pink-50 dark:bg-luxury-charcoal'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className={idx % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                      <span className="text-rose-gold-500 font-cormorant text-2xl">{service.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={idx % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-gold-500/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-rose-gold-500" />
                  </div>
                  <div>
                    <h2 className="heading-md text-luxury-black dark:text-white">
                      {service.title}
                    </h2>
                    <span className="text-sm text-rose-gold-500 font-montserrat uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-body mb-8">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-gold-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/book?service=${service.id}`} className="luxury-btn">
                  Book {service.title}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Full Package */}
      <section className="section-padding bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-rose-gold-500 font-montserrat uppercase tracking-widest text-sm font-semibold">
              Complete Bridal Package
            </span>
            <h2 className="heading-lg text-white mt-4 mb-6">
              All Events Package
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book all four events (Nikah, Mehndi, Barat, Walima) and save! Our complete bridal package includes makeup, hair styling, and premium touch-up kits for every event.
            </p>
            <div className="inline-block p-8 rounded-3xl bg-white/5 border border-white/10">
              <p className="text-rose-gold-500 font-cormorant text-4xl font-semibold mb-2">Rs. 75,000</p>
              <p className="text-gray-400 text-sm">For all 4 events</p>
            </div>
            <div className="mt-8">
              <Link to="/book?package=full-bridal" className="luxury-btn text-lg px-10 py-5">
                Book Complete Package
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-soft-pink-50 dark:bg-luxury-charcoal">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="heading-lg text-luxury-black dark:text-white text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {[
              { q: 'How long does bridal makeup take?', a: 'Complete bridal makeup typically takes 2-3 hours. For Barat bridal, we recommend arriving 3 hours early to allow time for hair styling and dupatta setting.' },
              { q: 'Do you provide a trial session?', a: 'Yes! We highly recommend a trial session 1-2 weeks before your event. Trial sessions are available at a separate charge and let us adjust the look to your preferences.' },
              { q: 'What products do you use?', a: 'We use premium international brands like MAC, Huda Beauty, Charlotte Tilbury, and NARS. All products are long-wearing and HD camera friendly.' },
              { q: 'Do you travel to the venue?', a: 'Yes, we offer on-location services for bridal events within Jhelum city. Additional charges may apply for outstation travel.' },
            ].map((faq, idx) => (
              <motion.div
                key={faq.q}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="luxury-card p-6"
              >
                <h3 className="text-lg font-playfair text-luxury-black dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

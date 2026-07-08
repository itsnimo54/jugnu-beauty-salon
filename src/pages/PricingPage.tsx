import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Crown, Sparkles, Heart, Gem } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const pricingPlans = [
  {
    name: 'Party Makeup',
    price: 'Rs. 6,000',
    icon: Star,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhmgNpoESjzZBEzJXG44HRWHbXdo37bkbVwIpxmTEAA&s=10',
    features: [
      'HD Airbrush Makeup',
      'Eye Makeup',
      'Lip Color',
      'Basic Hair Styling',
      'Touch-up Kit',
      'Long-lasting Formula',
    ],
    popular: false,
  },
  {
    name: 'Nikah Bridal',
    price: 'Rs. 10,000',
    icon: Sparkles,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpmx1qbhMYxgMI88KhIYr_V11Z6BXydIebommYPWLlg&s=10',
    features: [
      'Premium HD Makeup',
      'Complete Hair Styling',
      'Dupatta Setting',
      'Jewelry Coordination',
      'Premium Products',
      'Touch-up Kit Included',
    ],
    popular: false,
  },
  {
    name: 'Mehndi Bridal',
    price: 'Rs. 20,000',
    icon: Heart,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX834N9lY97JcKP7bMY7lbCbxvsnILFuKuidaK6H77Sg&s=10',
    features: [
      'Vibrant Color Makeup',
      'Glitter & Shimmer Effects',
      'Creative Hair Styling',
      'Traditional Look',
      'Complete Dupatta Setting',
      'Touch-up Kit Provided',
      'On-site Service Available',
    ],
    popular: true,
  },
  {
    name: 'Barat Bridal',
    price: 'Rs. 35,000+',
    icon: Crown,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CLTmdRtS8tkM12mi0r8uNYXInh_j7zNcso2vtof9rQ&s=10',
    features: [
      'Signature HD Makeup',
      'Complete Hair Makeover',
      'Premium Dupatta Setting',
      'Jewelry Consultation',
      'International Products',
      'Premium Touch-up Kit',
      'Trial Session Included',
      'On-site Service',
    ],
    popular: false,
  },
];

const hairPricing = [
  { name: 'Hair Cut', price: 'Rs. 500 - 2,000' },
  { name: 'Hair Styling', price: 'Rs. 1,500 - 5,000' },
  { name: 'Hair Coloring', price: 'Rs. 3,000 - 15,000' },
  { name: 'Hair Spa', price: 'Rs. 2,000 - 5,000' },
  { name: 'Keratin Treatment', price: 'Rs. 10,000 - 25,000' },
];

const skinPricing = [
  { name: 'Facials', price: 'Rs. 1,500 - 8,000' },
  { name: 'Cleanup', price: 'Rs. 500 - 1,500' },
  { name: 'Manicure', price: 'Rs. 800 - 2,000' },
  { name: 'Pedicure', price: 'Rs. 800 - 2,000' },
  { name: 'Waxing (Full Body)', price: 'Rs. 2,000 - 5,000' },
  { name: 'Threading', price: 'Rs. 100 - 500' },
];

export default function PricingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-soft-pink-50 dark:bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-rose-gold-500 font-montserrat uppercase tracking-widest text-sm font-semibold">
              Our Pricing
            </span>
            <h1 className="heading-xl text-luxury-black dark:text-white mt-4 mb-6">
              Transparent &{' '}
              <span className="text-rose-gold-500">Premium</span>
            </h1>
            <p className="text-body">
              We believe in honest, transparent pricing. All our services use premium products and are delivered by expert stylists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bridal Pricing */}
      <section className="section-padding bg-white dark:bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-luxury-black dark:text-white mb-4">
              Bridal Makeup Packages
            </h2>
            <p className="text-body">
              Make your special day unforgettable with our premium bridal packages.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full bg-rose-gold-500 text-luxury-black text-xs font-montserrat uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <div
                  className={`h-full luxury-card p-6 flex flex-col ${
                    plan.popular
                      ? 'border-2 border-rose-gold-500'
                      : ''
                  }`}
                >
                  {/* Image */}
                  <div className="h-72 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-gold-500/10 flex items-center justify-center">
                      <plan.icon className="w-5 h-5 text-rose-gold-500" />
                    </div>
                    <h3 className="text-lg font-playfair text-luxury-black dark:text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <p className="text-rose-gold-500 font-cormorant text-3xl font-semibold mb-6">
                    {plan.price}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-rose-gold-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/book"
                    className={`w-full text-center py-3 rounded-full font-montserrat text-sm uppercase tracking-wider transition-all duration-300 ${
                      plan.popular
                        ? 'bg-rose-gold-500 text-luxury-black hover:bg-rose-gold-400'
                        : 'bg-gray-100 dark:bg-white/5 text-luxury-black dark:text-white hover:bg-rose-gold-500/10'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Package */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 rounded-3xl bg-luxury-black dark:bg-luxury-charcoal text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Gem className="w-8 h-8 text-rose-gold-500" />
              <h3 className="text-2xl font-playfair text-white">
                Complete Bridal Package
              </h3>
            </div>
            <p className="text-gray-400 mb-4">All 4 Events (Nikah, Mehndi, Barat, Walima)</p>
            <p className="text-rose-gold-500 font-cormorant text-4xl font-semibold mb-6">
              Rs. 75,000
            </p>
            <Link to="/book?package=full-bridal" className="luxury-btn">
              Book Complete Package
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Other Pricing */}
      <section className="section-padding bg-soft-pink-50 dark:bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hair Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md text-luxury-black dark:text-white mb-8">
                Hair Services
              </h2>
              <div className="luxury-card p-6">
                <ul className="divide-y divide-gray-100 dark:divide-white/10">
                  {hairPricing.map((item) => (
                    <li key={item.name} className="flex items-center justify-between py-4">
                      <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                      <span className="font-montserrat text-rose-gold-500">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Skin Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-md text-luxury-black dark:text-white mb-8">
                Skin & Spa Services
              </h2>
              <div className="luxury-card p-6">
                <ul className="divide-y divide-gray-100 dark:divide-white/10">
                  {skinPricing.map((item) => (
                    <li key={item.name} className="flex items-center justify-between py-4">
                      <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                      <span className="font-montserrat text-rose-gold-500">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-white dark:bg-luxury-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            * Prices may vary based on hair length, thickness, and product selection.
            Contact salon for latest offers and custom packages.
          </p>
        </div>
      </section>
    </div>
  );
}

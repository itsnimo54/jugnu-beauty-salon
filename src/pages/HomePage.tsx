import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Clock, Sparkles, Heart, Scissors, Palette, Crown, Check } from 'lucide-react';

const features = [
  { icon: Users, text: 'Professional Makeup Artists' },
  { icon: Crown, text: 'Luxury Bridal Makeovers' },
  { icon: Scissors, text: 'Hair Specialists' },
  { icon: Heart, text: 'Skin Care Experts' },
  { icon: Star, text: 'Friendly Environment' },
  { icon: Sparkles, text: 'Premium Products' },
];

const stats = [
  { value: '5000+', label: 'Happy Clients', icon: Users },
  { value: '4.4', label: 'Google Rating', icon: Star },
  { value: '15+', label: 'Professional Staff', icon: Award },
  { value: '10+', label: 'Years Experience', icon: Clock },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=1200&auto=format&fit=crop"
            alt="Beautiful bride in red bridal dress"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/40 to-luxury-black/80" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-[10%] hidden lg:block"
        >
          <Sparkles className="w-12 h-12 text-rose-gold-500/40" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-48 right-[15%] hidden lg:block"
        >
          <Palette className="w-16 h-16 text-rose-gold-500/30" />
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-[20%] hidden lg:block"
        >
          <Crown className="w-10 h-10 text-rose-gold-500/40" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-rose-gold-400 text-sm font-montserrat uppercase tracking-widest mb-6">
              Jugnu's Salon Jhelum
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl text-white mb-6"
          >
            Reveal Your{' '}
            <span className="text-gradient-gold">Beauty</span>
            <br />
            with Jugnu's Salon
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Premium Beauty, Hair & Bridal Makeup Services in Jhelum.
            Transform your look with our expert stylists.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/book" className="luxury-btn">
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/services" className="luxury-btn-outline">
              View Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-rose-gold-500"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-soft-pink-50 dark:bg-luxury-black section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-rose-gold-500/10 flex items-center justify-center mb-3">
                  <feature.icon className="w-6 h-6 text-rose-gold-500" />
                </div>
                <span className="text-sm font-medium text-luxury-black dark:text-white">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white dark:bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBbfRD3WKb5bFtSeeXeJLmoKIIEHO7W2BYlBW63QQ1A&s=10"
                  alt="Jugnu's Salon Premium Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 lg:right-12 bg-white dark:bg-luxury-black rounded-2xl p-6 shadow-luxury"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-rose-gold-500 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-playfair font-bold text-luxury-black dark:text-white">10+</p>
                    <p className="text-sm text-gray-500">Years of Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-rose-gold-500 font-montserrat uppercase tracking-widest text-sm font-semibold">
                About Us
              </span>
              <h2 className="heading-lg text-luxury-black dark:text-white mt-4 mb-6">
                Where Beauty Meets{' '}
                <span className="text-rose-gold-500">Perfection</span>
              </h2>
              <p className="text-body mb-6">
                Welcome to Jugnu's Salon – Jhelum Branch, your premier destination for exceptional beauty and bridal services in Jhelum. With over a decade of experience, we have established ourselves as one of the most trusted beauty salons in the region.
              </p>
              <p className="text-body mb-8">
                Our team of professional makeup artists, hair specialists, and skincare experts are dedicated to enhancing your natural beauty. We use only premium products and cutting-edge techniques to deliver results that exceed your expectations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Professional Makeup Artists', 'Luxury Bridal Makeovers', 'Premium Products', 'Friendly Environment'].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-rose-gold-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-rose-gold-500" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="luxury-btn">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-luxury-black dark:bg-luxury-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-rose-gold-500/10 mb-4">
                  <stat.icon className="w-8 h-8 text-rose-gold-500" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400 font-montserrat uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-soft-pink-50 dark:bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-rose-gold-500 font-montserrat uppercase tracking-widest text-sm font-semibold">
              Our Services
            </span>
            <h2 className="heading-lg text-luxury-black dark:text-white mt-4">
              Premium Beauty Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Bridal Makeup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsI8tXcv1GLpXO-Q7dRVkYLe1gQ_wHsGJ5ryRp4KCVlqhGPG_0iQRrCJs&s=10' },
              { title: 'Hair Services', image: 'https://www.newtimeshair.com/wp-content/uploads/2022/06/hair-treatment-service.png' },
              { title: 'Skin Treatments', image: 'https://www.royalcosmeticsurgery.com.pk/wp-content/uploads/2023/10/Facial-Treatments-in-Islamabad-Rawalpindi-and-Pakistan.webp' },
              { title: 'Nail Art', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wYCpQRYo0Mw1FAol6Zrx3FtIn6-j_gksDtI4FBxYHA&s=10' },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-playfair text-white mb-2">{service.title}</h3>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-rose-gold-500 text-sm font-montserrat uppercase tracking-wider group-hover:translate-x-2 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="luxury-btn">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/85807/pexels-photo-85807.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Beauty salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="heading-lg text-white mb-6"
          >
            Ready for Your Transformation?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8"
          >
            Book your appointment today and let us enhance your natural beauty.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/book" className="luxury-btn text-lg px-10 py-5">
              Book Your Appointment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

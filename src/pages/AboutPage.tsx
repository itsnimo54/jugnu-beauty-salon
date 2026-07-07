import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Heart, Scissors, Users, Star, Clock, Shield, Sparkles } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const team = [
  {
    name: 'Jugnu Wasim',
    role: 'Founder & Lead Stylist',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzZ1TTPzyI6awZEuj6Iy_qzK4ARfAJk4uMr42sVA-7fvxyTs3KGXVNJQ&s=10',
  },
  {
    name: 'Huma Waqar',
    role: 'Senior Makeup Artist',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIr-Soes59FlZdo-aFvofl_ZdXVVo84Il-WmVmDciXw&s=10',
  },
];

const values = [
  { icon: Heart, title: 'Passion', description: 'We pour our hearts into every service, treating each client like royalty.' },
  { icon: Award, title: 'Excellence', description: 'We pursue perfection in every detail, from techniques to products.' },
  { icon: Shield, title: 'Trust', description: 'Building lasting relationships through honest, transparent service.' },
  { icon: Sparkles, title: 'Innovation', description: 'Staying ahead with the latest trends and techniques in beauty.' },
];

const timeline = [
  { year: '2014', title: 'Founded', description: 'Jugnu\'s Salon opened its doors in Jhelum.' },
  { year: '2016', title: 'Expansion', description: 'Expanded to a larger space with more services.' },
  { year: '2019', title: 'Recognition', description: 'Awarded Best Salon in Jhelum by local awards.' },
  { year: '2024', title: 'Today', description: 'Serving 5000+ happy clients with premium services.' },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="heading-xl text-luxury-black dark:text-white mt-4 mb-6">
              Our Story of{' '}
              <span className="text-rose-gold-500">Beauty</span>
            </h1>
            <p className="text-body">
              Discover the journey of Jugnu's Salon – from humble beginnings to becoming Jhelum's premier beauty destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-luxury-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <span className="text-rose-gold-500 font-montserrat uppercase tracking-widest text-sm font-semibold">
                Our Story
              </span>
              <h2 className="heading-lg text-luxury-black dark:text-white mt-4 mb-6">
                A Decade of{' '}
                <span className="text-rose-gold-500">Excellence</span>
              </h2>
              <p className="text-body mb-6">
                Jugnu's Salon was founded in 2014 with a simple vision: to bring world-class beauty services to Jhelum. What started as a small makeup studio has grown into a full-service beauty destination, trusted by thousands of clients for their most important moments.
              </p>
              <p className="text-body mb-6">
                Our founder, Jugnu Wasim, brought her expertise and passion from international training to create a salon that combines traditional beauty techniques with modern innovations. Every service we offer reflects our commitment to quality, hygiene, and client satisfaction.
              </p>
              <p className="text-body">
                Today, Jugnu's Salon stands as a testament to what dedication, skill, and a genuine love for beauty can achieve. We've had the privilege of being part of countless weddings, celebrations, and transformations – each one reinforcing our purpose.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                    <img
                      src="https://cdn-ilejcpo.nitrocdn.com/twVxkYyfgbiNtlCxbSgfagWHZXrhSvVX/assets/images/optimized/rev-6af5492/jugnusalon.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-23-at-20.15.07-scaled.jpeg"
                      alt="Salon Interior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgUSPBMK9AO4Mh4IM9edv35FxSlQJZpU0JsIQ68-0Gg&s=10"
                      alt="Beauty Treatment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gRUhTywYx2J6jfrYCrc8hEkFvYsy2j0217qHo7ayvQ&s=10"
                      alt="Bridal Makeup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBH9eow3bSBHaQikLQt7PHAz3IOzeK6bj-xCPXgn5nQ&s=10"
                      alt="Hair Styling"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              What We Stand For
            </span>
            <h2 className="heading-lg text-luxury-black dark:text-white mt-4">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="luxury-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-rose-gold-500/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-rose-gold-500" />
                </div>
                <h3 className="text-xl font-playfair text-luxury-black dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white dark:bg-luxury-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-rose-gold-500 font-montserrat uppercase tracking-widest text-sm font-semibold">
              Our Journey
            </span>
            <h2 className="heading-lg text-luxury-black dark:text-white mt-4">
              Milestones
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-rose-gold-500/20 -translate-x-1/2" />

            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`lg:w-1/2 ${idx % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <span className="text-rose-gold-500 font-playfair text-2xl">{item.year}</span>
                  <h3 className="text-lg font-playfair text-luxury-black dark:text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-gold-500 hidden lg:block" />
                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Our Team
            </span>
            <h2 className="heading-lg text-luxury-black dark:text-white mt-4">
              Meet the Experts
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-playfair text-luxury-black dark:text-white text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-luxury-black">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="heading-lg text-white mb-6"
          >
            Ready to Experience the Difference?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8"
          >
            Visit us and discover why clients trust Jugnu's Salon for their beauty needs.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/book" className="luxury-btn">
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contact" className="luxury-btn-outline">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

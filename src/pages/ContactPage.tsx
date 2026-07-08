import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Send, Navigation, MessageCircle } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '0332-0004747',
    href: 'tel:03320004747',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@jugnus.com',
    href: 'mailto:info@jugnus.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: '10:30 AM – 8:30 PM',
    href: null,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Deen Arcade, Civil Line, near Junaid Jamshed, opp. Soldier Arcade, Naya Mohalla Jhelum, 49600',
    href: 'https://maps.google.com/maps?q=Deen+Arcade,+Civil+Line,+Jhelum&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
];

export default function ContactPage() {
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
              Get in Touch
            </span>
            <h1 className="heading-xl text-luxury-black dark:text-white mt-4 mb-6">
              Contact{' '}
              <span className="text-rose-gold-500">Us</span>
            </h1>
            <p className="text-body">
              Have questions or want to book an appointment? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white dark:bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg text-luxury-black dark:text-white mb-8">
                Visit Our Salon
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={info.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start space-x-4 luxury-card p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-rose-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-rose-gold-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-luxury-black dark:text-white hover:text-rose-gold-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-luxury-black dark:text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-rose-gold-500 hover:text-white transition-all duration-300 text-gray-600 dark:text-white"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-rose-gold-500 hover:text-white transition-all duration-300 text-gray-600 dark:text-white"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-rose-gold-500 hover:text-white transition-all duration-300 text-gray-600 dark:text-white"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:03320004747"
                  className="luxury-btn inline-flex"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/923320004747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-btn-outline inline-flex"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
                <a
  href="https://maps.google.com/maps?q=Deen+Arcade,+Civil+Line,+Jhelum&t=&z=15&ie=UTF8&iwloc=&output=embed"
  target="_blank"
  rel="noopener noreferrer"
  className="luxury-btn-outline inline-flex"
>
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-full min-h-[400px] rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5">
                <iframe
  title="Jugnu's Salon Location"
  src="https://maps.google.com/maps?q=Deen+Arcade,+Civil+Line,+Jhelum&t=&z=15&ie=UTF8&iwloc=&output=embed"
  className="w-full h-full border-0"
  style={{ filter: 'grayscale(0.5)' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-soft-pink-50 dark:bg-luxury-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
              { q: 'What are your working hours?', a: 'We are open from 10:30 AM to 8:30 PM, Monday to Saturday. Sunday appointments are available on request for bridal services.' },
              { q: 'Do I need to book in advance?', a: 'While walk-ins are welcome for basic services, we strongly recommend booking in advance for bridal services, hair treatments, and during peak wedding seasons.' },
              { q: 'What payment methods do you accept?', a: 'We accept cash, bank transfer, and mobile payment methods including JazzCash and EasyPaisa. For bridal packages, a 50% advance is required.' },
              { q: 'Do you offer home services?', a: 'Yes, we offer on-location services for bridal events and group bookings within Jhelum city. Additional charges may apply for outstation travel.' },
              { q: 'What is your cancellation policy?', a: 'Please notify us at least 24 hours in advance for cancellations. For bridal bookings, cancellations within 48 hours may forfeit the advance payment.' },
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

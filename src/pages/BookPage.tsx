import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, Clock, User, Phone, Mail, MessageSquare, Sparkles, X } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  'Bridal Makeup',
  'Nikah Makeup',
  'Mehndi Makeup',
  'Barat Makeup',
  'Walima Makeup',
  'Party Makeup',
  'Engagement Makeup',
  'Hair Cut',
  'Hair Styling',
  'Hair Coloring',
  'Hair Spa',
  'Keratin Treatment',
  'Facial',
  'Cleanup',
  'Manicure',
  'Pedicure',
  'Waxing',
  'Threading',
  'Nail Art',
  'Eyelash Extensions',
  'Beauty Package',
];

const timeSlots = [
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
];

export default function BookPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    // Get service from URL params
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    const packageName = params.get('package');

    if (service) {
      const serviceMap: Record<string, string> = {
        'nikah': 'Nikah Makeup',
        'mehndi': 'Mehndi Makeup',
        'barat': 'Barat Makeup',
        'walima': 'Walima Makeup',
      };
      if (serviceMap[service]) {
        setFormData((prev) => ({ ...prev, service: serviceMap[service] }));
      }
    }

    if (packageName === 'full-bridal') {
      setFormData((prev) => ({ ...prev, service: 'Complete Bridal Package' }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send to Supabase
    // For now, just show success
    setSubmitted(true);
    setShowConfirmation(true);

    // Reset after animation
    setTimeout(() => {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3993425/pexels-photo-3993425.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Book Appointment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/80" />
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
              Book Your Visit
            </span>
            <h1 className="heading-xl text-white mt-4 mb-6">
              Book an{' '}
              <span className="text-rose-gold-500">Appointment</span>
            </h1>
            <p className="text-xl text-gray-300">
              Schedule your visit and let our expert team take care of your beauty needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-white dark:bg-luxury-black">
        <div className="max-w-4xl mx-auto">
          <motion.form
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Personal Info */}
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-gold-500/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-rose-gold-500" />
                </div>
                <h2 className="text-xl font-playfair text-luxury-black dark:text-white">
                  Personal Information
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-montserrat text-gray-600 dark:text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-luxury-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-rose-gold-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-montserrat text-gray-600 dark:text-gray-400 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="03XX-XXXXXXX"
                      className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-luxury-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-rose-gold-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-montserrat text-gray-600 dark:text-gray-400 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-luxury-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-rose-gold-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-gold-500/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-rose-gold-500" />
                </div>
                <h2 className="text-xl font-playfair text-luxury-black dark:text-white">
                  Appointment Details
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-montserrat text-gray-600 dark:text-gray-400 mb-2">
                    Select Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-luxury-black dark:text-white focus:outline-none focus:border-rose-gold-500 transition-colors"
                  >
                    <option value="">Choose a service</option>
                    <optgroup label="Bridal Services">
                      {services.slice(0, 6).map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Hair Services">
                      {services.slice(6, 12).map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Skin & Spa">
                      {services.slice(12, 19).map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Other">
                      <option value="Complete Bridal Package">Complete Bridal Package (All Events)</option>
                      {services.slice(19).map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-montserrat text-gray-600 dark:text-gray-400 mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-luxury-black dark:text-white focus:outline-none focus:border-rose-gold-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-montserrat text-gray-600 dark:text-gray-400 mb-2">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-luxury-black dark:text-white focus:outline-none focus:border-rose-gold-500 transition-colors"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-gold-500/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-rose-gold-500" />
                </div>
                <h2 className="text-xl font-playfair text-luxury-black dark:text-white">
                  Additional Notes
                </h2>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about any special requests or requirements..."
                className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-luxury-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-rose-gold-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full luxury-btn text-lg py-5"
            >
              Book Appointment
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-luxury-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full bg-white dark:bg-luxury-charcoal rounded-3xl p-8 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-playfair text-luxury-black dark:text-white mb-4">
                Appointment Requested!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Thank you for booking with Jugnu's Salon. We'll contact you shortly to confirm your appointment.
              </p>
              <button
                onClick={() => setShowConfirmation(false)}
                className="luxury-btn"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Info */}
      <section className="section-padding bg-soft-pink-50 dark:bg-luxury-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md text-luxury-black dark:text-white mb-4">
            Need Help Booking?
          </h2>
          <p className="text-body mb-6">
            Call us directly or message us on WhatsApp for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:03320004747" className="luxury-btn">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/923320004747"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-btn-outline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

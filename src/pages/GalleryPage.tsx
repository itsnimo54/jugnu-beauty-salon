import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const categories = [
  { id: 'all', name: 'All' },
  { id: 'bridal', name: 'Bridal' },
  { id: 'makeup', name: 'Makeup' },
  { id: 'hair', name: 'Hair' },
  { id: 'nails', name: 'Nails' },
  { id: 'facials', name: 'Facials' },
  { id: 'transformations', name: 'Transformations' },
];

const galleryImages = [
  // Bridal
  { id: 1, category: 'bridal', src: 'https://images.pexels.com/photos/3013854/pexels-photo-3013854.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bridal Makeup 1', caption: 'Barat Bridal' },
  { id: 2, category: 'bridal', src: 'https://images.pexels.com/photos/1967445/pexels-photo-1967445.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bridal Makeup 2', caption: 'Nikah Bridal' },
  { id: 3, category: 'bridal', src: 'https://images.pexels.com/photos/3013850/pexels-photo-3013850.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bridal Makeup 3', caption: 'Mehndi Bridal' },
  { id: 4, category: 'bridal', src: 'https://images.pexels.com/photos/3757141/pexels-photo-3757141.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bridal Makeup 4', caption: 'Walima Bridal' },
  { id: 5, category: 'bridal', src: 'https://images.pexels.com/photos/3757153/pexels-photo-3757153.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bridal Makeup 5', caption: 'Bridal Portrait' },
  { id: 6, category: 'bridal', src: 'https://images.pexels.com/photos/1447268/pexels-photo-1447268.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bridal Makeup 6', caption: 'Traditional Bridal' },

  // Makeup
  { id: 7, category: 'makeup', src: 'https://images.pexels.com/photos/3993291/pexels-photo-3993291.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Party Makeup', caption: 'Party Glam' },
  { id: 8, category: 'makeup', src: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Eye Makeup', caption: 'Eye Art' },
  { id: 9, category: 'makeup', src: 'https://images.pexels.com/photos/2735485/pexels-photo-2735485.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Lash Extensions', caption: 'Lash Extensions' },
  { id: 10, category: 'makeup', src: 'https://images.pexels.com/photos/3762454/pexels-photo-3762454.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Lip Makeup', caption: 'Lip Art' },

  // Hair
  { id: 11, category: 'hair', src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Hair Styling', caption: 'Bridal Hair Style' },
  { id: 12, category: 'hair', src: 'https://images.pexels.com/photos/1528610/pexels-photo-1528610.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Hair Cut', caption: 'Modern Cut' },
  { id: 13, category: 'hair', src: 'https://images.pexels.com/photos/1303943/pexels-photo-1303943.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Hair Color', caption: 'Hair Coloring' },
  { id: 14, category: 'hair', src: 'https://images.pexels.com/photos/3993425/pexels-photo-3993425.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Hair Spa', caption: 'Hair Spa' },
  { id: 15, category: 'hair', src: 'https://images.pexels.com/photos/3993295/pexels-photo-3993295.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Keratin', caption: 'Keratin Treatment' },

  // Nails
  { id: 16, category: 'nails', src: 'https://images.pexels.com/photos/4502714/pexels-photo-4502714.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Nail Art 1', caption: 'French Nails' },
  { id: 17, category: 'nails', src: 'https://images.pexels.com/photos/4500703/pexels-photo-4500703.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Nail Art 2', caption: 'Nail Art' },
  { id: 18, category: 'nails', src: 'https://images.pexels.com/photos/4503127/pexels-photo-4503127.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Manicure', caption: 'Manicure' },

  // Facials
  { id: 19, category: 'facials', src: 'https://images.pexels.com/photos/3757656/pexels-photo-3757656.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Facial Treatment', caption: 'Facial Treatment' },
  { id: 20, category: 'facials', src: 'https://images.pexels.com/photos/3764197/pexels-photo-3764197.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Skin Care', caption: 'Skin Care' },
  { id: 21, category: 'facials', src: 'https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Cleanup', caption: 'Deep Cleanup' },

  // Transformations
  { id: 22, category: 'transformations', src: 'https://images.pexels.com/photos/3993425/pexels-photo-3993425.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Before After 1', caption: 'Full Makeover' },
  { id: 23, category: 'transformations', src: 'https://images.pexels.com/photos/3765130/pexels-photo-3765130.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Before After 2', caption: 'Hair Transformation' },
  { id: 24, category: 'transformations', src: 'https://images.pexels.com/photos/3993291/pexels-photo-3993291.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Before After 3', caption: 'Glam Transformation' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (id: number) => {
    const index = galleryImages.findIndex((img) => img.id === id);
    setCurrentImageIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
              Our Work
            </span>
            <h1 className="heading-xl text-luxury-black dark:text-white mt-4 mb-6">
              Beauty{' '}
              <span className="text-rose-gold-500">Gallery</span>
            </h1>
            <p className="text-body">
              Explore our portfolio of stunning transformations, bridal makeovers, and beauty services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white dark:bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Masonry Grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.02 }}
                  className="break-inside-avoid"
                >
                  <div
                    onClick={() => openLightbox(image.id)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full transition-transform duration-500 group-hover:scale-105"
                      style={{ maxHeight: Math.random() > 0.5 ? '400px' : '300px' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-playfair">{image.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-luxury-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-center text-white font-playfair mt-4">
                {galleryImages[currentImageIndex].caption}
              </p>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <p className="text-gray-400 text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

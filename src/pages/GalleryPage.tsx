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
  { id: 1, category: 'bridal', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuO61mCIWPDhMCGjA1qmtKhbnXTiq1NGD6cpS8u0SYQ&s=10', alt: 'Bridal Makeup 1', caption: 'Barat Bridal' },
  { id: 2, category: 'bridal', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHDTJ3akNvNLPWyHTKE4lqZbd3d_6LpNL6UpKqzj7Nw&s', alt: 'Bridal Makeup 2', caption: 'Nikah Bridal' },
  { id: 3, category: 'bridal', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIkpmOQHpov01_Y2yOrrsUTSvuCVuif0hZ6z9E4vZPA&s=10', alt: 'Bridal Makeup 3', caption: 'Mehndi Bridal' },
  { id: 4, category: 'bridal', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJ0S5g4hPw2Th0VCdDx2U5NH0FaLpIDSO7BQ6m_aHTA&s=10', alt: 'Bridal Makeup 4', caption: 'Walima Bridal' },
  { id: 5, category: 'bridal', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7wmgrpK-nMLmqwd9lQWX1V5uWoEKqpCTQYHRMB4Mbg&s=10', alt: 'Bridal Makeup 5', caption: 'Bridal Portrait' },
  { id: 6, category: 'bridal', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-DJeRbZ6DRh9RpkX60tg0lYBR_e4uOpzV1OUA9Ar2w&s=10', alt: 'Bridal Makeup 6', caption: 'Traditional Bridal' },

  // Makeup
  { id: 7, category: 'makeup', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIWqicgBqB-78tfElLUQIvc_rolIxoG16DmpOpHlRfg&s=10', alt: 'Party Makeup', caption: 'Party Glam' },
  { id: 8, category: 'makeup', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRV3t9Wdt1IykSAw222-RUjXMc_wp43WAxnVsIajz6yA&s=10', alt: 'Eye Makeup', caption: 'Eye Art' },
  { id: 9, category: 'makeup', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQuITO101PPFzW1cc-46F0gs97tGINRDnTU_BKgY6Cg&s=10', alt: 'Lash Extensions', caption: 'Lash Extensions' },
  { id: 10, category: 'makeup', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfZ5knes2qX953vlYXj0q2Wsql1uRdQ6SH1EN4hZsBg&s=10', alt: 'Lip Makeup', caption: 'Lip Art' },

  // Hair
  { id: 11, category: 'hair', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2twGB-1ja3nDCzlPW8QGC85KDXZk-DhH2FOV56AlvBQ&s=10', alt: 'Hair Styling', caption: 'Bridal Hair Style' },
  { id: 12, category: 'hair', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZ3BiKhraA4dWO7EKiajwphnJgE2iFcR2h2x3vypm_w&s=10', alt: 'Hair Cut', caption: 'Modern Cut' },
  { id: 13, category: 'hair', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZScuYz66rqSuS8oStnNIG-8WVvxkNIPR9zS70t8C1Vw&s=10', alt: 'Hair Color', caption: 'Hair Coloring' },
  { id: 14, category: 'hair', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3s1RLVEwqEJLhISmt8xudxhNSn8_AvoGngtED7Gbz9g&s=10', alt: 'Hair Spa', caption: 'Hair Spa' },
  { id: 15, category: 'hair', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcLkBAiGI-jl4M4SSbTk1Hb-IEF5nItKbMSQtxxW5KA&s=10', alt: 'Keratin', caption: 'Keratin Treatment' },

  // Nails
  { id: 16, category: 'nails', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHRWVgZWAoFf5eFKv8cibFJIDwppDh5sIQdvODBm2FA&s=10', alt: 'Nail Art 1', caption: 'French Nails' },
  { id: 17, category: 'nails', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VdWI0i5iXXKolbHIwKqaFo5XcpRbpdiSSUbaP-Pfdw&s=10', alt: 'Nail Art 2', caption: 'Nail Art' },
  { id: 18, category: 'nails', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TnwhBp9DTkbikxeSSOcQ0GXxuvd38OTTOm4eHmUC8g&s=10', alt: 'Manicure', caption: 'Manicure' },

  // Facials
  { id: 19, category: 'facials', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTkTgX-TQPCw_7eUWcFUc8i4re5tMuWSGMep6F4rWDQ&s=10', alt: 'Facial Treatment', caption: 'Facial Treatment' },
  { id: 20, category: 'facials', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFCxK6i8M10QPCKY0zNiYsI4jETQ0ukyFvukh6IIR-g&s=10', alt: 'Skin Care', caption: 'Skin Care' },
  { id: 21, category: 'facials', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnBWw1ZH-W3nI1gcZ7LzGdTHfkt4BX2bD6QH7Dcqpmw&s=10', alt: 'Cleanup', caption: 'Deep Cleanup' },

  // Transformations
  { id: 22, category: 'transformations', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gPoYp4iBYqK4InIUaRdZBJslYXRWsEiibJrioRUAcQ&s=10', alt: 'Before After 1', caption: 'Full Makeover' },
  { id: 23, category: 'transformations', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEJ42eMkVu7woLtUkEqUYXtlUu0nRuVFxQdTBKhc9kQ&s=10', alt: 'Before After 2', caption: 'Hair Transformation' },
  { id: 24, category: 'transformations', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRry1RZ4JhPNtvR3JTU6l5aNyFthqT6K6Wf-W8XZPk80Q&s=10', alt: 'Before After 3', caption: 'Glam Transformation' },
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

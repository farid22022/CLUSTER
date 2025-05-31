

import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const bannerImages = [
  { src: './../../../../public/Banner/ku1.jpg', alt: 'CLUSTER Banner' },
  { src: './../../../../public/Banner/data2.jpg', alt: 'Datathon 2025' },
  { src: './../../../../public/Banner/ImageOfCP.jpg', alt: 'CEO Talk' },
  { src: './../../../../public/Banner/ku2.jpg', alt: 'Innovation Showcase' },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % bannerImages.length
    );
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center min-h-[80vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Image Slider */}
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={bannerImages[currentIndex].src}
            alt={bannerImages[currentIndex].alt}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.5 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          className="btn btn-circle btn-ghost text-white hover:bg-white/20"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn btn-circle btn-ghost text-white hover:bg-white/20"
        >
          ❯
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <h1 className="text-5xl font-bold mb-4">Code the Future with CLUSTER</h1>
        <p className="text-xl mb-6">
          Join the Computer League of Undergraduate Students for Technology, Education, and Research at KU CSE.
        </p>
        <div className="space-x-4">
          <a
            href="/events"
            className="btn btn-primary px-6 py-3 rounded-full font-semibold"
          >
            Explore Events
          </a>
          <a
            href="/signup"
            className="btn btn-outline btn-white px-6 py-3 rounded-full font-semibold"
          >
            Join Now
          </a>
        </div>
      </div>

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 flex justify-center w-full z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
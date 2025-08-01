

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bannerImages = [
  { src: './../../../../public/Banner/ku1.jpg', alt: 'CLUSTER Banner' },
  { src: './../../../../public/Banner/data2.jpg', alt: 'Datathon 2025' },
  { src: './../../../../public/Banner/ImageOfCP.jpg', alt: 'CEO Talk' },
  { src: './../../../../public/Banner/ku2.jpg', alt: 'Innovation Showcase' },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide every 6 seconds (increased for better UX)
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -80,
      rotateX: 90,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.6
      }
    }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -30, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingAnimationDelay = {
    y: [0, -25, 0],
    rotate: [0, -3, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 3
    }
  };

  return (
    <section 
      className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white py-20 text-center min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Background Orbs */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={floatingAnimationDelay}
          className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-600/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            transition: {
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute bottom-10 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400/15 to-blue-600/15 rounded-full blur-2xl transform -translate-x-1/2"
        />

        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>

        {/* Image Slider with Enhanced Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ scale: 1.1, opacity: 0, rotateY: 45 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.9, opacity: 0, rotateY: -45 }}
            transition={{ 
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.img
              src={bannerImages[currentIndex].src}
              alt={bannerImages[currentIndex].alt}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.4) contrast(1.1)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-purple-900/40 to-indigo-900/60"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons with Enhanced Design */}
      <div className="absolute inset-0 flex justify-between items-center px-8 z-20">
        <motion.button
          onClick={handlePrev}
          className="group relative w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          whileHover={{ 
            scale: 1.1, 
            x: -5,
            boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            whileHover={{ x: -2 }}
          >
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </motion.svg>
        </motion.button>
        
        <motion.button
          onClick={handleNext}
          className="group relative w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          whileHover={{ 
            scale: 1.1, 
            x: 5,
            boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            whileHover={{ x: 2 }}
          >
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </motion.svg>
        </motion.button>
      </div>

      {/* Content with 3D Animations */}
      <motion.div 
        className="container mx-auto relative z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight"
          variants={titleVariants}
          style={{ perspective: '1000px' }}
        >
          Code the Future with{' '}
          <motion.span
            className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            animate={{
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.7)",
                "0 0 20px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            CLUSTER
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200"
          variants={subtitleVariants}
        >
          Join the Computer League of Undergraduate Students for Technology, Education, and Research at KU CSE.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={buttonVariants}
        >
          <motion.a
            href="/events"
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-full font-bold text-lg shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Events</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
          
          <motion.a
            href="/signup"
            className="group relative px-10 py-4 bg-transparent border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(255, 255, 255, 0.6)",
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Join Now</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Enhanced Dots Navigation */}
      <motion.div 
        className="absolute bottom-8 flex justify-center w-full z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
          {bannerImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-blue-400 rounded-full"
                  layoutId="activeDot"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
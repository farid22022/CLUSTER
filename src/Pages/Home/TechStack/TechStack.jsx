import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: "React", icon: "⚛️", color: "from-blue-500 to-blue-600", category: "Frontend" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-indigo-700", category: "Language" },
    { name: "Python", icon: "🐍", color: "from-yellow-500 to-blue-600", category: "Backend" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600", category: "Runtime" },
    { name: "TensorFlow", icon: "🧠", color: "from-orange-500 to-red-600", category: "AI/ML" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600", category: "DevOps" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-700", category: "Database" },
    { name: "GraphQL", icon: "📊", color: "from-pink-500 to-purple-600", category: "API" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-600", category: "Cloud" },
    { name: "Kubernetes", icon: "⚓", color: "from-blue-600 to-cyan-600", category: "DevOps" },
    { name: "Flutter", icon: "🦋", color: "from-blue-400 to-indigo-600", category: "Mobile" },
    { name: "Rust", icon: "🦀", color: "from-orange-600 to-red-700", category: "Language" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(technologies.length / itemsPerSlide);

  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, totalSlides, isHovering]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Calculate the current slide's technologies
  const currentTech = technologies.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Liquid glass background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
        
        {/* Animated liquid bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/20"
            style={{
              top: `${10 + i * 10}%`,
              left: `${5 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Technology Stack
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Leveraging cutting-edge technologies to build scalable, reliable, and innovative solutions
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={containerRef}
        >
          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 border border-white/30 -ml-6"
            aria-label="Previous technologies"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 border border-white/30 -mr-6"
            aria-label="Next technologies"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Technology Cards - Liquid Glass Effect */}
          <div className="overflow-hidden px-8">
            <div className="flex gap-6 justify-center">
              {currentTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex-1 group cursor-pointer"
                  initial={{ opacity: 0, y: 20, rotateY: 90 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateY: 0,
                    transition: { 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }}
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    rotateX: 3,
                    scale: 1.05,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Liquid Glass Card */}
                  <div className="relative overflow-hidden rounded-2xl h-full">
                    {/* Liquid reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Liquid bubbles inside */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-white/30 backdrop-blur-sm rounded-full"
                        style={{
                          top: `${20 + i * 20}%`,
                          left: `${10 + i * 30}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
                          x: [0, 10, 0],
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 4 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                    
                    {/* Glass surface with blur */}
                    <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-8 h-full shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <div className="text-center">
                        {/* Icon with liquid effect */}
                        <div className="relative mx-auto mb-6">
                          <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-3xl shadow-lg`}>
                            <motion.span
                              className="block"
                              animate={{
                                rotateY: [0, 15, 0, -15, 0],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                repeatDelay: 4
                              }}
                            >
                              {tech.icon}
                            </motion.span>
                          </div>
                          
                          {/* Liquid effect on icon */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        
                        <motion.h3 
                          className="text-xl font-semibold text-gray-900 mb-2"
                          whileHover={{ 
                            scale: 1.05,
                            textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                          }}
                        >
                          {tech.name}
                        </motion.h3>
                        
                        <motion.span 
                          className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-white/50 backdrop-blur-sm rounded-full border border-white/30"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(255, 255, 255, 0.7)"
                          }}
                        >
                          {tech.category}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              animate={{
                width: currentIndex === index ? 24 : 12,
                backgroundColor: currentIndex === index ? '#2563eb' : '#d1d5db'
              }}
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            {isAutoPlaying ? (
              <>
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.div>
                Auto-playing
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                Paused
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Global styles for liquid glass effect */}
      <style>
        {`
        @keyframes pulse-slow {
          0% { opacity: 0.3; }
          50% { opacity: 0.5; }
          100% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  );
};

export default TechStack;
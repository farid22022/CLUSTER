

import { motion } from 'framer-motion';
import { useState } from 'react';

const HistoryTimeline = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const milestones = [
    { 
      year: '2018', 
      event: 'CLUSTER founded at KU CSE Discipline.', 
      highlight: true,
      description: 'Beginning our journey in computer science excellence',
      icon: '🚀'
    },
    { 
      year: '2019', 
      event: 'Hosted first KU Hackathon with 50+ participants.',
      description: 'Building our community through innovation challenges',
      icon: '💻'
    },
    { 
      year: '2020', 
      event: 'Launched SynergyX Datathon.', 
      highlight: true,
      description: 'Pioneering data science competitions in the region',
      icon: '📊'
    },
    { 
      year: '2022', 
      event: 'Won National ICPC Regional Award.',
      description: 'Achieving excellence in competitive programming',
      icon: '🏆'
    },
    { 
      year: '2024', 
      event: 'Organized Project Symposium with industry leaders.', 
      highlight: true,
      description: 'Connecting academia with industry innovation',
      icon: '🤝'
    },
  ];

  // Enhanced Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const getCardVariants = (index) => ({
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -200 : 200,
      y: 50,
      rotateY: index % 2 === 0 ? -15 : 15,
      scale: 0.8
    },
    show: { 
      opacity: 1, 
      x: 0,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  });

  const card3DHover = {
    scale: 1.05,
    rotateY: 5,
    rotateX: 5,
    z: 50,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const lineAnimation = {
    hidden: { 
      height: 0,
      opacity: 0 
    },
    show: { 
      height: "100%",
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
      }
    }
  };

  const dotAnimation = {
    hidden: { 
      scale: 0, 
      opacity: 0,
      rotateZ: -180
    },
    show: { 
      scale: 1, 
      opacity: 1,
      rotateZ: 0,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden min-h-screen">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px'
               }} />
        </div>
        
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full mix-blend-screen filter blur-xl ${
              i % 3 === 0 ? 'bg-blue-400/20' : 
              i % 3 === 1 ? 'bg-purple-400/20' : 'bg-indigo-400/20'
            }`}
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}

        {/* Particle System */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, margin: "-100px" }}
            className="relative"
          >
            <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mb-6 relative">
              Our Legacy
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "12rem", opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mb-8 rounded-full relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/30"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Journey through the defining moments that transformed our vision into reality, 
            shaping the future of technology education and innovation.
          </motion.p>
        </div>

        {/* Enhanced Timeline */}
        <motion.div 
          className="relative max-w-5xl mx-auto perspective-1000"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        >
          {/* Enhanced Timeline Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg shadow-blue-500/50"
            variants={lineAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            style={{ height: `${milestones.length * 200}px` }}
          >
            {/* Animated flowing effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full"
              animate={{ y: ["-200%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="mb-16 flex justify-between items-center w-full relative"
              style={{ perspective: "1000px" }}
            >
              {/* Enhanced 3D Card */}
              <motion.div 
                className={`w-full md:w-1/2 group cursor-pointer ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
                variants={getCardVariants(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-150px" }}
                whileHover={card3DHover}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`
                  relative p-8 rounded-2xl backdrop-blur-xl border shadow-2xl overflow-hidden
                  ${milestone.highlight 
                    ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-400/30 shadow-blue-500/25' 
                    : 'bg-gray-900/40 border-gray-700/30 shadow-gray-900/50'
                  }
                  transform-gpu transition-all duration-300
                `}>
                  
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  {milestone.highlight && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                      animate={{ opacity: hoveredCard === index ? 0.3 : 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Floating Icon */}
                  <motion.div
                    className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-xl ${
                      milestone.highlight 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                        : 'bg-gradient-to-br from-gray-600 to-gray-800'
                    }`}
                    animate={hoveredCard === index ? floatingAnimation : {}}
                  >
                    {milestone.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <motion.span 
                        className={`text-3xl font-black tracking-wider ${
                          milestone.highlight ? 'text-blue-400' : 'text-gray-300'
                        }`}
                        animate={{ 
                          scale: hoveredCard === index ? 1.1 : 1,
                          color: hoveredCard === index ? "#60A5FA" : undefined
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {milestone.year}
                      </motion.span>
                      {milestone.highlight && (
                        <motion.span 
                          className="ml-4 px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-bold rounded-full border border-blue-400/30"
                          animate={{ scale: hoveredCard === index ? 1.05 : 1 }}
                        >
                          MILESTONE
                        </motion.span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {milestone.event}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: milestone.highlight 
                        ? "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
                        : "linear-gradient(45deg, rgba(75, 85, 99, 0.1), rgba(55, 65, 81, 0.1))",
                      opacity: hoveredCard === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              
              {/* Enhanced Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                <motion.div
                  className={`relative w-6 h-6 rounded-full ${
                    milestone.highlight 
                      ? 'bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg shadow-blue-500/50' 
                      : 'bg-gradient-to-br from-gray-400 to-gray-600'
                  }`}
                  variants={dotAnimation}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, margin: "-100px" }}
                >
                  {/* Pulsing Ring */}
                  <motion.div 
                    className={`absolute inset-0 rounded-full ${
                      milestone.highlight ? 'bg-blue-400/30' : 'bg-gray-400/30'
                    }`}
                    animate={{ 
                      scale: [1, 2, 1],
                      opacity: [0.7, 0, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  
                  {/* Inner Glow */}
                  <div className={`absolute inset-1 rounded-full ${
                    milestone.highlight 
                      ? 'bg-white/20' 
                      : 'bg-white/10'
                  }`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
          
          {/* Enhanced Ending Element */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
            style={{ bottom: '-2rem' }}
            initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/50">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              
              {/* Completion Glow */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-blue-400/40"
                animate={{ 
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <p className="text-gray-300 mb-8 text-lg">
            Our story continues to evolve with each breakthrough and innovation...
          </p>
          <motion.a 
            href="/about" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Discover Our Journey</span>
            <motion.svg 
              className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform relative z-10" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </motion.svg>
            
            {/* Button Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
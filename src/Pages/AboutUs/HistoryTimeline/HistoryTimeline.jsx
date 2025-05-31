import { motion } from 'framer-motion';

const HistoryTimeline = () => {
  const milestones = [
    { year: '2018', event: 'CLUSTER founded at KU CSE Discipline.', highlight: true },
    { year: '2019', event: 'Hosted first KU Hackathon with 50+ participants.' },
    { year: '2020', event: 'Launched SynergyX Datathon.', highlight: true },
    { year: '2022', event: 'Won National ICPC Regional Award.' },
    { year: '2024', event: 'Organized Project Symposium with industry leaders.', highlight: true },
  ];

  // Animation variants (unchanged)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const lineAnimation = {
    hidden: { height: 0 },
    show: { 
      height: "100%",
      transition: { 
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }
    }
  };

  const dotAnimation = {
    hidden: { scale: 0, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 12,
        delay: 0.5
      }
    },
    hover: { 
      scale: 1.15,
      boxShadow: "0 0 0 8px rgba(59, 130, 246, 0.2)"
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements (unchanged) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ margin: "-100px" }} // Removed once: true
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Our Journey Through Time
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }} // Changed to whileInView
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ margin: "-100px" }} // Removed once: true
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Changed to whileInView
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ margin: "-100px" }} // Removed once: true
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Celebrating key milestones that shaped our organization &apos;s legacy of innovation and excellence.
          </motion.p>
        </div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show" // Already using whileInView
          viewport={{ margin: "-100px" }} // Removed once: true
        >
          {/* Timeline line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600"
            variants={lineAnimation}
            initial="hidden"
            whileInView="show" // Changed to whileInView
            viewport={{ margin: "-100px" }} // Removed once: true
          />
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              variants={item}
              initial="hidden"
              whileInView="show" // Changed to whileInView
              viewport={{ margin: "-100px" }} // Removed once: true
            >
              <div className="hidden md:block w-5/12"></div>
              
              <motion.div 
                className={`w-full md:w-5/12 p-6 rounded-xl shadow-lg ${
                  milestone.highlight 
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-blue-100' 
                    : 'bg-white'
                } relative overflow-hidden`}
                whileHover={{ 
                  y: -5,
                  boxShadow: milestone.highlight 
                    ? '0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(99, 102, 241, 0.04)'
                    : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Decorative corner (unchanged) */}
                {milestone.highlight && (
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 transform rotate-45 origin-top-right"></div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <motion.span 
                      className={`text-xl font-bold ${
                        milestone.highlight ? 'text-blue-600' : 'text-gray-800'
                      }`}
                    >
                      {milestone.year}
                    </motion.span>
                    {milestone.highlight && (
                      <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        Milestone
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{milestone.event}</p>
                </div>
                
                {/* Decorative line on mobile (unchanged) */}
                <div className="absolute top-6 -left-7 w-6 h-0.5 bg-blue-400 md:hidden"></div>
              </motion.div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-14 h-14">
                <motion.div
                  className={`w-5 h-5 rounded-full ${
                    milestone.highlight 
                      ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg' 
                      : 'bg-blue-400'
                  }`}
                  variants={dotAnimation}
                  initial="hidden"
                  whileInView="show" // Changed to whileInView
                  whileHover="hover"
                  viewport={{ margin: "-100px" }} // Removed once: true
                />
                <motion.div 
                  className="absolute w-16 h-16 rounded-full bg-blue-200 opacity-0"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: 0.5 * index
                  }}
                />
              </div>
            </motion.div>
          ))}
          
          {/* Ending element */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 flex items-center justify-center w-14 h-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Changed to whileInView
            transition={{ delay: 1.5 }}
            viewport={{ margin: "-100px" }} // Removed once: true
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <motion.div 
              className="absolute w-16 h-16 rounded-full bg-blue-200"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.5
              }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
          transition={{ delay: 1.8 }}
          viewport={{ margin: "-100px" }} // Removed once: true
        >
          <p className="text-gray-600 mb-6">
            The journey continues with exciting new chapters ahead...
          </p>
          <a 
            href="/about" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Explore Our Story
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    { 
      title: 'National ICPC 2022', 
      description: '1st Place in Regional Finals with distinction in problem-solving efficiency.',
      year: '2022',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      title: 'SynergyX Datathon 2023', 
      description: 'Top 10 in Global Data Challenge with innovative AI solution.',
      year: '2023',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    { 
      title: 'KU Hackathon 2024', 
      description: '50+ innovative projects showcased with industry adoption potential.',
      year: '2024',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const hoverCard = {
    y: -15,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Our Achievements
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "10rem" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Celebrating milestones and recognitions that highlight our commitment to excellence and innovation
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="group"
              variants={item}
              whileHover={hoverCard}
            >
              <div className="bg-white rounded-2xl shadow-xl h-full overflow-hidden border border-gray-100 relative">
                {/* Floating year */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full z-10">
                  {achievement.year}
                </div>
                
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-70"></div>
                
                {/* Icon container */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                  <motion.div
                    className="text-blue-600"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {achievement.icon}
                  </motion.div>
                </div>
                
                <div className="p-8 pt-24">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3"
                    whileHover={{ color: "#2563eb" }}
                  >
                    {achievement.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-6">{achievement.description}</p>
                  
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative bottom bar */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Want to see more of our accomplishments?
          </p>
          <motion.a 
            href="/achievements" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-full shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Achievements
            <svg className="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
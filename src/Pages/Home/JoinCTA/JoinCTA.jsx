import { motion } from 'framer-motion';

const JoinCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                 backgroundSize: '40px 40px'
               }}>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Join Our Community?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Whether you&apos;re a beginner or an expert, there&apos;s a place for you in CLUSTER. Join now to access exclusive events, workshops, and networking opportunities.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/signup"
            className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up Now
          </motion.a>
          
          <motion.a
            href="/about"
            className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;
import { motion } from 'framer-motion';
import sponsor1 from './../../../../public/sponsors/sponsor-1.png';
import sponsor2 from './../../../../public/sponsors/sponsor-2.png';
import sponsor3 from './../../../../public/sponsors/sponsor-3.png';
import sponsor4 from './../../../../public/sponsors/sponsor-4.png';

const Sponsors = () => {
  const sponsors = [
    { image: sponsor1, alt: 'Sponsor 1' },
    { image: sponsor2, alt: 'Sponsor 2' },
    { image: sponsor3, alt: 'Sponsor 3' },
    { image: sponsor4, alt: 'Sponsor 4' },
  ];

  // Animation variants inspired by FeaturedEvents
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: -50,
      rotateX: 45,
      scale: 0.8
    },
    show: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.7
      }
    }
  };

  const itemHover = {
    y: -10,
    scale: 1.1,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingAnimationDelay = {
    y: [0, -10, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.5
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-900  to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={floatingAnimationDelay}
          className="absolute top-30 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-600/15 rounded-full blur-3xl"
        />
      </div>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-2.5" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50, rotateX: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
          }}
          className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-12 text-center"
          style={{ perspective: '1000px' }}
        >
          Our Partners
        </motion.h2>

        <motion.div 
          className="flex justify-center flex-wrap gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: "-150px" }}
          style={{ perspective: '1200px' }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={itemHover}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:border-white/40 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <motion.img
                src={sponsor.image}
                alt={sponsor.alt}
                className="h-24 w-auto p-6 object-contain"
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.15, rotateZ: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
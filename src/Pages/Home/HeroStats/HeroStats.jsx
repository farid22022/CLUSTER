import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const HeroStats = () => {
  const stats = [
    { number: 500, label: 'Active Members', suffix: '+' },
    { number: 50, label: 'Events Hosted', suffix: '+' },
    { number: 100, label: 'Projects Completed', suffix: '+' },
    { number: 20, label: 'Industry Partners', suffix: '+' }
  ];

  return (
    <section className="relative py-36 bg-gradient-to-b from-blue-900 to-[#0F172A] text-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        transition={{ duration: 15, repeat: Infinity }}
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
          backgroundSize: '300% 300%'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
              }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp 
                  end={stat.number} 
                  duration={3} 
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroStats;
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "President, 2024",
      quote: "CLUSTER transformed my university experience. The skills I gained here directly led to my internship at Google.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "AI Team Lead",
      quote: "The hackathons and workshops gave me the practical experience I needed to excel in my career.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Alumnus, Software Engineer",
      quote: "The network I built through CLUSTER has been invaluable throughout my professional journey.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
          What Our Members Say
        </h2>
        
        <div className="relative h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-3xl mx-auto p-8"
            >
              <motion.img 
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full mb-6 border-4 border-blue-500 object-cover"
                whileHover={{ scale: 1.1 }}
              />
              <p className="text-xl italic mb-6 text-gray-700 leading-relaxed">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
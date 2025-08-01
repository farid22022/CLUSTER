import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      designation: "Director",
      name: "Professor Dr. Kazi Masudul Alam",
      student_id: "210123",
      image_url: "https://i.ibb.co.com/bXynWfb/Money.png", // Make sure this link is valid
      facebook_url: "https://facebook.com/username1",
      linkedin_url: "https://linkedin.com/in/username1",
      email: "username1@email.com",
      quote: "Leading with vision and empowering excellence."
    },
    {
      designation: "President",
      name: "Tahmid Hasan Tasfi",
      student_id: "210218",
      image_url: "https://i.ibb.co/TqxvVFb3/tasfi.jpg",
      facebook_url: "https://facebook.com/username1",
      linkedin_url: "https://linkedin.com/in/username1",
      email: "username1@email.com",
      quote: "Proud to serve and shape the future of CLUSTER."
    },
    {
      designation: "Vice President-1",
      name: "Md Tasbi Hassan",
      student_id: "210216",
      image_url: "https://i.ibb.co/4RhPX7Ks/tasbi.jpg",
      facebook_url: "https://facebook.com/username2",
      linkedin_url: "https://linkedin.com/in/username2",
      email: "username2@email.com",
      quote: "Working together is our biggest strength."
    },
    {
      designation: "Vice President-2",
      name: "Razu Sarder",
      student_id: "220220",
      image_url: "https://example.com/image3.jpg",
      facebook_url: "https://facebook.com/username3",
      linkedin_url: "https://linkedin.com/in/username3",
      email: "username3@email.com",
      quote: "Committed to creating an inclusive tech community."
    },
    {
      designation: "General Secretary",
      name: "Md Anjir Hossain",
      student_id: "210230",
      image_url: "https://i.ibb.co/1thHGwzw/anjir.jpg",
      facebook_url: "https://facebook.com/username4",
      linkedin_url: "https://linkedin.com/in/username4",
      email: "username4@email.com",
      quote: "Keeping everything running smoothly behind the scenes."
    },
    {
      designation: "Joint Secretary",
      name: "Sohag Chandra",
      student_id: "220238",
      image_url: "https://i.ibb.co/jZ5W0PJJ/sohag.jpg",
      facebook_url: "https://facebook.com/username5",
      linkedin_url: "https://linkedin.com/in/username5",
      email: "username5@email.com",
      quote: "A joint effort brings great success!"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
          What Our Members Say
        </h2>

        <div className="relative h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-3xl mx-auto p-8"
            >
              <motion.img
                src={testimonials[currentIndex].image_url}
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
                  {testimonials[currentIndex].designation}
                </p>
                <div className="mt-2 flex justify-center space-x-4">
                  <a href={testimonials[currentIndex].facebook_url} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/25/000000/facebook--v1.png" alt="Facebook" />
                  </a>
                  <a href={testimonials[currentIndex].linkedin_url} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/25/000000/linkedin.png" alt="LinkedIn" />
                  </a>
                  <a href={`mailto:${testimonials[currentIndex].email}`}>
                    <img src="https://img.icons8.com/ios-filled/25/000000/email.png" alt="Email" />
                  </a>
                </div>
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

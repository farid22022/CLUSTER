
import { motion } from 'framer-motion';

const FeaturedEvents = () => {
  const events = [
    {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      alt: 'Datathon',
      title: 'SynergyX Datathon 2025',
      date: 'June 15, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Innovation Center, Room 301',
      description: 'Compete in data-driven challenges and win exciting prizes!',
      link: '/datathon',
      tags: ['Data Science', 'AI', 'Workshop']
    },
    {
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      alt: 'Symposium',
      title: 'Project Symposium 2025',
      date: 'July 10, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Grand Conference Hall',
      description: 'Showcase your projects and hear from industry leaders.',
      link: '/ps',
      tags: ['Networking', 'Exhibition', 'Keynote']
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      alt: 'IUPC',
      title: 'KU IUPC 2025',
      date: 'August 5, 2025',
      time: '8:00 AM - 8:00 PM',
      location: 'Tech Hub, Building A',
      description: 'Test your coding skills in our annual programming contest.',
      link: '/cp',
      tags: ['Competition', 'Coding', 'Algorithms']
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Upcoming Events
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our flagship events designed to inspire, educate, and connect innovators.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {events.map((event, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-full flex flex-col transform transition-all duration-300 group-hover:shadow-2xl">
                <div className="relative h-60 overflow-hidden">
                  <motion.img
                    src={event.image}
                    alt={event.alt}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-blue-600 bg-opacity-80 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-2"
                      whileHover={{ color: "#3b82f6" }}
                    >
                      {event.title}
                    </motion.h3>
                    
                    <div className="flex items-center text-gray-600 mb-1">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-1">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{event.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <motion.a 
                      href={event.link}
                      className="inline-flex items-center font-semibold text-blue-600 group-hover:text-blue-800 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="/events" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
          >
            View All Events
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const Alumni = () => {
  const [isMentorshipFormOpen, setIsMentorshipFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for slider
  const slides = [
    'https://ku.ac.bd/wp-content/uploads/2022/10/cse-building.jpg',
    'https://images.unsplash.com/photo-1516321310762-479437144403',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c'
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Background animation variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  return (
    <div className="relative overflow-hidden font-sans">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              transition: {
                duration: 1,
                delay: i * 0.1,
                type: 'spring'
              }
            }}
          />
        ))}
      </motion.div>

      {/* Hero Section with Slider */}
      <motion.section 
        className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${slides[currentSlide]})` }}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            KU CSE Alumni Network
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Connecting graduates from Khulna University&#39;s Computer Science & Engineering department
          </motion.p>
          <motion.button
            onClick={() => setIsMentorshipFormOpen(true)}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Join as Mentor
          </motion.button>
        </div>
      </motion.section>

      {/* Department Info Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col lg:flex-row gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
            <motion.div 
              className="lg:w-1/2"
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
            >
              <h2 className="text-3xl font-bold mb-6">About KU CSE</h2>
              <p className="text-lg mb-4">
                The Department of Computer Science and Engineering at Khulna University was established in 1991 and has since become one of the premier institutions for computer science education in Bangladesh.
              </p>
              <motion.div 
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-3">Key Facts:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Established: 1991</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>4-year B.Sc. Engineering program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Highly qualified faculty members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Modern labs and research facilities</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2"
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <motion.img
                  src="https://ku.ac.bd/wp-content/uploads/2022/10/cse-building.jpg"
                  alt="KU CSE Building"
                  className="w-full h-auto"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white text-lg">CSE Building, Khulna University</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Alumni Tabs Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap border-b border-gray-200 mb-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            viewport={{ once: true }}
          >
            {['about', 'directory', 'spotlight', 'achievements'].map((tab) => (
              <motion.button
                key={tab}
                className={`px-6 py-3 font-medium capitalize ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab(tab)}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'about' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-gray-700 mb-4">
                      The CSE department at KU aims to produce world-class computer engineers through quality education and research, preparing students to meet the challenges of the digital age.
                    </p>
                    <p className="text-gray-700">
                      Our alumni network strengthens this mission by providing mentorship, career opportunities, and maintaining connections between graduates.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">Programs Offered</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>B.Sc. in Computer Science & Engineering</span>
                      </li>
                      <li className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>M.Sc. in Computer Science & Engineering</span>
                      </li>
                      <li className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>Ph.D. in Computer Science & Engineering</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              )}

              {activeTab === 'directory' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: 'John Doe', batch: '2015', role: 'Senior Software Engineer', company: 'Google' },
                    { name: 'Jane Smith', batch: '2017', role: 'Data Scientist', company: 'Microsoft' },
                    { name: 'Ahmed Rahman', batch: '2019', role: 'Machine Learning Engineer', company: 'Amazon' },
                  ].map((alumni, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold mb-2">{alumni.name}</h3>
                      <p className="text-gray-600">Batch: {alumni.batch}</p>
                      <p className="text-gray-600">{alumni.role}</p>
                      <p className="text-gray-600">{alumni.company}</p>
                      <motion.button
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Connect
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'spotlight' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      name: 'Sarah Johnson',
                      achievement: 'Developed AI-based healthcare solution',
                      description: 'Sarah led a team to create an innovative AI diagnostic tool that improves early detection of diseases, adopted by hospitals worldwide.',
                      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
                    },
                    {
                      name: 'Mohammad Ali',
                      achievement: 'Published groundbreaking research on quantum computing',
                      description: 'Mohammad’s research on quantum algorithms has been recognized in top-tier journals and is paving the way for future computing advancements.',
                      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
                    },
                  ].map((spotlight, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <img src={spotlight.image} alt={spotlight.name} className="w-24 h-24 rounded-full object-cover" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{spotlight.name}</h3>
                        <p className="text-blue-600 font-medium">{spotlight.achievement}</p>
                        <p className="text-gray-600 mt-2">{spotlight.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="space-y-6">
                  {[
                    {
                      year: '2024',
                      title: 'International Hackathon Winners',
                      description: 'KU CSE alumni team secured 1st place in the Global CodeFest, solving complex problems in cybersecurity.'
                    },
                    {
                      year: '2023',
                      title: 'Startup of the Year',
                      description: 'Alumni-founded startup "TechTrend" was awarded Startup of the Year for its innovative AI platform.'
                    },
                    {
                      year: '2022',
                      title: 'IEEE Best Paper Award',
                      description: 'A group of KU CSE alumni received the IEEE Best Paper Award for their work on distributed systems.'
                    },
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 mb-1">Year: {achievement.year}</p>
                      <p className="text-gray-600">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Mentorship Form Modal */}
      <AnimatePresence>
        {isMentorshipFormOpen && (
          <MentorshipForm onClose={() => setIsMentorshipFormOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const MentorshipForm = ({ onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <h2 className="text-2xl font-bold">Become a Mentor</h2>
          <p>Guide the next generation of KU CSE students</p>
        </div>
        
        <form className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Batch</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="e.g., 2015"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Role</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="e.g., Software Engineer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="e.g., Google"
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-4 mt-8">
            <motion.button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Application
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

MentorshipForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Alumni;
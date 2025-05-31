import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Background animation variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
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
                type: 'spring',
              },
            }}
          />
        ))}
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Contact CLUSTER of KU
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Connect with the Club for Updated Search on Computers (CLUSTER), the student-run computer club of Khulna University’s CSE Discipline.
          </motion.p>
          <motion.button
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Send a Message
          </motion.button>
        </div>
      </motion.section>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
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
                <h2 className="text-2xl font-bold">Contact CLUSTER</h2>
                <p>Reach out to join or collaborate with our computer club</p>
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
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Batch (Optional)</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="e.g., 2015"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                      rows="4"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-end space-x-4 mt-8">
                  <motion.button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                    whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Information Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <img
                    src="https://via.placeholder.com/24?text=📞"
                    alt="Phone Icon"
                    className="w-6 h-6 mr-3"
                  />
                  <span>+880-41-720171-3 (Ext. 1069 office, Ext. 1105 head)</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://via.placeholder.com/24?text=✉️"
                    alt="Email Icon"
                    className="w-6 h-6 mr-3"
                  />
                  <a
                    href="mailto:support@cseku.ac.bd"
                    className="text-blue-600 hover:underline"
                  >
                    support@cseku.ac.bd
                  </a>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://via.placeholder.com/24?text=📍"
                    alt="Location Icon"
                    className="w-6 h-6 mr-3"
                  />
                  <span>Khulna University, Gollamari, Khulna 9208, Bangladesh</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://via.placeholder.com/24?text=📘"
                    alt="Facebook Icon"
                    className="w-6 h-6 mr-3"
                  />
                  <a
                    href="https://www.facebook.com/KhulnaUniversityCSE"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CSEKU on Facebook
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-2xl"
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <motion.img
                src="https://via.placeholder.com/600x400?text=Map+of+Khulna+University"
                alt="Map of Khulna University"
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
                <p className="text-white text-lg">Khulna University, Gollamari, Khulna</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section
        className="py-8 bg-gray-50 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600">
          Part of the KU CSE Alumni Network. Visit{' '}
          <a
            href="https://ku.ac.bd/discipline/cse"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            KU CSE Discipline
          </a>{' '}
          for more information about our programs and events.
        </p>
      </motion.section>
    </div>
  );
};

Contact.propTypes = {
  // No props are passed to this component, but PropTypes is included for consistency
};

export default Contact;
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const EventFilters = ({ setView }) => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual filter items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 300,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)',
    },
  };

  return (
    <motion.section
      className="py-8 bg-gray-100 sticky top-16 z-40"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-100px" }} // Trigger animations when section is 100px into view
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="flex space-x-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: "-100px" }}
        >
          <motion.select
            className="border rounded-md p-2"
            variants={itemVariants}
          >
            <option>All Types</option>
            <option>Hackathon</option>
            <option>Workshop</option>
            <option>Datathon</option>
            <option>Symposium</option>
          </motion.select>
          <motion.select
            className="border rounded-md p-2"
            variants={itemVariants}
          >
            <option>Upcoming</option>
            <option>Past</option>
          </motion.select>
          <motion.input
            type="text"
            placeholder="Search events..."
            className="border rounded-md p-2"
            variants={itemVariants}
          />
        </motion.div>
        <motion.div
          className="flex space-x-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: "-100px" }}
        >
          <motion.button
            onClick={() => setView('grid')}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            variants={buttonVariants}
            whileHover="hover"
          >
            Grid View
          </motion.button>
          <motion.button
            onClick={() => setView('calendar')}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            variants={buttonVariants}
            whileHover="hover"
          >
            Calendar View
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

EventFilters.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default EventFilters;
import { motion } from 'framer-motion';
import BlogFilters from './BlogFilters/BlogFilters';
import BlogPostCard from './BlogPostCard/BlogPostCard';

const Blog = () => {
  return (
    <motion.div 
      className="bg-gray-50 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      
      <motion.section 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          >
            CLUSTER Blog
          </motion.h1>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Read tech articles, tutorials, and project updates from the KU CSE community.
          </motion.p>
        </div>
      </motion.section>
      
      <BlogFilters />
      <BlogPostCard />
    </motion.div>
  );
};

export default Blog;
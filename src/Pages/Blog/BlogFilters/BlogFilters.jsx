import { motion } from 'framer-motion';

const BlogFilters = () => {
  return (
    <motion.section 
      className="py-8 bg-gray-100 sticky top-16 z-40 shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row gap-4 md:gap-6"
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
          {['Category', 'Tags', 'Search'].map((filter, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              className="flex-1"
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {filter}
              </label>
              {filter === 'Search' ? (
                <motion.input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  whileFocus={{ scale: 1.01 }}
                />
              ) : (
                <motion.select 
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  whileFocus={{ scale: 1.01 }}
                >
                  <option>All {filter}</option>
                  {/* ... options ... */}
                </motion.select>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogFilters;
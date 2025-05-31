import { motion } from 'framer-motion';
import { FiFilter, FiX, FiSearch, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

const ResourceFilters = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Difficulties');
  const [selectedFormat, setSelectedFormat] = useState('All Formats');
  
  const categories = ['Competitive Programming', 'Research', 'Tutorials', 'Event Materials'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const formats = ['PDF', 'Video', 'Article'];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const clearFilters = () => {
    setSelectedCategory('All Categories');
    setSelectedDifficulty('All Difficulties');
    setSelectedFormat('All Formats');
    setSearchTerm('');
  };

  return (
    <motion.section 
      className="py-4 bg-gradient-to-r from-blue-50 to-indigo-50 sticky top-16 z-40 border-b border-gray-200 shadow-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Mobile filter toggle */}
          <div className="md:hidden w-full flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Resource Filters</h3>
            <button
              onClick={toggleFilter}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full"
            >
              <FiFilter className="text-lg" />
              <span>Filters</span>
            </button>
          </div>

          {/* Desktop filters */}
          <div className="hidden md:flex items-center gap-4 w-full">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer"
                >
                  <option>All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <FiChevronDown className="text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer"
                >
                  <option>All Difficulties</option>
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <FiChevronDown className="text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer"
                >
                  <option>All Formats</option>
                  {formats.map(format => (
                    <option key={format} value={format}>{format}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <FiChevronDown className="text-gray-400" />
                </div>
              </div>
              
              {(selectedCategory !== 'All Categories' || selectedDifficulty !== 'All Difficulties' || selectedFormat !== 'All Formats' || searchTerm) && (
                <motion.button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <FiX className="text-sm" />
                  <span>Clear</span>
                </motion.button>
              )}
            </div>
          </div>
          
          <div className="hidden md:block text-sm text-gray-600">
            Showing <span className="font-semibold">24</span> resources
          </div>
        </div>
        
        {/* Active filters bar */}
        {(selectedCategory !== 'All Categories' || selectedDifficulty !== 'All Difficulties' || selectedFormat !== 'All Formats' || searchTerm) && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className="flex flex-wrap items-center gap-3 py-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              
              {searchTerm && (
                <div className="flex items-center bg-blue-100 rounded-full px-3 py-1 text-sm">
                  <span className="mr-1">Search: {searchTerm}</span>
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              )}
              
              {selectedCategory !== 'All Categories' && (
                <div className="flex items-center bg-blue-100 rounded-full px-3 py-1 text-sm">
                  <span className="mr-1">Category: {selectedCategory}</span>
                  <button 
                    onClick={() => setSelectedCategory('All Categories')}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              )}
              
              {selectedDifficulty !== 'All Difficulties' && (
                <div className="flex items-center bg-blue-100 rounded-full px-3 py-1 text-sm">
                  <span className="mr-1">Difficulty: {selectedDifficulty}</span>
                  <button 
                    onClick={() => setSelectedDifficulty('All Difficulties')}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              )}
              
              {selectedFormat !== 'All Formats' && (
                <div className="flex items-center bg-blue-100 rounded-full px-3 py-1 text-sm">
                  <span className="mr-1">Format: {selectedFormat}</span>
                  <button 
                    onClick={() => setSelectedFormat('All Formats')}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              )}
              
              <button
                onClick={clearFilters}
                className="ml-auto text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                <FiX className="mr-1" size={14} />
                Clear all filters
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default ResourceFilters;
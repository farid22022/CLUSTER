import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiSearch, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

const ProjectFilters = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [selectedYear, setSelectedYear] = useState('All Years');
  
  const domains = ['AI/ML', 'Web Development', 'IoT', 'Mobile Apps', 'Blockchain', 'Data Science'];
  const statuses = ['Ongoing', 'Completed', 'Archived'];
  const years = ['2025', '2024', '2023', '2022', '2021'];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const clearFilters = () => {
    setSelectedDomain('All Domains');
    setSelectedStatus('All Status');
    setSelectedYear('All Years');
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
            <h3 className="text-lg font-medium text-gray-800">Project Filters</h3>
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
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer"
                >
                  <option>All Domains</option>
                  {domains.map(domain => (
                    <option key={domain} value={domain}>{domain}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <FiChevronDown className="text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer"
                >
                  <option>All Status</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <FiChevronDown className="text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer"
                >
                  <option>All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <FiChevronDown className="text-gray-400" />
                </div>
              </div>
              
              {(selectedDomain !== 'All Domains' || selectedStatus !== 'All Status' || selectedYear !== 'All Years' || searchTerm) && (
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
            Showing <span className="font-semibold">24</span> projects
          </div>
        </div>
        
        {/* Mobile filter panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800">Filters</h3>
                <button onClick={toggleFilter} className="p-2 rounded-full hover:bg-gray-100">
                  <FiX className="text-lg" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search projects..."
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Domain</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['All Domains', ...domains].map(domain => (
                      <button
                        key={domain}
                        onClick={() => setSelectedDomain(domain)}
                        className={`px-3 py-2 rounded-lg text-sm ${
                          selectedDomain === domain
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {domain}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <div className="flex flex-wrap gap-3">
                    {['All Status', ...statuses].map(status => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`px-3 py-2 rounded-lg text-sm ${
                          selectedStatus === status
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                  <div className="flex flex-wrap gap-3">
                    {['All Years', ...years].map(year => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-3 py-2 rounded-lg text-sm ${
                          selectedYear === year
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={toggleFilter}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Active filters bar */}
      {(selectedDomain !== 'All Domains' || selectedStatus !== 'All Status' || selectedYear !== 'All Years' || searchTerm) && (
        <motion.div
          className="container mx-auto px-4 mt-4"
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
            
            {selectedDomain !== 'All Domains' && (
              <div className="flex items-center bg-blue-100 rounded-full px-3 py-1 text-sm">
                <span className="mr-1">Domain: {selectedDomain}</span>
                <button 
                  onClick={() => setSelectedDomain('All Domains')}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  <FiX size={14} />
                </button>
              </div>
            )}
            
            {selectedStatus !== 'All Status' && (
              <div className="flex items-center bg-blue-100 rounded-full px-3 py-1 text-sm">
                <span className="mr-1">Status: {selectedStatus}</span>
                <button 
                  onClick={() => setSelectedStatus('All Status')}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  <FiX size={14} />
                </button>
              </div>
            )}
            
            {selectedYear !== 'All Years' && (
              <div className="flex items-center bg-blue-100 rounded-full px-3 py-1 text-sm">
                <span className="mr-1">Year: {selectedYear}</span>
                <button 
                  onClick={() => setSelectedYear('All Years')}
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
    </motion.section>
  );
};

export default ProjectFilters;
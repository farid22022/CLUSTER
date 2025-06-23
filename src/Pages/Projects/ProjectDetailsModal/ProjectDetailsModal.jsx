// import { motion, AnimatePresence } from 'framer-motion';
// import { FiX, FiGithub, FiExternalLink, FiUsers, FiCalendar, FiCode, FiTag } from 'react-icons/fi';
// import PropTypes from 'prop-types';

// const ProjectDetailsModal = ({ project, onClose }) => {
//   if (!project) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 z-50 flex items-center justify-center p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         {/* Backdrop */}
//         <motion.div 
//           className="absolute inset-0 bg-black/60 backdrop-blur-md"
//           onClick={onClose}
//         />
        
//         {/* Modal container */}
//         <motion.div
//           className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-4xl mx-auto z-10 overflow-hidden border border-white/30"
//           initial={{ scale: 0.95, y: 50 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           transition={{ type: "spring", damping: 25 }}
//         >
//           {/* Header with gradient */}
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 relative">
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
//             >
//               <FiX size={24} />
//             </button>
            
//             <h3 className="text-2xl font-bold text-white">{project.title}</h3>
//             <p className="text-blue-100/90">{project.domain} Project</p>
//           </div>
          
//           {/* Body content */}
//           <div className="p-6 max-h-[80vh] overflow-y-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Left column - Image and stats */}
//               <div>
//                 <div className="relative h-64 rounded-xl overflow-hidden mb-6">
//                   <div 
//                     className="w-full h-full bg-cover bg-center"
//                     style={{ backgroundImage: `url(${project.image})` }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100/50">
//                     <div className="flex items-center text-gray-600 mb-2">
//                       <FiCalendar className="mr-2 text-blue-500" />
//                       <span className="text-sm">Year</span>
//                     </div>
//                     <p className="font-medium">{project.year}</p>
//                   </div>
                  
//                   <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100/50">
//                     <div className="flex items-center text-gray-600 mb-2">
//                       <FiTag className="mr-2 text-blue-500" />
//                       <span className="text-sm">Status</span>
//                     </div>
//                     <p className={`font-medium ${
//                       project.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
//                     }`}>
//                       {project.status}
//                     </p>
//                   </div>
//                 </div>
                
//                 {/* Team members */}
//                 <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100/50">
//                   <div className="flex items-center text-gray-600 mb-3">
//                     <FiUsers className="mr-2 text-blue-500" />
//                     <span className="font-medium">Team Members</span>
//                   </div>
//                   <div className="space-y-2">
//                     {project.team.map((member, i) => (
//                       <div key={i} className="flex items-center">
//                         <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
//                         <span>{member}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Right column - Details */}
//               <div>
//                 <div className="mb-6">
//                   <h4 className="text-lg font-semibold mb-3">Project Description</h4>
//                   <p className="text-gray-700 leading-relaxed">{project.description}</p>
//                 </div>
                
//                 <div className="mb-6">
//                   <h4 className="text-lg font-semibold mb-3 flex items-center">
//                     <FiCode className="mr-2 text-blue-500" />
//                     Technology Stack
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.techStack.map((tech, i) => (
//                       <span 
//                         key={i} 
//                         className="px-3 py-1 bg-blue-100/50 text-blue-800 rounded-full text-sm backdrop-blur-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="flex flex-wrap gap-4 mt-8">
//                   {project.github && (
//                     <motion.a
//                       href={project.github}
//                       className="flex items-center px-4 py-2 bg-gray-100/70 rounded-lg hover:bg-gray-200/70 transition-colors backdrop-blur-sm"
//                       whileHover={{ y: -3 }}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FiGithub className="mr-2" />
//                       View on GitHub
//                     </motion.a>
//                   )}
                  
//                   {project.demo && (
//                     <motion.a
//                       href={project.demo}
//                       className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                       whileHover={{ y: -3 }}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FiExternalLink className="mr-2" />
//                       Live Demo
//                     </motion.a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };
// ProjectDetailsModal.propTypes = {
//   project: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     domain: PropTypes.string,
//     image: PropTypes.string,
//     year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     status: PropTypes.string,
//     team: PropTypes.arrayOf(PropTypes.string),
//     description: PropTypes.string,
//     techStack: PropTypes.arrayOf(PropTypes.string),
//     github: PropTypes.string,
//     demo: PropTypes.string,
//   }),
//   onClose: PropTypes.func.isRequired,
// };

// export default ProjectDetailsModal;
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiUsers, FiCalendar, FiCode, FiTag } from 'react-icons/fi';

const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div 
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        
        {/* Modal container */}
        <motion.div
          className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-4xl mx-auto z-10 overflow-hidden border border-white/30"
          initial={{ scale: 0.95, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <FiX size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-blue-100/90">{project.domain} Project</p>
          </div>
          
          {/* Body content */}
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left column - Image and stats */}
              <div>
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100/50">
                    <div className="flex items-center text-gray-600 mb-2">
                      <FiCalendar className="mr-2 text-blue-500" />
                      <span className="text-sm">Year</span>
                    </div>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100/50">
                    <div className="flex items-center text-gray-600 mb-2">
                      <FiTag className="mr-2 text-blue-500" />
                      <span className="text-sm">Status</span>
                    </div>
                    <p className={`font-medium ${
                      project.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {project.status}
                    </p>
                  </div>
                </div>
                
                {/* Team members */}
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100/50">
                  <div className="flex items-center text-gray-600 mb-3">
                    <FiUsers className="mr-2 text-blue-500" />
                    <span className="font-medium">Team Members</span>
                  </div>
                  <div className="space-y-2">
                    {project.team.map((member, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span>{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right column - Details */}
              <div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Project Description</h4>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <FiCode className="mr-2 text-blue-500" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-blue-100/50 text-blue-800 rounded-full text-sm backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      className="flex items-center px-4 py-2 bg-gray-100/70 rounded-lg hover:bg-gray-200/70 transition-colors backdrop-blur-sm"
                      whileHover={{ y: -3 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-2" />
                      View on GitHub
                    </motion.a>
                  )}
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      whileHover={{ y: -3 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

import PropTypes from 'prop-types';

ProjectDetailsModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    domain: PropTypes.string,
    image: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    status: PropTypes.string,
    team: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    demo: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectDetailsModal;
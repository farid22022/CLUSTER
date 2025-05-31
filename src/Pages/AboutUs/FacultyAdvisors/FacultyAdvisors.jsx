import { motion } from 'framer-motion';

const FacultyAdvisors = () => {
  const advisors = [
    {
      name: 'Dr. Kazi Md. Alam',
      designation: 'Professor, CSE Discipline',
      bio: 'Expert in AI and Data Science, guiding CLUSTER’s research initiatives with over 15 years of academic experience. Published 50+ research papers in top-tier conferences and journals.',
      image: "https://i.ibb.co.com/bXynWfb/Money.png",
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      name: 'Dr. Farhana Sarker',
      designation: 'Associate Professor, CSE Discipline',
      bio: 'Specialist in Human-Computer Interaction and UX Design. Mentoring CLUSTER members in design thinking and innovation methodologies.',
      image: "https://i.ibb.co.com/bXynWfb/Money.png",
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      name: 'Dr. Rezaul Karim',
      designation: 'Assistant Professor, CSE Discipline',
      bio: 'Expert in Cybersecurity and Network Systems. Providing guidance on security protocols for CLUSTER projects and competitions.',
      image: "https://i.ibb.co.com/bXynWfb/Money.png",
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      name: 'Dr. Sonia Rahman',
      designation: 'Professor, Software Engineering',
      bio: 'Specialized in Agile Development and Software Architecture. Advising CLUSTER on project management best practices and industry trends.',
      image: "https://i.ibb.co.com/bXynWfb/Money.png",
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    }
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
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const hoverCard = {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  };

  const hoverImage = {
    scale: 1.05,
    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
    transition: { 
      duration: 0.3 
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Faculty Advisors
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our esteemed faculty members providing guidance, mentorship, and academic leadership
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {advisors.map((advisor, index) => (
            <motion.div 
              key={index}
              className="group"
              variants={item}
              whileHover={hoverCard}
            >
              <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${advisor.image})` }}
                    initial={{ scale: 1.1 }}
                    whileHover={hoverImage}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  
                  {/* Social links */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {Object.entries(advisor.social).map(([platform, link]) => (
                      <motion.a
                        key={platform}
                        href={link}
                        className="bg-white bg-opacity-90 p-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 10
                        }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          {platform === 'linkedin' && (
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          )}
                          {platform === 'twitter' && (
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          )}
                          {platform === 'email' && (
                            <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                          )}
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 relative">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 transform rotate-45 origin-top-right"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-1"
                      whileHover={{ color: "#2563eb" }}
                    >
                      {advisor.name}
                    </motion.h3>
                    
                    <div className="flex items-center text-blue-600 mb-3">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{advisor.designation}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{advisor.bio}</p>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
};

export default FacultyAdvisors;
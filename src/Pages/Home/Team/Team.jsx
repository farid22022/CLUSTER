import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    { 
      name: "Alex Johnson", 
      role: "President", 
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: { twitter: "#", linkedin: "#" }
    },
    { 
      name: "Sarah Williams", 
      role: "Vice President", 
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      social: { twitter: "#", linkedin: "#" }
    },
    { 
      name: "Michael Chen", 
      role: "Technical Lead", 
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      social: { twitter: "#", linkedin: "#" }
    },
    { 
      name: "Emily Davis", 
      role: "Events Coordinator", 
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          The passionate individuals driving CLUSTER forward
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6 text-center relative">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                
                <div className="flex justify-center gap-4">
                  <motion.a 
                    href={member.social.twitter}
                    className="text-gray-500 hover:text-blue-400"
                    whileHover={{ y: -3, scale: 1.2 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href={member.social.linkedin}
                    className="text-gray-500 hover:text-blue-700"
                    whileHover={{ y: -3, scale: 1.2 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
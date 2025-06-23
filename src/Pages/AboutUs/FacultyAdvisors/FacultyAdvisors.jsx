

// import  { useState, useEffect, useRef } from 'react';

// const FacultyAdvisors = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);

//   const advisors = [
//     {
//       name: 'Dr. Kazi Md. Alam',
//       designation: 'Professor, CSE Discipline',
//       bio: "Expert in AI and Data Science, guiding CLUSTER's research initiatives with over 15 years of academic experience. Published 50+ research papers in top-tier conferences and journals.",
//       image: "https://i.ibb.co.com/bXynWfb/Money.png",
//       gradient: 'from-purple-600 to-pink-600',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         email: '#'
//       }
//     },
//     {
//       name: 'Dr. Farhana Sarker',
//       designation: 'Associate Professor, CSE Discipline',
//       bio: 'Specialist in Human-Computer Interaction and UX Design. Mentoring CLUSTER members in design thinking and innovation methodologies.',
//       image: "https://i.ibb.co.com/bXynWfb/Money.png",
//       gradient: 'from-cyan-600 to-blue-600',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         email: '#'
//       }
//     },
//     {
//       name: 'Dr. Rezaul Karim',
//       designation: 'Assistant Professor, CSE Discipline',
//       bio: 'Expert in Cybersecurity and Network Systems. Providing guidance on security protocols for CLUSTER projects and competitions.',
//       image: "https://i.ibb.co.com/bXynWfb/Money.png",
//       gradient: 'from-emerald-600 to-teal-600',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         email: '#'
//       }
//     },
//     {
//       name: 'Dr. Sonia Rahman',
//       designation: 'Professor, Software Engineering',
//       bio: 'Specialized in Agile Development and Software Architecture. Advising CLUSTER on project management best practices and industry trends.',
//       image: "https://i.ibb.co.com/bXynWfb/Money.png",
//       gradient: 'from-orange-600 to-red-600',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         email: '#'
//       }
//     }
//   ];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: (e.clientX - rect.left) / rect.width,
//           y: (e.clientY - rect.top) / rect.height
//         });
//       }
//     };

//     const section = sectionRef.current;
//     if (section) {
//       section.addEventListener('mousemove', handleMouseMove);
//       return () => section.removeEventListener('mousemove', handleMouseMove);
//     }
//   }, []);

//   const getSocialIcon = (platform) => {
//     const icons = {
//       linkedin: (
//         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//       ),
//       twitter: (
//         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//       ),
//       email: (
//         <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
//       )
//     };
//     return icons[platform];
//   };

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Academic Symbols */}
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute opacity-5 text-white text-4xl animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${8 + Math.random() * 4}s`
//             }}
//           >
//             {['🎓', '📚', '🔬', '💡', '🏆'][Math.floor(Math.random() * 5)]}
//           </div>
//         ))}
        
//         {/* Dynamic Gradient Orbs */}
//         <div 
//           className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x * 100}px, ${mousePosition.y * 50}px)`,
//             transition: 'transform 0.5s ease-out'
//           }}
//         />
//         <div 
//           className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${-mousePosition.x * 60}px, ${-mousePosition.y * 40}px)`,
//             transition: 'transform 0.5s ease-out',
//             animationDelay: '2s'
//           }}
//         />
        
//         {/* Particle Network */}
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={`particle-${i}`}
//             className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `particle-drift ${10 + Math.random() * 20}s linear infinite`,
//               animationDelay: `${Math.random() * 10}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 max-w-6xl relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="perspective-1000 mb-8">
//             <h2 
//               className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-title-glow"
//               style={{
//                 transform: `rotateX(${mousePosition.y * 5 - 2.5}deg) rotateY(${mousePosition.x * 5 - 2.5}deg)`,
//                 transition: 'transform 0.3s ease-out'
//               }}
//             >
//               Faculty Advisors
//             </h2>
//           </div>
          
//           <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full animate-width-expand" />
          
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
//             Our esteemed faculty members providing 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold"> guidance, mentorship, and academic leadership</span>
//           </p>
//         </div>

//         {/* Faculty Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {advisors.map((advisor, index) => (
//             <div 
//               key={index}
//               className="group perspective-1000 animate-card-reveal"
//               style={{ animationDelay: `${index * 0.2}s` }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className={`relative transform-gpu transition-all duration-500 hover:scale-105 ${hoveredCard === index ? 'rotate-y-6' : ''}`}>
//                 {/* Card Glow Effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${advisor.gradient}/20 rounded-2xl blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
//                 <div className="relative backdrop-blur-lg bg-white/10 rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 h-full">
//                   {/* Image Section */}
//                   <div className="relative h-64 overflow-hidden">
//                     <div
//                       className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
//                       style={{ backgroundImage: `url(${advisor.image})` }}
//                     />
//                     <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent group-hover:from-gray-900/60 transition-all duration-300`} />
                    
//                     {/* Social Links */}
//                     <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
//                       {Object.entries(advisor.social).map(([platform, link], i) => (
//                         <a
//                           key={platform}
//                           href={link}
//                           className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
//                           style={{ animationDelay: `${i * 0.1}s` }}
//                         >
//                           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                             {getSocialIcon(platform)}
//                           </svg>
//                         </a>
//                       ))}
//                     </div>

//                     {/* Decorative Corner Badge */}
//                     <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r ${advisor.gradient} rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
//                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//                       </svg>
//                     </div>
//                   </div>
                  
//                   {/* Content Section */}
//                   <div className="p-6 relative">
//                     {/* Decorative Elements */}
//                     <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${advisor.gradient} transform rotate-45 origin-top-right opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    
//                     <div className="relative z-10">
//                       <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
//                         {advisor.name}
//                       </h3>
                      
//                       <div className={`flex items-center text-transparent bg-clip-text bg-gradient-to-r ${advisor.gradient} mb-4`}>
//                         <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
//                         </svg>
//                         <span className="text-sm font-medium">{advisor.designation}</span>
//                       </div>
                      
//                       <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
//                         {advisor.bio}
//                       </p>

//                       {/* Hover Indicator */}
//                       <div className="mt-4 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
//                         <span className="text-sm font-medium">Learn More</span>
//                         <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 animate-pulse-slow">
//             <span className="relative z-10">Connect with Our Faculty</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>
//         </div>
//       </div>

//       <style>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .rotate-y-6 {
//           transform: rotateY(6deg);
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-30px) rotate(180deg); }
//         }
        
//         @keyframes particle-drift {
//           0% { transform: translate(0, 0) scale(1); opacity: 0; }
//           10% { opacity: 0.4; }
//           90% { opacity: 0.4; }
//           100% { 
//             transform: translate(200px, -200px) scale(0.5); 
//             opacity: 0; 
//           }
//         }
        
//         @keyframes title-glow {
//           0%, 100% { text-shadow: 0 0 20px rgba(139, 69, 19, 0.5); }
//           50% { text-shadow: 0 0 40px rgba(139, 69, 19, 0.8), 0 0 60px rgba(139, 69, 19, 0.4); }
//         }
        
//         @keyframes width-expand {
//           0% { width: 0; }
//           100% { width: 8rem; }
//         }
        
//         @keyframes card-reveal {
//           0% { 
//             opacity: 0; 
//             transform: translateY(50px) rotateX(20deg); 
//           }
//           100% { 
//             opacity: 1; 
//             transform: translateY(0) rotateX(0); 
//           }
//         }
        
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
        
//         .animate-title-glow {
//           animation: title-glow 3s ease-in-out infinite;
//         }
        
//         .animate-width-expand {
//           animation: width-expand 1s ease-out;
//         }
        
//         .animate-card-reveal {
//           animation: card-reveal 0.8s ease-out both;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FacultyAdvisors;

import { useState, useEffect, useRef } from 'react';

const FacultyAdvisors = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const advisors = [
    {
      name: 'Dr. Kazi Md. Alam',
      designation: 'Professor, CSE Discipline',
      bio: "Expert in AI and Data Science, guiding CLUSTER's research initiatives with over 15 years of academic experience. Published 50+ research papers in top-tier conferences and journals.",
      image: "https://i.ibb.co.com/bXynWfb/Money.png",
      gradient: 'from-purple-600 to-pink-600',
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
      gradient: 'from-cyan-600 to-blue-600',
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
      gradient: 'from-emerald-600 to-teal-600',
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
      gradient: 'from-orange-600 to-red-600',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      ),
      twitter: (
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      ),
      email: (
        <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
      )
    };
    return icons[platform];
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div 
              className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"
              style={{
                transform: `rotate(${i * 18}deg) scale(${0.5 + Math.random()})`,
                animation: `float ${4 + Math.random() * 6}s ease-in-out infinite alternate`
              }}
            />
          </div>
        ))}
        
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
        
        {/* Matrix-style falling dots */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `fall ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="perspective-1000 mb-8">
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-title-glow"
              style={{
                transform: `rotateX(${mousePosition.y * 5 - 2.5}deg) rotateY(${mousePosition.x * 5 - 2.5}deg)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              Faculty Advisors
            </h2>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full animate-width-expand" />
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
            Our esteemed faculty members providing 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold"> guidance, mentorship, and academic leadership</span>
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <div 
              key={index}
              className="group perspective-1000 animate-card-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative transform-gpu transition-all duration-500 hover:scale-105 ${hoveredCard === index ? 'rotate-y-6' : ''}`}>
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advisor.gradient}/20 rounded-2xl blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative backdrop-blur-lg bg-white/10 rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 h-full">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${advisor.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent group-hover:from-gray-900/60 transition-all duration-300`} />
                    
                    {/* Social Links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {Object.entries(advisor.social).map(([platform, link], i) => (
                        <a
                          key={platform}
                          href={link}
                          className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 24 24">
                            {getSocialIcon(platform)}
                          </svg>
                        </a>
                      ))}
                    </div>

                    {/* Decorative Corner Badge */}
                    <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r ${advisor.gradient} rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 relative">
                    {/* Decorative Elements */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${advisor.gradient} transform rotate-45 origin-top-right opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                        {advisor.name}
                      </h3>
                      
                      <div className={`flex items-center text-transparent bg-clip-text bg-gradient-to-r ${advisor.gradient} mb-4`}>
                        <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{advisor.designation}</span>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {advisor.bio}
                      </p>

                      {/* Hover Indicator */}
                      <div className="mt-4 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 animate-pulse-slow">
            <span className="relative z-10">Connect with Our Faculty</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes particle-drift {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { 
            transform: translate(200px, -200px) scale(0.5); 
            opacity: 0; 
          }
        }
        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(139, 69, 19, 0.5); }
          50% { text-shadow: 0 0 40px rgba(139, 69, 19, 0.8), 0 0 60px rgba(139, 69, 19, 0.4); }
        }
        @keyframes width-expand {
          0% { width: 0; }
          100% { width: 8rem; }
        }
        @keyframes card-reveal {
          0% { 
            opacity: 0; 
            transform: translateY(50px) rotateX(20deg); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) rotateX(0); 
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-title-glow {
          animation: title-glow 3s ease-in-out infinite;
        }
        .animate-width-expand {
          animation: width-expand 1s ease-out;
        }
        .animate-card-reveal {
          animation: card-reveal 0.8s ease-out both;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FacultyAdvisors;
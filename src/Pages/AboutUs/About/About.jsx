

// import { useState, useEffect, useRef } from 'react';

// const About = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const sectionRef = useRef(null);

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

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative py-16 min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Geometric Shapes */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute opacity-10 animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${3 + Math.random() * 4}s`
//             }}
//           >
//             <div 
//               className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"
//               style={{
//                 transform: `rotate(${i * 18}deg) scale(${0.5 + Math.random()})`,
//                 animation: `float ${4 + Math.random() * 6}s ease-in-out infinite alternate`
//               }}
//             />
//           </div>
//         ))}
        
//         {/* Gradient Orbs */}
//         <div 
//           className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
//             transition: 'transform 0.3s ease-out'
//           }}
//         />
//         <div 
//           className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
//             transition: 'transform 0.3s ease-out',
//             animationDelay: '1s'
//           }}
//         />
        
//         {/* Matrix-style falling dots */}
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={`dot-${i}`}
//             className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animation: `fall ${5 + Math.random() * 10}s linear infinite`,
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto text-center relative z-10">
//         {/* 3D Animated Title */}
//         <div className="perspective-1000 mb-8">
//           <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transform hover:scale-105 transition-all duration-500 hover:rotate-y-12"
//               style={{
//                 textShadow: '0 0 30px rgba(139, 69, 19, 0.5)',
//                 transform: `rotateX(${mousePosition.y * 10 - 5}deg) rotateY(${mousePosition.x * 10 - 5}deg)`,
//                 transition: 'transform 0.3s ease-out'
//               }}>
//             CLUSTER
//           </h1>
//         </div>

//         {/* Animated Subtitle */}
//         <div className="mb-12 transform hover:scale-105 transition-all duration-300">
//           <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-2xl">
//             The heart of tech innovation at Khulna University&apos;s CSE Discipline, 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold"> fostering coding, research, and collaboration</span> since its inception.
//           </p>
//         </div>

//         {/* 3D Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {/* Mission & Vision Card */}
//           <div className="group perspective-1000">
//             <div className="relative transform-gpu transition-all duration-500 hover:rotate-y-6 hover:scale-105">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
//                 <div className="mb-6">
//                   <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
//                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     </svg>
//                   </div>
//                   <h2 className="text-3xl font-bold mb-4 text-white">Mission & Vision</h2>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed">
//                   Our mission is to <span className="text-cyan-400 font-semibold">empower students</span> with cutting-edge technical skills, 
//                   promote interdisciplinary research, and build a vibrant tech community. We envision a future where 
//                   <span className="text-purple-400 font-semibold"> KU CSE students lead global innovation</span>.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Club Values Card */}
//           <div className="group perspective-1000">
//             <div className="relative transform-gpu transition-all duration-500 hover:rotate-y-6 hover:scale-105">
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
//                 <div className="mb-6">
//                   <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
//                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//                     </svg>
//                   </div>
//                   <h2 className="text-3xl font-bold mb-6 text-white">Club Values</h2>
//                 </div>
//                 <div className="text-left space-y-4">
//                   {[
//                     { icon: "🚀", title: "Innovation", desc: "Pushing boundaries with creative solutions" },
//                     { icon: "🤝", title: "Inclusivity", desc: "Welcoming diverse perspectives" },
//                     { icon: "👨‍🏫", title: "Mentorship", desc: "Guiding the next generation of tech leaders" }
//                   ].map((value, index) => (
//                     <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
//                       <div className="text-2xl transform group-hover/item:scale-125 transition-transform duration-300">
//                         {value.icon}
//                       </div>
//                       <div>
//                         <span className="text-cyan-400 font-bold text-lg">{value.title}</span>
//                         <span className="text-gray-300 ml-2">{value.desc}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Floating CTA Button */}
//         <div className="mt-16">
//           <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
//             <span className="relative z-10">Join Our Community</span>
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
//         .rotate-y-12 {
//           transform: rotateY(12deg);
//         }
//         .hover\\:rotate-y-6:hover {
//           transform: rotateY(6deg);
//         }
//         .hover\\:rotate-y-12:hover {
//           transform: rotateY(12deg);
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes fall {
//           0% { transform: translateY(-10px); opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { transform: translateY(100vh); opacity: 0; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default About;
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

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

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
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

      <div className="container mx-auto text-center relative z-10">
        {/* 3D Animated Title */}
        <div className="perspective-1000 mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transform hover:scale-105 transition-all duration-500 hover:rotate-y-12"
              style={{
                textShadow: '0 0 30px rgba(139, 69, 19, 0.5)',
                transform: `rotateX(${mousePosition.y * 10 - 5}deg) rotateY(${mousePosition.x * 10 - 5}deg)`,
                transition: 'transform 0.3s ease-out'
              }}>
            CLUSTER
          </h1>
        </div>

        {/* Animated Subtitle */}
        <div className="mb-12 transform hover:scale-105 transition-all duration-300">
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-2xl">
            The heart of tech innovation at Khulna University&apos;s CSE Discipline, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold"> fostering coding, research, and collaboration</span> since its inception.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission & Vision Card */}
          <div className="group perspective-1000">
            <div className="relative transform-gpu transition-all duration-500 hover:rotate-y-6 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-white">Mission & Vision</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to <span className="text-cyan-400 font-semibold">empower students</span> with cutting-edge technical skills, 
                  promote interdisciplinary research, and build a vibrant tech community. We envision a future where 
                  <span className="text-purple-400 font-semibold"> KU CSE students lead global innovation</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Club Values Card */}
          <div className="group perspective-1000">
            <div className="relative transform-gpu transition-all duration-500 hover:rotate-y-6 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Club Values</h2>
                </div>
                <div className="text-left space-y-4">
                  {[
                    { icon: "🚀", title: "Innovation", desc: "Pushing boundaries with creative solutions" },
                    { icon: "🤝", title: "Inclusivity", desc: "Welcoming diverse perspectives" },
                    { icon: "👨‍🏫", title: "Mentorship", desc: "Guiding the next generation of tech leaders" }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                      <div className="text-2xl transform group-hover/item:scale-125 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <div>
                        <span className="text-cyan-400 font-bold text-lg">{value.title}</span>
                        <span className="text-gray-300 ml-2">{value.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating CTA Button */}
        <div className="mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10">Join Our Community</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .hover\\:rotate-y-12:hover {
          transform: rotateY(12deg);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes fall {
          0% { transform: translateY(-10px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default About;
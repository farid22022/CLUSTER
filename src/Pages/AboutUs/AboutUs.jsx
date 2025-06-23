// import About from "./About/About";
// import Achievements from "./Achievements/Achievements";
// import FacultyAdvisors from "./FacultyAdvisors/FacultyAdvisors";
// import HistoryTimeline from "./HistoryTimeline/HistoryTimeline";


// const AboutUs = () => {
//   return (
//     <div className="bg-gray-50 font-sans">
        
//       <About />
//       <HistoryTimeline />
//       <FacultyAdvisors />
//       <Achievements />
//     </div>
//   );
// };

// export default AboutUs;

import About from "./About/About";
import Achievements from "./Achievements/Achievements";
import FacultyAdvisors from "./FacultyAdvisors/FacultyAdvisors";
import HistoryTimeline from "./HistoryTimeline/HistoryTimeline";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans">
      <About />
      <HistoryTimeline />
      <FacultyAdvisors />
      <Achievements />
    </div>
  );
};

export default AboutUs;

import Banner from "./Banner/Banner";
import CommunitySpotlight from "./CommunitySpotlight/CommunitySpotlight";
import FeaturedEvents from "./FeaturedEvents/FeaturedEvents";
// import Sponsors from "./Sponsor/Sponsorship";


const Home = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Banner />
      <FeaturedEvents />
      <CommunitySpotlight />
      {/* <Sponsors /> */}
    </div>
  );
};

export default Home;
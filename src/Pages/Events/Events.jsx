import { useState } from "react";
import EventFilters from "./EventFilters/EventFilters";
import EventCard from "./EventCard/EventCard";
import EventArchive from "./EventArchive/EventArchive";
import EventCalendar from "./Calendar/EventCalendar";

const Events = () => {
  const [view, setView] = useState('grid'); // Toggle between grid and calendar view

  return (
    <div className="bg-gray-50 font-sans">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Discover CLUSTER Events</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Join our hackathons, workshops, datathons, and symposiums to ignite your tech passion!
          </p>
        </div>
      </section>
      <EventFilters setView={setView} />
      {view === 'grid' ? <EventCard /> : <EventCalendar />}
      <EventArchive />
    </div>
  );
};

export default Events;
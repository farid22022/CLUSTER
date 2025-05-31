import datathonRules from './../../../../public/File/Datathon_Contest_Rules.pdf';
import synergyXRules from './../../../../public/File/SynergyX_2024_Datathon_Competition.pdf';
import PropTypes from 'prop-types';

const ResourceCard = ({ isLoggedIn }) => {
  const resources = [
    {
      title: 'Datathon Contest Rules',
      category: 'Event Materials',
      format: 'PDF',
      difficulty: 'Beginner',
      link: datathonRules,
      restricted: false,
      description: 'Official rules for the SynergyX Datathon 2025.',
    },
    {
      title: 'Advanced Competitive Programming Guide',
      category: 'Competitive Programming',
      format: 'PDF',
      difficulty: 'Advanced',
      link: synergyXRules, // Placeholder
      restricted: true,
      description: 'In-depth guide to algorithms and data structures.',
    },
    {
      title: 'Introduction to Machine Learning',
      category: 'Tutorials',
      format: 'Video',
      difficulty: 'Intermediate',
      link: 'https://youtube.com/example', // Placeholder
      restricted: false,
      description: 'Video tutorial on ML basics by KU CSE faculty.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Resource Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{resource.title}</h3>
              <p className="text-gray-600 mt-2">
                <strong>Category:</strong> {resource.category}
              </p>
              <p className="text-gray-600">
                <strong>Format:</strong> {resource.format}
              </p>
              <p className="text-gray-600">
                <strong>Difficulty:</strong> {resource.difficulty}
              </p>
              <p className="text-gray-600 mt-2">{resource.description}</p>
              {resource.restricted && !isLoggedIn ? (
                <p className="text-red-600 mt-4">Login required to access this resource.</p>
              ) : (
                <a
                  href={resource.link}
                  className="mt-4 inline-block text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Resource
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ResourceCard.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
export default ResourceCard;

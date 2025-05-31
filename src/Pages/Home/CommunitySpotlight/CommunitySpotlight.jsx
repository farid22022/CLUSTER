const CommunitySpotlight = () => {
  const spotlights = [
    {
      title: 'AI-Powered Healthcare Project',
      subtitle: 'Led by Team NeuralNet',
      description: 'An innovative ML model for early disease detection, showcased at Symposium 2024.',
      link: '/projects',
    },
    {
      title: 'Alumnus Spotlight: Jane Doe',
      subtitle: 'Batch 2018, SDE at Google',
      description: 'Jane shares her journey from CLUSTER to a global tech career.',
      link: '/alumni',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Community Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spotlights.map((spotlight, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{spotlight.title}</h3>
              <p className="text-gray-600">{spotlight.subtitle}</p>
              <p className="mt-2">{spotlight.description}</p>
              <a href={spotlight.link} className="text-blue-600 hover:underline">
                {spotlight.link === '/projects' ? 'View Project' : 'Read More'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;
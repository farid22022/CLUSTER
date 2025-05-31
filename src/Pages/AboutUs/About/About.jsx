const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About CLUSTER</h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          CLUSTER is the heart of tech innovation at Khulna University’s CSE Discipline, fostering coding, research, and collaboration since its inception.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Mission & Vision</h2>
            <p className="text-gray-600">
              Our mission is to empower students with cutting-edge technical skills, promote interdisciplinary research, and build a vibrant tech community. We envision a future where KU CSE students lead global innovation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Club Values</h2>
            <ul className="text-gray-600 text-left">
              <li className="mb-2">• <strong>Innovation</strong>: Pushing boundaries with creative solutions.</li>
              <li className="mb-2">• <strong>Inclusivity</strong>: Welcoming diverse perspectives.</li>
              <li className="mb-2">• <strong>Mentorship</strong>: Guiding the next generation of tech leaders.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
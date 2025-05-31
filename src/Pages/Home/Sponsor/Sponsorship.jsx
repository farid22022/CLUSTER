import sponsor1 from '../../../public/sponsors/sponsor-1.png';
import sponsor2 from '../../../public/sponsors/sponsor-2.png';
import sponsor3 from '../../../public/sponsors/sponsor-3.png';
import sponsor4 from '../../../public/sponsors/sponsor-4.png';

const Sponsors = () => {
  const sponsors = [
    { image: sponsor1, alt: 'Sponsor 1' },
    { image: sponsor2, alt: 'Sponsor 2' },
    { image: sponsor3, alt: 'Sponsor 3' },
    { image: sponsor4, alt: 'Sponsor 4' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
        <div className="flex justify-center space-x-8">
          {sponsors.map((sponsor, index) => (
            <img key={index} src={sponsor.image} alt={sponsor.alt} className="h-16" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
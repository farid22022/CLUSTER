import clusterLogo from '../../../public/logo/cluster.png';

const NavBar = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/projects', label: 'Projects' },
    { path: '/resources', label: 'Resources' },
    { path: '/blog', label: 'Blog' },
    { path: '/alumni', label: 'Alumni' },
    { path: '/contact', label: 'Contact' },
    { path: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={clusterLogo} alt="CLUSTER Logo" className="h-10 mr-2" />
          <span className="text-2xl font-bold">CLUSTER</span>
        </div>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a href={link.path} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
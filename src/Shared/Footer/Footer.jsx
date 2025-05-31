const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>Email: cluster@cseku.ac.bd</p>
        <p className="mt-2">
          Follow us:{' '}
          <a href="#" className="underline">Facebook</a> |{' '}
          <a href="#" className="underline">GitHub</a> |{' '}
          <a href="#" className="underline">LinkedIn</a>
        </p>
        <p className="mt-4">© 2025 CLUSTER, Khulna University</p>
      </div>
    </footer>
  );
};

export default Footer;
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const disciplines = [
  { code: 'ARCH', name: 'Architecture', number: '01' },
  { code: 'CSE', name: 'Computer Science and Engineering', number: '02' },
  { code: 'ECE', name: 'Electronics and Communication Engineering', number: '03' },
  { code: 'ES', name: 'Environmental Science', number: '04' },
  { code: 'FMRT', name: 'Fisheries and Marine Resource Technology', number: '05' },
  { code: 'BGE', name: 'Biotechnology and Genetic Engineering', number: '06' },
  { code: 'STAT', name: 'Statistics', number: '07' },
  { code: 'MATH', name: 'Mathematics', number: '08' },
  { code: 'ENG', name: 'English', number: '09' },
  { code: 'URP', name: 'Urban and Rural Planning', number: '10' },
  { code: 'SOC', name: 'Sociology', number: '11' },
  { code: 'ECO', name: 'Economics', number: '12' },
  { code: 'DS', name: 'Development Studies', number: '13' },
  { code: 'LAW', name: 'Law', number: '14' },
  { code: 'PHY', name: 'Physics', number: '15' },
  { code: 'CHEM', name: 'Chemistry', number: '16' },
  { code: 'BAN', name: 'Bangla', number: '17' },
  { code: 'BAD', name: 'Business Administration', number: '18' },
  { code: 'EDU', name: 'Education', number: '19' },
  { code: 'FWT', name: 'Forestry and Wood Technology', number: '20' },
  { code: 'AGT', name: 'Agrotechnology', number: '21' },
  { code: 'SWE', name: 'Soil, Water and Environment', number: '22' },
  { code: 'PAD', name: 'Public Administration', number: '23' },
  { code: 'HRM', name: 'Human Resource Management', number: '24' },
  { code: 'HIS', name: 'History and Civilization', number: '25' },
  { code: 'MCJ', name: 'Mass Communication and Journalism', number: '26' },
  { code: 'BME', name: 'Biomedical Engineering', number: '27' },
  { code: 'PHAR', name: 'Pharmacy', number: '28' },
  { code: 'IES', name: 'Institute of Environmental Studies', number: '29' },
];

const Profile = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    studentId: '',
    profileImage: '',
    email: '',
    phone: '',
  });
  const fileInputRef = useRef(null);

  // ImageBB API Key (should be stored in environment variables in production)
  const IMAGEBB_API_KEY = '757ec57b5f8a618a06dabaafb680a399';

  // Background animation variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setError('Please upload a JPEG or PNG image');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append('image', file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${IMAGEBB_API_KEY}`,
        uploadData,
      );
      if (response.data.success) {
        setFormData((prev) => ({ ...prev, profileImage: response.data.data.url }));
        setError('');
      } else {
        setError('Image upload failed. Please try again.');
      }
    } catch (err) {
      setError('Image upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const validateAndSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate student ID format (6 digits: YYDDNN)
    const idRegex = /^\d{6}$/;
    if (!idRegex.test(formData.studentId)) {
      setError('Student ID must be a 6-digit number (e.g., 220222)');
      return;
    }

    // Parse student ID
    const year = formData.studentId.slice(0, 2);
    const disciplineCode = formData.studentId.slice(2, 4);
    const roll = formData.studentId.slice(4, 6);

    // Validate discipline code
    const discipline = disciplines.find((d) => d.number === disciplineCode);
    if (!discipline) {
      setError('Invalid discipline code in student ID');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Validate phone
    const phoneRegex = /^\+8801[3-9]\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid Bangladeshi phone number (e.g., +88017XXXXXXXX)');
      return;
    }

    // Validate profile image
    if (!formData.profileImage) {
      setError('Please upload a profile image');
      return;
    }

    // Set profile data
    setProfileData({
      year: `20${year}`,
      discipline: discipline.name,
      roll,
      profileImage: formData.profileImage,
      email: formData.email,
      phone: formData.phone,
    });

    setIsFormOpen(false);
    setFormData({ studentId: '', profileImage: '', email: '', phone: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="relative min-h-screen font-sans bg-gray-100">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-20"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                duration: 1.5,
                delay: i * 0.2,
                type: 'spring',
              },
            }}
          />
        ))}
      </motion.div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40?text=KU" alt="KU Logo" className="h-10 mr-3" />
            <h1 className="text-xl font-bold text-gray-800">Khulna University Profile</h1>
          </div>
          <nav>
            <a href="https://ku.ac.bd" className="text-blue-600 hover:underline">KU Home</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Welcome to Your KU Profile
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Build your professional profile and connect with the Khulna University community.
          </motion.p>
          <motion.button
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 shadow-lg transition-colors"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            {profileData ? 'Update Profile' : 'Create Profile'}
          </motion.button>
        </div>
      </motion.section>

      {/* Profile Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white">
                <h2 className="text-2xl font-bold">Create Your Profile</h2>
                <p className="text-sm">Enter your details to join the KU community</p>
              </div>
              <form className="p-6 space-y-6" onSubmit={validateAndSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50 py-2 px-3"
                    placeholder="e.g., 220222"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/jpeg,image/png"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {formData.profileImage && (
                    <img src={formData.profileImage} alt="Preview" className="mt-3 w-24 h-24 rounded-full object-cover" />
                  )}
                  {isUploading && (
                    <p className="text-sm text-gray-500 mt-2">Uploading image...</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50 py-2 px-3"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50 py-2 px-3"
                    placeholder="e.g., +88017XXXXXXXX"
                  />
                </div>
                {error && (
                  <motion.p
                    className="text-red-600 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {error}
                  </motion.p>
                )}
                <div className="flex justify-end space-x-4">
                  <motion.button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={isUploading}
                    className={`px-6 py-2 rounded-lg text-white ${isUploading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                    whileHover={{ scale: isUploading ? 1 : 1.05 }}
                    whileTap={{ scale: isUploading ? 1 : 0.95 }}
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Display Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your Profile
          </motion.h2>
          {profileData ? (
            <motion.div
              className="max-w-md mx-auto bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <img
                src={profileData.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                {profileData.year} - {profileData.discipline}
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Roll: {profileData.roll}
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline">
                    {profileData.email}
                  </a>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {profileData.phone}
                </li>
              </ul>
              <motion.button
                onClick={() => setIsFormOpen(true)}
                className="mt-6 mx-auto block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Edit Profile
              </motion.button>
            </motion.div>
          ) : (
            <motion.p
              className="text-center text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              No profile data yet. Create your profile above!
            </motion.p>
          )}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section
        className="py-8 bg-gray-800 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Khulna University CSE Alumni Network.{' '}
            <a
              href="https://ku.ac.bd/discipline/cse"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit KU CSE Discipline
            </a>
          </p>
        </div>
      </motion.section>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
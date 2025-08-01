import { useState, useRef,} from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, X, Upload, User, Mail, Phone, GraduationCap,  MapPin, Award, Briefcase, Users, ChevronDown } from 'lucide-react';

const disciplines = [
  { code: 'ARCH', name: 'Architecture', number: '01', color: '#FF6B6B' },
  { code: 'CSE', name: 'Computer Science and Engineering', number: '02', color: '#4ECDC4' },
  { code: 'ECE', name: 'Electronics and Communication Engineering', number: '03', color: '#45B7D1' },
  { code: 'ES', name: 'Environmental Science', number: '04', color: '#96CEB4' },
  { code: 'FMRT', name: 'Fisheries and Marine Resource Technology', number: '05', color: '#FFEAA7' },
  { code: 'BGE', name: 'Biotechnology and Genetic Engineering', number: '06', color: '#DDA0DD' },
  { code: 'STAT', name: 'Statistics', number: '07', color: '#98D8C8' },
  { code: 'MATH', name: 'Mathematics', number: '08', color: '#F7DC6F' },
  { code: 'ENG', name: 'English', number: '09', color: '#BB8FCE' },
  { code: 'URP', name: 'Urban and Rural Planning', number: '10', color: '#85C1E9' },
  { code: 'SOC', name: 'Sociology', number: '11', color: '#F8C471' },
  { code: 'ECO', name: 'Economics', number: '12', color: '#82E0AA' },
  { code: 'DS', name: 'Development Studies', number: '13', color: '#F1948A' },
  { code: 'LAW', name: 'Law', number: '14', color: '#85929E' },
  { code: 'PHY', name: 'Physics', number: '15', color: '#AED6F1' },
  { code: 'CHEM', name: 'Chemistry', number: '16', color: '#A9DFBF' },
  { code: 'BAN', name: 'Bangla', number: '17', color: '#F9E79F' },
  { code: 'BAD', name: 'Business Administration', number: '18', color: '#D7BDE2' },
  { code: 'EDU', name: 'Education', number: '19', color: '#A3E4D7' },
  { code: 'FWT', name: 'Forestry and Wood Technology', number: '20', color: '#D5A6BD' },
  { code: 'AGT', name: 'Agrotechnology', number: '21', color: '#F4D03F' },
  { code: 'SWE', name: 'Soil, Water and Environment', number: '22', color: '#A9CCE3' },
  { code: 'PAD', name: 'Public Administration', number: '23', color: '#F5B7B1' },
  { code: 'HRM', name: 'Human Resource Management', number: '24', color: '#D2B4DE' },
  { code: 'HIS', name: 'History and Civilization', number: '25', color: '#AEB6BF' },
  { code: 'MCJ', name: 'Mass Communication and Journalism', number: '26', color: '#F8D7DA' },
  { code: 'BME', name: 'Biomedical Engineering', number: '27', color: '#B3E5FC' },
  { code: 'PHAR', name: 'Pharmacy', number: '28', color: '#C8E6C9' },
  { code: 'IES', name: 'Institute of Environmental Studies', number: '29', color: '#DCEDC1' },
];

const Notification = ({ notification, onClose }) => {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: AlertCircle,
  };

  const colors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  const Icon = icons[notification.type];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      className={`p-4 rounded-xl border-2 shadow-lg backdrop-blur-sm ${colors[notification.type]} mb-3`}
      style={{
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="flex items-start">
        <Icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
        <div className="flex-1">
          <p className="font-medium">{notification.title}</p>
          {notification.message && (
            <p className="text-sm mt-1 opacity-90">{notification.message}</p>
          )}
        </div>
        <button
          onClick={() => onClose(notification.id)}
          className="ml-3 p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

Notification.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};


// Notification System Hook
const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    const id = Date.now();
    const newNotification = { ...notification, id };
    setNotifications(prev => [...prev, newNotification]);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);

    return id;
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return { notifications, addNotification, removeNotification };
};

const Profile = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    studentId: '',
    profileImage: '',
    email: '',
    phone: '',
    bio: '',
    skills: '',
    interests: '',
  });
  const fileInputRef = useRef(null);
  const { notifications, addNotification, removeNotification } = useNotifications();

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // ImageBB API Key (should be stored in environment variables in production)
  const IMAGEBB_API_KEY = '757ec57b5f8a618a06dabaafb680a399';

  // 3D Animation variants
  const card3DVariants = {
    rest: { rotateX: 0, rotateY: 0, scale: 1 },
    hover: { 
      rotateX: 5, 
      rotateY: 10, 
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
  };

  const floating3DVariants = {
    initial: { y: 0, rotateX: 0, rotateY: 0 },
    animate: {
      y: [-10, 10, -10],
      rotateX: [-5, 5, -5],
      rotateY: [-3, 3, -3],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      addNotification({
        type: 'error',
        title: 'Invalid File Format',
        message: 'Please upload a JPEG, PNG, or WebP image'
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      addNotification({
        type: 'error',
        title: 'File Too Large',
        message: 'Image size must be less than 5MB'
      });
      return;
    }

    setIsUploading(true);
    addNotification({
      type: 'info',
      title: 'Uploading Image',
      message: 'Please wait while we upload your profile picture...'
    });

    const uploadData = new FormData();
    uploadData.append('image', file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMAGEBB_API_KEY}`,
        {
          method: 'POST',
          body: uploadData,
        }
      );
      const data = await response.json();
      
      if (data.success) {
        setFormData((prev) => ({ ...prev, profileImage: data.data.url }));
        addNotification({
          type: 'success',
          title: 'Image Uploaded Successfully',
          message: 'Your profile picture has been uploaded and is ready to use!'
        });
      } else {
        throw new Error('Upload failed');
      }
    } catch (err) {
      addNotification({
        type: 'error',
        title: 'Upload Failed',
        message: 'Failed to upload image. Please try again or use a different image.',err
      });
    } finally {
      setIsUploading(false);
    }
  };

  const validateAndSubmit = (e) => {
    e.preventDefault();

    // Validate student ID format (6 digits: YYDDNN)
    const idRegex = /^\d{6}$/;
    if (!idRegex.test(formData.studentId)) {
      addNotification({
        type: 'error',
        title: 'Invalid Student ID',
        message: 'Student ID must be a 6-digit number (e.g., 220222)'
      });
      return;
    }

    // Parse student ID
    const year = formData.studentId.slice(0, 2);
    const disciplineCode = formData.studentId.slice(2, 4);
    const roll = formData.studentId.slice(4, 6);

    // Validate discipline code
    const discipline = disciplines.find((d) => d.number === disciplineCode);
    if (!discipline) {
      addNotification({
        type: 'error',
        title: 'Invalid Discipline Code',
        message: 'The discipline code in your student ID is not valid'
      });
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      addNotification({
        type: 'error',
        title: 'Invalid Email',
        message: 'Please enter a valid email address'
      });
      return;
    }

    // Validate phone
    const phoneRegex = /^\+8801[3-9]\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      addNotification({
        type: 'error',
        title: 'Invalid Phone Number',
        message: 'Please enter a valid Bangladeshi phone number (e.g., +88017XXXXXXXX)'
      });
      return;
    }

    // Validate profile image
    if (!formData.profileImage) {
      addNotification({
        type: 'warning',
        title: 'Profile Image Required',
        message: 'Please upload a profile image to complete your profile'
      });
      return;
    }

    // Set profile data
    setProfileData({
      year: `20${year}`,
      discipline: discipline.name,
      disciplineColor: discipline.color,
      roll,
      profileImage: formData.profileImage,
      email: formData.email,
      phone: formData.phone,
      bio: formData.bio,
      skills: formData.skills.split(',').map(skill => skill.trim()).filter(Boolean),
      interests: formData.interests.split(',').map(interest => interest.trim()).filter(Boolean),
    });

    setIsFormOpen(false);
    setFormData({ 
      studentId: '', 
      profileImage: '', 
      email: '', 
      phone: '', 
      bio: '', 
      skills: '', 
      interests: '' 
    });
    if (fileInputRef.current) fileInputRef.current.value = '';

    addNotification({
      type: 'success',
      title: 'Profile Created Successfully!',
      message: 'Your KU profile has been created and is now ready to share with the community.'
    });
  };

  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Notification Container */}
      <div className="fixed top-4 right-4 z-50 w-96 max-w-full">
        <AnimatePresence>
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              notification={notification}
              onClose={removeNotification}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* 3D Floating Background Elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + (i % 3) * 25}%`,
              perspective: '1000px',
            }}
            variants={floating3DVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: i * 0.5 }}
          >
            <div
              className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-20"
              style={{
                transform: 'rotateX(45deg) rotateY(45deg)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Header with 3D effect */}
      

      {/* Hero Section with 3D elements */}
      <motion.section
        className="relative py-24 text-center overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: opacityTransform,
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ 
                textShadow: '0 10px 30px rgba(0,0,0,0.3)',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Build Your Legacy
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Connect with the prestigious Khulna University community and showcase your professional journey
            </motion.p>
            <motion.button
              onClick={() => setIsFormOpen(true)}
              className="group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white text-blue-900 px-12 py-4 rounded-2xl font-bold text-lg shadow-xl">
                {profileData ? 'Update Profile' : 'Create Your Profile'}
                <ChevronDown className="inline w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Profile Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, rotateX: -10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: -10 }}
              transition={{ type: 'spring', damping: 20 }}
              style={{ 
                boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 text-white rounded-t-3xl">
                <motion.h2 
                  className="text-3xl font-bold mb-2"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Create Your Professional Profile
                </motion.h2>
                <motion.p 
                  className="text-blue-100"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Join the elite Khulna University professional network
                </motion.p>
              </div>
              
              <form className="p-8 space-y-6" onSubmit={validateAndSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Student ID
                    </label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all"
                      placeholder="e.g., 220222"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Upload className="inline w-4 h-4 mr-2" />
                      Profile Image
                    </label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/jpeg,image/png,image/webp"
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
                    />
                    {formData.profileImage && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mt-4 flex justify-center"
                      >
                        <img 
                          src={formData.profileImage} 
                          alt="Preview" 
                          className="w-24 h-24 rounded-2xl object-cover shadow-lg border-4 border-blue-100" 
                        />
                      </motion.div>
                    )}
                    {isUploading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 flex items-center justify-center"
                      >
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                        <span className="ml-2 text-sm text-blue-600">Uploading...</span>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all"
                      placeholder="+88017XXXXXXXX"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Briefcase className="inline w-4 h-4 mr-2" />
                    Professional Bio
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={3}
                    className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all resize-none"
                    placeholder="Tell us about yourself, your aspirations, and professional journey..."
                  />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Award className="inline w-4 h-4 mr-2" />
                      Skills (comma-separated)
                    </label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all"
                      placeholder="JavaScript, Python, React, Leadership"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Users className="inline w-4 h-4 mr-2" />
                      Interests (comma-separated)
                    </label>
                    <input
                      type="text"
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all"
                      placeholder="AI, Web Development, Research, Innovation"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="flex justify-end space-x-4 pt-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <motion.button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-8 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold transition-all"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={isUploading}
                    className={`px-8 py-3 rounded-xl text-white font-semibold transition-all ${
                      isUploading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg'
                    }`}
                    whileHover={{ scale: isUploading ? 1 : 1.05, rotateY: isUploading ? 0 : -5 }}
                    whileTap={{ scale: isUploading ? 1 : 0.95 }}
                  >
                    {isUploading ? 'Processing...' : 'Create Profile 🚀'}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Profile Display Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your Professional Identity
          </motion.h2>
          
          {profileData ? (
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
                variants={card3DVariants}
                initial="rest"
                whileHover="hover"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
                }}
              >
                {/* Profile Header with Discipline Color */}
                <div 
                  className="h-32 relative"
                  style={{
                    background: `linear-gradient(135deg, ${profileData.disciplineColor}33 0%, ${profileData.disciplineColor}66 100%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                  <motion.div
                    className="absolute -bottom-16 left-8"
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src={profileData.profileImage}
                      alt="Profile"
                      className="w-32 h-32 rounded-3xl object-cover shadow-xl border-6 border-white"
                      style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
                      }}
                    />
                  </motion.div>
                </div>

                <div className="pt-20 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Basic Info */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          Class of {profileData.year}
                        </h3>
                        <p className="text-xl text-gray-600 mb-1">
                          {profileData.discipline}
                        </p>
                        <div className="flex items-center text-gray-500">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          <span>Roll: {profileData.roll}</span>
                        </div>
                      </motion.div>

                      {profileData.bio && (
                        <motion.div
                          className="bg-gray-50 rounded-2xl p-6"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            About Me
                          </h4>
                          <p className="text-gray-600 leading-relaxed">{profileData.bio}</p>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Column - Contact & Skills */}
                    <div className="space-y-6">
                      <motion.div
                        className="space-y-4"
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.a
                          href={`mailto:${profileData.email}`}
                          className="flex items-center p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors group"
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <Mail className="w-5 h-5 text-blue-600 mr-3" />
                          <span className="text-blue-800 font-medium group-hover:underline">
                            {profileData.email}
                          </span>
                        </motion.a>

                        <motion.div
                          className="flex items-center p-4 bg-green-50 rounded-2xl"
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <Phone className="w-5 h-5 text-green-600 mr-3" />
                          <span className="text-green-800 font-medium">
                            {profileData.phone}
                          </span>
                        </motion.div>

                        <motion.div
                          className="flex items-center p-4 bg-purple-50 rounded-2xl"
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                          <span className="text-purple-800 font-medium">
                            Khulna University, Bangladesh
                          </span>
                        </motion.div>
                      </motion.div>

                      {/* Skills Section */}
                      {profileData.skills && profileData.skills.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <h4 className="font-semibold text-gray-700 mb-4 flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Skills & Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {profileData.skills.map((skill, index) => (
                              <motion.span
                                key={skill}
                                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium shadow-lg"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ scale: 1.1, rotateZ: 5 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Interests Section */}
                      {profileData.interests && profileData.interests.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                        >
                          <h4 className="font-semibold text-gray-700 mb-4 flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            Interests
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {profileData.interests.map((interest, index) => (
                              <motion.span
                                key={interest}
                                className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl text-sm font-medium shadow-lg"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.0 + index * 0.1 }}
                                whileHover={{ scale: 1.1, rotateZ: -5 }}
                              >
                                {interest}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Update Profile Button */}
                  <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.button
                      onClick={() => setIsFormOpen(true)}
                      className="group relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg">
                        Update Profile ✨
                      </div>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <GraduationCap className="w-24 h-24 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Ready to Join the KU Network?
              </h3>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                Create your professional profile and connect with fellow alumni, students, and faculty members.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <motion.footer
        className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-12 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Khulna University</h3>
                <p className="text-blue-200">Excellence in Education Since 1991</p>
              </div>
            </motion.div>
            
            <div className="flex justify-center space-x-8 mb-8">
              <motion.a
                href="https://ku.ac.bd"
                className="text-blue-300 hover:text-white transition-colors font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website
              </motion.a>
              <motion.a
                href="https://ku.ac.bd/discipline/cse"
                className="text-blue-300 hover:text-white transition-colors font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                CSE Discipline
              </motion.a>
              <motion.a
                href="https://ku.ac.bd/academics"
                className="text-blue-300 hover:text-white transition-colors font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Academics
              </motion.a>
            </div>
            
            <motion.p
              className="text-gray-300 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              © {new Date().getFullYear()} Khulna University Professional Network. 
              Empowering minds, building futures. 🎓
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Profile;
// import { useState, useRef, useContext, useEffect } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';
// import PropTypes from 'prop-types';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { CheckCircle, XCircle, AlertCircle, X, Upload, User, Mail, Phone, GraduationCap, MapPin, Award, Briefcase, Users, ChevronDown } from 'lucide-react';
// import axios from 'axios';

// const disciplines = [
//   { code: 'ARCH', name: 'Architecture', number: '01', color: '#FF6B6B' },
//   { code: 'CSE', name: 'Computer Science and Engineering', number: '02', color: '#4ECDC4' },
//   { code: 'ECE', name: 'Electronics and Communication Engineering', number: '03', color: '#45B7D1' },
//   { code: 'ES', name: 'Environmental Science', number: '04', color: '#96CEB4' },
//   { code: 'FMRT', name: 'Fisheries and Marine Resource Technology', number: '05', color: '#FFEAA7' },
//   { code: 'BGE', name: 'Biotechnology and Genetic Engineering', number: '06', color: '#DDA0DD' },
//   { code: 'STAT', name: 'Statistics', number: '07', color: '#98D8C8' },
//   { code: 'MATH', name: 'Mathematics', number: '08', color: '#F7DC6F' },
//   { code: 'ENG', name: 'English', number: '09', color: '#BB8FCE' },
//   { code: 'URP', name: 'Urban and Rural Planning', number: '10', color: '#85C1E9' },
//   { code: 'SOC', name: 'Sociology', number: '11', color: '#F8C471' },
//   { code: 'ECO', name: 'Economics', number: '12', color: '#82E0AA' },
//   { code: 'DS', name: 'Development Studies', number: '13', color: '#F1948A' },
//   { code: 'LAW', name: 'Law', number: '14', color: '#85929E' },
//   { code: 'PHY', name: 'Physics', number: '15', color: '#AED6F1' },
//   { code: 'CHEM', name: 'Chemistry', number: '16', color: '#A9DFBF' },
//   { code: 'BAN', name: 'Bangla', number: '17', color: '#F9E79F' },
//   { code: 'BAD', name: 'Business Administration', number: '18', color: '#D7BDE2' },
//   { code: 'EDU', name: 'Education', number: '19', color: '#A3E4D7' },
//   { code: 'FWT', name: 'Forestry and Wood Technology', number: '20', color: '#D5A6BD' },
//   { code: 'AGT', name: 'Agrotechnology', number: '21', color: '#F4D03F' },
//   { code: 'SWE', name: 'Soil, Water and Environment', number: '22', color: '#A9CCE3' },
//   { code: 'PAD', name: 'Public Administration', number: '23', color: '#F5B7B1' },
//   { code: 'HRM', name: 'Human Resource Management', number: '24', color: '#D2B4DE' },
//   { code: 'HIS', name: 'History and Civilization', number: '25', color: '#AEB6BF' },
//   { code: 'MCJ', name: 'Mass Communication and Journalism', number: '26', color: '#F8D7DA' },
//   { code: 'BME', name: 'Biomedical Engineering', number: '27', color: '#B3E5FC' },
//   { code: 'PHAR', name: 'Pharmacy', number: '28', color: '#C8E6C9' },
//   { code: 'IES', name: 'Institute of Environmental Studies', number: '29', color: '#DCEDC1' },
// ];

// const Notification = ({ notification, onClose }) => {
//   const icons = {
//     success: CheckCircle,
//     error: XCircle,
//     warning: AlertCircle,
//     info: AlertCircle,
//   };

//   const colors = {
//     success: 'bg-green-50 border-green-200 text-green-800',
//     error: 'bg-red-50 border-red-200 text-red-800',
//     warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
//     info: 'bg-blue-50 border-blue-200 text-blue-800',
//   };

//   const Icon = icons[notification.type];

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: -50, scale: 0.95 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       exit={{ opacity: 0, y: -50, scale: 0.95 }}
//       className={`p-4 rounded-xl border-2 shadow-lg backdrop-blur-sm ${colors[notification.type]} mb-3`}
//       style={{
//         boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//       }}
//     >
//       <div className="flex items-start">
//         <Icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
//         <div className="flex-1">
//           <p className="font-medium">{notification.title}</p>
//           {notification.message && (
//             <p className="text-sm mt-1 opacity-90">{notification.message}</p>
//           )}
//         </div>
//         <button
//           onClick={() => onClose(notification.id)}
//           className="ml-3 p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors"
//         >
//           <X className="w-4 h-4" />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// Notification.propTypes = {
//   notification: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
//     title: PropTypes.string.isRequired,
//     message: PropTypes.string,
//   }).isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// const useNotifications = () => {
//   const [notifications, setNotifications] = useState([]);

//   const addNotification = (notification) => {
//     const id = Date.now();
//     const newNotification = { ...notification, id };
//     setNotifications(prev => [...prev, newNotification]);

//     setTimeout(() => {
//       removeNotification(id);
//     }, 5000);

//     return id;
//   };

//   const removeNotification = (id) => {
//     setNotifications(prev => prev.filter(n => n.id !== id));
//   };

//   return { notifications, addNotification, removeNotification };
// };

// const Profile = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [formData, setFormData] = useState({
//     studentId: '',
//     profileImage: '',
//     email: '',
//     phone: '',
//     bio: '',
//     skills: '',
//     interests: '',
//   });
//   const fileInputRef = useRef(null);
//   const { notifications, addNotification, removeNotification } = useNotifications();
//   const { user,  saveUserProfile, updateUserProfile, updateUserProfileData } = useContext(AuthContext);

//   // Scroll animations
//   const { scrollYProgress } = useScroll();
//   const yTransform = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   // ImageBB API Key
//   const IMAGEBB_API_KEY = '757ec57b5f8a618a06dabaafb680a399';

//   // 3D Animation variants
//   const card3DVariants = {
//     rest: { rotateX: 0, rotateY: 0, scale: 1 },
//     hover: { 
//       rotateX: 5, 
//       rotateY: 10, 
//       scale: 1.05,
//       transition: { duration: 0.3, ease: 'easeOut' }
//     },
//   };

//   const floating3DVariants = {
//     initial: { y: 0, rotateX: 0, rotateY: 0 },
//     animate: {
//       y: [-10, 10, -10],
//       rotateX: [-5, 5, -5],
//       rotateY: [-3, 3, -3],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         repeatType: 'reverse',
//         ease: 'easeInOut',
//       },
//     },
//   };

//   useEffect(() => {
//     if (user && user.email) {
//       setFormData(prev => ({
//         ...prev,
//         email: user.email,
//         profileImage: user.photoURL || '',
//       }));
//     }
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
//       addNotification({
//         type: 'error',
//         title: 'Invalid File Format',
//         message: 'Please upload a JPEG, PNG, or WebP image'
//       });
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       addNotification({
//         type: 'error',
//         title: 'File Too Large',
//         message: 'Image size must be less than 5MB'
//       });
//       return;
//     }

//     setIsUploading(true);
//     addNotification({
//       type: 'info',
//       title: 'Uploading Image',
//       message: 'Please wait while we upload your profile picture...'
//     });

//     const uploadData = new FormData();
//     uploadData.append('image', file);

//     try {
//       const response = await fetch(
//         `https://api.imgbb.com/1/upload?key=${IMAGEBB_API_KEY}`,
//         {
//           method: 'POST',
//           body: uploadData,
//         }
//       );
//       const data = await response.json();
      
//       if (data.success) {
//         setFormData((prev) => ({ ...prev, profileImage: data.data.url }));
//         addNotification({
//           type: 'success',
//           title: 'Image Uploaded Successfully',
//           message: 'Your profile picture has been uploaded and is ready to use!'
//         });
//       } else {
//         throw new Error('Upload failed');
//       }
//     } catch (err) {
//       addNotification({
//         type: 'error',
//         title: 'Upload Failed',
//         message: 'Failed to upload image. Please try again or use a different image.'
//       });
//     } finally {
//       setIsUploading(false);
//     }
//   };


// const validateAndSubmit = async (e) => {
//     e.preventDefault();

//     // Validate student ID format (6 digits: YYDDNN)
//     const idRegex = /^\d{6}$/;
//     if (!idRegex.test(formData.studentId)) {
//         addNotification({
//             type: 'error',
//             title: 'Invalid Student ID',
//             message: 'Student ID must be a 6-digit number (e.g., 220222)'
//         });
//         return;
//     }

//     // Parse student ID
//     const year = formData.studentId.slice(0, 2);
//     const disciplineCode = formData.studentId.slice(2, 4);
//     const roll = formData.studentId.slice(4, 6);

//     // Validate discipline code
//     const discipline = disciplines.find((d) => d.number === disciplineCode);
//     if (!discipline) {
//         addNotification({
//             type: 'error',
//             title: 'Invalid Discipline Code',
//             message: 'The discipline code in your student ID is not valid'
//         });
//         return;
//     }

//     // Validate email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//         addNotification({
//             type: 'error',
//             title: 'Invalid Email',
//             message: 'Please enter a valid email address'
//         });
//         return;
//     }

//     // Validate phone
//     const phoneRegex = /^\+8801[3-9]\d{8}$/;
//     if (!phoneRegex.test(formData.phone)) {
//         addNotification({
//             type: 'error',
//             title: 'Invalid Phone Number',
//             message: 'Please enter a valid Bangladeshi phone number (e.g., +88017XXXXXXXX)'
//         });
//         return;
//     }

//     // Validate profile image
//     if (!formData.profileImage) {
//         addNotification({
//             type: 'warning',
//             title: 'Profile Image Required',
//             message: 'Please upload a profile image to complete your profile'
//         });
//         return;
//     }

    

//     try {
//         // Prepare profile data
//         const profileData = {
//             email: formData.email,
//             studentId: formData.studentId,
//             profileImage: formData.profileImage,
//             phone: formData.phone,
//             bio: formData.bio,
//             skills: formData.skills.split(',').map(skill => skill.trim()).filter(Boolean),
//             interests: formData.interests.split(',').map(interest => interest.trim()).filter(Boolean),
//             year: `20${year}`,
//             discipline: discipline.name,
//             disciplineCode: discipline.code,
//             disciplineColor: discipline.color,
//             roll,
//             createdAt: new Date().toISOString(),
//             updatedAt: new Date().toISOString()
//         };

//         // First save to database
//         // await saveUserProfile(profileData);

//         axios.post('http://localhost:5000/users', profileData)
//             .then(response => {
//                 console.log('Profile created successfully:', response.data);
//             })
//             .catch(error => {
//                 console.error('Error creating profile:', error,1438);
//             });

//         // Then update Firebase profile (only if user is authenticated)
//         // if (user) {
//         //     await updateUserProfile(`${discipline.code}-${roll}`, formData.profileImage);
//         // }

//         // Reset form
//         setFormData({ 
//             studentId: '', 
//             profileImage: '', 
//             email: user?.email || '', 
//             phone: '', 
//             bio: '', 
//             skills: '', 
//             interests: '' 
//         });
//         if (fileInputRef.current) fileInputRef.current.value = '';
//         setIsFormOpen(false);

//         addNotification({
//             type: 'success',
//             title: 'Profile Created Successfully!',
//             message: 'Your KU profile has been created and is now ready to share with the community.'
//         });
//     } catch (error) {
//         console.error('Error saving profile:', error);
//         addNotification({
//             type: 'error',
//             title: 'Profile Creation Failed',
//             message: 'There was an error saving your profile. Please try again.'
//         });
//     }
// };
//   return (
//     <div className="relative min-h-screen font-sans bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
//       {/* Notification Container */}
//       <div className="fixed top-4 right-4 z-50 w-96 max-w-full">
//         <AnimatePresence>
//           {notifications.map((notification) => (
//             <Notification
//               key={notification.id}
//               notification={notification}
//               onClose={removeNotification}
//             />
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* 3D Floating Background Elements */}
//       <div className="absolute inset-0 -z-10">
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute"
//             style={{
//               left: `${15 + i * 12}%`,
//               top: `${10 + (i % 3) * 25}%`,
//               perspective: '1000px',
//             }}
//             variants={floating3DVariants}
//             initial="initial"
//             animate="animate"
//             transition={{ delay: i * 0.5 }}
//           >
//             <div
//               className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-20"
//               style={{
//                 transform: 'rotateX(45deg) rotateY(45deg)',
//                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
//               }}
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* Hero Section with 3D elements */}
//       <motion.section
//         className="relative py-24 text-center overflow-hidden"
//         style={{ 
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           opacity: opacityTransform,
//         }}
//       >
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-white"
//           >
//             <motion.h1
//               className="text-5xl md:text-7xl font-bold mb-6"
//               style={{ 
//                 textShadow: '0 10px 30px rgba(0,0,0,0.3)',
//               }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               Build Your Legacy
//             </motion.h1>
//             <motion.p
//               className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               Connect with the prestigious Khulna University community and showcase your professional journey
//             </motion.p>
//             <motion.button
//               onClick={() => setIsFormOpen(true)}
//               className="group relative"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
//               <div className="relative bg-white text-blue-900 px-12 py-4 rounded-2xl font-bold text-lg shadow-xl">
//                 {user ? 'Update Profile' : 'Create Your Profile'}
//                 <ChevronDown className="inline w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
//               </div>
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Enhanced Profile Form Modal */}
//       <AnimatePresence>
//         {isFormOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//               initial={{ scale: 0.9, opacity: 0, rotateX: -10 }}
//               animate={{ scale: 1, opacity: 1, rotateX: 0 }}
//               exit={{ scale: 0.9, opacity: 0, rotateX: -10 }}
//               transition={{ type: 'spring', damping: 20 }}
//               style={{ 
//                 boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5)',
//                 transformStyle: 'preserve-3d',
//               }}
//             >
//               <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 text-white rounded-t-3xl">
//                 <motion.h2 
//                   className="text-3xl font-bold mb-2"
//                   initial={{ y: -20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   {user ? 'Update Your Profile' : 'Create Your Professional Profile'}
//                 </motion.h2>
//                 <motion.p 
//                   className="text-blue-100"
//                   initial={{ y: -20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   Join the elite Khulna University professional network
//                 </motion.p>
//               </div>
              
//               <form className="p-8 space-y-6" onSubmit={validateAndSubmit}>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <User className="inline w-4 h-4 mr-2" />
//                       Student ID
//                     </label>
//                     <input
//                       type="text"
//                       name="studentId"
//                       value={formData.studentId}
//                       onChange={handleInputChange}
//                       className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all"
//                       placeholder="e.g., 220222"
//                       required
//                     />
//                   </motion.div>

//                   <motion.div
//                     initial={{ x: 20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <Upload className="inline w-4 h-4 mr-2" />
//                       Profile Image
//                     </label>
//                     <input
//                       type="file"
//                       ref={fileInputRef}
//                       onChange={handleImageUpload}
//                       accept="image/jpeg,image/png,image/webp"
//                       className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
//                       required={!formData.profileImage}
//                     />
//                     {formData.profileImage && (
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         className="mt-4 flex justify-center"
//                       >
//                         <img 
//                           src={formData.profileImage} 
//                           alt="Preview" 
//                           className="w-24 h-24 rounded-2xl object-cover shadow-lg border-4 border-blue-100" 
//                         />
//                       </motion.div>
//                     )}
//                     {isUploading && (
//                       <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="mt-2 flex items-center justify-center"
//                       >
//                         <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
//                         <span className="ml-2 text-sm text-blue-600">Uploading...</span>
//                       </motion.div>
//                     )}
//                   </motion.div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.6 }}
//                   >
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <Mail className="inline w-4 h-4 mr-2" />
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all"
//                       placeholder="your.email@example.com"
//                       required
//                     />
//                   </motion.div>

//                   <motion.div
//                     initial={{ x: 20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.7 }}
//                   >
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <Phone className="inline w-4 h-4 mr-2" />
//                       Phone Number
//                     </label>
//                     <input
//                       type="text"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all"
//                       placeholder="+88017XXXXXXXX"
//                       required
//                     />
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                 >
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     <Briefcase className="inline w-4 h-4 mr-2" />
//                     Professional Bio
//                   </label>
//                   <textarea
//                     name="bio"
//                     value={formData.bio}
//                     onChange={handleInputChange}
//                     rows={3}
//                     className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all resize-none"
//                     placeholder="Tell us about yourself, your aspirations, and professional journey..."
//                   />
//                 </motion.div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.9 }}
//                   >
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <Award className="inline w-4 h-4 mr-2" />
//                       Skills (comma-separated)
//                     </label>
//                     <input
//                       type="text"
//                       name="skills"
//                       value={formData.skills}
//                       onChange={handleInputChange}
//                       className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all"
//                       placeholder="JavaScript, Python, React, Leadership"
//                     />
//                   </motion.div>

//                   <motion.div
//                     initial={{ x: 20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 1.0 }}
//                   >
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <Users className="inline w-4 h-4 mr-2" />
//                       Interests (comma-separated)
//                     </label>
//                     <input
//                       type="text"
//                       name="interests"
//                       value={formData.interests}
//                       onChange={handleInputChange}
//                       className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-3 px-4 transition-all"
//                       placeholder="AI, Web Development, Research, Innovation"
//                     />
//                   </motion.div>
//                 </div>

//                 <motion.div 
//                   className="flex justify-end space-x-4 pt-6"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 1.1 }}
//                 >
//                   <motion.button
//                     type="button"
//                     onClick={() => setIsFormOpen(false)}
//                     className="px-8 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold transition-all"
//                     whileHover={{ scale: 1.05, rotateY: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     type="submit"
//                     disabled={isUploading}
//                     className={`px-8 py-3 rounded-xl text-white font-semibold transition-all ${
//                       isUploading 
//                         ? 'bg-gray-400 cursor-not-allowed' 
//                         : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg'
//                     }`}
//                     whileHover={{ scale: isUploading ? 1 : 1.05, rotateY: isUploading ? 0 : -5 }}
//                     whileTap={{ scale: isUploading ? 1 : 0.95 }}
//                   >
//                     {isUploading ? 'Processing...' : (user ? 'Update Profile' : 'Create Profile 🚀')}
//                   </motion.button>
//                 </motion.div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Enhanced Profile Display Section */}
//       <motion.section
//         className="py-20 relative"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, margin: '-100px' }}
//       >
//         <div className="container mx-auto px-6">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             style={{
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             Your Professional Identity
//           </motion.h2>
          
//           {user ? (
//             <motion.div
//               className="max-w-4xl mx-auto"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <motion.div
//                 className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
//                 variants={card3DVariants}
//                 initial="rest"
//                 whileHover="hover"
//                 style={{
//                   transformStyle: 'preserve-3d',
//                   boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
//                 }}
//               >
//                 {/* Profile Header with Discipline Color */}
//                 <div 
//                   className="h-32 relative"
//                   style={{
//                     background: `linear-gradient(135deg, ${user.disciplineColor}33 0%, ${user.disciplineColor}66 100%)`,
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
//                   <motion.div
//                     className="absolute -bottom-16 left-8"
//                     whileHover={{ scale: 1.1, rotateY: 15 }}
//                     transition={{ type: 'spring', stiffness: 300 }}
//                   >
//                     <img 
//                       src={user.profileImage || user.photoURL || '/default-profile.png'} 
//                       alt="Profile" 
//                       className="w-32 h-32 rounded-3xl object-cover shadow-xl border-4 border-white" 
//                       style={{
//                         boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
//                       }}
//                     />
//                   </motion.div>
//                 </div>

//                 <div className="pt-20 p-8">
//                   <div className="grid md:grid-cols-2 gap-8">
//                     {/* Left Column - Basic Info */}
//                     <div className="space-y-6">
//                       <motion.div
//                         initial={{ x: -30, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.4 }}
//                       >
//                         <h3 className="text-3xl font-bold text-gray-800 mb-2">
//                           {user.displayName || `${user.disciplineCode}-${user.roll}`}
//                         </h3>
//                         <p className="text-xl text-gray-600 mb-1">
//                           Class of {user.year}
//                         </p>
//                         <p className="text-xl text-gray-600 mb-1">
//                           {user.discipline}
//                         </p>
//                         <div className="flex items-center text-gray-500">
//                           <GraduationCap className="w-5 h-5 mr-2" />
//                           <span>Roll: {user.roll}</span>
//                         </div>
//                       </motion.div>

//                       {user.bio && (
//                         <motion.div
//                           className="bg-gray-50 rounded-2xl p-6"
//                           initial={{ opacity: 0, scale: 0.95 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.6 }}
//                         >
//                           <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
//                             <Briefcase className="w-4 h-4 mr-2" />
//                             About Me
//                           </h4>
//                           <p className="text-gray-600 leading-relaxed">{user.bio}</p>
//                         </motion.div>
//                       )}
//                     </div>

//                     {/* Right Column - Contact & Skills */}
//                     <div className="space-y-6">
//                       <motion.div
//                         className="space-y-4"
//                         initial={{ x: 30, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.5 }}
//                       >
//                         <motion.a
//                           href={`mailto:${user.email}`}
//                           className="flex items-center p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors group"
//                           whileHover={{ scale: 1.02, x: 5 }}
//                         >
//                           <Mail className="w-5 h-5 text-blue-600 mr-3" />
//                           <span className="text-blue-800 font-medium group-hover:underline">
//                             {user.email}
//                           </span>
//                         </motion.a>

//                         {user.phone && (
//                           <motion.div
//                             className="flex items-center p-4 bg-green-50 rounded-2xl"
//                             whileHover={{ scale: 1.02, x: 5 }}
//                           >
//                             <Phone className="w-5 h-5 text-green-600 mr-3" />
//                             <span className="text-green-800 font-medium">
//                               {user.phone}
//                             </span>
//                           </motion.div>
//                         )}

//                         <motion.div
//                           className="flex items-center p-4 bg-purple-50 rounded-2xl"
//                           whileHover={{ scale: 1.02, x: 5 }}
//                         >
//                           <MapPin className="w-5 h-5 text-purple-600 mr-3" />
//                           <span className="text-purple-800 font-medium">
//                             Khulna University, Bangladesh
//                           </span>
//                         </motion.div>
//                       </motion.div>

//                       {/* Skills Section */}
//                       {user.skills && user.skills.length > 0 && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.7 }}
//                         >
//                           <h4 className="font-semibold text-gray-700 mb-4 flex items-center">
//                             <Award className="w-4 h-4 mr-2" />
//                             Skills & Expertise
//                           </h4>
//                           <div className="flex flex-wrap gap-2">
//                             {user.skills.map((skill, index) => (
//                               <motion.span
//                                 key={skill}
//                                 className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium shadow-lg"
//                                 initial={{ opacity: 0, scale: 0 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ delay: 0.8 + index * 0.1 }}
//                                 whileHover={{ scale: 1.1, rotateZ: 5 }}
//                               >
//                                 {skill}
//                               </motion.span>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Interests Section */}
//                       {user.interests && user.interests.length > 0 && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.9 }}
//                         >
//                           <h4 className="font-semibold text-gray-700 mb-4 flex items-center">
//                             <Users className="w-4 h-4 mr-2" />
//                             Interests
//                           </h4>
//                           <div className="flex flex-wrap gap-2">
//                             {user.interests.map((interest, index) => (
//                               <motion.span
//                                 key={interest}
//                                 className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl text-sm font-medium shadow-lg"
//                                 initial={{ opacity: 0, scale: 0 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ delay: 1.0 + index * 0.1 }}
//                                 whileHover={{ scale: 1.1, rotateZ: -5 }}
//                               >
//                                 {interest}
//                               </motion.span>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Update Profile Button */}
//                   <motion.div
//                     className="mt-8 text-center"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1.2 }}
//                   >
//                     <motion.button
//                       onClick={() => setIsFormOpen(true)}
//                       className="group relative"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
//                       <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg">
//                         Update Profile ✨
//                       </div>
//                     </motion.button>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ) : (
//             <motion.div
//               className="text-center py-20"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <motion.div
//                 className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center"
//                 animate={{ rotateY: [0, 360] }}
//                 transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//                 style={{ transformStyle: 'preserve-3d' }}
//               >
//                 <GraduationCap className="w-24 h-24 text-blue-600" />
//               </motion.div>
//               <h3 className="text-2xl font-bold text-gray-700 mb-4">
//                 Ready to Join the KU Network?
//               </h3>
//               <p className="text-gray-600 text-lg max-w-md mx-auto">
//                 Create your professional profile and connect with fellow alumni, students, and faculty members.
//               </p>
//               <button
//                 onClick={() => setIsFormOpen(true)}
//                 className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
//               >
//                 Create Your Profile
//               </button>
//             </motion.div>
//           )}
//         </div>
//       </motion.section>

//       {/* Enhanced Footer */}
//       <motion.footer
//         className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-12 relative overflow-hidden"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             className="text-center"
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               className="flex items-center justify-center mb-6"
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
//                 <GraduationCap className="w-6 h-6" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">Khulna University</h3>
//                 <p className="text-blue-200">Excellence in Education Since 1991</p>
//               </div>
//             </motion.div>
            
//             <div className="flex justify-center space-x-8 mb-8">
//               <motion.a
//                 href="https://ku.ac.bd"
//                 className="text-blue-300 hover:text-white transition-colors font-medium"
//                 whileHover={{ scale: 1.1, y: -2 }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Official Website
//               </motion.a>
//               <motion.a
//                 href="https://ku.ac.bd/discipline/cse"
//                 className="text-blue-300 hover:text-white transition-colors font-medium"
//                 whileHover={{ scale: 1.1, y: -2 }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 CSE Discipline
//               </motion.a>
//               <motion.a
//                 href="https://ku.ac.bd/academics"
//                 className="text-blue-300 hover:text-white transition-colors font-medium"
//                 whileHover={{ scale: 1.1, y: -2 }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Academics
//               </motion.a>
//             </div>
            
//             <motion.p
//               className="text-gray-300 text-sm"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               © {new Date().getFullYear()} Khulna University Professional Network. 
//               Empowering minds, building futures. 🎓
//             </motion.p>
//           </motion.div>
//         </div>
//       </motion.footer>
//     </div>
//   );
// };

// export default Profile;
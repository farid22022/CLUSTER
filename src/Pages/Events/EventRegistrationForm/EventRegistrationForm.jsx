import PropTypes from "prop-types";

const EventRegistrationForm = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Register for {event?.title}</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Name</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Student ID</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Your Student ID"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              className="w-full border rounded-md p-2"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EventRegistrationForm.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EventRegistrationForm;
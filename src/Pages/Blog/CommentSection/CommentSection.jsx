import { motion, AnimatePresence } from 'framer-motion';

const CommentSection = () => {
  const comments = [
    { id: 1, author: 'Alice Brown', text: 'Great post! Very informative.', date: 'May 16, 2025' },
    { id: 2, author: 'Bob Johnson', text: 'Thanks for sharing these insights.', date: 'May 17, 2025' },
  ];

  return (
    <motion.div 
      className="mt-6 border-t pt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h4 
        className="text-lg font-semibold mb-4 flex items-center"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="mr-2">💬</span> Discussion ({comments.length})
      </motion.h4>
      
      <AnimatePresence>
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            className="bg-gray-50 p-4 rounded-lg mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            layout
          >
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                {comment.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{comment.author}</p>
                <p className="text-gray-500 text-sm">{comment.date}</p>
                <p className="mt-1 text-gray-700">{comment.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-gray-500 text-sm mb-2">Sign in to leave a comment</p>
        <motion.button
          className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
          whileHover={{ backgroundColor: '#e5e7eb' }}
          whileTap={{ scale: 0.98 }}
        >
          Sign In
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CommentSection;
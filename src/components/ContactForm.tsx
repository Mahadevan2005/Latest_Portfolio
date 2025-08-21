import { useState, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/xwpkjadk", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error(data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="w-full">
      <AnimatePresence>
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-green-50 border border-green-300 rounded-xl p-6 sm:p-8 text-center shadow-lg"
          >
            <CheckCircle className="mx-auto h-12 w-12 text-green-600 mb-3" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
            <p className="text-gray-600 text-sm sm:text-base">Thank you for reaching out! I'll respond soon.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-xl space-y-6 w-full"
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                What's your name?
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-base sm:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 dark:bg-gray-800"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                What's your email?
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-base sm:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 dark:bg-gray-800"
                placeholder="JohnDoe@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 text-base sm:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 dark:bg-gray-800 resize-none"
                placeholder="Hello, Mahadevan..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center"
            >
              {status === 'submitting' ? 'Sending...' : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-sm mt-2">Oops! Something went wrong. Please try again.</p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
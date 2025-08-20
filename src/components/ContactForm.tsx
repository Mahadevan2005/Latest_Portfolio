import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  // Replace with your Formspree form ID
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (state.succeeded) {
    return (
      <div className="bg-success/10 border border-success rounded-lg p-6 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-success mb-4" />
        <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
        <p className="mb-4">Thank you for your message. I'll get back to you soon.</p>
        <button 
          onClick={() => {
            setFormData({ name: '', email: '', message: '' });
            window.location.reload();
          }}
          className="btn btn-outline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          placeholder="your.email@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
          placeholder="Your message here..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      
      <button
        type="submit"
        disabled={state.submitting}
        className="btn btn-primary w-full sm:w-auto"
      >
        {state.submitting ? 'Sending...' : (
          <>
            Send Message 
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
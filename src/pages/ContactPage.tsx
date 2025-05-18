import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Here you would typically send the data to a server
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center">
              <h2 className="text-2xl font-serif text-[#708238] mb-4">Message Sent!</h2>
              <p className="mb-6">
                Thank you, {formData.name}. Your message has been received and we'll get back to you as soon as possible.
              </p>
              <Button
                variant="primary"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="section-title mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-serif mb-6 text-[#708238]">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#708238] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">123 Pasta Street</p>
                    <p className="text-gray-600">Italian Quarter, City</p>
                    <p className="text-gray-600">ZIP Code</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#708238] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#708238] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@labellaitalia.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#708238] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Opening Hours</h3>
                    <p className="text-gray-600">Monday–Saturday: 12:00–22:00</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-serif mb-4 text-[#708238]">Reservations</h2>
              <p className="text-gray-600 mb-4">
                For reservations, please use our online booking system or call us directly.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.location.href = '/reservations'}
              >
                Book a Table
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-serif mb-6 text-[#708238]">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238]"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238]"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238]"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238]"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full md:w-auto"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-serif mb-6 text-[#708238]">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg">
            {/* Replace with actual map iframe */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
              <p className="text-gray-500">Map loading...</p>
              {/* In a real implementation, you would include an iframe for Google Maps or similar */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
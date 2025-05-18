import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import Button from '../components/ui/Button';

const ReservationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    notes: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation form submitted:', formData);
    // Here you would typically send the data to a server
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center">
              <h2 className="text-2xl font-serif text-[#708238] mb-4">Reservation Confirmed!</h2>
              <p className="mb-6">
                Thank you, {formData.name}. Your reservation for {formData.guests} guests on {formData.date} at {formData.time} has been received.
              </p>
              <p className="mb-6">We've sent a confirmation email to {formData.email}.</p>
              <Button
                variant="primary"
                onClick={() => setSubmitted(false)}
              >
                Make Another Reservation
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container-custom">
        <h1 className="section-title mb-2">Book a Table</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Reserve your table at La Bella Italia and enjoy a memorable dining experience
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="w-10 h-10 mx-auto mb-4 text-[#708238]" />
              <h3 className="text-lg font-medium mb-2">Opening Hours</h3>
              <p className="text-gray-600">Monday–Saturday: 12:00–22:00</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="w-10 h-10 mx-auto mb-4 text-[#708238]" />
              <h3 className="text-lg font-medium mb-2">Reservation Notice</h3>
              <p className="text-gray-600">Please book at least 2 hours in advance</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-10 h-10 mx-auto mb-4 text-[#708238]" />
              <h3 className="text-lg font-medium mb-2">Large Groups</h3>
              <p className="text-gray-600">For parties of 8+, please call us directly</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
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
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238]"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238]"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'person' : 'people'}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238]"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                    Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238]"
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
                    Special Requests (optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#708238]"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Dietary requirements, special occasions, preferred seating, etc."
                  />
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button
                  type="submit"
                  variant="primary"
                  className="text-base px-8"
                >
                  Book Now
                </Button>
                <p className="mt-4 text-sm text-gray-500">
                  * Required fields. By booking you agree to our terms and conditions.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
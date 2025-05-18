import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Utensils } from 'lucide-react';
import Button from '../components/ui/Button';
import MenuItemCard from '../components/ui/MenuItemCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import { menuItems } from '../data/menuData';
import { testimonials } from '../data/testimonialData';

const HomePage: React.FC = () => {
  // Get featured menu items (first 3)
  const featuredItems = menuItems.slice(0, 3);
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section h-[90vh] flex items-center justify-center text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 fade-in">
            La Bella Italia
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto fade-in">
            Experience authentic Italian cuisine in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
            <Link to="/reservations">
              <Button variant="primary" className="text-base">
                Book a Table
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="secondary" className="text-base">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Info Cards Section */}
      <section className="py-16 bg-[#F8F8F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hours Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 mx-auto mb-4 text-[#708238]" />
              <h3 className="text-xl font-serif mb-3">Opening Hours</h3>
              <p className="text-gray-600">Monday–Saturday</p>
              <p className="font-medium mb-2">12:00–22:00</p>
              <p className="text-gray-600">Sunday</p>
              <p className="font-medium">Closed</p>
            </div>
            
            {/* Location Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-[#708238]" />
              <h3 className="text-xl font-serif mb-3">Find Us</h3>
              <p className="text-gray-600 mb-2">123 Pasta Street</p>
              <p className="text-gray-600 mb-4">Italian Quarter, City</p>
              <Link to="/contact">
                <span className="text-[#708238] hover:underline">Get Directions</span>
              </Link>
            </div>
            
            {/* Order Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <Utensils className="w-12 h-12 mx-auto mb-4 text-[#708238]" />
              <h3 className="text-xl font-serif mb-3">Order Online</h3>
              <p className="text-gray-600 mb-4">Enjoy our delicious food at home</p>
              <Link to="/order">
                <Button variant="outline">Order Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Menu Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="primary">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-16 bg-[#F8F8F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#708238]">
                Our Story
              </h2>
              <p className="text-gray-700 mb-6">
                Founded in 1998, La Bella Italia brings the authentic flavors and warm hospitality of Italy to your table. 
                Our chef, Antonio Rossi, uses traditional recipes passed down through generations and the finest ingredients 
                to create dishes that transport you straight to the heart of Italy.
              </p>
              <p className="text-gray-700 mb-8">
                From our homemade pasta to our wood-fired pizzas, every dish is prepared with passion and care.
                Come join us for a truly Italian dining experience.
              </p>
              <Link to="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" 
                alt="Restaurant interior" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-[#708238] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to Experience Authentic Italian Cuisine?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book a table now or order online for delivery or pickup
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/reservations">
              <Button variant="secondary" className="text-base">
                Book a Table
              </Button>
            </Link>
            <Link to="/order">
              <Button 
                variant="outline" 
                className="text-base border-white text-white hover:bg-[#5A6A2A]"
              >
                Order Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
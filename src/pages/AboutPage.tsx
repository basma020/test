import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="section-title mb-2">About Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the passion and tradition behind La Bella Italia
        </p>
        
        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-serif mb-6 text-[#708238]">Our Story</h2>
            <p className="text-gray-700 mb-4">
              La Bella Italia was founded in 1998 by Antonio Rossi, who brought his passion for authentic 
              Italian cuisine from his hometown in Tuscany to create a dining experience that celebrates 
              the rich culinary heritage of Italy.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a small family restaurant has grown into a beloved establishment, 
              while still maintaining the warmth, tradition, and quality that were at the heart of Antonio's vision.
            </p>
            <p className="text-gray-700">
              Each dish on our menu tells a story of Italian tradition, using recipes that have been 
              passed down through generations and ingredients that are carefully selected for their quality and authenticity.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg" 
              alt="Restaurant history" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
        
        {/* Chef Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg" 
              alt="Our chef" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-serif mb-6 text-[#708238]">Meet Our Chef</h2>
            <p className="text-gray-700 mb-4">
              Our head chef, Marco Bianchi, brings over 25 years of culinary experience to La Bella Italia. 
              Born and raised in Naples, Marco developed his passion for cooking from his grandmother, who taught 
              him the importance of using fresh, seasonal ingredients.
            </p>
            <p className="text-gray-700 mb-4">
              After training in some of Italy's finest restaurants and working alongside world-renowned chefs, 
              Marco joined La Bella Italia in 2005. His philosophy is simple: respect the ingredients, honor tradition, 
              and cook with love.
            </p>
            <p className="text-gray-700">
              Under Marco's guidance, our kitchen team creates dishes that balance authentic Italian flavors with 
              contemporary presentation, ensuring a memorable dining experience with every visit.
            </p>
          </div>
        </div>
        
        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif mb-8 text-[#708238] text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-medium mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We stay true to traditional Italian recipes and cooking methods, bringing you an authentic taste of Italy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-medium mb-4">Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients, sourcing locally when possible and importing specialty items directly from Italy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-medium mb-4">Family</h3>
              <p className="text-gray-600">
                We believe in treating our guests like family, creating a warm and welcoming atmosphere for everyone who dines with us.
              </p>
            </div>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif mb-8 text-[#708238] text-center">Our Restaurant</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img 
              src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg" 
              alt="Restaurant interior" 
              className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" 
              alt="Restaurant dining area" 
              className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg" 
              alt="Private dining room" 
              className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg" 
              alt="Restaurant bar" 
              className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg" 
              alt="Outdoor seating area" 
              className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" 
              alt="Kitchen preparations" 
              className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-6">Experience La Bella Italia</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-600">
            We invite you to join us and experience the magic of authentic Italian dining. Whether you're celebrating a special occasion 
            or simply enjoying a meal with family and friends, we look forward to welcoming you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/reservations">
              <Button variant="primary">Book a Table</Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline">View Our Menu</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
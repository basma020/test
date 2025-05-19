import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-[#BDC3C7]">La Bella Italia</h3>
            <p className="mb-4 text-gray-300">
              Authentic Italian cuisine in a warm and welcoming atmosphere. Bringing a taste of Italy to your table since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-[#BDC3C7]">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-[#3498DB]" />
                <span>123 Pasta Street, Italian Quarter, City</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#3498DB]" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#3498DB]" />
                <span>info@labellaitalia.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-1 text-[#3498DB]" />
                <div>
                  <p>Monday–Saturday: 12:00–22:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-[#BDC3C7]">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/menu" className="hover:text-white transition">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-white transition">
                  Book a Table
                </Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-white transition">
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} La Bella Italia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
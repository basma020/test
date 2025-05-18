import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

interface NavbarProps {
  toggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when changing routes
    setIsOpen(false);
    
    // Track scroll for transparent/solid navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/order', label: 'Order' },
    { to: '/reservations', label: 'Reservations' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  const isHomePage = location.pathname === '/';
  const bgClass = isHomePage && !isScrolled 
    ? 'bg-transparent text-white' 
    : 'bg-white text-[#333] shadow-md';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${bgClass}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-bold">
          La Bella Italia
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`transition duration-300 hover:text-[#708238] ${
                location.pathname === link.to ? 'font-semibold text-[#708238]' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <button 
            onClick={toggleCart} 
            className="relative"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#708238] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button 
            onClick={toggleCart} 
            className="relative mr-2"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#708238] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-[#333] py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`block py-2 transition duration-300 hover:text-[#708238] ${
                  location.pathname === link.to ? 'font-semibold text-[#708238]' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
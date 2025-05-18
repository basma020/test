import React, { useState, useEffect } from 'react';
import { menuItems, categories } from '../data/menuData';
import MenuItemCard from '../components/ui/MenuItemCard';
import CategoryTabs from '../components/ui/CategoryTabs';
import Button from '../components/ui/Button';
import { MenuItem } from '../types';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

const OrderPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  const { cartItems, getCartTotal } = useCart();
  
  useEffect(() => {
    // Filter menu items based on active category
    if (activeCategory === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="section-title mb-2">Order Online</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Enjoy our delicious Italian cuisine in the comfort of your home
        </p>
        
        <CategoryTabs 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
        
        {cartItems.length > 0 && (
          <div className="fixed bottom-4 right-4 z-40">
            <Button
              variant="primary"
              className="flex items-center space-x-2 py-3 px-6 shadow-lg"
              onClick={() => alert('Proceeding to checkout')}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Checkout</span>
              <span className="ml-2">€{getCartTotal().toFixed(2)}</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
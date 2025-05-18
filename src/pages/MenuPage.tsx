import React, { useState, useEffect } from 'react';
import { menuItems, categories } from '../data/menuData';
import MenuItemCard from '../components/ui/MenuItemCard';
import CategoryTabs from '../components/ui/CategoryTabs';
import { MenuItem } from '../types';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  
  useEffect(() => {
    // Filter menu items based on active category
    if (activeCategory === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    }
    
    // Scroll to top when changing categories
    window.scrollTo(0, 0);
  }, [activeCategory]);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="section-title mb-2">Our Menu</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover our authentic Italian dishes made with traditional recipes and the finest ingredients
        </p>
        
        <CategoryTabs 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <MenuItemCard key={item.id} item={item} showOrderButton={true} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
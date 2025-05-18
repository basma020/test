import React from 'react';
import { MenuItem } from '../../types';
import Button from './Button';
import { useCart } from '../../contexts/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
  showOrderButton?: boolean;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, showOrderButton = true }) => {
  const { addToCart } = useCart();
  const { name, description, price, image } = item;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-medium">{name}</h3>
          <span className="font-medium text-[#708238]">€{price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {showOrderButton && (
          <Button 
            variant="outline" 
            onClick={() => addToCart(item)}
            className="text-sm"
          >
            Add to Order
          </Button>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
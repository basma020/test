import React from 'react';
import { X, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import Button from '../ui/Button';

interface CartProps {
  isOpen: boolean;
  toggleCart: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, toggleCart }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col animate-slide-left">
        <div className="py-4 px-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-serif flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Your Order
          </h2>
          <button 
            onClick={toggleCart}
            aria-label="Close cart"
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-grow overflow-y-auto py-4 px-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">Add delicious items from our menu</p>
              <Button 
                variant="primary" 
                className="mt-6"
                onClick={toggleCart}
              >
                Browse Menu
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center py-3 border-b">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <h4 className="font-medium">{item.name}</h4>
                    <div className="text-[#708238] font-medium">€{item.price}</div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <span className="w-8 text-center">{item.quantity}</span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 text-red-500 hover:text-red-700"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="border-t py-4 px-6">
            <div className="flex justify-between text-lg font-medium mb-4">
              <span>Total:</span>
              <span>€{getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="space-y-2">
              <Button 
                variant="primary" 
                fullWidth 
                onClick={() => alert('Proceeding to checkout')}
              >
                Checkout
              </Button>
              
              <Button 
                variant="outline" 
                fullWidth 
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
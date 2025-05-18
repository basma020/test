import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    description: 'Creamy sauce, pancetta, egg, and parmesan cheese',
    price: 12,
    category: 'pasta',
    image: 'https://images.pexels.com/photos/5175510/pexels-photo-5175510.jpeg'
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    description: 'Tomato sauce, fresh mozzarella, and basil',
    price: 10,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg'
  },
  {
    id: 3,
    name: 'Caprese Salad',
    description: 'Fresh mozzarella, tomato, basil, and olive oil',
    price: 9,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg'
  },
  {
    id: 4,
    name: 'Lasagna',
    description: 'Layers of pasta with beef ragù, béchamel sauce, and parmesan',
    price: 14,
    category: 'pasta',
    image: 'https://images.pexels.com/photos/6046493/pexels-photo-6046493.jpeg'
  },
  {
    id: 5,
    name: 'Risotto ai Funghi',
    description: 'Creamy risotto with wild mushrooms and parmesan',
    price: 13,
    category: 'pasta',
    image: 'https://images.pexels.com/photos/6541699/pexels-photo-6541699.jpeg'
  },
  {
    id: 6,
    name: 'Tiramisu',
    description: 'Coffee-soaked ladyfingers with mascarpone cream',
    price: 7,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/6601202/pexels-photo-6601202.jpeg'
  },
  {
    id: 7,
    name: 'Bruschetta',
    description: 'Toasted bread topped with tomato, garlic, and basil',
    price: 8,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg'
  },
  {
    id: 8,
    name: 'Quattro Stagioni Pizza',
    description: 'Tomato sauce, mozzarella, mushrooms, ham, artichokes, and olives',
    price: 12,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg'
  },
  {
    id: 9,
    name: 'Panna Cotta',
    description: 'Vanilla cream dessert with berry coulis',
    price: 6,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/3744068/pexels-photo-3744068.jpeg'
  },
  {
    id: 10,
    name: 'Minestrone Soup',
    description: 'Traditional Italian vegetable soup with beans and pasta',
    price: 8,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg'
  },
  {
    id: 11,
    name: 'Calzone',
    description: 'Folded pizza filled with ricotta, mozzarella, and ham',
    price: 11,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg'
  },
  {
    id: 12,
    name: 'Cannoli',
    description: 'Crisp pastry tubes filled with sweet ricotta cream',
    price: 6,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/3992737/pexels-photo-3992737.jpeg'
  }
];

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'desserts', name: 'Desserts' }
];
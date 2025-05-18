import React from 'react';
import { CategoryTab } from '../../types';

interface CategoryTabsProps {
  categories: CategoryTab[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center mb-8">
      <div className="inline-flex flex-wrap justify-center space-x-2 p-1 bg-gray-100 rounded-lg">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-md transition-all duration-200 text-sm md:text-base ${
              activeCategory === category.id
                ? 'bg-[#708238] text-white font-medium shadow-sm'
                : 'bg-transparent text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
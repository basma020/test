import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialType } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, comment, rating } = testimonial;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">"{comment}"</p>
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default TestimonialCard;
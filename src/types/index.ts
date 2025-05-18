export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface Reservation {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface CategoryTab {
  id: string;
  name: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  comment: string;
  rating: number;
}
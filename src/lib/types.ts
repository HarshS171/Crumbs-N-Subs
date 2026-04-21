
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Bread' | 'Pastries' | 'Cakes' | 'Drinks';
  image: string;
  hint: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
}

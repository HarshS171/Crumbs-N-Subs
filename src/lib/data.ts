
import { Product, Review } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getPlaceholder = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Classic Sourdough',
    description: 'Our signature tangy sourdough loaf with a perfectly crisp crust and airy center.',
    price: 8.50,
    category: 'Bread',
    image: getPlaceholder('sourdough-loaf')?.imageUrl || '',
    hint: 'sourdough bread'
  },
  {
    id: 'p2',
    name: 'Butter Croissant',
    description: 'Golden, flaky layers of pure buttery goodness. Baked fresh every morning.',
    price: 4.25,
    category: 'Pastries',
    image: getPlaceholder('croissant-classic')?.imageUrl || '',
    hint: 'croissant'
  },
  {
    id: 'p3',
    name: 'Dark Chocolate Slice',
    description: 'Decadent 70% dark chocolate cake layered with silky ganache.',
    price: 6.75,
    category: 'Cakes',
    image: getPlaceholder('chocolate-cake')?.imageUrl || '',
    hint: 'chocolate cake'
  },
  {
    id: 'p4',
    name: 'Warm Cinnamon Roll',
    description: 'Soft, brioche-style dough swirled with aromatic cinnamon and topped with cream cheese frosting.',
    price: 5.50,
    category: 'Pastries',
    image: getPlaceholder('cinnamon-roll')?.imageUrl || '',
    hint: 'cinnamon roll'
  },
  {
    id: 'p5',
    name: 'Artisan Latte',
    description: 'Smooth double shot espresso with velvety steamed milk.',
    price: 4.50,
    category: 'Drinks',
    image: getPlaceholder('coffee-latte')?.imageUrl || '',
    hint: 'coffee latte'
  },
  {
    id: 'p6',
    name: 'Blueberry Crumble Muffin',
    description: 'Bursting with fresh blueberries and topped with a sweet, buttery streusel.',
    price: 3.95,
    category: 'Pastries',
    image: getPlaceholder('blueberry-muffin')?.imageUrl || '',
    hint: 'blueberry muffin'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Eleanor Rigby',
    rating: 5,
    content: "The sourdough is life-changing! It's exactly like the bread I used to get in San Francisco.",
    date: '2024-03-15'
  },
  {
    id: 'r2',
    author: 'Sam Gamgee',
    rating: 5,
    content: 'Those cinnamon rolls are precious. Best in the Shire!',
    date: '2024-03-10'
  },
  {
    id: 'r3',
    author: 'Alice Liddell',
    rating: 4,
    content: 'Lovely pastries and the tea is divine. A wonderful spot for an afternoon break.',
    date: '2024-02-28'
  }
];

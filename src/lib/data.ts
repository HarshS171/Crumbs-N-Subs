
import { Product, Review } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getPlaceholder = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Spicy Paneer Tikka Sub',
    description: 'A student favorite! Zesty paneer tikka with mint mayo and fresh veggies on house-baked bread. Affordable and filling.',
    price: 180.00,
    category: 'Subs',
    image: getPlaceholder('paneer-sub')?.imageUrl || '',
    hint: 'paneer sandwich'
  },
  {
    id: 'p2',
    name: 'Classic Chocolate Birthday Cake',
    description: 'Perfect for family celebrations. Rich Belgian chocolate layers with customizable name frosting. Serves 8-10.',
    price: 850.00,
    category: 'Cakes',
    image: getPlaceholder('chocolate-cake')?.imageUrl || '',
    hint: 'birthday cake'
  },
  {
    id: 'p3',
    name: 'Gourmet Aloo Tikki Burger',
    description: 'The ultimate Punjabi burger. Crispy aloo patty, secret spices, and artisan buns baked in-house.',
    price: 120.00,
    category: 'Burgers',
    image: getPlaceholder('aloo-burger')?.imageUrl || '',
    hint: 'gourmet burger'
  },
  {
    id: 'p4',
    name: 'Red Velvet Anniversary Heart',
    description: 'Celebrate your love with our signature crimson cake, layered with smooth cream cheese frosting. Elegant and romantic.',
    price: 950.00,
    category: 'Cakes',
    image: getPlaceholder('red-velvet')?.imageUrl || '',
    hint: 'red velvet cake'
  },
  {
    id: 'p5',
    name: 'Butter Croissant Duo',
    description: 'Two golden, flaky croissants. A quick and delicious snack for busy students or a light family breakfast.',
    price: 120.00,
    category: 'Pastries',
    image: getPlaceholder('croissant-classic')?.imageUrl || '',
    hint: 'croissant'
  },
  {
    id: 'p6',
    name: 'Masala Artisan Latte',
    description: 'A local twist! Bold espresso with steamed milk and a hint of Punjabi chai spices.',
    price: 150.00,
    category: 'Coffee',
    image: getPlaceholder('masala-latte')?.imageUrl || '',
    hint: 'coffee latte'
  },
  {
    id: 'p7',
    name: 'Choco-Chip Sea Salt Cookies',
    description: 'Batch of 6 soft-baked cookies. The perfect mix of sweet and salty for a quick treat.',
    price: 240.00,
    category: 'Cookies',
    image: getPlaceholder('choco-cookies')?.imageUrl || '',
    hint: 'chocolate cookies'
  },
  {
    id: 'p8',
    name: 'Double Chocolate Fudge Shake',
    description: 'Thick, creamy, and loaded with fudge. A student delight for those hot Jalandhar afternoons.',
    price: 190.00,
    category: 'Shakes',
    image: getPlaceholder('fudge-shake')?.imageUrl || '',
    hint: 'chocolate milkshake'
  },
  {
    id: 'p9',
    name: 'Blueberry Cheesecake Slice',
    description: 'Velvety smooth cheesecake topped with fresh blueberry compote.',
    price: 210.00,
    category: 'Desserts',
    image: getPlaceholder('blueberry-cheesecake')?.imageUrl || '',
    hint: 'blueberry cheesecake'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Amanpreet Singh',
    rating: 5,
    content: "The Spicy Paneer Sub is the best student deal in Model Town. Fresh bread every single time!",
    date: '2024-03-15'
  },
  {
    id: 'r2',
    author: 'Priya Sharma',
    rating: 5,
    content: 'Ordered a birthday cake for my son. The chocolate was so rich and the delivery in Jalandhar was spot on.',
    date: '2024-03-10'
  },
  {
    id: 'r3',
    author: 'Rajiv Malhotra',
    rating: 5,
    content: 'The Red Velvet Heart cake made our anniversary special. Elegant presentation and great taste.',
    date: '2024-02-28'
  }
];


import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function MenuCollage() {
  const items = [
    { id: 'chocolate-cake', title: 'Signature Cakes', span: 'md:col-span-2 md:row-span-2' },
    { id: 'burger-premium', title: 'Gourmet Burgers', span: 'col-span-1' },
    { id: 'coffee-latte', title: 'Artisan Coffee', span: 'col-span-1' },
    { id: 'croissant-classic', title: 'French Pastries', span: 'col-span-1' },
    { id: 'shake-deluxe', title: 'Thick Shakes', span: 'col-span-1' },
    { id: 'cookies-fresh', title: 'Craft Cookies', span: 'md:col-span-2' },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-headline font-bold">A Taste of Perfection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our premium selection of artisan treats, crafted daily in our Model Town kitchen with the finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-3 gap-4 h-[600px] md:h-[800px]">
          {items.map((item, index) => {
            const img = PlaceHolderImages.find(i => i.id === item.id);
            return (
              <div 
                key={index} 
                className={`relative group overflow-hidden rounded-[2rem] border border-border/50 ${item.span}`}
              >
                <Image
                  src={img?.imageUrl || ''}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={img?.imageHint}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-2xl font-headline font-bold">{item.title}</h3>
                    <p className="text-white/80 text-sm">Explore our collection</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-white text-xs font-medium border border-white/20">
                  {item.title.split(' ')[1]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

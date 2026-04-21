
"use client";

import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';
import { useCartStore } from '@/store/cart-store';
import { useToast } from '@/hooks/use-toast';

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to order",
      description: `${product.name} is now in your basket.`,
    });
  };

  return (
    <div className="group relative bg-card rounded-[2rem] overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          data-ai-hint={product.hint}
        />
        <Badge className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-primary hover:bg-background border-none font-bold py-1 px-3">
          {product.category}
        </Badge>
      </div>
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-xl font-headline font-bold leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
          <span className="font-bold text-primary text-lg">₹{product.price.toFixed(0)}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-grow">
          {product.description}
        </p>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/80 font-bold rounded-2xl py-6 shadow-md transition-all hover:translate-y-[-2px]"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add to Basket
        </Button>
      </div>
    </div>
  );
}


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
      title: "Added to basket",
      description: `${product.name} has been added to your order.`,
    });
  };

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={product.hint}
        />
        <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-primary hover:bg-background/90 border-none">
          {product.category}
        </Badge>
      </div>
      <div className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-headline font-bold leading-tight">{product.name}</h3>
          <span className="font-bold text-primary">£{product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/80 font-semibold rounded-xl py-6"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add to Basket
        </Button>
      </div>
    </div>
  );
}


"use client";

import Link from 'next/link';
import { ShoppingCart, Menu, Wheat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart-store';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CartDisplay } from './CartDisplay';

export function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Wheat className="h-6 w-6 text-primary" />
            <span className="text-xl font-headline font-bold text-primary tracking-tight">Crumbs N Subs</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">Menu</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">Our Story</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md bg-background border-l-2 border-primary/20">
              <SheetHeader>
                <SheetTitle className="font-headline text-2xl">Your Basket</SheetTitle>
              </SheetHeader>
              <CartDisplay />
            </SheetContent>
          </Sheet>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

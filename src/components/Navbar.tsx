
"use client";

import Link from 'next/link';
import { ShoppingCart, Menu, Wheat, X } from 'lucide-react';
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
import { useState } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/shop' },
  { name: 'Custom Cakes', href: '/contact?type=custom' },
  { name: 'Offers', href: '/offers' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Wheat className="h-6 w-6 text-primary" />
            <span className="text-xl font-headline font-bold text-primary tracking-tight">Crumbs N Subs</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium hover:text-primary transition-colors text-muted-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full h-11 w-11 shadow-sm">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-background">
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
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-8">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                  <Wheat className="h-6 w-6 text-primary" />
                  <span className="text-xl font-headline font-bold">Crumbs N Subs</span>
                </Link>
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium border-b pb-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

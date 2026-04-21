
import { Wheat, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Wheat className="h-6 w-6" />
            <span className="text-xl font-headline font-bold">The Warm Crumb</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Crafting artisan moments one loaf at a time. Join our community of bread lovers and pastry enthusiasts.
          </p>
        </div>
        
        <div>
          <h4 className="font-headline font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><Link href="/shop" className="hover:text-accent transition-colors">Full Menu</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Wholesale</Link></li>
            <li><Link href="/gift-cards" className="hover:text-accent transition-colors">Gift Cards</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline font-bold mb-6">Support</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><Link href="/shipping" className="hover:text-accent transition-colors">Shipping Info</Link></li>
            <li><Link href="/returns" className="hover:text-accent transition-colors">Order Tracker</Link></li>
            <li><Link href="/faq" className="hover:text-accent transition-colors">Common Questions</Link></li>
            <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-headline font-bold">Follow Our Journey</h4>
          <div className="flex gap-4">
            <Link href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} The Warm Crumb Bakery Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

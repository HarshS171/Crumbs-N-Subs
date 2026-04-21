
"use client";

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sparkles, Search } from 'lucide-react';

const CATEGORIES = ['All', 'Cakes', 'Pastries', 'Cookies', 'Breads', 'Subs', 'Burgers', 'Coffee', 'Shakes', 'Desserts'];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-8 pb-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Fresh Menu</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Baked daily with traditional methods and organic local ingredients in Jalandhar. 
              Available for collection or local delivery.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between bg-card p-6 rounded-3xl border border-border/50 shadow-sm">
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'ghost'}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-6 ${selectedCategory === category ? 'bg-primary' : 'hover:bg-accent/20 text-muted-foreground'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full lg:max-w-xs">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search our treats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-full outline-none focus:ring-2 focus:ring-accent transition-all"
              />
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-4">
              <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-headline font-bold">No treats found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search term.</p>
              <Button 
                variant="outline" 
                onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
                className="rounded-full"
              >
                Clear all filters
              </Button>
            </div>
          )}

          {/* Information Banner */}
          <div className="bg-secondary/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
            <div className="flex items-center gap-6">
              <div className="bg-background p-4 rounded-2xl shadow-sm">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-headline font-bold">Don't see what you want?</h4>
                <p className="text-muted-foreground">We take custom orders for events, celebrations, and wholesale in Model Town.</p>
              </div>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12">
              <a href="/contact">Enquire Today</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

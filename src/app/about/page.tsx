
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Wheat, Heart, History, Users } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const exteriorImg = PlaceHolderImages.find(img => img.id === 'bakery-exterior')?.imageUrl || '';

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Story Hero */}
        <section className="py-24 px-4 bg-secondary/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary">
                <History className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Est. 2018</span>
              </div>
              <h1 className="text-5xl font-headline font-bold">Baking Memories in Jalandhar</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                What started as a small passion project in a home kitchen in Model Town has grown into Jalandhar's favorite spot for artisan treats and gourmet subs. 
              </p>
              <p className="text-muted-foreground">
                At Crumbs N Subs, we believe that every bite should tell a story. Whether it's the celebratory spark of a customized birthday cake or the comforting warmth of a freshly baked sub during a student break, we are here to make your moments delicious.
              </p>
              <div className="pt-4">
                <Button asChild className="rounded-full px-8 h-12 bg-primary">
                  <Link href="/shop">Explore Our Menu</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src={exteriorImg} 
                alt="Crumbs N Subs Exterior" 
                fill 
                className="object-cover"
                data-ai-hint="bakery storefront"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-headline font-bold">Our Philosophy</h2>
              <p className="text-muted-foreground">The ingredients that make us Jalandhar's best.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto text-accent-foreground">
                  <Wheat className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold">Pure & Local</h3>
                <p className="text-muted-foreground">We source our flour and dairy from organic farms around Punjab, ensuring every loaf is fresh and wholesome.</p>
              </div>
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto text-accent-foreground">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold">Crafted with Love</h3>
                <p className="text-muted-foreground">Our bakers and sandwich artists are true artisans, obsessing over every detail from crust to crumb.</p>
              </div>
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto text-accent-foreground">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold">Community First</h3>
                <p className="text-muted-foreground">We're proud to be a hub for Jalandhar's families, students, and professionals alike.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

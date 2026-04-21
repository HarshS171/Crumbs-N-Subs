
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ReviewSection } from '@/components/ReviewSection';
import { BakeryInfo } from '@/components/BakeryInfo';
import { ProductCard } from '@/components/ProductCard';
import { MenuCollage } from '@/components/MenuCollage';
import { PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles, Heart, PartyPopper, Users, GraduationCap } from 'lucide-react';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bakery')?.imageUrl || '';

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <Image
            src={heroImage}
            alt="Crumbs N Subs Jalandhar"
            fill
            className="object-cover brightness-[0.55]"
            priority
            data-ai-hint="bakery interior"
          />
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-2 rounded-full text-accent-foreground border border-accent/30 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-widest text-white">Jalandhar's Artisan Hub</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tight leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Crumbs N Subs: <br /><span className="text-accent">Made for Jalandhar.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-medium max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              From gourmet burgers to artisan birthday cakes, we bake moments that matter in Model Town.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 h-14 text-lg font-bold shadow-xl transition-all hover:scale-105">
                <Link href="/shop">Order Online</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-10 h-14 text-lg backdrop-blur-sm">
                <Link href="/about">Bulk Event Orders</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Audience Segments Section */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background p-8 rounded-3xl border border-border/50 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-primary">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-bold">Student Specials</h3>
                <p className="text-muted-foreground text-sm">Deliciously affordable burgers, subs and shakes for your study breaks.</p>
              </div>
              <div className="bg-background p-8 rounded-3xl border border-border/50 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-primary">
                  <PartyPopper className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-bold">Family Birthdays</h3>
                <p className="text-muted-foreground text-sm">Customized cakes that make family celebrations unforgettable.</p>
              </div>
              <div className="bg-background p-8 rounded-3xl border border-border/50 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-primary">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-bold">Anniversary Glow</h3>
                <p className="text-muted-foreground text-sm">Romantic Red Velvet and specialty cakes for your milestones.</p>
              </div>
              <div className="bg-background p-8 rounded-3xl border border-border/50 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-bold">Bulk & Events</h3>
                <p className="text-muted-foreground text-sm">Catering platters for office events and local Jalandhar gatherings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Collage Showcase */}
        <MenuCollage />

        {/* Featured Section */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-headline font-bold">Local Favorites</h2>
                <p className="text-muted-foreground text-lg">Specially crafted for the Jalandhar palate. Freshly baked every dawn.</p>
              </div>
              <Button asChild variant="link" className="text-primary font-bold text-lg group p-0">
                <Link href="/shop" className="flex items-center">
                  See the full menu
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Info & Reviews */}
        <BakeryInfo />
        <ReviewSection />
        
        {/* Newsletter CTA */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
               <Wheat className="absolute -top-10 -left-10 h-64 w-64 rotate-12" />
               <Wheat className="absolute -bottom-10 -right-10 h-64 w-64 -rotate-12" />
            </div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight">Join Jalandhar's Bread Club</h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto">
                Get exclusive birthday month discounts and early access to our seasonal specials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-accent transition-all"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-12 font-bold">
                  Get My 10% Off
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Wheat(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11 10 3-3 3 3" />
      <path d="m11 14 3-3 3 3" />
      <path d="m11 18 3-3 3 3" />
      <path d="M14 22V10" />
      <path d="M14 22V7" />
      <path d="M7 10 4 7 1 10" />
      <path d="M7 14 4 11 1 14" />
      <path d="M7 18 4 15 1 18" />
      <path d="M4 22V10" />
      <path d="M4 22V7" />
    </svg>
  );
}

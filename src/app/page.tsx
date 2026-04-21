
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ReviewSection } from '@/components/ReviewSection';
import { BakeryInfo } from '@/components/BakeryInfo';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bakery')?.imageUrl || '';

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <Image
            src={heroImage}
            alt="The Warm Crumb Bakery Interior"
            fill
            className="object-cover brightness-[0.6]"
            priority
            data-ai-hint="bakery interior"
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-2 rounded-full text-accent-foreground border border-accent/30 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-widest">Est. 2012</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-white tracking-tight leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Baked with Love, <br /><span className="text-accent">Served with Heart.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              Experience the artisan difference of traditional stone-ground flour and slow-fermentation sourdough.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-14 text-lg">
                <Link href="/shop">Order Online</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8 h-14 text-lg backdrop-blur-sm">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-headline font-bold">Baker's Choice</h2>
                <p className="text-muted-foreground">Our most loved signature items, fresh out of the oven.</p>
              </div>
              <Button asChild variant="link" className="text-primary font-bold text-lg group p-0">
                <Link href="/shop" className="flex items-center">
                  View full menu
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
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight">Join the Crumb Community</h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto">
                Sign up for fresh updates, seasonal specials, and a 10% discount on your first online order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-accent transition-all"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-12">
                  Subscribe
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

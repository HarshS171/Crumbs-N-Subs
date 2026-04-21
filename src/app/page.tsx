"use client";

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
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  ArrowRight, 
  Sparkles, 
  Heart, 
  PartyPopper, 
  Users, 
  GraduationCap, 
  Wheat, 
  Cake, 
  Coffee, 
  Pizza 
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const heroImgData = PlaceHolderImages.find(img => img.id === 'hero-bakery');
  const { scrollY } = useScroll();

  // Parallax effects
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const yContent = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <>
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        {/* Immersive Hero Section */}
        <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-[#1a1310]">
          {/* Background Layer (Parallax) */}
          <motion.div 
            style={{ y: yBg, scale }}
            className="absolute inset-0 z-0"
          >
            {heroImgData?.imageUrl && (
              <Image
                src={heroImgData.imageUrl}
                alt="Crumbs N Subs Jalandhar Bakery"
                fill
                className="object-cover brightness-[0.35] saturate-50 transition-all duration-1000"
                priority
                data-ai-hint={heroImgData.imageHint}
              />
            )}
            {/* Gradient Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </motion.div>

          {/* Floating Bakery Elements */}
          <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] left-[10%] text-accent/20"
            >
              <Wheat size={120} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[20%] right-[15%] text-accent/15"
            >
              <Cake size={160} />
            </motion.div>
            <motion.div 
              animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[60%] left-[5%] text-accent/10"
            >
              <Coffee size={80} />
            </motion.div>
          </div>

          {/* Content Layer */}
          <motion.div 
            style={{ y: yContent, opacity }}
            className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-xl px-6 py-2 rounded-full text-accent-foreground border border-accent/40 mb-4 shadow-2xl"
            >
              <Sparkles className="h-4 w-4 animate-pulse text-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">Jalandhar's Artisan Landmark</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-[9rem] font-headline font-bold text-white tracking-tighter leading-[0.85] drop-shadow-2xl"
            >
              Crumbs <span className="text-accent italic font-light">&</span> <br />
              <span className="relative">
                Subs
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="absolute -bottom-4 left-0 h-2 bg-accent/50 rounded-full" 
                />
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-3xl text-white/80 font-medium max-w-3xl mx-auto leading-relaxed"
            >
              Artisan baking meets gourmet sandwiches. <br />
              Crafted with Punjabi soul in the heart of Model Town.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-10"
            >
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-full px-12 h-16 text-xl font-bold shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all hover:scale-110 active:scale-95">
                <Link href="/shop">Explore Menu</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 rounded-full px-12 h-16 text-xl backdrop-blur-md transition-all">
                <Link href="/contact?type=custom">Custom Inquiries</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Bottom Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
             <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />
             <span className="text-[10px] text-accent font-bold uppercase tracking-widest vertical-rl">Scroll</span>
          </motion.div>
        </section>

        {/* Audience Segments Section */}
        <section className="py-24 bg-background relative z-30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-20">
              <div className="bg-card/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center space-y-4 shadow-2xl hover:bg-accent/5 transition-all group cursor-default">
                <div className="bg-primary/10 w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-headline font-bold">Student Hub</h3>
                <p className="text-muted-foreground">Budget-friendly gourmet bites for Jalandhar's scholars.</p>
              </div>
              <div className="bg-card/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center space-y-4 shadow-2xl hover:bg-accent/5 transition-all group cursor-default">
                <div className="bg-primary/10 w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                  <PartyPopper className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-headline font-bold">Celebrations</h3>
                <p className="text-muted-foreground">Bespoke cakes for the birthdays that define your year.</p>
              </div>
              <div className="bg-card/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center space-y-4 shadow-2xl hover:bg-accent/5 transition-all group cursor-default">
                <div className="bg-primary/10 w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                  <Heart className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-headline font-bold">Milestones</h3>
                <p className="text-muted-foreground">Romantic anniversaries catered with artisan elegance.</p>
              </div>
              <div className="bg-card/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center space-y-4 shadow-2xl hover:bg-accent/5 transition-all group cursor-default">
                <div className="bg-primary/10 w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-headline font-bold">Bulk Orders</h3>
                <p className="text-muted-foreground">Premium platters for Jalandhar's corporate & family events.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Collage Showcase */}
        <MenuCollage />

        {/* Featured Section */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 bg-accent/5">Menu Highlights</Badge>
                <h2 className="text-5xl font-headline font-bold">Local Favorites</h2>
                <p className="text-muted-foreground text-xl max-w-2xl">Crafted for the Punjabi palate. Freshly baked every dawn with organic flour from local Punjab farms.</p>
              </div>
              <Button asChild variant="link" className="text-primary font-bold text-xl group p-0">
                <Link href="/shop" className="flex items-center">
                  Full Menu Experience
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto bg-primary rounded-[4rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)]">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
               <Wheat className="absolute -top-10 -left-10 h-80 w-80 rotate-12" />
               <Wheat className="absolute -bottom-10 -right-10 h-80 w-80 -rotate-12" />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                <Wheat className="h-10 w-10 text-accent" />
              </div>
              <h2 className="text-4xl md:text-7xl font-headline font-bold text-white leading-tight tracking-tight">Join the Bread Club</h2>
              <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
                Stay updated on our seasonal sub flavors and exclusive birthday month surprises for Jalandhar's finest foodies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-8">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/5 border border-white/20 text-white placeholder:text-white/30 rounded-full px-8 py-4 outline-none focus:ring-4 focus:ring-accent/20 transition-all text-lg"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-full px-12 h-14 font-bold text-lg shadow-xl">
                  Get Invitation
                </Button>
              </div>
              <p className="text-white/40 text-sm">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

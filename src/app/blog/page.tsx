import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, User, ArrowRight, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Blog() {
  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

  const POSTS = [
    {
      id: 1,
      title: "Top 5 Anniversary Cake Trends in Jalandhar 2024",
      excerpt: "From minimalist Korean cakes to vintage Lambeth styles, see what Jalandhar couples are loving this year. Our pastry chefs breakdown the most requested designs and flavors for the perfect celebration.",
      author: "Chef Rajat",
      date: "May 12, 2024",
      readTime: "5 min read",
      category: "Trends",
      image: getImg('blog-trends'),
      hint: "bakery trends"
    },
    {
      id: 2,
      title: "The Secret to Our 24-Hour Fermented Sub Bread",
      excerpt: "Ever wondered why our bread is so soft yet crusty? It's all in the slow-fermentation process we perfected in Model Town. We reveal a few secrets of our daily artisan bake.",
      author: "Master Baker Anu",
      date: "April 28, 2024",
      readTime: "8 min read",
      category: "Behind the Scenes",
      image: getImg('blog-bread'),
      hint: "artisan bread"
    },
    {
      id: 3,
      title: "Planning a Bulk Order? Here's How to Choose the Perfect Menu",
      excerpt: "Catering for 50 people in Jalandhar? Our guide helps you balance cakes, subs, and shakes for every palate, ensuring your event is a culinary success without the stress.",
      author: "Event Team",
      date: "April 15, 2024",
      readTime: "6 min read",
      category: "Guides",
      image: getImg('blog-bulk'),
      hint: "event catering"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-background py-24 px-4 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10 px-4 py-1.5 text-sm uppercase tracking-widest">
              Our Journal
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-bold">Crumbs & Stories</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tales from our oven, trends from Jalandhar, and baking secrets shared fresh every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {POSTS.map((post) => (
              <article key={post.id} className="group cursor-pointer flex flex-col h-full bg-card/40 backdrop-blur-md rounded-[2.5rem] border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint={post.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <Badge className="absolute top-6 left-6 bg-white/90 text-primary border-none shadow-md rounded-full px-4 py-1 font-bold tracking-wide">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-8 flex flex-col flex-grow space-y-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-medium">
                    <span className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1 rounded-full"><CalendarDays className="h-4 w-4 text-primary" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-headline font-bold leading-tight group-hover:text-primary transition-colors mt-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground/80 line-clamp-3 text-lg leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <User className="h-4 w-4" />
                      </div>
                      {post.author}
                    </span>
                    <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-2 transition-transform text-lg">
                      Read <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

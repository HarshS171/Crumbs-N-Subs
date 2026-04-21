
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Blog() {
  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

  const POSTS = [
    {
      id: 1,
      title: "Top 5 Anniversary Cake Trends in Jalandhar 2024",
      excerpt: "From minimalist Korean cakes to vintage Lambeth styles, see what Jalandhar couples are loving this year.",
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
      excerpt: "Ever wondered why our bread is so soft yet crusty? It's all in the slow-fermentation process we perfected in Model Town.",
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
      excerpt: "Catering for 50 people in Jalandhar? Our guide helps you balance cakes, subs, and shakes for every palate.",
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
      <main className="flex-grow bg-background py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-headline font-bold">Crumbs & Stories</h1>
            <p className="text-xl text-muted-foreground">Tales from our oven, trends from Jalandhar, and baking secrets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {POSTS.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-[2rem] overflow-hidden border mb-6">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={post.hint}
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-primary border-none shadow-sm rounded-full">
                    {post.category}
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-1 transition-transform">
                    Read Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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

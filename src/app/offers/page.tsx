
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PartyPopper, GraduationCap, Users, Clock, Copy, Ticket } from 'lucide-react';
import Link from 'next/link';

export default function Offers() {
  const OFFERS = [
    {
      id: 1,
      title: "Student Happy Hour",
      description: "Get 20% off all Subs & Shakes between 2 PM - 5 PM on weekdays. Valid with student ID.",
      code: "STUDENT20",
      icon: <GraduationCap className="h-8 w-8" />,
      tag: "Limited Time"
    },
    {
      id: 2,
      title: "Birthday Bash Special",
      description: "Order any cake above ₹1000 and get 6 Choco-Chip cookies free! Perfect for Jalandhar family parties.",
      code: "BDAYFREE",
      icon: <PartyPopper className="h-8 w-8" />,
      tag: "Popular"
    },
    {
      id: 3,
      title: "Bulk Platter Deal",
      description: "Planning a Jalandhar office event? Order 5+ gourmet subs and get a 10% discount on the entire order.",
      code: "OFFICE10",
      icon: <Users className="h-8 w-8" />,
      tag: "Best Value"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-background">
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-headline font-bold">Freshly Baked Deals</h1>
              <p className="text-muted-foreground text-lg">Delicious savings for our Model Town community.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {OFFERS.map((offer) => (
                <div key={offer.id} className="bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group shadow-md hover:shadow-xl transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:scale-110 transition-transform" />
                  
                  <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {offer.icon}
                  </div>

                  <div className="flex-grow text-center md:text-left space-y-4">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <h3 className="text-2xl font-headline font-bold">{offer.title}</h3>
                      <Badge variant="secondary" className="rounded-full bg-accent text-accent-foreground font-bold">
                        {offer.tag}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground max-w-xl">{offer.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                      <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full border border-dashed border-primary/30">
                        <Ticket className="h-4 w-4 text-primary" />
                        <span className="font-mono font-bold tracking-wider">{offer.code}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6 ml-2">
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button asChild className="rounded-full px-8 bg-primary">
                        <Link href="/shop">Order Now</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border">
                    <Clock className="h-3 w-3" />
                    Valid till Dec 2024
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary rounded-[3rem] p-12 text-center text-white space-y-6">
              <h2 className="text-3xl font-headline font-bold">Want Exclusive Coupons?</h2>
              <p className="text-white/70">Sign up for our "Bread Club" and get a special 15% discount on your first online order.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-full px-6 py-3 outline-none"
                />
                <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 font-bold">
                  Join Now
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


"use client";

import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, PartyPopper, CalendarDays } from 'lucide-react';
import { BakeryInfo } from '@/components/BakeryInfo';

export default function Contact() {
  const searchParams = useSearchParams();
  const isCustomOrder = searchParams.get('type') === 'custom';

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-background py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-headline font-bold">
                {isCustomOrder ? "Custom Cake Inquiry" : "Get in Touch"}
              </h1>
              <p className="text-xl text-muted-foreground">
                {isCustomOrder 
                  ? "Tell us about your dream cake, and we'll bake it to life for your special Jalandhar event." 
                  : "We'd love to hear from you. Questions about our menu, bulk orders, or careers? Drop us a line."
                }
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-muted-foreground">+91 181 456 7890</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-muted-foreground">hello@crumbsnsubs.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-muted-foreground">Model Town Market, Jalandhar</p>
                </div>
              </div>
            </div>

            {isCustomOrder && (
              <div className="p-8 bg-secondary/30 rounded-[2rem] border border-primary/10 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <PartyPopper className="h-6 w-6" />
                  <h3 className="text-xl font-headline font-bold">Special Event?</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We specialize in bulk platters for Jalandhar corporate events and grand anniversary parties. Mention "BULK" in your message for a custom quote.
                </p>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="bg-card p-10 rounded-[3rem] border border-border shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Aman Singh" className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="aman@example.com" className="rounded-xl h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder={isCustomOrder ? "Custom Anniversary Cake" : "General Inquiry"} className="rounded-xl h-12" />
              </div>

              {isCustomOrder && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Event Date</Label>
                    <div className="relative">
                      <Input id="date" type="date" className="rounded-xl h-12 pl-12" />
                      <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Guest Count</Label>
                    <Input id="guests" type="number" placeholder="20" className="rounded-xl h-12" />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Describe what you're looking for..." className="rounded-xl min-h-[150px]" />
              </div>

              <Button className="w-full rounded-full h-14 text-lg bg-primary hover:bg-primary/90 font-bold shadow-lg">
                <Send className="mr-2 h-5 w-5" />
                Send My Inquiry
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-24 pt-16 border-t">
          <BakeryInfo />
        </div>
      </main>
      <Footer />
    </>
  );
}

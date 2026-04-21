
"use client";

import Image from 'next/image';
import { Plus, Minus, Trash2, ArrowRight, Loader2, Sparkles, ShoppingCart, Truck, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart-store';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { aiPairedRecommendations } from '@/ai/flows/ai-paired-recommendations-flow';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function CartDisplay() {
  const { items, updateQuantity, removeItem } = useCartStore();
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loadingAi, setLoadingAi] = useState(false);
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('pickup');

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const getSuggestions = async () => {
    setLoadingAi(true);
    try {
      const result = await aiPairedRecommendations({
        currentItems: items.map(i => i.name)
      });
      setRecommendations(result.suggestions);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingAi(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center space-y-4">
        <div className="bg-muted rounded-full p-6">
          <ShoppingCart className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-headline font-semibold">Your basket is empty</h3>
        <p className="text-muted-foreground">Treat yourself to something fresh from our oven in Jalandhar.</p>
        <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
          <a href="/shop">Browse Menu</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full py-6">
      <div className="mb-6">
        <Tabs defaultValue="pickup" className="w-full" onValueChange={(v) => setOrderType(v as any)}>
          <TabsList className="grid w-full grid-cols-2 rounded-full h-12 bg-muted p-1">
            <TabsTrigger value="pickup" className="rounded-full data-[state=active]:bg-background">
              <Store className="h-4 w-4 mr-2" /> Pickup
            </TabsTrigger>
            <TabsTrigger value="delivery" className="rounded-full data-[state=active]:bg-background">
              <Truck className="h-4 w-4 mr-2" /> Delivery
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative h-20 w-20 rounded-2xl overflow-hidden bg-muted flex-shrink-0 border">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  data-ai-hint={item.hint}
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between">
                  <h4 className="font-medium text-sm md:text-base line-clamp-1">{item.name}</h4>
                  <span className="font-bold">₹{(item.price * item.quantity).toFixed(0)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border rounded-full bg-muted/50">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-full"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4 bg-secondary/30 p-4 rounded-[1.5rem] border border-primary/10">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <h5 className="font-headline font-semibold text-sm">Chef's Local Pairings</h5>
          </div>
          {recommendations.length > 0 ? (
            <div className="space-y-2">
              {recommendations.map((rec, i) => (
                <div key={i} className="text-xs flex items-center gap-2 text-muted-foreground">
                  <div className="w-1 h-1 bg-primary rounded-full shrink-0" />
                  {rec}
                </div>
              ))}
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs h-8 mt-2 p-0 underline hover:bg-transparent text-primary"
                onClick={getSuggestions}
              >
                Refresh suggestions
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs h-10 border-primary/20 hover:bg-primary/5 rounded-full"
              disabled={loadingAi}
              onClick={getSuggestions}
            >
              {loadingAi ? <Loader2 className="h-3 w-3 animate-spin mr-2" /> : <Sparkles className="h-3 w-3 mr-2" />}
              Ask AI for Pairings
            </Button>
          )}
        </div>
      </ScrollArea>

      <div className="mt-auto space-y-4 pt-6 bg-background">
        <Separator className="opacity-50" />
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>₹{total.toFixed(0)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {orderType === 'delivery' ? 'Delivery in Jalandhar' : 'Pickup in Model Town'}
            </span>
            <span className="text-primary font-bold">FREE</span>
          </div>
          <div className="flex justify-between text-xl font-headline font-bold pt-2">
            <span>Total</span>
            <span>₹{total.toFixed(0)}</span>
          </div>
        </div>
        <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground group rounded-full text-lg font-bold shadow-lg">
          Place {orderType === 'delivery' ? 'Delivery' : 'Pickup'} Order
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-[10px] text-center text-muted-foreground">
          By placing an order, you agree to our Terms of Service.
        </p>
      </div>
    </div>
  );
}

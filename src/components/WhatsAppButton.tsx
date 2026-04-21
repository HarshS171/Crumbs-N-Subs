
"use client";

import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
  const handleChat = () => {
    const phoneNumber = "911814567890"; // Example Jalandhar number
    const message = encodeURIComponent("Hi Crumbs N Subs! I'd like to inquire about customized cakes/bulk orders.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleChat}
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center p-0"
    >
      <MessageSquare className="h-7 w-7" />
      <span className="sr-only">Chat on WhatsApp</span>
    </Button>
  );
}

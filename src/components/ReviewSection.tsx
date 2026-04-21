
import { REVIEWS } from '@/lib/data';
import { Star } from 'lucide-react';

export function ReviewSection() {
  return (
    <section className="bg-secondary/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">What Our Guests Say</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-background p-8 rounded-2xl shadow-sm border border-border/30">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
              <p className="italic text-muted-foreground mb-6 leading-relaxed">"{review.content}"</p>
              <div className="flex items-center justify-between">
                <span className="font-headline font-bold text-primary">{review.author}</span>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

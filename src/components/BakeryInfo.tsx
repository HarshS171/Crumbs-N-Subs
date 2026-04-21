
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export function BakeryInfo() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-6">Find Us In The Village</h2>
            <p className="text-muted-foreground text-lg">
              Nestled in the heart of the community, we bake fresh every day to bring you the comfort of homemade quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Opening Hours</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li className="flex justify-between"><span>Mon - Fri</span> <span>07:00 - 18:00</span></li>
                    <li className="flex justify-between font-medium text-primary"><span>Saturday</span> <span>08:00 - 16:00</span></li>
                    <li className="flex justify-between"><span>Sunday</span> <span>09:00 - 14:00</span></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 Flour Lane<br />
                    Rustic Hollow, RH1 4BC
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+44 (0) 123 456 789</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg grayscale-25 border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.819243221671!2d-0.1277582!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c3216379de%3A0x5895782782974510!2sLondon!5e0!3m2!1sen!2suk!4v1710500000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bakery Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

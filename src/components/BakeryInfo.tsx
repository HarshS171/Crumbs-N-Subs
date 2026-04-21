
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export function BakeryInfo() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-6">Visit Us in Jalandhar</h2>
            <p className="text-muted-foreground text-lg">
              Located in the heart of Punjab, Crumbs N Subs is where traditional baking meets modern gourmet sandwiches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Opening Hours</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li className="flex justify-between"><span>Mon - Fri</span> <span>08:00 - 22:00</span></li>
                    <li className="flex justify-between font-medium text-primary"><span>Saturday</span> <span>09:00 - 23:00</span></li>
                    <li className="flex justify-between"><span>Sunday</span> <span>10:00 - 21:00</span></li>
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
                    Model Town Market<br />
                    Jalandhar, Punjab 144003
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+91 181 456 7890</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg grayscale-25 border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.318287343468!2d75.5786353!3d31.3263599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a703b5%3A0x2b30451df038a72!2sModel%20Town%2C%20Jalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Crumbs N Subs Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

import { useParams, Link } from "react-router-dom";
import { apartments } from "@/data/apartments";
import {
  Star, Wifi, UtensilsCrossed, Wind, Car, Tv, WashingMachine, Dumbbell,
  Briefcase, Flame, TreePine, MapPin, Users, BedDouble, Bath, ChevronLeft,
  Phone, MessageCircle, PhoneCall, Send
} from "lucide-react";
import { useState } from "react";
import ImageGallery from "@/components/ImageGallery";

const amenityIconMap: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={20} />, Kitchen: <UtensilsCrossed size={20} />,
  "Air conditioning": <Wind size={20} />, Parking: <Car size={20} />,
  TV: <Tv size={20} />, Washer: <WashingMachine size={20} />,
  Gym: <Dumbbell size={20} />, Workspace: <Briefcase size={20} />,
  BBQ: <Flame size={20} />, Garden: <TreePine size={20} />,
  Heating: <Wind size={20} />, Balcony: <TreePine size={20} />,
  Terrace: <TreePine size={20} />,
};

const ApartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const apt = apartments.find((a) => a.id === id);
  const [mainImage, setMainImage] = useState(0);

  if (!apt) {
    return (
      <main className="container py-20 text-center">
        <h1 className="text-2xl text-foreground">Apartment not found</h1>
        <Link to="/apartments" className="mt-4 inline-block text-primary hover:underline">
          ← Back to apartments
        </Link>
      </main>
    );
  }

  return (
    <main className="py-8">
      <div className="container">
        <Link to="/apartments" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ChevronLeft size={16} /> Back to apartments
        </Link>

        {/* Gallery */}
        <ImageGallery images={apt.images} title={apt.title} />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* Left content */}
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl text-foreground">{apt.title}</h1>
                <p className="mt-1 flex items-center gap-1 text-muted-foreground font-body">
                  <MapPin size={16} /> {apt.location}
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold">
                <Star size={16} className="fill-primary text-primary" />
                {apt.rating}
                <span className="text-muted-foreground font-normal">({apt.reviews} reviews)</span>
              </div>
            </div>

            <div className="mt-6 flex gap-6 border-b border-t border-border py-4">
              {[
                { icon: <Users size={18} />, label: `${apt.guests} guests` },
                { icon: <BedDouble size={18} />, label: `${apt.bedrooms} bedroom${apt.bedrooms > 1 ? "s" : ""}` },
                { icon: <BedDouble size={18} />, label: `${apt.beds} bed${apt.beds > 1 ? "s" : ""}` },
                { icon: <Bath size={18} />, label: `${apt.bathrooms} bath` },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  {item.icon} {item.label}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-xl text-foreground">About this apartment</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground font-body">{apt.description}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl text-foreground">Amenities</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {apt.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-3 rounded-lg bg-secondary p-3 text-sm text-foreground">
                    <span className="text-muted-foreground">{amenityIconMap[a] || null}</span>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl text-foreground">Location</h2>
              <div className="mt-4 overflow-hidden rounded-xl bg-secondary">
                {/** 
                <div className="flex aspect-[16/9] items-center justify-center text-muted-foreground font-body">
                  <MapPin size={32} className="mr-2" /> Map — {apt.location}
                </div>
                */}
                <iframe
                  width="100%"
                  height="100%"
                  className="flex aspect-[16/9] items-center justify-center text-muted-foreground font-body"
                  loading="lazy"
                  src={`${apt.map}`}>
                  </iframe>
              </div>
            </div>
          </div>

          {/* Booking card */}
          <aside className="h-fit rounded-xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">€{apt.price}</span>
              <span className="text-muted-foreground">/ night</span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="grid grid-cols-4 gap-3">
                    {/* Phone */}
                    <a 
                      href={`tel:+${apt.mob}`} 
                      aria-label="Call us"
                      className="fex flex-col">
                      <Phone size={20} className="ml-1" />
                      <p className="text-xs text-black mt-3">Phone</p>
                    </a>
                    {/* What's Up */}
                    <a
                      href={`https://wa.me/${apt.mob}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="fex flex-col">
                        <MessageCircle size={20} className="ml-3" />
                        <p className="text-xs text-black mt-3">What&rsquo;s&nbsp;up</p>
                      </a>
                    {/* Viber */}
                    <a
                      href={`viber://chat?number=%2B${apt.mob}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Viber"
                      className="fex flex-col">
                      <PhoneCall size={20} />
                      <p className="text-xs text-black mt-3">Viber</p>
                    </a>
                    {/* Telegram */}
                    <a
                      href={`https://t.me/${apt.mob}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Telegram"
                      className="fex flex-col"
                    >
                      <Send size={20} className="ml-3" />
                      <p className="text-xs text-black mt-3">Telegram</p>
                    </a>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="mt-3 text-center text-xs text-muted-foreground">Call us for availability and reservations</p>
              <p className="mt-3 text-center text-xs text-muted-foreground">Contact: {apt.host}</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ApartmentDetail;


{/**

  CALENDAR

            <aside className="h-fit rounded-xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">€{apt.price}</span>
              <span className="text-muted-foreground">/ night</span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border p-3">
                  <label className="text-xs font-medium text-muted-foreground">CHECK-IN</label>
                  <input type="date" className="mt-1 block w-full bg-transparent text-sm text-foreground outline-none" />
                </div>
                <div className="rounded-lg border border-border p-3">
                  <label className="text-xs font-medium text-muted-foreground">CHECKOUT</label>
                  <input type="date" className="mt-1 block w-full bg-transparent text-sm text-foreground outline-none" />
                </div>
              </div>
              <div className="rounded-lg border border-border p-3">
                <label className="text-xs font-medium text-muted-foreground">GUESTS</label>
                <select className="mt-1 block w-full bg-transparent text-sm text-foreground outline-none">
                  {Array.from({ length: apt.guests }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} guest{i > 0 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Reserve
            </button>

            <p className="mt-3 text-center text-xs text-muted-foreground">You won't be charged yet</p>

            <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>€{apt.price} × 5 nights</span>
                <span>€{apt.price * 5}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Cleaning fee</span>
                <span>€25</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2 font-semibold text-foreground">
                <span>Total</span>
                <span>€{apt.price * 5 + 25}</span>
              </div>
            </div>
          </aside>
  
  */}


          {/* Gallery */}
        {/** 
        <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <img src={apt.images[mainImage]} alt={apt.title} className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:grid-rows-2">
            {apt.images.slice(1, 3).map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i + 1)}
                className="aspect-[4/3] overflow-hidden rounded-xl md:aspect-auto"
              >
                <img src={img} alt={`${apt.title} view ${i + 2}`} className="h-full w-full object-cover hover:opacity-90 transition-opacity" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
        */}
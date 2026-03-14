import { Link } from "react-router-dom";
import { Star, Wifi, UtensilsCrossed, Wind, Car } from "lucide-react";
import type { Apartment } from "@/data/apartments";

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={14} />,
  Kitchen: <UtensilsCrossed size={14} />,
  "Air conditioning": <Wind size={14} />,
  Parking: <Car size={14} />,
};

const ApartmentCard = ({ apartment }: { apartment: Apartment }) => (
  <Link
    to={`/apartment/${apartment.id}`}
    className="group block overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={apartment.image}
        alt={apartment.title}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold">
        <Star size={12} className="fill-primary text-primary" />
        {apartment.rating}
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-body text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {apartment.title}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{apartment.location}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {apartment.amenities.slice(0, 4).map((a) => (
          <span
            key={a}
            className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
          >
            {amenityIcons[a] || null}
            {a}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <p className="text-base font-semibold text-foreground">
          €{apartment.price} <span className="text-sm font-normal text-muted-foreground">/ night</span>
        </p>
        <span className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90">
          Book Now
        </span>
      </div>
    </div>
  </Link>
);

export default ApartmentCard;

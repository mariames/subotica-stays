import ApartmentCard from "./ApartmentCard";
import { apartments } from "@/data/apartments";
import { Link } from "react-router-dom";

const FeaturedApartments = () => (
  <section className="py-20" aria-labelledby="featured-heading">
    <div className="container">
      <div className="flex items-end justify-between">
        <div>
          <h2 id="featured-heading" className="text-3xl text-foreground md:text-4xl">
            Featured Apartments
          </h2>
          <p className="mt-2 text-muted-foreground font-body">
            Our top picks for an unforgettable Subotica experience
          </p>
        </div>
        {/** 
        <Link
          to="/apartments"
          className="hidden text-sm font-semibold text-primary hover:underline md:inline"
        >
          View all →
        </Link>
        */}
      </div>
      
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apartments.slice(0, 6).map((apt) => (
          <ApartmentCard key={apt.id} apartment={apt} />
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <Link to="/apartments" className="text-sm font-semibold text-primary hover:underline">
          View all apartments →
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedApartments;

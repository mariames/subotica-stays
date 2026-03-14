import { Link } from "react-router-dom";
import cityBelgrade from "@/assets/city-belgrade.jpg";
import cityNoviSad from "@/assets/city-novi-sad.jpg";
import cityNis from "@/assets/city-nis.jpg";

const citiesData = [
  { name: "Belgrade", slug: "belgrade", image: cityBelgrade, count: 45 },
  { name: "City center", slug: "novi-sad", image: cityNoviSad, count: 2 },
  { name: "Free parking", slug: "nis", image: cityNis, count: 1 },
];

const CityCards = () => (
  <section className="bg-secondary py-20" aria-labelledby="cities-heading">
    <div className="container">
      <h2 id="cities-heading" className="text-3xl text-foreground md:text-4xl">
        Discover apartments in Subotica
      </h2>
      <p className="mt-2 text-muted-foreground font-body">
        Explore by near border, city center or something else...
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {citiesData.map((city) => (
          <Link
            key={city.slug}
            to={`/city/${city.slug}`}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={city.image}
                alt={`${city.name}, Serbia`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-display text-2xl text-primary-foreground">{city.name}</h3>
              <p className="text-sm text-primary-foreground/80 font-body">{city.count} apartments</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CityCards;

import { useParams, Link } from "react-router-dom";
import { apartments } from "@/data/apartments";
import ApartmentCard from "@/components/ApartmentCard";
import cityBelgrade from "@/assets/city-belgrade.jpg";
import cityNoviSad from "@/assets/city-novi-sad.jpg";
import cityNis from "@/assets/city-nis.jpg";

const cityData: Record<string, { name: string; image: string; description: string; cityFilter: string }> = {
  belgrade: {
    name: "Belgrade",
    image: cityBelgrade,
    cityFilter: "Belgrade",
    description: "Serbia's vibrant capital, where ancient history meets thriving nightlife. Explore the Kalemegdan Fortress, stroll Knez Mihailova, and discover world-class restaurants.",
  },
  "novi-sad": {
    name: "Novi Sad",
    image: cityNoviSad,
    cityFilter: "Novi Sad",
    description: "The European Capital of Culture. Home to EXIT Festival, the stunning Petrovaradin Fortress, and a charming old town filled with cafes and galleries.",
  },
  nis: {
    name: "Niš",
    image: cityNis,
    cityFilter: "Niš",
    description: "One of the oldest cities in Europe. Discover the historic Niš Fortress, vibrant food scene, and the warm hospitality of southern Serbia.",
  },
};

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = slug ? cityData[slug] : null;

  if (!city) {
    return (
      <main className="container py-20 text-center">
        <h1 className="text-2xl text-foreground">City not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">← Back home</Link>
      </main>
    );
  }

  const cityApartments = apartments.filter((a) => a.city === city.cityFilter);

  return (
    <main>
      <section className="relative">
        <div className="aspect-[3/1] w-full overflow-hidden">
          <img src={city.image} alt={city.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl text-primary-foreground md:text-5xl">{city.name}</h1>
            <p className="mt-2 text-lg text-primary-foreground/80 font-body">{cityApartments.length} apartments available</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <p className="mx-auto max-w-2xl text-center text-muted-foreground font-body leading-relaxed">
            {city.description}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cityApartments.map((apt) => (
              <ApartmentCard key={apt.id} apartment={apt} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CityPage;

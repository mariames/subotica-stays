import { Search, MapPin, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroBg from "@/assets/subotica-city.png";

const HeroSearch = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/apartments${city ? `?city=${city}` : ""}`);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Subotica cityscape at golden hour" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="container relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="max-w-3xl text-4xl leading-tight text-primary-foreground md:text-6xl">
          Book direct and save 15%
        </h1>
        <p className="mt-4 max-w-xl text-lg text-primary-foreground/80 font-body">
          Handpicked apartments in Subotica. Book with confidence.
        </p>
        {/** 
        <form
          onSubmit={handleSearch}
          className="mt-10 flex w-full max-w-3xl flex-col gap-3 rounded-2xl bg-background p-3 shadow-hero md:flex-row md:items-center md:gap-0 md:rounded-full md:p-2"
        >
          <div className="flex flex-1 items-center gap-2 px-4 py-2">
            <MapPin size={18} className="text-muted-foreground" />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
              aria-label="Select city"
            >
              <option value="">All cities</option>
              <option value="Belgrade">Belgrade</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Niš">Niš</option>
            </select>
          </div>
          <div className="hidden h-8 w-px bg-border md:block" />
          <div className="flex flex-1 items-center gap-2 px-4 py-2">
            <Calendar size={18} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Check in — Check out"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              aria-label="Select dates"
            />
          </div>
          <div className="hidden h-8 w-px bg-border md:block" />
          <div className="flex flex-1 items-center gap-2 px-4 py-2">
            <Users size={18} className="text-muted-foreground" />
            <input
              type="number"
              min={1}
              max={10}
              placeholder="Guests"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              aria-label="Number of guests"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Search size={16} />
            Search
          </button>
        </form>
        */}
      </div>
    </section>
  );
};

export default HeroSearch;

import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import ApartmentCard from "@/components/ApartmentCard";
import { apartments } from "@/data/apartments";

const Apartments = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const cityFilter = searchParams.get("city") || "";

  const filtered = useMemo(
    () => (cityFilter ? apartments.filter((a) => a.city === cityFilter) : apartments),
    [cityFilter]
  );

  const cities = ["All", "Belgrade", "Novi Sad", "Niš"];

  return (
    <main className="py-12">
      <div className="container">
        <h1 className="text-3xl text-foreground md:text-4xl">
          {cityFilter ? `Apartments in ${cityFilter}` : "All Apartments"}
        </h1>
        <p className="mt-2 text-muted-foreground font-body">
          {filtered.length} apartment{filtered.length !== 1 ? "s" : ""} available
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {cities.map((c) => {
            const active = (c === "All" && !cityFilter) || c === cityFilter;
            return (
              <button
                key={c}
                onClick={() => {
                  if (c === "All") setSearchParams({});
                  else setSearchParams({ city: c });
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Apartments;

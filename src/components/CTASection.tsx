import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-20">
    <div className="container">
      <div className="rounded-2xl bg-primary px-8 py-16 text-center md:px-16">
        <h2 className="font-display text-3xl text-primary-foreground md:text-4xl">
          Ready to Explore Subotica?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-primary-foreground/80 font-body">
          Book your perfect apartment today and experience the best of Subotica hospitality.
        </p>
        <Link
          to="/apartments"
          className="mt-8 inline-flex rounded-full bg-background px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
        >
          Browse Apartments
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;

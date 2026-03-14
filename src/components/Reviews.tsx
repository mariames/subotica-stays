import { Star } from "lucide-react";

const reviews = [
  { name: "Natalia", from: "Booking, Montenegro", rating: 5, text: "Great location at the city Center , but also in a quite place with a small yard and peaceful atmosphere. To the closest market just 15 metres walking. Clean , warm, spacious apartments on two tiers.The housemate friendly and always in touch and quick feedback. Thank you.", date: "Mar 2025" },
  { name: "Bakos", from: "Booking, Hungary", rating: 5, text: "The place is located right in the heart of Subotica, on one of its most prominent streets, so everything is literally within walking distance. The apartment is super tidy and well-organized with very attractive design. As soon as you step inside, you’ll feel cosy and comfortable. We’d definitely come back.", date: "Nov 2024" },
  { name: "Dimitrije", from: "Booking, Belgrade", rating: 5, text: "Čistoća,ima sve što je potrebno,blizina centra grada.”", date: "Feb 2026" },
];

const Reviews = () => (
  <section className="bg-secondary py-20" aria-labelledby="reviews-heading">
    <div className="container">
      <h2 id="reviews-heading" className="text-center text-3xl text-foreground md:text-4xl">
        What Our Guests Say
      </h2>
      <p className="mt-2 text-center text-muted-foreground font-body">
        Real reviews from real travelers
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <article
            key={i}
            className="rounded-xl bg-card p-6 shadow-card"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">"{r.text}"</p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.from}</p>
              </div>
              <p className="text-xs text-muted-foreground">{r.date}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;

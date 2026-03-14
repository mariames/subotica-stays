import { Link } from "react-router-dom";
import cityBelgrade from "@/assets/city-belgrade.jpg";
import cityNoviSad from "@/assets/city-novi-sad.jpg";
import cityNis from "@/assets/city-nis.jpg";

const posts = [
  {
    slug: "top-10-things-belgrade",
    title: "Top 10 Things to Do in Belgrade",
    excerpt: "From the ancient Kalemegdan Fortress to the bustling nightlife of Savamala, discover the best experiences Belgrade has to offer.",
    image: cityBelgrade,
    date: "Mar 5, 2026",
    readTime: "5 min read",
  },
  {
    slug: "novi-sad-guide",
    title: "A Complete Guide to Novi Sad",
    excerpt: "Everything you need to know about visiting Serbia's second city — from EXIT Festival to the best local restaurants.",
    image: cityNoviSad,
    date: "Feb 20, 2026",
    readTime: "7 min read",
  },
  {
    slug: "hidden-gems-nis",
    title: "Hidden Gems of Niš",
    excerpt: "Go beyond the tourist trail and discover the authentic charm of one of Europe's oldest continuously inhabited cities.",
    image: cityNis,
    date: "Feb 10, 2026",
    readTime: "4 min read",
  },
];

const Blog = () => (
  <main className="py-12">
    <div className="container">
      <h1 className="text-3xl text-foreground md:text-4xl">Travel Blog</h1>
      <p className="mt-2 text-muted-foreground font-body">
        Tips, guides, and stories from Serbia
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="group overflow-hidden rounded-xl bg-card shadow-card transition-all hover:shadow-card-hover">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-2 font-display text-lg text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              <Link to="#" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </main>
);

export default Blog;

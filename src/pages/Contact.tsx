import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="py-12">
      <div className="container max-w-5xl">
        <h1 className="text-3xl text-foreground md:text-4xl">Get in Touch</h1>
        <p className="mt-2 text-muted-foreground font-body">
          Have a question? We'd love to hear from you.
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            {[
              { icon: <Mail size={20} />, label: "Email", value: "hello@serbiastays.com" },
              { icon: <Phone size={20} />, label: "Phone", value: "+381 11 123 4567" },
              { icon: <MapPin size={20} />, label: "Office", value: "Knez Mihailova 30, Belgrade, Serbia" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="flex items-center justify-center rounded-xl bg-secondary p-12">
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">Thank you!</p>
                <p className="mt-1 text-muted-foreground font-body">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default Contact;

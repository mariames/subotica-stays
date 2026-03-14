import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-xl text-foreground">
            Subotica<span className="text-primary">Stays</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Handpicked apartments across Subotica for unforgettable stays.
          </p>
        </div>
        <div>
          {/**
           * 
           *           
           * <h4 className="mb-3 font-body text-sm font-semibold text-foreground">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/apartments" className="hover:text-primary">All Apartments</Link></li>
            <li><Link to="/city/belgrade" className="hover:text-primary">Art Studio</Link></li>
            <li><Link to="/city/novi-sad" className="hover:text-primary">Beer Caffe</Link></li>
          </ul>
           */}
        </div>
        <div>
          {/**
           * 
           *           <h4 className="mb-3 font-body text-sm font-semibold text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
           */}
        </div>
        <div>
          <h4 className="mb-3 font-body text-sm font-semibold text-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@suboticastays.com</li>
            <li>+381653576070</li>
            <li>Subotica, Serbia</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SuboticaStays. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

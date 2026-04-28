import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Airport Guide", path: "/dalaman-airport-car-rental" },
  { label: "Scenic Drives", path: "/scenic-drives-from-oludeniz" },
  { label: "Parking & Fuel", path: "/parking-fuel-guide" },
  { label: "Tips & Insurance", path: "/rental-tips-insurance" },
  { label: "FAQ", path: "/faq" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
];

const Footer = () => (
  <footer className="border-t border-border bg-secondary py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="text-lg font-bold text-primary">Ölüdeniz Car Rental</Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            oludeniz-rent-a-car.com is an independent car rental guide. We may earn a commission when you book through partner links or the booking widget. Final prices, availability, deposits, insurance terms and supplier conditions are provided by the booking partner or rental supplier.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-3">Pages</h4>
          <nav className="flex flex-col gap-2">
            {footerLinks.map(link => (
              <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-3">Contact</h4>
          <a href="mailto:info@oludeniz-rent-a-car.com" className="text-sm text-primary hover:underline">
            info@oludeniz-rent-a-car.com
          </a>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-3">Useful Links</h4>
          <nav className="flex flex-col gap-2">
            <a href="https://dalaman.dhmi.gov.tr" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Dalaman Airport
            </a>
            <a href="https://goturkiye.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Go Türkiye
            </a>
            <a href="https://trafik.gov.tr" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              KGDS Traffic
            </a>
          </nav>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} oludeniz-rent-a-car.com</span>
        <span>Last updated: April 2026</span>
      </div>
    </div>
  </footer>
);

export default Footer;

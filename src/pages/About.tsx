import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import heroAbout from "@/assets/hero-about.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://oludeniz-rent-a-car.com/" },
    { "@type": "ListItem", position: 2, name: "About" },
  ],
};

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Us \u2014 Independent Car Rental Comparison Guide"
        description="About oludeniz-rent-a-car.com \u2014 an independent comparison guide for car rental in \u00d6l\u00fcdeniz, Turkey. Not a rental agency."
        canonical="https://oludeniz-rent-a-car.com/about"
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={heroAbout} alt="Sunset over \u00d6l\u00fcdeniz from Babada\u011f Mountain" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About {"\u00d6"}l{"\u00fc"}deniz Car Rental
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            An independent travel guide helping you compare car rental options
            on Turkey's Lycian Coast.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-4">
            <strong>oludeniz-rent-a-car.com is an independent car rental booking guide</strong> for {"\u00d6"}l{"\u00fc"}deniz and the surrounding Lycian Coast in Mu{"\u011f"}la Province, Turkey. We compare prices, vehicle categories, pickup options and rental conditions from local providers and international booking platforms to help travellers find the right rental for their trip.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            <strong>oludeniz-rent-a-car.com does not own vehicles, operate a rental office, hold deposits, or issue rental contracts.</strong> All bookings, supplier conditions, deposits, insurance terms and final prices are handled by the booking partner or rental supplier shown in the booking widget.
          </p>
        </div>
      </Section>

      <Section alternate>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>

          <p className="text-muted-foreground mb-4">
            We research and compare rental options in the area, including pricing,
            insurance terms (Kasko, CDW, SCDW), airport pickup logistics at Dalaman
            Airport (DLM), and driving routes along the D400 highway. Our content
            covers local agencies and international brands operating in the region.
          </p>

          <p className="text-muted-foreground">
            Whether you are planning to explore Kayak{"\u00f6"}y ghost village, drive the
            scenic coastal road to Ka{"\u015f"} and Kalkan, hike Sakl{"\u0131"}kent Gorge,
            or visit the ancient ruins at Tlos and Xanthos, our goal is to help you
            find the right vehicle at a fair price {"\u2014"} with honest information about
            what to expect on Turkey's southwestern roads.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Affiliate Disclosure</h2>

          <p className="text-muted-foreground mb-4">
            This website contains affiliate links to car rental comparison
            services. When you click through and make a booking, we may earn a
            commission at no additional cost to you. This commission helps us
            maintain and update this guide.
          </p>

          <p className="text-muted-foreground">
            Our recommendations are based on research and are not influenced by
            commission rates. We aim to present accurate, up-to-date information
            about car rental in {"\u00d6"}l{"\u00fc"}deniz and the Lycian Coast, but we
            encourage you to verify details directly with rental providers before
            booking.
          </p>
        </div>
      </Section>

      <Section alternate>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>

          <p className="text-muted-foreground">
            For questions, corrections, or partnership inquiries, email us at{" "}
            <a
              href="mailto:info@oludeniz-rent-a-car.com"
              className="text-primary hover:underline"
            >
              info@oludeniz-rent-a-car.com
            </a>
            .
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default About;

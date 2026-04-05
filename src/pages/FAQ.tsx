import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import heroBlueLagoon from "@/assets/hero-blue-lagoon.webp";

const faqData = [
  {
    question: "Do I actually need to rent a car in \u00d6l\u00fcdeniz?",
    answer: `A car is useful for regional sightseeing in \u00d6l\u00fcdeniz, but a car is not necessary if you only want beach days and short local transfers. The dolmu\u015f between \u00d6l\u00fcdeniz and Fethiye runs about every 10 minutes and costs 25\u201335 TL per passenger, while Blue Lagoon parking can cost 500\u2013650 TL for car entry in peak season. For day trips to Sakl\u0131kent Gorge, Patara Beach, Kayak\u00f6y, Tlos, Pinara, Xanthos, Letoon, Faralya, Kabak Beach, Butterfly Valley (Kelebekler Vadisi), and Gemiler Island, a rental car saves time on the Lycian Coast and the Turquoise Coast.`,
  },
  {
    question: "How far is Dalaman Airport from \u00d6l\u00fcdeniz?",
    answer: `Dalaman Airport (DLM) is 60 km from \u00d6l\u00fcdeniz and the drive usually takes 75\u201390 minutes via the D400 highway or the G\u00f6cek Tunnel route. Rental counters are typically in the airport terminal, and many providers use a meet-and-greet service in the arrivals hall with a name sign for handover. The G\u00f6cek Tunnel toll is 75 TL per vehicle in 2026, while the older mountain road is free but usually adds 15\u201320 minutes.`,
  },
  {
    question: "Can I use a debit card for the rental deposit?",
    answer: `Major international brands usually require an embossed credit card for the preauthorisation deposit, not a debit card. Enterprise, Avis, Europcar, Sixt, Budget, and Garenta commonly block debit-card holds, while local firms such as Cizgi Rent a Car, Babadan Rent a Car, Oscar Rent a Car, Yelken Rent a Car, Marin Rent a Car, Turun\u00e7 Rent a Car, TinyAkropol, Circular Car Hire, and Apple Rent a Car may accept a debit card or cash deposit depending on the branch. Under Turkish rental practice, the deposit is separate from the rental payment, and some local companies still accept cash even though the June 2017 cash-payment rule applies to the rental itself.`,
  },
  {
    question: "Do I need an international driving permit for Turkey?",
    answer: `A standard national driving licence is sufficient for short tourist rentals in Turkey for up to 90 days. Drivers from the EU, UK, US, Canada, Australia, and many other countries are typically accepted, and the minimum rental age is often 19\u201321 depending on the supplier. If you plan to stay and drive in Turkey for more than 90 consecutive days, an International Driving Permit may become necessary, so check the rental policy before you collect the car.`,
  },
  {
    question: "Is a standard car enough or do I need a 4WD/SUV?",
    answer: `A standard economy car is enough for most paved routes around \u00d6l\u00fcdeniz, including the D400 highway, Fethiye, \u00d6l\u00fcdeniz, Ovac\u0131k, Hisar\u00f6n\u00fc, \u00c7al\u0131\u015f Beach, G\u00f6cek, Dalyan, K\u00f6yce\u011fiz, \u00dcz\u00fcml\u00fc, and the road toward Ka\u015f and Kalkan. Common fleet choices in the area include Fiat Egea, Fiat Egea Cross, Fiat Linea, Renault Clio, Renault Symbol, Renault Taliant, Hyundai i20, Hyundai Bayon, Citroen C3, Opel Astra, Skoda Scala, Ford Focus, Kia Picanto, Nissan Qashqai, Dacia Duster, Dacia Lodgy, Volkswagen Passat, Toyota Hilux, and Suzuki Samurai. A 4WD is mainly useful for rougher access roads near Kabak Beach or mountain tracks around Babada\u011f Mountain, and some contracts exclude unpaved-road damage from CDW, SCDW, FDW, or zero excess cover.`,
  },
  {
    question: 'What does "Kasko" mean on my rental contract?',
    answer: `"Kasko" is the Turkish term often used for collision and damage cover, and it is usually linked to CDW, SCDW, or full coverage wording on rental contracts. Standard Kasko normally includes an excess/deductible, also called franchise or muafiyet, while zero excess products remove the driver\u2019s liability for many damage claims. In Turkey, renters may also see Zorunlu Trafik Sigortas\u0131 or ZMSS for mandatory third-party liability, but that policy does not replace rental damage protection for the vehicle itself.`,
  },
  {
    question: "Where can I get fuel near \u00d6l\u00fcdeniz?",
    answer: `There are no fuel stations inside the \u00d6l\u00fcdeniz resort area, so drivers usually refuel in Ovac\u0131k or Fethiye before returning to the beach zone. Ovac\u0131k is about 4\u20135 km away and Fethiye center is about 14 km away, where major brands such as Shell, Opet, and Petrol Ofisi operate on the Mu\u011fla Province road network. As of March 2026, fuel prices were listed at 64.62 TL per litre for petrol and 77.90 TL per litre for diesel, so a full tank is the safest option before a long coastal drive.`,
  },
  {
    question: "What should I watch out for with parking?",
    answer: `Blue Lagoon parking is limited and can fill before 11:00 AM in peak season, so early arrival is the best way to avoid queueing. A common backup is free street parking near the \u00d6l\u00fcdeniz Mosque, followed by a 15-minute walk, while Fethiye market day on Tuesday usually creates heavier traffic in the town center. For Patara Beach, the car park closes at 8:00 PM during nesting-season controls, and drivers who stay after closure can face fines or towing.`,
  },
  {
    question: "How does the G\u00f6cek Tunnel toll work?",
    answer: `The G\u00f6cek Tunnel is a private toll tunnel on the route between Fethiye and Dalaman Airport, and it accepts cash and card payment at the booth. The toll is 75 TL per car in 2026 and applies in both directions, so the total can be 150 TL for a round trip if you use the tunnel both ways. Drivers who prefer to avoid the fee can take the old mountain road, which is about 5.5 km with 44 bends and adds 15\u201320 minutes but provides views toward the Turkish Aegean and the G\u00f6cek coastline.`,
  },
  {
    question: "What are the speed limits and traffic fines?",
    answer: `Turkey\u2019s standard speed limits are 50 km/h in urban areas, 90 km/h on rural roads, and 120 km/h on motorways. In February 2026, Law 7574 was cited as raising several traffic penalties, including 5,000 TL for red-light violations, 2,719 TL for phone use while driving, and 180,000 TL for dangerous driving. Rental agencies normally deduct fines from the security deposit, and many official notices offer a 25% discount if paid within 15 days.`,
  },
  {
    question: "When is the best time to rent a car in \u00d6l\u00fcdeniz?",
    answer: `The best rental window is usually May\u2013June and September\u2013October because weather, road conditions, and parking availability are more favorable. During these shoulder months, routes to \u00d6l\u00fcdeniz, Kayak\u00f6y, Sakl\u0131kent Gorge, Patara Beach, Kalkan, Ka\u015f, and Pamukkale are typically easier to manage than in the mid-July to mid-August peak period. Bayram holidays, including Kurban Bayram\u0131, often raise domestic travel demand and can push up prices and traffic, so booking earlier is usually safer.`,
  },
];

const FAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://oludeniz-rent-a-car.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://oludeniz-rent-a-car.com/faq",
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Car Rental FAQ \u2014 11 Questions Answered (2026)"
        description="Answers to the most common questions about renting a car in \u00d6l\u00fcdeniz. Airport transfers, insurance, fuel, parking, tolls, speed limits, and seasonal tips."
        canonical="https://oludeniz-rent-a-car.com/faq"
        jsonLd={[breadcrumbSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={heroBlueLagoon} alt="Aerial view of the Blue Lagoon turquoise water in \u00d6l\u00fcdeniz" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {"\u00d6"}l{"\u00fc"}deniz Car Rental FAQ {"\u2014"} Your Questions Answered
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            This FAQ covers the most common questions about renting a car in
            {"\u00d6"}l{"\u00fc"}deniz, from Dalaman Airport transfers and insurance terms to
            fuel stations, parking, and the G{"\u00f6"}cek Tunnel toll.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
      </div>

      {/* Intro */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            {"\u00d6"}l{"\u00fc"}deniz sits on Turkey's southwestern Lycian Coast in{" "}
            <strong>Mu{"\u011f"}la Province</strong>, known for its Blue Lagoon, paragliding
            from <strong>Babada{"\u011f"} Mountain</strong>, and easy access to ancient Lycian
            ruins. The rental market includes international brands such as{" "}
            <strong>Avis</strong>, <strong>Europcar</strong>, <strong>Sixt</strong>,{" "}
            <strong>Budget</strong>, and <strong>Garenta</strong>, alongside local operators
            like <strong>Cizgi Rent a Car</strong>, <strong>Babadan Rent a Car</strong>,{" "}
            <strong>Oscar Rent a Car</strong>, <strong>Yelken Rent a Car</strong>, and{" "}
            <strong>Marin Rent a Car</strong>.
          </p>
        </div>
      </Section>

      {/* Getting Started */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Getting Started</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-0">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Do I actually need to rent a car in {"\u00d6"}l{"\u00fc"}deniz?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  A car is useful for regional sightseeing in {"\u00d6"}l{"\u00fc"}deniz, but
                  a car is not necessary if you only want beach days and short local
                  transfers. The dolmu{"\u015f"} between {"\u00d6"}l{"\u00fc"}deniz and Fethiye
                  runs about every 10 minutes and costs{" "}
                  <strong>25{"\u2013"}35 TL</strong> per passenger, while Blue Lagoon parking
                  can cost <strong>500{"\u2013"}650 TL</strong> for car entry in peak season.
                  For day trips to <strong>Sakl{"\u0131"}kent Gorge</strong>,{" "}
                  <strong>Patara Beach</strong>, <strong>Kayak{"\u00f6"}y</strong>,{" "}
                  <strong>Tlos</strong>, <strong>Pinara</strong>, <strong>Xanthos</strong>,{" "}
                  <strong>Letoon</strong>, <strong>Faralya</strong>,{" "}
                  <strong>Kabak Beach</strong>,{" "}
                  <strong>Butterfly Valley (Kelebekler Vadisi)</strong>, and{" "}
                  <strong>Gemiler Island</strong>, a rental car saves time on the Lycian Coast
                  and the Turquoise Coast. See our <Link to="/scenic-drives-from-oludeniz" className="text-primary underline hover:text-accent">scenic drives and day trips guide</Link> for detailed routes.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How far is Dalaman Airport from {"\u00d6"}l{"\u00fc"}deniz?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Dalaman Airport (DLM)</strong> is 60 km from {"\u00d6"}l{"\u00fc"}deniz
                  and the drive usually takes <strong>75{"\u2013"}90 minutes</strong> via the
                  D400 highway or the G{"\u00f6"}cek Tunnel route. Rental counters are
                  typically in the airport terminal, and many providers use a meet-and-greet
                  service in the arrivals hall with a name sign for handover. The G{"\u00f6"}cek
                  Tunnel toll is <strong>75 TL</strong> per vehicle in 2026, while the older
                  mountain road is free but usually adds 15{"\u2013"}20 minutes. For the full pickup process, see our <Link to="/dalaman-airport-car-rental" className="text-primary underline hover:text-accent">Dalaman Airport car rental guide</Link>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-best-time">
              <AccordionTrigger className="text-left text-lg font-semibold">
                When is the best time to rent a car in {"\u00d6"}l{"\u00fc"}deniz?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  The best rental window is usually <strong>May{"\u2013"}June</strong> and{" "}
                  <strong>September{"\u2013"}October</strong> because weather, road conditions,
                  and parking availability are more favorable. During these shoulder months,
                  routes to {"\u00d6"}l{"\u00fc"}deniz, Kayak{"\u00f6"}y, Sakl{"\u0131"}kent
                  Gorge, Patara Beach, Kalkan, Ka{"\u015f"}, and Pamukkale are typically
                  easier to manage than in the mid-July to mid-August peak period.{" "}
                  <strong>Bayram</strong> holidays, including Kurban Bayram{"\u0131"}, often
                  raise domestic travel demand and can push up prices and traffic, so booking
                  earlier is usually safer.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* License & Insurance */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">License, Deposits &amp; Insurance</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-debit">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Can I use a debit card for the rental deposit?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Major international brands usually require an embossed credit card for the
                  preauthorisation deposit, not a debit card. <strong>Enterprise</strong>,{" "}
                  <strong>Avis</strong>, <strong>Europcar</strong>, <strong>Sixt</strong>,{" "}
                  <strong>Budget</strong>, and <strong>Garenta</strong> commonly block
                  debit-card holds, while local firms such as{" "}
                  <strong>Cizgi Rent a Car</strong>,{" "}
                  <strong>Babadan Rent a Car</strong>,{" "}
                  <strong>Oscar Rent a Car</strong>,{" "}
                  <strong>Yelken Rent a Car</strong>,{" "}
                  <strong>Marin Rent a Car</strong>,{" "}
                  <strong>Turun{"\u00e7"} Rent a Car</strong>,{" "}
                  <strong>TinyAkropol</strong>,{" "}
                  <strong>Circular Car Hire</strong>, and{" "}
                  <strong>Apple Rent a Car</strong> may accept a debit card or cash deposit
                  depending on the branch. Under Turkish rental practice, the deposit is
                  separate from the rental payment, and some local companies still accept
                  cash even though the June 2017 cash-payment rule applies to the rental
                  itself.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-idp">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Do I need an international driving permit for Turkey?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  A standard national driving licence is sufficient for short tourist rentals
                  in Turkey for up to <strong>90 days</strong>. Drivers from the EU, UK, US,
                  Canada, Australia, and many other countries are typically accepted, and the
                  minimum rental age is often <strong>19{"\u2013"}21</strong> depending on the
                  supplier. If you plan to stay and drive in Turkey for more than 90
                  consecutive days, an International Driving Permit may become necessary, so
                  check the rental policy before you collect the car.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-kasko">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What does "Kasko" mean on my rental contract?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  "<strong>Kasko</strong>" is the Turkish term often used for collision and
                  damage cover, and it is usually linked to CDW, SCDW, or full coverage
                  wording on rental contracts. Standard Kasko normally includes an
                  excess/deductible, also called <strong>franchise</strong> or{" "}
                  <strong>muafiyet</strong>, while zero excess products remove the driver's
                  liability for many damage claims. In Turkey, renters may also see{" "}
                  <strong>Zorunlu Trafik Sigortas{"\u0131"}</strong> or{" "}
                  <strong>ZMSS</strong> for mandatory third-party liability, but that policy
                  does not replace rental damage protection for the vehicle itself.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Vehicle & Roads */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Vehicle, Roads &amp; Fuel</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-vehicle">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Is a standard car enough or do I need a 4WD/SUV?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A standard economy car is enough for most paved routes around{" "}
                  {"\u00d6"}l{"\u00fc"}deniz, including the D400 highway, Fethiye,{" "}
                  {"\u00d6"}l{"\u00fc"}deniz, Ovac{"\u0131"}k, Hisar{"\u00f6"}n{"\u00fc"},{" "}
                  {"\u00c7"}al{"\u0131"}{"\u015f"} Beach, G{"\u00f6"}cek, Dalyan,{" "}
                  K{"\u00f6"}yce{"\u011f"}iz, {"\u00dc"}z{"\u00fc"}ml{"\u00fc"}, and the road
                  toward Ka{"\u015f"} and Kalkan.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Common fleet choices in the area include{" "}
                  <strong>Fiat Egea</strong>, <strong>Fiat Egea Cross</strong>,{" "}
                  <strong>Fiat Linea</strong>, <strong>Renault Clio</strong>,{" "}
                  <strong>Renault Symbol</strong>, <strong>Renault Taliant</strong>,{" "}
                  <strong>Hyundai i20</strong>, <strong>Hyundai Bayon</strong>,{" "}
                  <strong>Citroen C3</strong>, <strong>Opel Astra</strong>,{" "}
                  <strong>Skoda Scala</strong>, <strong>Ford Focus</strong>,{" "}
                  <strong>Kia Picanto</strong>, <strong>Nissan Qashqai</strong>,{" "}
                  <strong>Dacia Duster</strong>, <strong>Dacia Lodgy</strong>,{" "}
                  <strong>Volkswagen Passat</strong>, <strong>Toyota Hilux</strong>, and{" "}
                  <strong>Suzuki Samurai</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A 4WD is mainly useful for rougher access roads near{" "}
                  <strong>Kabak Beach</strong> or mountain tracks around{" "}
                  <strong>Babada{"\u011f"} Mountain</strong>, and some contracts exclude
                  unpaved-road damage from CDW, SCDW, FDW, or zero excess cover.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-fuel">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Where can I get fuel near {"\u00d6"}l{"\u00fc"}deniz?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  There are no fuel stations inside the {"\u00d6"}l{"\u00fc"}deniz resort
                  area, so drivers usually refuel in <strong>Ovac{"\u0131"}k</strong> or{" "}
                  <strong>Fethiye</strong> before returning to the beach zone. Ovac{"\u0131"}k
                  is about 4{"\u2013"}5 km away and Fethiye center is about 14 km away, where
                  major brands such as <strong>Shell</strong>, <strong>Opet</strong>, and{" "}
                  <strong>Petrol Ofisi</strong> operate on the Mu{"\u011f"}la Province road
                  network. As of March 2026, fuel prices were listed at{" "}
                  <strong>64.62 TL per litre</strong> for petrol and{" "}
                  <strong>77.90 TL per litre</strong> for diesel, so a full tank is the
                  safest option before a long coastal drive.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-tunnel">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How does the G{"\u00f6"}cek Tunnel toll work?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  The <strong>G{"\u00f6"}cek Tunnel</strong> is a private toll tunnel on the
                  route between Fethiye and Dalaman Airport, and it accepts cash and card
                  payment at the booth. The toll is <strong>75 TL</strong> per car in 2026 and
                  applies in both directions, so the total can be{" "}
                  <strong>150 TL</strong> for a round trip if you use the tunnel both ways.
                  Drivers who prefer to avoid the fee can take the old mountain road, which
                  is about 5.5 km with 44 bends and adds 15{"\u2013"}20 minutes but provides
                  views toward the Turkish Aegean and the G{"\u00f6"}cek coastline.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Parking & Traffic */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Parking &amp; Traffic</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-parking">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What should I watch out for with parking?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Blue Lagoon parking</strong> is limited and can fill before 11:00 AM
                  in peak season, so early arrival is the best way to avoid queueing. A
                  common backup is free street parking near the{" "}
                  <strong>{"\u00d6"}l{"\u00fc"}deniz Mosque</strong>, followed by a 15-minute
                  walk, while Fethiye market day on Tuesday usually creates heavier traffic in
                  the town center. For <strong>Patara Beach</strong>, the car park closes at
                  8:00 PM during nesting-season controls, and drivers who stay after closure
                  can face fines or towing. For lot-by-lot details, see our <Link to="/parking-fuel-guide" className="text-primary underline hover:text-accent">parking and fuel guide</Link>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-fines">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What are the speed limits and traffic fines?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">
                  Turkey's standard speed limits are <strong>50 km/h</strong> in urban areas,{" "}
                  <strong>90 km/h</strong> on rural roads, and <strong>120 km/h</strong> on
                  motorways. In February 2026, <strong>Law 7574</strong> was cited as raising
                  several traffic penalties, including <strong>5,000 TL</strong> for
                  red-light violations, <strong>2,719 TL</strong> for phone use while driving,
                  and <strong>180,000 TL</strong> for dangerous driving. Rental agencies
                  normally deduct fines from the security deposit, and many official notices
                  offer a <strong>25% discount</strong> if paid within 15 days.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* CTA */}
      <Section alt>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Compare Car Rental Deals in {"\u00d6"}l{"\u00fc"}deniz?
          </h2>
          <p className="text-gray-700 mb-6">
            Compare prices from local and international providers. Enter your dates
            to see what's available for your trip to the Lycian Coast.
          </p>
          <Link
            to="/#compare"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            Compare Rental Deals
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default FAQ;

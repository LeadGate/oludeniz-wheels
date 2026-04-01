import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import AffiliateWidget from "@/components/AffiliateWidget";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Car, Shield, DollarSign, MapPin, Plane, Building2, HelpCircle } from "lucide-react";
import heroOludenizLagoon from "@/assets/hero-oludeniz-lagoon.webp";
import sectionLycianCoast from "@/assets/section-lycian-coast.webp";
import sectionDayTrips from "@/assets/section-day-trips.webp";

const faqData = [
  {
    question: "Do I need a car in Ölüdeniz?",
    answer: "Yes, a car is the most flexible option for exploring beyond the beach area. A rental vehicle makes it practical to reach Kayaköy, Saklıkent Gorge, Patara Beach, Kaş, and Pamukkale in one trip pattern, and daily rates can start around €12/day for an economy manual like a Fiat Egea. The main exception is if you plan to stay only on Ölüdeniz Beach and use dolmuş or taxis for every transfer, in which case a car may be unnecessary."
  },
  {
    question: "Can I pick up a car at Dalaman Airport?",
    answer: "Yes, Dalaman Airport (DLM) has airport pickup options through major brands and local meet-and-greet operators. The airport process usually involves a terminal pickup, an arrivals hall meeting point, or a rental counter handover, and the drive to Ölüdeniz is about 60 km. The caveat is that some local companies require you to confirm flight details and WhatsApp contact numbers in advance."
  },
  {
    question: "What insurance should I choose for a rental car in Ölüdeniz?",
    answer: "Choose at least CDW and compare whether the quote includes SCDW, FDW, zero excess, or a reduced franchise/excess/deductible. In Turkey, the mandatory liability layer is typically Zorunlu Trafik Sigortası (ZMSS), and many agencies sell Kasko or \"full coverage\" as an upgrade. The exception is that some policies exclude tires, glass, mirrors, or underbody damage unless those items are written into the contract."
  },
  {
    question: "Are automatic cars easy to find in Ölüdeniz?",
    answer: "Automatic cars are available, but they are less common than manual vehicles and often sell out first. Models such as Hyundai i20, Renault Taliant, Citroen C3, Dacia Duster, and Nissan Qashqai are useful examples to search for, and summer bookings should be made several weeks ahead. The caveat is that a lower daily rate may come with a higher deposit or a larger deductible if you do not add SCDW."
  },
  {
    question: "Which local companies are worth comparing?",
    answer: "Local comparison is most useful when you check the daily price, deposit, pickup method, and insurance wording side by side. Agencies such as Fethiye Lovers, Dalaman Car Hire, Oscar Rent a Car, Yelken Rent a Car, Marin Rent a Car, and Turunç Rent a Car are commonly referenced in the Ölüdeniz market, while Garenta, Sixt, Enterprise, Avis, Europcar, Cizgi Rent a Car, Babadan Rent a Car, Localrent, Budget, TinyAkropol, Circular Car Hire, and Apple Rent a Car can help widen the quote pool. The exception is that the cheapest quote may still have a large franchise or limited cover, so the total contract value matters more than the headline rate."
  }
];

const Index = () => {
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ölüdeniz Car Rental",
    url: "https://oludeniz-rent-a-car.com/",
    description: "Compare car rental in Ölüdeniz, Turkey. Economy from €12/day. Local agencies, Dalaman Airport pickup, insurance tips, and day trip distances for the Lycian Coast.",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ölüdeniz Car Rental",
    url: "https://oludeniz-rent-a-car.com/",
    description: "Car rental comparison guide for Ölüdeniz, Fethiye, and the Lycian Coast, Turkey",
    areaServed: {
      "@type": "Place",
      name: "Ölüdeniz, Muğla Province, Turkey",
    },
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
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Rent a Car in Ölüdeniz — Compare Deals from €12/Day"
        description="Compare car rental in Ölüdeniz, Turkey. Economy from €12/day. Local agencies, Dalaman Airport pickup, insurance tips, and day trip routes."
        canonical="https://oludeniz-rent-a-car.com/"
      />
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Hero Section */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={heroOludenizLagoon} alt="Aerial view of Ölüdeniz Blue Lagoon and turquoise coastline" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rent a Car in &Ouml;l&uuml;deniz &mdash; Compare Local Deals from &euro;12/Day</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
            Finding an <strong>&ouml;l&uuml;deniz rent a car</strong> deal is the fastest way to reach the Lycian Coast, the Turquoise Coast, and day-trip roads on the D400 highway from a base in &Ouml;l&uuml;deniz, Fethiye, or Ovac&#x131;k. Local brokers and agencies such as <strong>Fethiye Lovers</strong>, <strong>Dalaman Car Hire</strong>, <strong>Oscar Rent a Car</strong>, <strong>Yelken Rent a Car</strong>, <strong>Marin Rent a Car</strong>, <strong>Turun&ccedil; Rent a Car</strong>, <strong>TinyAkropol</strong>, <strong>Circular Car Hire</strong>, <strong>Apple Rent a Car</strong>, <strong>Garenta</strong>, <strong>Sixt</strong>, <strong>Enterprise</strong>, <strong>Avis</strong>, <strong>Europcar</strong>, <strong>Cizgi Rent a Car</strong>, <strong>Babadan Rent a Car</strong>, <strong>Localrent</strong>, and <strong>Budget</strong> are commonly quoted in the area, with sample economy pricing around <strong>&euro;12&ndash;&euro;18/day</strong> for a <strong>Fiat Egea</strong> or <strong>Renault Clio</strong> and airport pickup often arranged at <strong>Dalaman Airport (DLM)</strong>. For many visitors, a car also makes it practical to reach <strong>Kayak&ouml;y, Sakl&#x131;kent Gorge, Patara Beach, Butterfly Valley (Kelebekler Vadisi), Kabak Beach, Faralya, Gemiler Island, Tlos, Pinara, Xanthos, Letoon, &Ccedil;al&#x131;&#x15F; Beach, G&ouml;cek, Dalyan, K&ouml;yce&#x11F;iz, &Uuml;z&uuml;ml&uuml;, Babada&#x11F; Mountain, and Blue Lagoon</strong> without relying on dolmu&#x15F; schedules.
          </p>
          <a href="#compare" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Compare Car Rental Deals
          </a>
        </div>
      </section>

      {/* Affiliate Widget */}
      <div id="compare">
        <AffiliateWidget />
      </div>

      {/* Why Rent a Car */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Car className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Why Rent a Car in &Ouml;l&uuml;deniz?</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            &Ouml;l&uuml;deniz is best known for the <strong>Blue Lagoon</strong>, <strong>Babada&#x11F;</strong>, and beach access, but the resort core has narrow streets, limited parking, and busy summer traffic. In peak months such as July and August, public parking around the beach can cost roughly <strong>500&ndash;650 TL per day</strong>, so a rental car is often cheaper than repeated taxi transfers if you plan more than one day trip. A car also gives you direct access to the <strong>Lycian Coast</strong> and the <strong>Turkish Aegean</strong> countryside, including mountain roads toward <strong>Faralya</strong>, <strong>Kabak Beach</strong>, and <strong>&Uuml;z&uuml;ml&uuml;</strong>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A practical example is the route structure around &Ouml;l&uuml;deniz: <strong>Kayak&ouml;y</strong> is about <strong>10 km</strong> away, <strong>Sakl&#x131;kent Gorge</strong> is roughly <strong>50 km</strong>, and <strong>Patara Beach</strong> is around <strong>70 km</strong> from the resort. That means a single rental vehicle can cover beach time, ruins, and mountain viewpoints in one day without waiting for multiple buses. For travelers staying in <strong>Ovac&#x131;k</strong> or <strong>Hisar&ouml;n&uuml;</strong>, the driving pattern is even easier because both areas sit slightly inland with better parking and faster access to the <strong>D400 highway</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Local transport still has a role. The dolmu&#x15F; between <strong>Fethiye</strong> and <strong>&Ouml;l&uuml;deniz</strong> is useful for short transfers, but the same minibus network does not reliably serve remote trailheads, the <strong>Butterfly Valley</strong> landing area, or the boat points used for <strong>Gemiler Island</strong>. For a multi-stop itinerary that includes <strong>Tlos</strong>, <strong>Pinara</strong>, <strong>Xanthos</strong>, or <strong>Letoon</strong>, a car gives you a fixed schedule and a usable trunk for water shoes, beach gear, and groceries.
          </p>
        </div>
      </Section>

      {/* Prices and Car Classes */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">&Ouml;l&uuml;deniz Car Rental Prices and Car Classes</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The 2026 pricing picture in &Ouml;l&uuml;deniz depends on transmission, season, and insurance level. For a standard quote, many local providers show <strong>Fiat Egea</strong> or <strong>Renault Clio</strong> at about <strong>&euro;12&ndash;&euro;18/day</strong>, while compact automatics such as <strong>Hyundai i20</strong> or <strong>Citroen C3</strong> often price closer to <strong>&euro;20&ndash;&euro;30/day</strong> in summer. Larger models like <strong>Dacia Duster</strong>, <strong>Nissan Qashqai</strong>, <strong>Ford Focus</strong>, or <strong>Volkswagen Passat</strong> cost more because they are limited in supply and are often booked first.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Car Class</th>
                  <th className="p-3 text-left">Example Models</th>
                  <th className="p-3 text-right">Typical Daily Rate</th>
                  <th className="p-3 text-left">Best For</th>
                  <th className="p-3 text-left">Common Insurance Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 font-semibold border-b">Economy manual</td>
                  <td className="p-3 border-b">Fiat Egea, Renault Clio, Fiat Linea</td>
                  <td className="p-3 border-b text-right">&euro;12&ndash;&euro;18/day</td>
                  <td className="p-3 border-b">Couples, short stays</td>
                  <td className="p-3 border-b">Usually includes CDW with a deductible/franchise</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 font-semibold border-b">Compact automatic</td>
                  <td className="p-3 border-b">Hyundai i20, Renault Taliant, Citroen C3</td>
                  <td className="p-3 border-b text-right">&euro;20&ndash;&euro;30/day</td>
                  <td className="p-3 border-b">First-time drivers, easier hill starts</td>
                  <td className="p-3 border-b">Ask if SCDW or zero excess is available</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold border-b">Small SUV</td>
                  <td className="p-3 border-b">Dacia Duster, Hyundai Bayon, Skoda Scala, Opel Astra</td>
                  <td className="p-3 border-b text-right">&euro;28&ndash;&euro;45/day</td>
                  <td className="p-3 border-b">Rougher access roads, luggage</td>
                  <td className="p-3 border-b">Check for full coverage or Kasko wording</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 font-semibold border-b">7-seater / family</td>
                  <td className="p-3 border-b">Dacia Lodgy, Toyota Hilux</td>
                  <td className="p-3 border-b text-right">&euro;40&ndash;&euro;70/day</td>
                  <td className="p-3 border-b">Families, groups</td>
                  <td className="p-3 border-b">Higher deposit and higher excess are common</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold border-b">Premium / business</td>
                  <td className="p-3 border-b">Volkswagen Passat, Opel Insignia</td>
                  <td className="p-3 border-b text-right">&euro;50+/day</td>
                  <td className="p-3 border-b">Comfort, longer drives</td>
                  <td className="p-3 border-b">Confirm whether FDW is truly included</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 mb-4 leading-relaxed">
            The local fleet in Mu&#x11F;la Province is still heavily manual, and many manual cars are diesel. That means an automatic <strong>Renault Symbol</strong> or <strong>Renault Taliant</strong> may disappear from inventory weeks earlier than a manual <strong>Fiat Egea Cross</strong> or <strong>Hyundai i20</strong>. If you need an automatic, book early and compare the stated <strong>excess/deductible</strong> because a cheaper daily rate can hide a larger deductible at pickup.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A useful rule for comparison is this: a quote with <strong>CDW</strong> and a <strong>&euro;500 franchise</strong> is not the same as a quote with <strong>SCDW</strong> and <strong>zero excess</strong>. The first quote may be cheaper upfront, but the second quote reduces your financial exposure if you damage the car. Always confirm whether the rental desk requires a <strong>preauthorisation</strong> on your card and whether the blocked amount changes for premium vehicles.
          </p>
        </div>
      </Section>

      {/* Dalaman Airport */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Dalaman Airport to &Ouml;l&uuml;deniz: Pickup, Route, and Insurance</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Dalaman Airport (DLM)</strong> is the main gateway for &Ouml;l&uuml;deniz, and the drive to the resort is usually <strong>60 km</strong> and about <strong>75&ndash;90 minutes</strong> on the <strong>D400 highway</strong>. The route is scenic, especially once you leave the airport zone and start climbing past the coastal hills toward the <strong>Turkish Aegean</strong> side roads. For most arrivals, a direct airport pickup is the simplest option because it removes the need for a separate taxi or shuttle.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At <strong>Dalaman Airport</strong>, the main international brands such as <strong>Sixt</strong>, <strong>Enterprise</strong>, <strong>Avis</strong>, <strong>Europcar</strong>, and <strong>Budget</strong> normally operate from the <strong>terminal</strong> area or from a nearby <strong>rental counter</strong> arrangement. Many local companies, including <strong>Dalaman Car Hire</strong>, <strong>Marin Rent a Car</strong>, <strong>Yelken Rent a Car</strong>, <strong>Fethiye Lovers</strong>, <strong>Cizgi Rent a Car</strong>, <strong>Babadan Rent a Car</strong>, and <strong>Localrent</strong> partners, use <strong>meet-and-greet</strong> service instead: a staff member waits in the <strong>arrivals hall</strong> with a <strong>name sign</strong> and escorts you to the car park.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            For paperwork, expect a security <strong>preauthorisation</strong> or deposit block on a credit card. Typical blocks are about <strong>&euro;120</strong> for economy cars, <strong>&euro;150</strong> for intermediate cars, <strong>&euro;200</strong> for full-size cars, and <strong>&euro;250</strong> for premium cars, although some agencies increase the block for a <strong>Volkswagen Passat</strong> or <strong>Toyota Hilux</strong>. The standard liability layer is usually <strong>Zorunlu Trafik Sigortas&#x131; (ZMSS)</strong>, which covers <strong>third-party liability</strong>, while collision protection may be sold as <strong>CDW</strong>, <strong>SCDW</strong>, <strong>FDW</strong>, <strong>Kasko</strong>, or a &ldquo;full coverage&rdquo; package.
          </p>
          <WarningBox>
            <p className="text-gray-700">
              &ldquo;Full coverage&rdquo; does not always mean <strong>zero excess</strong>. Some offers still keep a small <strong>muafiyet</strong> or deductible for tires, glass, mirrors, or undercarriage damage. If your route includes rougher roads toward <strong>Faralya</strong>, <strong>Kabak Beach</strong>, or the higher road to <strong>Babada&#x11F; Mountain</strong>, ask for written confirmation of which parts are included in the cover.
            </p>
          </WarningBox>
          <p className="text-gray-700 mt-4 leading-relaxed">
            If you want to avoid the tunnel toll, there is also a free mountain alternative to the <strong>G&ouml;cek Tunnel</strong> on the airport corridor. That road adds time but gives access to wider views over <strong>G&ouml;cek</strong>, <strong>Dalyan</strong>, and the surrounding Mu&#x11F;la Province landscape. For the full airport pickup guide, see <Link to="/dalaman-airport-car-rental" className="text-primary underline hover:text-primary/80">Dalaman Airport Car Rental &mdash; Pickup Guide</Link>.
          </p>
        </div>
      </Section>

      {/* Image Section — Lycian Coast */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={sectionLycianCoast} alt="Scenic coastal road along the Lycian Coast near Ölüdeniz" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore the Lycian Coast by Car</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">From Patara Beach to Saklıkent Gorge — discover Turkey's Turquoise Coast at your own pace</p>
        </div>
      </section>

      {/* Local Companies */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Local Rental Companies in and Around &Ouml;l&uuml;deniz</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The &Ouml;l&uuml;deniz area contains both international desks and strong local operators, and the best choice depends on whether you value brand recognition, hotel delivery, or flexible pricing. Local companies often win on response speed and delivery options, while global brands may be easier for travelers who want a standardized counter process at the airport.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">Typical Advantage</th>
                  <th className="p-3 text-left">Service Detail</th>
                  <th className="p-3 text-left">E-E-A-T Signal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 font-semibold border-b">Fethiye Lovers</td>
                  <td className="p-3 border-b">Local reputation</td>
                  <td className="p-3 border-b">Often cited by repeat visitors for service in Fethiye and &Ouml;l&uuml;deniz</td>
                  <td className="p-3 border-b">Long-running local presence</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 font-semibold border-b">Dalaman Car Hire</td>
                  <td className="p-3 border-b">Broad coverage</td>
                  <td className="p-3 border-b">One-way rentals and airport delivery in Mu&#x11F;la Province</td>
                  <td className="p-3 border-b">20 years of regional experience</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold border-b">Oscar Rent a Car</td>
                  <td className="p-3 border-b">National network</td>
                  <td className="p-3 border-b">Office access near central Fethiye streets</td>
                  <td className="p-3 border-b">Established Turkish brand</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 font-semibold border-b">Yelken Rent a Car</td>
                  <td className="p-3 border-b">Fresh fleet focus</td>
                  <td className="p-3 border-b">Newer vehicles and price matching on some dates</td>
                  <td className="p-3 border-b">15+ years in the market</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold border-b">Marin Rent a Car</td>
                  <td className="p-3 border-b">Airport convenience</td>
                  <td className="p-3 border-b">Free Dalaman Airport delivery and toll-pass support</td>
                  <td className="p-3 border-b">Local airport logistics</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 font-semibold border-b">Turun&ccedil; Rent a Car</td>
                  <td className="p-3 border-b">Workshop support</td>
                  <td className="p-3 border-b">Fleet maintenance partnership with Euromaster</td>
                  <td className="p-3 border-b">Physical office in Fethiye</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold border-b">Garenta, Sixt, Enterprise, Avis, Europcar, Cizgi Rent a Car, Babadan Rent a Car, Budget</td>
                  <td className="p-3 border-b">Brand familiarity</td>
                  <td className="p-3 border-b">Counter service and standardized rental policy</td>
                  <td className="p-3 border-b">Airport presence and corporate policies</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 font-semibold border-b">Localrent, TinyAkropol, Circular Car Hire, Apple Rent a Car</td>
                  <td className="p-3 border-b">Broker or local supply</td>
                  <td className="p-3 border-b">Wider quote comparison and local inventory access</td>
                  <td className="p-3 border-b">Useful for rate comparisons</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 mb-4 leading-relaxed">
            A good comparison criterion is not just the company name but the exact value chain: <strong>daily rate</strong>, <strong>deposit</strong>, <strong>insurance wording</strong>, <strong>pickup method</strong>, and <strong>fuel policy</strong>. For example, one agency may quote <strong>&euro;15/day</strong> for a <strong>Fiat Egea</strong> with <strong>CDW</strong> but a <strong>&euro;500 franchise</strong>, while another may quote <strong>&euro;20/day</strong> with <strong>SCDW</strong> and a lower block on the card. That difference is more important than a generic &ldquo;best price&rdquo; label.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Many local firms also support hotel or villa delivery to <strong>&Ouml;l&uuml;deniz</strong>, <strong>Hisar&ouml;n&uuml;</strong>, <strong>Ovac&#x131;k</strong>, <strong>Fethiye</strong>, and <strong>&Ccedil;al&#x131;&#x15F; Beach</strong>. If you are staying in a villa near <strong>Babada&#x11F; Mountain</strong> or in the upper road zone toward <strong>Faralya</strong>, confirm whether delivery is included or whether a small transfer fee applies.
          </p>
        </div>
      </Section>

      {/* Day Trips */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Best Day Trips from &Ouml;l&uuml;deniz by Car</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A rental car turns &Ouml;l&uuml;deniz into a simple base for archaeology, beaches, and mountain scenery. The table below uses approximate 2026 drive times from central <strong>&Ouml;l&uuml;deniz</strong> or <strong>Ovac&#x131;k</strong>, so you can judge which places fit a half-day or full-day plan.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Destination</th>
                  <th className="p-3 text-left">Distance / Drive Time</th>
                  <th className="p-3 text-left">Why Go</th>
                  <th className="p-3 text-left">Useful 2026 Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border-b">Kayak&ouml;y</td>
                  <td className="p-3 border-b">10 km / 15 min</td>
                  <td className="p-3 border-b">Abandoned stone houses and churches</td>
                  <td className="p-3 border-b">Entry to the main ruins is about 100 TL</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Sakl&#x131;kent Gorge</td>
                  <td className="p-3 border-b">50 km / 1 hr</td>
                  <td className="p-3 border-b">Canyon walk and cool water</td>
                  <td className="p-3 border-b">Arrive before 10:30 to miss bus traffic</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Patara Beach</td>
                  <td className="p-3 border-b">70 km / 1 hr</td>
                  <td className="p-3 border-b">Long beach and ancient ruins</td>
                  <td className="p-3 border-b">Site closes around 8 PM for turtle protection</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Ka&#x15F;</td>
                  <td className="p-3 border-b">110 km / 2 hr</td>
                  <td className="p-3 border-b">Harbour town with restaurants and diving</td>
                  <td className="p-3 border-b">Good for a long lunch and return drive</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Pamukkale</td>
                  <td className="p-3 border-b">220 km / 2 hr 45 min</td>
                  <td className="p-3 border-b">UNESCO terraces and Hierapolis</td>
                  <td className="p-3 border-b">Better as a long day trip or overnight</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Gemiler Island</td>
                  <td className="p-3 border-b">15 km / 25 min</td>
                  <td className="p-3 border-b">Boat launch near Kayak&ouml;y</td>
                  <td className="p-3 border-b">Parking is limited near the launch</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Tlos</td>
                  <td className="p-3 border-b">80 km / 1 hr 20 min</td>
                  <td className="p-3 border-b">Ancient city and mountain views</td>
                  <td className="p-3 border-b">Fits with Sakl&#x131;kent on the same route</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Pinara</td>
                  <td className="p-3 border-b">90 km / 1 hr 30 min</td>
                  <td className="p-3 border-b">Ruins in a forested setting</td>
                  <td className="p-3 border-b">Road quality is acceptable for standard cars</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Xanthos and Letoon</td>
                  <td className="p-3 border-b">95&ndash;105 km / 1 hr 40 min</td>
                  <td className="p-3 border-b">Major Lycian sites</td>
                  <td className="p-3 border-b">UNESCO-linked archaeology and easy parking</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Butterfly Valley (Kelebekler Vadisi)</td>
                  <td className="p-3 border-b">30 km / 45 min</td>
                  <td className="p-3 border-b">Coastal view and boat access</td>
                  <td className="p-3 border-b">Drive to the viewpoint, not the beach floor</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">K&#x131;drak Beach</td>
                  <td className="p-3 border-b">8 km / 15 min</td>
                  <td className="p-3 border-b">Quieter beach than Blue Lagoon</td>
                  <td className="p-3 border-b">Small parking area can fill in summer</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">G&ouml;cek</td>
                  <td className="p-3 border-b">35 km / 45 min</td>
                  <td className="p-3 border-b">Marina town and coves</td>
                  <td className="p-3 border-b">Good stop on the D400 highway</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Dalyan and K&ouml;yce&#x11F;iz</td>
                  <td className="p-3 border-b">95&ndash;110 km / 1 hr 30 min</td>
                  <td className="p-3 border-b">River scenery and lakes</td>
                  <td className="p-3 border-b">Best for a full-day loop</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Faralya and Kabak Beach</td>
                  <td className="p-3 border-b">25&ndash;30 km / 45&ndash;60 min</td>
                  <td className="p-3 border-b">Clifftop views and nature</td>
                  <td className="p-3 border-b">Steep roads require careful driving</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">&Uuml;z&uuml;ml&uuml;</td>
                  <td className="p-3 border-b">45 km / 55 min</td>
                  <td className="p-3 border-b">Village atmosphere and lunch stop</td>
                  <td className="p-3 border-b">Less crowded than coastal stops</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            If your goal is pure beach time, <strong>&Ccedil;al&#x131;&#x15F; Beach</strong> can work as a calmer seaside base for a half-day detour, while <strong>Blue Lagoon</strong> remains the iconic &Ouml;l&uuml;deniz stop. If your goal is ancient history, combine <strong>Tlos</strong>, <strong>Pinara</strong>, <strong>Xanthos</strong>, and <strong>Letoon</strong> into one route so you make efficient use of fuel and time. If your goal is scenery, the coastal road toward <strong>Faralya</strong>, <strong>Kabak Beach</strong>, and the <strong>Butterfly Valley</strong> viewpoint gives some of the best cliff-and-sea photography in Mu&#x11F;la Province.
          </p>
        </div>
      </Section>

      {/* Image Section — Day Trips */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={sectionDayTrips} alt="Ancient Lycian ruins near Ölüdeniz with mountain backdrop" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ancient Ruins and Mountain Scenery</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Combine Tlos, Xanthos, and Saklıkent Gorge in a single day trip from Ölüdeniz</p>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;

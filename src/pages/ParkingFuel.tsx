import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ParkingCircle, Fuel, MapPin, CreditCard, HelpCircle, Bus } from "lucide-react";
import heroParkingGuide from "@/assets/hero-parking-guide.webp";
import sectionBlueLagoon from "@/assets/section-blue-lagoon.webp";

const faqData = [
  {
    question: "Where should I park in Ölüdeniz if the Blue Lagoon car park is full?",
    answer:
      "Park near the Ölüdeniz Mosque in upper Ölüdeniz, because the street parking is usually free and the walk to the lagoon takes about 15 minutes. In 2026, that option is often cheaper than paying 500-650 TL for vehicle entry plus 300-500 TL for parking at the Blue Lagoon. The caveat is that downhill walking is easy, but the return walk is uphill in hot weather.",
  },
  {
    question: "Is Fethiye town parking difficult on Tuesdays?",
    answer:
      "Yes, Fethiye town parking is especially difficult on Tuesdays because the market creates heavy traffic and fewer empty spaces. Local drivers and visitors often avoid the centre entirely, and a dolmuş from Ölüdeniz or Ovacık can cost only 25-35 TL per person. The exception is very early morning, when a few peripheral spaces may still be available.",
  },
  {
    question: "Where can I refuel a rental car near Ölüdeniz?",
    answer:
      "Refuel in Ovacık or Fethiye, because Ölüdeniz has no petrol station. Ovacık is usually the closest option at about 4-5 km away, while central Fethiye is roughly 14 km away and has major brands such as Shell, Opet, Petrol Ofisi, TP, and Aytemiz. The caveat is that prices can change quickly, so check the pump price before you commit.",
  },
  {
    question: "Do Blue Lagoon and other sites accept card payments?",
    answer:
      "Blue Lagoon uses a cashless Lagoon Card system for many on-site purchases, but entry fees and other attractions can still involve cash-only counters. Saklıkent Gorge is a good example because its entry is often cash-only, while Patara can combine parking and access in one ticket. The exception is that some smaller lots, especially seasonal ones, may still prefer cash even when the main ticket office accepts cards.",
  },
];

const ParkingFuel = () => {
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
        name: "Parking & Fuel",
        item: "https://oludeniz-rent-a-car.com/parking-fuel-guide",
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Parking & Fuel Guide for Ölüdeniz and Fethiye — Costs, Locations & Tips (2026)"
        description="Parking costs and fuel stations for Ölüdeniz, Fethiye, and Blue Lagoon. Attraction parking table, fuel prices, Fethiye market day tips, and practical advice for rental car drivers."
        canonical="https://oludeniz-rent-a-car.com/parking-fuel-guide"
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Hero Section */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={heroParkingGuide} alt="Ölüdeniz Blue Lagoon aerial view with parked cars along the coast road" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Parking &amp; Fuel Guide for &Ouml;l&uuml;deniz and Fethiye</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Driving a rental car in &Ouml;l&uuml;deniz and Fethiye gives you access to the Lycian Coast, the Turquoise Coast, and day trips across Mu&#x11F;la Province on the D400 highway, but parking and fuel planning matter from the first kilometre. In 2026, the most useful rule is simple: park early, refuel in Fethiye or Ovac&#x131;k, and keep cash or a card ready because several sites still mix cash-only and cashless payment systems.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "Parking & Fuel" }]} />
      </div>

      {/* Intro text */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            If you are collecting a car at <strong>Dalaman Airport (DLM)</strong>, the rental counter is usually in the terminal or in an arrivals hall meet-and-greet flow, depending on the supplier. Names such as Dalaman Car Hire, Oscar Rent a Car, Yelken Rent a Car, Marin Rent a Car, Turun&ccedil; Rent a Car, TinyAkropol, Circular Car Hire, Apple Rent a Car, Garenta, Sixt, Enterprise, Avis, Europcar, Cizgi Rent a Car, Babadan Rent a Car, Localrent, and Budget may use a name sign for airport delivery. For insurance, ask about CDW, SCDW, FDW, excess/deductible, franchise, zero excess, full coverage, <em>Kasko</em>, <em>muafiyet</em>, <em>Zorunlu Trafik Sigortas&#x131;</em>, ZMSS, and third-party liability before you leave the counter.
          </p>
        </div>
      </Section>

      {/* Blue Lagoon Parking */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <ParkingCircle className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Blue Lagoon (&Ouml;l&uuml;deniz Nature Park) Parking</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The Blue Lagoon in &Ouml;l&uuml;deniz is the most expensive and time-sensitive parking location in this guide, because the Nature Park uses separate entry charges for people, vehicles, and parking spaces. In 2026, the projected cost is 120&ndash;180 TL per person, 500&ndash;650 TL per car, and 300&ndash;500 TL for parking, which means a family of four with one rental car may pay roughly 1,300&ndash;1,700 TL before buying food or sunbeds.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The site is managed by the Directorate General for Nature Conservation and National Parks, which is the authority visitors usually see at the gate. Inside the park, payments for sunbeds, food, and drinks use the cashless Lagoon Card system, so a preauthorisation-style top-up is effectively required at entry. On busy summer days, more than 400,000 visitors were recorded in July and August 2024, so arriving before 9:00&ndash;9:30 AM is the practical cutoff; after 11:00 AM, parking inside the park is usually full.
          </p>
          <InfoBox>
            <p className="text-gray-700">
              <strong>Best backup option:</strong> Free street parking near the &Ouml;l&uuml;deniz Mosque in upper &Ouml;l&uuml;deniz usually gives you a 15-minute downhill walk to the Nature Park entrance, while K&#x131;drak Beach offers a cheaper pine-forest parking alternative about 2&ndash;3 km beyond the lagoon. K&#x131;drak&rsquo;s entry fee is typically 90&ndash;120 TL, which makes it a useful fallback when Blue Lagoon parking reaches capacity.
            </p>
          </InfoBox>
        </div>
      </Section>

      {/* Image Section — Blue Lagoon */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={sectionBlueLagoon} alt="Blue Lagoon in Ölüdeniz with turquoise water surrounded by green hills" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Blue Lagoon &mdash; Arrive Early, Park Smart</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">After 11:00 AM in summer, parking inside the Nature Park is usually full</p>
        </div>
      </section>

      {/* Parking at Key Attractions */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Parking at Key Attractions around Fethiye</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Day trips from Fethiye are easiest when you treat parking as part of the itinerary, because several attractions in the &Ouml;l&uuml;deniz area have fixed lots, attendants, or seasonal rules. The best pattern is to arrive early, keep small cash ready, and check whether the site charges per person, per vehicle, or as a combined ticket.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Attraction</th>
                  <th className="p-3 text-left">Parking cost &amp; details</th>
                  <th className="p-3 text-left">Operational notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border-b"><strong>Kayak&ouml;y</strong></td>
                  <td className="p-3 border-b">Free parking is available in a large lot beside the main entrance.</td>
                  <td className="p-3 border-b">The village entrance fee is 100 TL per person and the site usually opens at 8:30 AM, based on 2026 visitor schedules.</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b"><strong>Sakl&#x131;kent Gorge</strong></td>
                  <td className="p-3 border-b">A large car park sits opposite the cliffs and is often around 100 TL, although some operators still list it as free.</td>
                  <td className="p-3 border-b">Gorge entry is usually 100&ndash;120 TL and cash-only, so a rental card with zero excess does not help here.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b"><strong>Patara Beach and ruins</strong></td>
                  <td className="p-3 border-b">A combined ticket usually covers ruins, beach access, and parking for around &euro;15 per person for foreign visitors.</td>
                  <td className="p-3 border-b">The site closes at 8:00 PM for sea turtle protection, and vehicles remaining after closing may be removed.</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b"><strong>Gemiler Island / Gemiler Bay</strong></td>
                  <td className="p-3 border-b">Attendant-managed parking is often around 10 TL in summer and free in winter.</td>
                  <td className="p-3 border-b">This is the usual launch point for boat trips toward St. Nicholas Island.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b"><strong>Butterfly Valley (Kelebekler Vadisi)</strong></td>
                  <td className="p-3 border-b">No car access is available, so there is no normal parking lot.</td>
                  <td className="p-3 border-b">Visitors reach the valley by boat from &Ouml;l&uuml;deniz or by a steep hike from Faralya, where public parking is very limited.</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b"><strong>Babada&#x11F; Mountain / cable car base</strong></td>
                  <td className="p-3 border-b">Multi-level parking is available at the Ovac&#x131;k base station.</td>
                  <td className="p-3 border-b">The cable car fare is usually 800&ndash;950 TL per person, so parking is only one part of the total cost.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Fethiye Town Parking */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Bus className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Fethiye Town Parking</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Fethiye town parking is difficult year-round because the town is a commercial hub for local commuters, market traffic, and marina visitors. The most reliable strategy is to avoid circling the harbour or central streets during peak hours, because the main roads fill quickly and on-street spaces disappear fast.
          </p>
          <WarningBox>
            <p className="text-gray-700">
              <strong>Tuesday is the critical day</strong> in Fethiye because the weekly market creates heavy congestion and makes central parking scarce. For Fethiye market day parking, local drivers often avoid the centre entirely, and visitors in rental cars usually save time by staying outside the core and using another mode of transport.
            </p>
          </WarningBox>
          <p className="text-gray-700 mt-4 leading-relaxed">
            A practical solution is to leave the rental car at your hotel in &Ouml;l&uuml;deniz or Ovac&#x131;k and take the dolmu&#x15F; into town. On summer routes, departures can be every 10 minutes and fares are often 25&ndash;35 TL per person, which is usually cheaper than paying for central parking and gives you more flexibility if you plan to shop or eat in town.
          </p>
        </div>
      </Section>

      {/* Fuel Prices and Stations */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Fuel className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Fuel Prices and Stations in the Fethiye Area</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            &Ouml;l&uuml;deniz itself has no petrol station, so drivers need to fuel up in Ovac&#x131;k or Fethiye before heading to the beach road or leaving for longer day trips. The nearest stations are typically 4&ndash;5 km uphill in Ovac&#x131;k and about 14 km away in Fethiye town, which matters if you are collecting a Fiat Egea, Renault Clio, Hyundai i20, Dacia Duster, or similar rental car with limited fuel at handover.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            In March 2026, Turkish fuel prices changed quickly after a reported 6.24 TL/litre diesel increase on 29 March 2026, which showed how volatile local pricing can be. That volatility is important for travellers using cars from providers such as Garenta, Sixt, Enterprise, Avis, Europcar, Budget, or Localrent, because fuel policy and return level can affect the final bill even when the daily rate looks low.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Fuel type</th>
                  <th className="p-3 text-right">Projected price per litre</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border-b">Benzin (95 octane petrol)</td>
                  <td className="p-3 border-b text-right">64.62 TL</td>
                  <td className="p-3 border-b">Standard unleaded fuel for most rental cars.</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Motorin (diesel)</td>
                  <td className="p-3 border-b text-right">77.90 TL</td>
                  <td className="p-3 border-b">Confirm the fuel type on the rental agreement before departure.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">LPG (autogas)</td>
                  <td className="p-3 border-b text-right">31.99 TL</td>
                  <td className="p-3 border-b">Standard rental cars usually do not use LPG.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            The safest routine is to fill up in Fethiye or Ovac&#x131;k before descending to &Ouml;l&uuml;deniz, then avoid waiting until Friday evening or Sunday afternoon, when holiday traffic often creates queues at the pumps. If you are driving toward the Lycian Coast, Ka&#x15F;, Kalkan, G&ouml;cek, Dalyan, K&ouml;yce&#x11F;iz, or Pamukkale, a full tank can save time on the D400 highway and reduce the risk of paying airport or resort premiums later.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Footer CTA */}
      <section className="relative py-16 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,46,0.6),rgba(212,160,60,0.3))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <p className="text-xl mb-6">Plan your parking, fuel up smart, and hit the road. Compare rental deals now.</p>
          <Link to="/#compare" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Compare &Ouml;l&uuml;deniz Car Rental Deals
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ParkingFuel;

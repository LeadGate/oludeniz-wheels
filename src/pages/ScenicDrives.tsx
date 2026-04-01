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
import { Car, MapPin, Mountain, Route, Shield, HelpCircle, Compass, Map } from "lucide-react";
import heroScenicDrive from "@/assets/hero-scenic-drive.webp";
import sectionCoastalRoad from "@/assets/section-coastal-road.webp";
import sectionAncientRuins from "@/assets/section-ancient-ruins.webp";

const faqData = [
  {
    question: "Is a 4WD needed for the Kabak Coast Road?",
    answer:
      "No, a 4WD is only needed for the final descent from Kabak village to Kabak Beach. The paved road to Kabak village is about 14 km from Ölüdeniz and is routinely driven by standard rentals such as Fiat Egea and Renault Clio. The exception is the steep unpaved beach track, which can fall outside CDW, SCDW, and Kasko coverage.",
  },
  {
    question: "Can I drive from Ölüdeniz to Patara Beach in a normal rental car?",
    answer:
      "Yes, the Ölüdeniz to Patara Beach route is fully manageable in a standard rental car. The drive uses the D400 and is about 110 km in total if combined with Kalkan and Kaş, while the Patara turnoff and parking area are designed for normal road cars. The caveat is that beach access and archaeological area rules can change seasonally, so check the latest entry fee and closing time before leaving.",
  },
  {
    question: "What insurance should I ask for at Dalaman Airport (DLM)?",
    answer:
      "Ask for CDW or SCDW, plus clear wording on excess/deductible, franchise, zero excess, full coverage, Kasko, muafiyet, and ZMSS. Rental desks at Dalaman Airport commonly place a preauthorisation on your card, and some companies such as Avis, Europcar, Enterprise, Budget, Garenta, and Sixt may offer different cover packages. The exception is that no policy usually covers damage from unpaved roads or deliberate off-road use.",
  },
  {
    question: "Are the roads to Kayaköy and Gemiler Island suitable for a small car?",
    answer:
      "Yes, the road to Kayaköy and the paved descent to Gemiler Bay are suitable for a small car. A Renault Clio, Hyundai i20, or Kia Picanto is often easier to place on the tight turns than a larger SUV, and the road remains asphalted to the beach. The caveat is that the final descent is narrow and passing space is limited, so drive slowly and avoid night travel.",
  },
  {
    question: "Which day trip is best for ancient cities near Ölüdeniz?",
    answer:
      "The Tlos–Saklıkent–Pinara loop is the strongest ancient-city day trip from Ölüdeniz. It combines three Lycian sites in one full-day route of roughly 120–140 km and works well in a standard rental car. The exception is summer crowding at Saklıkent Gorge, so an early departure makes the day smoother.",
  },
];

const ScenicDrives = () => {
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
        name: "Scenic Drives",
        item: "https://oludeniz-rent-a-car.com/scenic-drives-from-oludeniz",
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Best Scenic Drives & Day Trips from Ölüdeniz by Car — Route Guide 2026"
        description="Scenic drives and day trips from Ölüdeniz by car. Kabak Coast Road, Tlos–Saklıkent–Pinara loop, D400 to Kaş, Kayaköy, mountain villages. Route distances, vehicle advice, and insurance notes."
        canonical="https://oludeniz-rent-a-car.com/scenic-drives-from-oludeniz"
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Hero Section */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={heroScenicDrive} alt="Scenic coastal road along the Lycian Coast near Ölüdeniz with turquoise sea views" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Scenic Drives &amp; Day Trips from &Ouml;l&uuml;deniz by Car</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            &Ouml;l&uuml;deniz day trips by car are best planned around three facts: most roads are paved, the D400 highway connects the main coastal destinations, and unpaved tracks usually fall outside rental insurance cover. This guide focuses on practical routes from &Ouml;l&uuml;deniz, with route distances, driving times, vehicle advice, and insurance notes for standard rentals such as Fiat Egea, Renault Clio, Hyundai i20, and Dacia Duster.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "Scenic Drives" }]} />
      </div>

      {/* Intro text */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            Local drivers and rental desks at <strong>Dalaman Airport (DLM)</strong> routinely steer visitors toward the same core excursions: the Kabak Coast Road, the Tlos&ndash;Sakl&#x131;kent&ndash;Pinara loop, Kayak&ouml;y and Gemiler Island, and the D400 run to Ka&#x15F;, Kalkan, Xanthos, and Patara Beach. If you want one takeaway, it is this: choose paved roads, confirm your CDW or SCDW terms, and avoid dirt descents that can trigger excess/deductible charges or a franchise under your contract.
          </p>
        </div>
      </Section>

      {/* Kabak Coast Road */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Route className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Kabak Coast Road &mdash; &Ouml;l&uuml;deniz&rsquo;s Most Dramatic Drive</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The Kabak Coast Road is the most scenic short drive from &Ouml;l&uuml;deniz, with cliff views over the Lycian Coast, Butterfly Valley (Kelebekler Vadisi), and Kabak Beach.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Route, distance, and driving time:</strong> Start at the &Ouml;l&uuml;deniz roundabout, pass the Blue Lagoon turnoff, then climb toward K&#x131;drak Beach and Faralya before ending at Kabak village; the one-way distance is about 14 km and the drive takes 30&ndash;40 minutes without stops. Along the route, the road is fully asphalted to Kabak village, but it is narrow, winding, and exposed in places with no guardrails.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Vehicle and access notes:</strong> A standard car such as a Fiat Egea, Renault Symbol, or Hyundai Bayon is suitable to Kabak village, while the final 1 km down to Kabak Beach is a steep dirt track that requires a 4WD such as a Dacia Duster or Toyota Hilux. Local shuttle trucks are used for the beach descent, and summer weekend traffic can be heavy on Bayram holidays.
          </p>
          <WarningBox>
            <p className="text-gray-700">
              <strong>Insurance and safety note:</strong> Unpaved road use can void CDW, SCDW, and full coverage policies, and many contracts treat these surfaces as <em>unstabilize olmayan yollar</em> or unsealed roads. This matters because rental agreements from companies such as Dalaman Car Hire, Garenta, Sixt, Enterprise, Avis, Europcar, Cizgi Rent a Car, and Budget commonly exclude damage on dirt tracks, so ask for written confirmation of coverage before driving down to Kabak Beach.
            </p>
          </WarningBox>
          <p className="text-gray-700 mt-4 leading-relaxed">
            <strong>Useful stop points:</strong> The Butterfly Valley overlook offers a safe pull-off with a direct view into the valley, the first ascent above &Ouml;l&uuml;deniz gives a wide panorama of Belcek&#x131;z Beach, and Olive Garden Terrace in Kabak village is a practical lunch stop with sea views.
          </p>
        </div>
      </Section>

      {/* Tlos–Saklıkent–Pinara Loop */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Tlos&ndash;Sakl&#x131;kent&ndash;Pinara Ancient Cities Loop</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The Tlos&ndash;Sakl&#x131;kent&ndash;Pinara loop is the best full-day cultural drive from &Ouml;l&uuml;deniz, combining the D400 highway, mountain roads, and three major Lycian sites in one route.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Route, distance, and timing:</strong> The loop is roughly 120&ndash;140 km round trip from &Ouml;l&uuml;deniz and usually takes 3&ndash;3.5 hours of driving time, with a realistic full-day schedule from about 09:30 to 18:30. The route works well in a compact rental such as a Fiat Linea, Renault Taliant, Opel Astra, or Skoda Scala.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Stage 1: &Ouml;l&uuml;deniz to Tlos:</strong> Drive via Fethiye and join the D400 highway, then follow signs for Tlos after about 22 km; the final 10 km to the site are on a narrow but paved road, and parking is free by the entrance area. Tlos is one of the most important Lycian settlements, and the site works well as a first stop because the approach is straightforward for standard cars.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Stage 2: Tlos to Sakl&#x131;kent Gorge:</strong> The next 8 km take you to Sakl&#x131;kent Gorge, where the road passes pine forest and riverside restaurants; in peak season, arriving before 10:30 helps avoid queues. Entry is typically 100&ndash;120 TL per person, and the area is a common stop on guided Jeep Safari tours as well as independent self-drives.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Stage 3: Sakl&#x131;kent to Pinara:</strong> The final leg heads back toward the main highway, with Pinara reached by a short turnoff near Minare village; recent roadworks have improved the approach from gravel to paved surface. Pinara is a strong fit for travelers who want a quieter site than Xanthos or Patara Beach, and a simple sedan like a Renault Clio or Citroen C3 is enough for the access road.
          </p>
          <InfoBox>
            <p className="text-gray-700">
              Turkish road conditions change after winter maintenance and municipal works, so verify any local roadworks notice and keep to paved sections if your contract includes a mileage cap or off-road exclusion.
            </p>
          </InfoBox>
        </div>
      </Section>

      {/* Image Section — Coastal Road */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={sectionCoastalRoad} alt="Winding coastal road along the Turkish Turquoise Coast near Ölüdeniz" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The Lycian Coast Awaits</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">From Butterfly Valley to Kabak Beach &mdash; &Ouml;l&uuml;deniz&rsquo;s most dramatic coastal drives</p>
        </div>
      </section>

      {/* Kayaköy to Gemiler Island */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Kayak&ouml;y to Gemiler Island</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The Kayak&ouml;y to Gemiler Island drive is the easiest half-day trip from &Ouml;l&uuml;deniz, combining the ghost village of Kayak&ouml;y with the sea access at Gemiler Bay and Gemiler Island.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Route and drive time:</strong> From Hisar&ouml;n&uuml; above &Ouml;l&uuml;deniz, the road to Kayak&ouml;y takes about 10 minutes, and roadside parking is usually free; the village entry fee is around 100 TL and opening hours are typically 08:30&ndash;18:30. From Kayak&ouml;y, follow signs for Gemiler Adas&#x131; through K&#x131;nal&#x131; village to the beach road, which is paved all the way but very narrow on the final descent.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Best vehicle choice:</strong> A compact model such as a Renault Clio, Hyundai i20, or Kia Picanto is easier than a larger SUV on the tight bends and passing points. This is especially useful on the return climb when traffic meets descending vehicles near the olive groves.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Parking and boat access:</strong> Beach attendants at Gemiler Bay usually charge about 10 TL in summer and often no fee in the off-season, while boats run from the beach to Gemiler Island, also known as St. Nicholas Island. The island entrance fee was approximately 70&ndash;100 TL as of the 2025&ndash;2026 season, so budget accordingly for the day.
          </p>
        </div>
      </Section>

      {/* D400 Coastal Route */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Map className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">The D400 Coastal Route to Ka&#x15F;, Kalkan, Xanthos, and Patara</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The D400 highway is the core coastal route of the Turkish Aegean and Turquoise Coast, and the &Ouml;l&uuml;deniz to Ka&#x15F; drive is one of the strongest one-day scenic runs in Mu&#x11F;la Province.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Main route and drive time:</strong> The standard route is &Ouml;l&uuml;deniz &rarr; Fethiye &rarr; D400 &rarr; Kalkan &rarr; Ka&#x15F;, covering about 110 km in roughly 2 hours without stops. This corridor is suitable for nearly all standard rentals, including Fiat Egea Cross, Dacia Duster, Ford Focus, Volkswagen Passat, and Nissan Qashqai.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Xanthos:</strong> Around the 65 km mark, Xanthos offers a UNESCO-listed ancient capital with easy roadside parking and minimal walking from the vehicle. For travelers interested in Lycian history, Xanthos is one of the clearest cultural stops on the route.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Patara Beach and ancient city:</strong> The Patara turnoff comes around the 70 km point, and the beach stretches for about 18 km with a seasonal closing time of 20:00 for <em>Caretta caretta</em> nesting protection. Expect dual pricing for the combined site, with foreign visitor entry around &euro;15, and note that parking is on a boardwalk about 100&ndash;200 m from the sea.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Letoon:</strong> Letoon sits just off the D400 and works well as a short detour if you want a quieter archaeological stop before continuing to Kalkan or Ka&#x15F;. The site is also a useful trail access point for walkers heading toward the Lycian Way.
          </p>
          <InfoBox>
            <p className="text-gray-700">
              The D400 is a national road with frequent upgrades, but evening traffic near Kalkan and Ka&#x15F; can slow in summer, so build in extra time if you are connecting this drive with a ferry, dinner reservation, or hotel check-in.
            </p>
          </InfoBox>
        </div>
      </Section>

      {/* Image Section — Ancient Ruins */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={sectionAncientRuins} alt="Ancient Lycian ruins at Tlos overlooking a green valley near Fethiye" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Lycian Heritage by Car</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Tlos, Sakl&#x131;kent, Pinara, Xanthos, and Patara &mdash; all reachable in a standard rental</p>
        </div>
      </section>

      {/* Mountain Village Escapes */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Mountain Village Escapes</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Mountain villages near &Ouml;l&uuml;deniz offer cooler air, shorter drives, and a different side of Fethiye and Mu&#x11F;la Province away from the coast.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>&Uuml;z&uuml;ml&uuml; (Ye&#x15F;il&uuml;z&uuml;ml&uuml;):</strong> &Uuml;z&uuml;ml&uuml; sits on a plateau over 600 m above sea level and is usually reached in 25&ndash;30 minutes from Fethiye, about 15&ndash;17 km away. The access road is wide and well maintained, making it easy in a small car like a Fiat Egea, Hyundai i20, or Renault Symbol, and the village is a practical lunch stop when coastal temperatures reach 40&deg;C.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Fethiye to Dalyan:</strong> Dalyan is about 61 km from Fethiye and usually takes 50&ndash;75 minutes via the D400 through Ortaca, with a scenic extension through K&ouml;yce&#x11F;iz adding 20&ndash;30 minutes. Along the way, G&ouml;cek is a worthwhile marina stop, while Dalyan itself offers the rock tombs, &#x130;ztuzu Beach, and the Sultaniye hot springs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Nearby destinations:</strong> For longer coastal loops, travelers often combine Dalyan with K&ouml;yce&#x11F;iz or a return route past Fethiye, while others use the same area as a staging point for Ka&#x15F;, Kalkan, or Pamukkale on multi-day trips. These are all paved road options, so they remain suitable for standard hire cars.
          </p>
        </div>
      </Section>

      {/* 4WD vs Standard Car Table */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Car className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">4WD vs Standard Car &mdash; What You Actually Need</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            For most scenic drives around &Ouml;l&uuml;deniz, a standard car is enough, and a 4WD is only necessary for specific unpaved sections.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Destination / Route</th>
                  <th className="p-3 text-left">Vehicle Recommendation</th>
                  <th className="p-3 text-left">Road Conditions</th>
                  <th className="p-3 text-left">Insurance Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border-b">Kabak Coast Road to Kabak village</td>
                  <td className="p-3 border-b">Standard car OK</td>
                  <td className="p-3 border-b">Fully paved, narrow, winding</td>
                  <td className="p-3 border-b">CDW/SCDW usually valid on paved roads</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Tlos&ndash;Sakl&#x131;kent&ndash;Pinara loop</td>
                  <td className="p-3 border-b">Standard car OK</td>
                  <td className="p-3 border-b">Fully paved main and secondary roads</td>
                  <td className="p-3 border-b">Normal road-use coverage applies</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Kayak&ouml;y to Gemiler Bay</td>
                  <td className="p-3 border-b">Standard car OK</td>
                  <td className="p-3 border-b">Paved, very narrow final descent</td>
                  <td className="p-3 border-b">Check excess/deductible terms</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">D400 coastal drive to Ka&#x15F;, Kalkan, Patara, Xanthos</td>
                  <td className="p-3 border-b">Standard car OK</td>
                  <td className="p-3 border-b">Modern highway and paved local turns</td>
                  <td className="p-3 border-b">Standard third-party liability and ZMSS apply</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">&Uuml;z&uuml;ml&uuml; and Dalyan day trips</td>
                  <td className="p-3 border-b">Standard car OK</td>
                  <td className="p-3 border-b">Wide, well-maintained roads</td>
                  <td className="p-3 border-b">Normal contract terms apply</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Kabak village to Kabak Beach</td>
                  <td className="p-3 border-b">4WD required</td>
                  <td className="p-3 border-b">Steep unpaved dirt/rubble track</td>
                  <td className="p-3 border-b">Off-road use may void Kasko and full coverage</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Kirme village access</td>
                  <td className="p-3 border-b">Verify locally</td>
                  <td className="p-3 border-b">Mixed and less predictable</td>
                  <td className="p-3 border-b">Treat as off-road unless confirmed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            <strong>Insurance terminology used by Turkish rental desks:</strong> CDW is Collision Damage Waiver, SCDW is Super Collision Damage Waiver, FDW means Full Damage Waiver, and zero excess or full coverage usually means the deductible is reduced to zero. In Turkey, rental paperwork may also use <em>franchise</em>, <em>Kasko</em>, <em>muafiyet</em>, <em>Zorunlu Trafik Sigortas&#x131;</em>, ZMSS, and third-party liability, so review the contract before leaving the airport rental counter.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Turkish rental contracts often require preauthorisation on a credit card, and the amount can vary by company such as Oscar Rent a Car, Yelken Rent a Car, Marin Rent a Car, Turun&ccedil; Rent a Car, TinyAkropol, Circular Car Hire, Apple Rent a Car, Babadan Rent a Car, or Localrent partners. Ask for the deposit amount, the excess amount, and the road-use exclusions in writing at Dalaman Airport (DLM) before driving away.
          </p>
        </div>
      </Section>

      {/* Best Rental Car Picks Table */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Best Rental Car Picks for &Ouml;l&uuml;deniz Day Trips</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The best rental car for &Ouml;l&uuml;deniz depends on the road type, passenger count, and luggage load, but a small or compact car is enough for most routes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Use case</th>
                  <th className="p-3 text-left">Recommended model</th>
                  <th className="p-3 text-left">Why it fits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border-b">City and coastal day trips</td>
                  <td className="p-3 border-b">Fiat Egea, Renault Clio, Hyundai i20, Kia Picanto</td>
                  <td className="p-3 border-b">Easy parking, low fuel use, simple on narrow roads</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Mixed highway and village routes</td>
                  <td className="p-3 border-b">Fiat Egea Cross, Renault Taliant, Opel Astra, Skoda Scala</td>
                  <td className="p-3 border-b">Stable on the D400 and comfortable for 2&ndash;4 people</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Family and luggage-heavy travel</td>
                  <td className="p-3 border-b">Dacia Lodgy, Ford Focus, Volkswagen Passat</td>
                  <td className="p-3 border-b">More cabin and boot space for longer days</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Beach access and rougher access roads</td>
                  <td className="p-3 border-b">Dacia Duster, Nissan Qashqai, Toyota Hilux, Hyundai Bayon</td>
                  <td className="p-3 border-b">Better ground clearance for approved gravel or rural access</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            <strong>Practical pick by route:</strong> For the Kabak village road, a Fiat Egea Cross or Dacia Duster is a comfortable choice, while Kayak&ouml;y, Sakl&#x131;kent, and the D400 to Ka&#x15F; are equally manageable in a Renault Clio or Hyundai Bayon. If you plan to stay within the paved network around &Ouml;l&uuml;deniz, a small hatchback usually offers the best value.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
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
          <p className="text-xl mb-6">Ready to explore the Lycian Coast? Compare rental deals from local agencies.</p>
          <Link to="/#compare" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Compare &Ouml;l&uuml;deniz Car Rental Deals
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ScenicDrives;

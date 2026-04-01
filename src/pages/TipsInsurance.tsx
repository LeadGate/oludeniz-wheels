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
import { Shield, AlertTriangle, Car, Scale, MapPin, CheckCircle, HelpCircle } from "lucide-react";
import heroInsuranceTips from "@/assets/hero-insurance-tips.webp";
import sectionRentalDesk from "@/assets/section-rental-desk.webp";

const faqData = [
  {
    question: "Do I need full coverage for a rental car in Ölüdeniz?",
    answer:
      "Yes, full coverage is the safest option for most travelers because it can reduce the deductible to zero and protect against common damage items. A typical CDW quote might leave you with a \u20AC500\u2013\u20AC900 excess, while SCDW or FDW can add \u20AC8\u2013\u20AC20/day and reduce the hold on your card. Caveat: full coverage does not always include off-road damage, wrong fuel, lost keys, or deliberate negligence, so the contract still matters.",
  },
  {
    question: "Can I pick up a rental car directly at Dalaman Airport (DLM)?",
    answer:
      "Yes, many suppliers offer terminal pickup, arrivals hall counters, or meet-and-greet handover at Dalaman Airport (DLM). Brands like Avis, Europcar, Sixt, Enterprise, Budget, and Garenta often have a staffed desk or a shuttle to the rental counter, while some local companies use a name sign outside the terminal. Caveat: the exact handover point and shuttle time should be confirmed before landing because smaller suppliers may operate only during daylight hours.",
  },
  {
    question: "Is insurance included in the rental price in Turkey?",
    answer:
      "Yes, ZMSS third-party liability is mandatory, but CDW, SCDW, FDW, and zero excess are not always included in the headline price. A low quote for a Renault Clio or Fiat Egea may cover only the legal minimum, while full coverage usually costs more per day but lowers the deductible and deposit hold. Caveat: always check whether the booking page names Kasko, muafiyet, and the exclusions list before you pay.",
  },
  {
    question: "What is the safest car for Fethiye and Ölüdeniz roads?",
    answer:
      "A compact or small crossover is usually safest and easiest to park, so models like the Hyundai i20, Renault Taliant, Fiat Egea Cross, or Dacia Duster are practical choices. These cars handle town streets, the D400 highway, and moderate hill roads to Babada\u011F better than very low-slung sedans, and they usually sit in the \u20AC24\u2013\u20AC45/day range depending on season. Caveat: if you plan steep village roads near Faralya or unpaved access tracks, no model eliminates the need to read the insurance exclusions.",
  },
  {
    question: "How can I avoid scam charges at the rental counter?",
    answer:
      "You can avoid most scam charges by photographing the car, confirming the preauthorisation amount, and refusing verbal-only insurance upsells. In the \u00d6l\u00fcdeniz and Fethiye area, the most common disputes involve fuel, scratches, tolls, and forced upgrades, and the best defense is a signed inspection sheet plus timestamped photos. Caveat: if the supplier changes the contract terms at pickup, walking away is often cheaper than accepting a worse deal.",
  },
  {
    question: "What documents should I keep during the rental?",
    answer:
      "You should keep the booking voucher, insurance summary, contract, pickup checklist, and return receipt in case of a dispute. These documents help if a company later charges for damage, tolls, ZMSS-related questions, or an alleged extra day, and they are especially useful with cross-border comparison between local operators and larger brands like Budget or Enterprise. Caveat: digital screenshots are helpful, but signed paper or PDF copies are stronger evidence if the company challenges your claim.",
  },
];

const TipsInsurance = () => {
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
        name: "Tips & Insurance",
        item: "https://oludeniz-rent-a-car.com/rental-tips-insurance",
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Ölüdeniz Car Rental Tips — Insurance, Scams & Traffic Rules Guide (2026)"
        description="Car rental tips for Ölüdeniz and Fethiye. Turkish insurance explained (CDW, SCDW, Kasko), common scams, traffic fines table, verification checklist, and best car picks by route."
        canonical="https://oludeniz-rent-a-car.com/rental-tips-insurance"
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Hero Section */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={heroInsuranceTips} alt="Rental car keys and insurance documents on a desk at Dalaman Airport" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">&Ouml;l&uuml;deniz Car Rental Tips &mdash; Insurance, Rules &amp; Scam Protection</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Renting a car in &Ouml;l&uuml;deniz gives you access to the Lycian Coast, the Turquoise Coast, Mu&#x11F;la Province, and the Turkish Aegean through day trips on the D400 highway to Fethiye, G&ouml;cek, Dalyan, Ka&#x15F;, Kalkan, Sakl&#x131;kent Gorge, Patara Beach, and &Ouml;l&uuml;deniz&rsquo;s Blue Lagoon. This guide explains rental insurance in Turkey, airport pickup at Dalaman Airport (DLM), common scam patterns, and traffic fines so you can compare offers with clear numbers rather than generic promises. For example, a Fiat Egea or Renault Clio may be advertised from &euro;18/day with CDW, while an upgrade to SCDW or FDW can push the price to &euro;25&ndash;&euro;40/day depending on season and deposit rules.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "Tips & Insurance" }]} />
      </div>

      {/* Understanding Turkish Car Rental Insurance */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Understanding Turkish Car Rental Insurance</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Turkish rental insurance is usually sold as a package at the rental counter in the arrivals hall at Dalaman Airport (DLM) or in a downtown Fethiye office, and the exact wording matters because preauthorisation, excess/deductible, franchise, and zero excess are not interchangeable. In practice, the strongest comparison is between basic CDW, expanded SCDW, and full coverage, because each option changes your liability for a Fiat Egea Cross, Renault Taliant, Hyundai i20, or Dacia Duster.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Kasko, CDW, and the deductible explained</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In Turkish rental contracts, <em>Kasko</em> is the local term commonly used for Collision Damage Waiver (CDW), and it usually includes a deductible, also called excess, franchise, or <em>muafiyet</em>. A standard rental quote in Fethiye can show a base rate of &euro;20/day for a Renault Symbol with a &euro;500&ndash;&euro;900 excess, while a full rental counter upgrade may reduce that amount to zero excess for an additional &euro;8&ndash;&euro;15/day. This matters because the preauthorisation on your card is often set to the size of the deductible, so a zero excess offer usually means a smaller deposit hold but a higher daily rate.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">SCDW and FDW reduce financial exposure</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Super CDW (SCDW) and Full Damage Waiver (FDW), sometimes marketed as full coverage, usually reduce or remove the deductible and may add protection for windscreens, tires, headlights, and underbody damage. In local listings, &ldquo;zero excess&rdquo; can also appear as <em>tam kasko</em> or <em>g&uuml;venceli paket</em>, and the best offers for a Hyundai Bayon or Opel Astra often sit around &euro;28/day to &euro;45/day in peak summer. Caveat: many companies still exclude roof damage, lost keys, wrong-fuel damage, and off-road damage unless those items are explicitly listed in writing.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Coverage type</th>
                  <th className="p-3 text-left">Typical local term</th>
                  <th className="p-3 text-right">Example liability</th>
                  <th className="p-3 text-left">Typical use case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border-b">Basic CDW</td>
                  <td className="p-3 border-b">Kasko</td>
                  <td className="p-3 border-b text-right">&euro;500&ndash;&euro;900 excess</td>
                  <td className="p-3 border-b">Lowest headline rate</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">SCDW</td>
                  <td className="p-3 border-b">S&#x131;f&#x131;r muafiyetli kasko</td>
                  <td className="p-3 border-b text-right">&euro;0 excess</td>
                  <td className="p-3 border-b">Lower deposit hold</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">FDW / full coverage</td>
                  <td className="p-3 border-b">Tam kasko</td>
                  <td className="p-3 border-b text-right">&euro;0 excess, broader protection</td>
                  <td className="p-3 border-b">Highest daily rate</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Liability cover</td>
                  <td className="p-3 border-b">ZMSS / Zorunlu Trafik Sigortas&#x131;</td>
                  <td className="p-3 border-b text-right">Third-party liability only</td>
                  <td className="p-3 border-b">Mandatory by law</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Third-party liability is mandatory under Turkish law</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Every rental car in Turkey must carry ZMSS, also called <em>Zorunlu Trafik Sigortas&#x131;</em> or compulsory third-party liability insurance, because it is required under the Highway Traffic Law (<em>Karayollar&#x131; Trafik Kanunu</em>) and enforced nationwide. The policy covers damage to other vehicles, property, and third-party bodily injury, while the renter still faces the rental company&rsquo;s CDW or Kasko excess for damage to the rental car itself. Caveat: ZMSS does not pay for your own car&rsquo;s damage, so a claim on a Fiat Linea or Citroen C3 can still leave you responsible for the deductible.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Off-road and unpaved-road clauses are high-risk</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Turkish rental contracts often void CDW, SCDW, FDW, and full coverage if damage occurs on unpaved roads, forestry tracks, or <em>stabilize yollar</em> outside the normal road network. That warning matters for routes toward Butterfly Valley (Kelebekler Vadisi), Faralya, Kabak Beach, Gemiler Island, or mountain roads near Babada&#x11F; Mountain and Babada&#x11F;, because a Dacia Lodgy or Suzuki Samurai driven off-road can lose insurance protection even if the company advertised zero excess. Caveat: paved access roads on the D400 highway and signed municipal roads are usually covered, but the contract text controls the final outcome.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Airport pickup, terminal counters, and meet-and-greet</h3>
          <p className="text-gray-700 leading-relaxed">
            At Dalaman Airport (DLM), some brands such as Avis, Europcar, Sixt, Enterprise, Budget, and Garenta operate desks in the terminal or arrivals hall, while local operators may use a meet-and-greet service with a name sign outside the terminal doors. A common setup is a shuttle to the rental counter or off-airport office, which can add 10&ndash;20 minutes to pickup time and may affect the amount of your preauthorisation. Caveat: the exact desk location and shuttle timing should be confirmed in the voucher because some smaller suppliers only hand over keys after a phone call on landing.
          </p>
        </div>
      </Section>

      {/* Common Car Rental Scams */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Common Car Rental Scams in Turkey</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Fethiye, &Ouml;l&uuml;deniz, Ovac&#x131;k, Hisar&ouml;n&uuml;, and Dalaman have many reputable suppliers, but scam risk rises when the offer is unusually cheap or the counter pushes urgent add-ons. The safest approach is to compare the total cost for a Renault Clio, Fiat Egea Cross, or Hyundai i20 with the deposit amount, fuel policy, and written damage exclusions before signing.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Fuel and deposit manipulation</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Some agencies deliver a car with less than a full tank and charge you for fuel at a premium rate, while others raise the preauthorisation unexpectedly at pickup. A realistic example is a Budget or Localrent quote at &euro;22/day with a &euro;300 hold versus a walk-in desk quote at &euro;19/day plus a &euro;700 hold and a &ldquo;mandatory&rdquo; fuel prepayment. Solution: insist on a full-to-full fuel policy, photograph the gauge and mileage, and ask the agent to state the exact preauthorisation amount before your card is inserted.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Insurance pressure at the rental counter</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A common upsell tactic is to say the card hold &ldquo;cannot pass&rdquo; unless you buy SCDW, FDW, or a zero excess package in cash, often for &euro;200&ndash;&euro;400 extra. In practice, many card declines are not real declines but temporary holds, 3D Secure issues, or international bank filters affecting the preauthorisation. Solution: use a backup card, ask the agent to retry once, and keep the written booking showing the included CDW or Kasko terms.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Bait-and-switch vehicle changes</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A customer who booked a Fiat Egea or Renault Taliant may be told that the reserved class is unavailable and offered a more expensive Dacia Duster, Ford Focus, or Volkswagen Passat instead. The price difference can be &euro;10&ndash;&euro;25/day, which turns a low-cost booking into a materially different trip budget. Solution: request the same vehicle category, or accept an upgrade only if the contract states &ldquo;no additional charge.&rdquo;
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Damage and toll overcharging</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Post-rental disputes often involve scratches, chips, missing accessories, or inflated toll charges on routes around Mu&#x11F;la Province and the Turkish Aegean. A documented complaint on &#x15E;ikayetvar can involve an invoice for a small pre-existing scratch, while highway tolls can be billed at 1.5x to 2x the actual amount if receipts are not requested. Solution: take time-stamped photos of all panels, wheels, glass, and the dashboard at pickup and return, and keep the toll receipts or HGS/OGS summary if the company provides one.
          </p>

          <WarningBox>
            <p className="text-gray-700">
              <strong>Illegal documents and payment pressure:</strong> Never hand over your passport as a deposit, because passport retention is not a normal rental security practice, and never accept a company that refuses card payment for the rental fee when the booking terms require it. Turkish rules on commercial rentals also make the vehicle and contract details important, so a legit office should show the business name, tax details, and the exact rented model, such as Kia Picanto or Toyota Hilux, on the paperwork. Caveat: some legitimate agencies accept cash for small ancillary items, but the main rental charge and deposit method should match the written voucher.
            </p>
          </WarningBox>
        </div>
      </Section>

      {/* Image Section — Rental Desk */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={sectionRentalDesk} alt="Car rental counter at Dalaman Airport with staff and customers" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Know Before You Sign</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Verify insurance terms, photograph the car, and keep every document from pickup to return</p>
        </div>
      </section>

      {/* How to Verify a Legitimate Rental Company */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">How to Verify a Legitimate Rental Company</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Turkey does not publish a single public registry that covers every local office in Fethiye, &Ouml;l&uuml;deniz, G&ouml;cek, or Dalaman, so verification depends on documents, physical presence, and association membership. The most useful checks are a visible office license, a verifiable online footprint, and a clear rental contract that names the supplier, vehicle class, and insurance package.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Check the office, license, and contract</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A legitimate car hire office should display its <em>Oto Kiralama</em> business license, tax information, and contact details in the office or at the rental counter. For airport pickup, a real supplier usually names the terminal meeting point, arrivals hall location, or meet-and-greet procedure in writing, and the booking confirmation should match the company name on the car handover form. Caveat: a nice kiosk alone is not proof of legitimacy, so the contract must still show the exact fee, excess, and insurance terms.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Use TOKKDER, T&Uuml;RSAB, and vetted booking platforms</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            TOKKDER, the Turkish rental association, is a useful quality signal because professional operators often follow its code of conduct, and aggregation platforms such as Enuygun, Yolcu360, and Obilet can reduce the risk of unvetted suppliers. If a company is linked to travel services, a T&Uuml;RSAB verification badge or QR code should resolve to the official tursab.org.tr domain. Caveat: membership or platform listing is a signal, not a guarantee, so you still need to verify the actual vehicle, deposit, and coverage on arrival.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Prefer brands with a published fleet and clear pricing</h3>
          <p className="text-gray-700 leading-relaxed">
            Established brands such as Sixt, Enterprise, Avis, Europcar, Budget, and Garenta usually publish class-based pricing for models like Fiat Egea, Renault Clio, Hyundai Bayon, Dacia Duster, Skoda Scala, or Nissan Qashqai, which makes comparison easier. A transparent quote should state daily rate, mileage limit, deductible, and whether CDW, SCDW, or FDW is included. Caveat: local operators like Fethiye Lovers, Dalaman Car Hire, or Babadan Rent a Car can still be excellent if the paperwork is specific and the vehicle inspection is documented.
          </p>
        </div>
      </Section>

      {/* Traffic Rules & Fines */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Traffic Rules &amp; Fines in Turkey</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Driving from &Ouml;l&uuml;deniz toward Fethiye, Kayak&ouml;y, &Ccedil;al&#x131;&#x15F; Beach, Tlos, Xanthos, Letoon, or Pamukkale means using roads where Turkish traffic law is actively enforced, especially on the D400 highway and around urban centers. The core rules are simple: drive on the right, overtake on the left, keep documents in the car, and assume speed cameras are active on intercity routes.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Violation</th>
                  <th className="p-3 text-right">Example fine level</th>
                  <th className="p-3 text-left">Practical note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border-b">Red-light running</td>
                  <td className="p-3 border-b text-right">5,000 TL</td>
                  <td className="p-3 border-b">Repeat offenses can rise sharply</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">DUI first offense</td>
                  <td className="p-3 border-b text-right">25,000 TL</td>
                  <td className="p-3 border-b">BAC limit is 0.05% for solo driving</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">DUI with passengers</td>
                  <td className="p-3 border-b text-right">25,000 TL to higher penalties</td>
                  <td className="p-3 border-b">BAC tolerance is effectively zero</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Refusing alcohol test</td>
                  <td className="p-3 border-b text-right">150,000 TL</td>
                  <td className="p-3 border-b">Can include a multi-year licence action</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Seatbelt violation</td>
                  <td className="p-3 border-b text-right">2,500 TL</td>
                  <td className="p-3 border-b">Applies to front and rear passengers</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Phone use while driving</td>
                  <td className="p-3 border-b text-right">2,719 TL</td>
                  <td className="p-3 border-b">Handheld use is targeted by patrols</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Speeding</td>
                  <td className="p-3 border-b text-right">2,000 TL to 30,000 TL</td>
                  <td className="p-3 border-b">Depends on how far over the limit</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Aggressive driving</td>
                  <td className="p-3 border-b text-right">180,000 TL</td>
                  <td className="p-3 border-b">Can trigger suspension</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Speed limits are fixed by road type</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The common limits are 50 km/h in urban areas, 90 km/h on rural two-lane roads, and 120 km/h on motorways (<em>otoyol</em>), with local signage always overriding the default. On holiday routes between Fethiye and G&ouml;cek or toward Ka&#x15F; and Kalkan, temporary works zones and village entrances often lower the limit, so a Hyundai i20 or Opel Astra can receive a fine even when the driver feels &ldquo;close to the limit.&rdquo; Caveat: speed cameras and police checks can differ by municipality, so posted signs matter more than general averages.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Alcohol, child seats, and fine payment</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A solo driver must stay under the legal BAC threshold of 0.05%, while any driver carrying passengers should assume zero tolerance in practice. Children under 12 years old, or under 135 cm and 36 kg, must use an appropriate child restraint in the back seat, which matters for family bookings in a Dacia Lodgy or Volkswagen Passat. Caveat: rental companies often pay traffic fines from the deposit to capture the 25% early-payment discount, then add an administration fee to the renter&rsquo;s bill.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Emergency and enforcement basics</h3>
          <p className="text-gray-700 leading-relaxed">
            For police emergencies, the traditional emergency number is 155, and some regions also direct callers to the broader 112 system depending on service integration. In a rental dispute, keep your contract, photos, and any receipt from the rental counter because those documents help resolve questions about damage, tolls, or ZMSS coverage. Caveat: if the incident involves injury or a crash on the Lycian Coast near Faralya, call emergency services first and notify the rental company only after the scene is secured.
          </p>
        </div>
      </Section>

      {/* Best Areas, Routes, and Car Types */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Car className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Best Areas, Routes, and Car Types for &Ouml;l&uuml;deniz</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            &Ouml;l&uuml;deniz rental planning works best when you match the vehicle to the route, because coastal roads, mountain switchbacks, and village streets all create different risks. For beach-heavy itineraries around K&#x131;drak Beach, Blue Lagoon, Butterfly Valley, and Kabak Beach, a compact model such as a Kia Picanto, Renault Clio, Citroen C3, or Hyundai i20 can be the cheapest fit at &euro;18&ndash;&euro;28/day, while longer routes to Dalyan, K&ouml;yce&#x11F;iz, Pamukkale, or Ka&#x15F; often justify a larger car.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Trip type</th>
                  <th className="p-3 text-left">Best road conditions</th>
                  <th className="p-3 text-left">Suggested models</th>
                  <th className="p-3 text-right">Typical budget</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border-b">Beach hops in &Ouml;l&uuml;deniz and Fethiye</td>
                  <td className="p-3 border-b">Paved urban roads</td>
                  <td className="p-3 border-b">Kia Picanto, Renault Clio, Hyundai i20</td>
                  <td className="p-3 border-b text-right">&euro;18&ndash;&euro;28/day</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Family travel to G&ouml;cek, Dalyan, K&ouml;yce&#x11F;iz</td>
                  <td className="p-3 border-b">Mixed town and highway</td>
                  <td className="p-3 border-b">Fiat Egea, Fiat Egea Cross, Renault Taliant, Skoda Scala</td>
                  <td className="p-3 border-b text-right">&euro;24&ndash;&euro;40/day</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Mountain or rural access</td>
                  <td className="p-3 border-b">Steeper, narrower roads</td>
                  <td className="p-3 border-b">Dacia Duster, Nissan Qashqai, Ford Focus</td>
                  <td className="p-3 border-b text-right">&euro;35&ndash;&euro;55/day</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 border-b">Small group or luggage-heavy trips</td>
                  <td className="p-3 border-b">Long-distance highway comfort</td>
                  <td className="p-3 border-b">Volkswagen Passat, Opel Astra, Dacia Lodgy</td>
                  <td className="p-3 border-b text-right">&euro;40&ndash;&euro;70/day</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">Worksite or adventure use</td>
                  <td className="p-3 border-b">Utility-focused roads</td>
                  <td className="p-3 border-b">Toyota Hilux, Suzuki Samurai</td>
                  <td className="p-3 border-b text-right">&euro;45&ndash;&euro;85/day</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Popular bases and day-trip clusters</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Travelers staying in &Ouml;l&uuml;deniz often choose pickups in Fethiye or Dalaman Airport (DLM), then drive the D400 to Hisar&ouml;n&uuml;, Ovac&#x131;k, Kayak&ouml;y, Gemiler Island, Faralya, and Babada&#x11F; viewpoints. Longer day trips can include Sakl&#x131;kent Gorge, Patara Beach, Tlos, Pinara, Xanthos, Letoon, &Uuml;z&uuml;ml&uuml;, and &Ccedil;al&#x131;&#x15F; Beach, with a second-day extension to Pamukkale or a coastal drive toward Ka&#x15F; and Kalkan. Caveat: road width, parking availability, and insurance exclusions matter more on rural segments than on main highways.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">When to choose a smaller or larger car</h3>
          <p className="text-gray-700 leading-relaxed">
            A smaller car such as a Fiat Linea, Renault Symbol, or Kia Picanto is easier to park in Fethiye center and often has lower daily rates and deposit holds, which is useful if your total budget is under &euro;300. A larger option such as a Dacia Lodgy, Volkswagen Passat, or Toyota Hilux is more suitable if you plan to carry luggage, children, or sports gear on longer trips around Mu&#x11F;la Province. Caveat: bigger vehicles can cost 20%&ndash;40% more per day and may require a higher preauthorisation, especially in high season.
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
          <p className="text-xl mb-6">Know the rules, pick the right cover, and drive with confidence. Compare deals now.</p>
          <Link to="/#compare" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Compare &Ouml;l&uuml;deniz Car Rental Deals
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default TipsInsurance;

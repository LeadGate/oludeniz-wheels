import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Plane, Shield, Route, Mountain, CreditCard, Moon, Construction, HelpCircle } from "lucide-react";
import heroDalamanAirport from "@/assets/hero-dalaman-airport.webp";
import sectionGocekTunnel from "@/assets/section-gocek-tunnel.webp";

const faqData = [
  {
    question: "What documents do I need to collect a rental car at Dalaman Airport?",
    answer: "You need a valid driving license, passport or national ID, credit card, and booking confirmation. Most suppliers also require the primary driver and any named additional drivers to be present, and many international companies use a terminal rental counter while local firms often use a meet-and-greet service in the arrivals hall. The only common exception is that some suppliers may request an International Driving Permit if your license is not in Roman script."
  },
  {
    question: "How much is the security deposit at Dalaman Airport?",
    answer: "The deposit is usually €120 for mini cars, about €150 for intermediate cars, €200 for full-size or crossover models, and around €250 for premium vehicles. Those figures are typical for a Kia Picanto, Renault Clio, Fiat Egea, Dacia Duster, Ford Focus, or Volkswagen Passat, although each supplier can set its own franchise and deductible. Banks can still take 7–14 business days to release the preauthorisation after return, so check the contract for card-hold timing."
  },
  {
    question: "Is insurance included in Dalaman Airport car rental?",
    answer: "Yes, mandatory third-party liability insurance is normally included, and it is legally known as Zorunlu Trafik Sigortası or ZMSS. Rental offers often add CDW, SCDW, FDW, or Kasko options that reduce the excess, deductible, muafiyet, or franchise on your side. Tyres, glass, underbody damage, and lost keys are common exclusions, so confirm the exact wording before paying for zero excess or full coverage."
  },
  {
    question: "Can I drive from Dalaman Airport to Ölüdeniz at night?",
    answer: "Yes, but you should drive carefully because the D400 and nearby rural roads can be dark, winding, and affected by wildlife. The route is about 60 kilometres and usually takes 75–90 minutes, but rain, tunnel traffic, or road works can extend the trip. If you arrive late, choose a vehicle with stable handling, such as a Fiat Egea Cross, Hyundai Bayon, or Nissan Qashqai, and ask for a clear meet-and-greet pickup plan."
  },
  {
    question: "Is the Göcek Tunnel worth paying for?",
    answer: "Yes, the Göcek Tunnel is usually worth paying for if you want the fastest route, because it avoids the 44-bend mountain road and saves around 15–20 minutes. The standard car toll is 75 TL in the 2026 season, and the tunnel accepts cash, credit cards, and HGS, while the bypass is free. The caveat is that scenic drivers and travellers with spare time may prefer the mountain road for the elevated views over the Göcek area."
  }
];

const DalamanAirport = () => {
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
        name: "Airport Guide",
        item: "https://oludeniz-rent-a-car.com/dalaman-airport-car-rental",
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Dalaman Airport Car Rental — Pickup Guide, Deposits & Route to Ölüdeniz (2026)"
        description="Complete Dalaman Airport car rental pickup guide. Insurance, deposits, HGS tolls, Göcek Tunnel, night driving tips, and the 60 km route to Ölüdeniz."
        canonical="https://oludeniz-rent-a-car.com/dalaman-airport-car-rental"
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Hero Section */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={heroDalamanAirport} alt="Dalaman Airport terminal exterior with rental car parking area" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dalaman Airport Car Rental &mdash; Your Complete Pickup Guide</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Collecting a rental car at Dalaman Airport (DLM) is usually the fastest way to reach &Ouml;l&uuml;deniz, and the standard route covers about 60 kilometres in 75&ndash;90 minutes via the D400 highway. Dalaman Airport sits in Mu&#x11F;la Province on the Turkish Aegean, and the drive follows the Lycian Coast/Turquoise Coast corridor past G&ouml;cek, Ovac&#x131;k, and Hisar&ouml;n&uuml; before the descent to &Ouml;l&uuml;deniz and the Blue Lagoon. If your booking uses a terminal counter, meet-and-greet, or name sign pickup, you can still complete the handover in the arrivals hall with your passport, driving license, and credit card ready. For a smoother start, compare policies from <strong>Dalaman Car Hire</strong>, <strong>Oscar Rent a Car</strong>, <strong>Yelken Rent a Car</strong>, <strong>Marin Rent a Car</strong>, <strong>Turun&ccedil; Rent a Car</strong>, <strong>TinyAkropol</strong>, <strong>Circular Car Hire</strong>, <strong>Apple Rent a Car</strong>, <strong>Garenta</strong>, <strong>Sixt</strong>, <strong>Enterprise</strong>, <strong>Avis</strong>, <strong>Europcar</strong>, <strong>Cizgi Rent a Car</strong>, <strong>Babadan Rent a Car</strong>, <strong>Budget</strong>, and <strong>Localrent</strong> before you land.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "Airport Guide" }]} />
      </div>

      {/* Picking Up Your Rental Car */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Picking Up Your Rental Car at Dalaman Airport</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dalaman Airport rental pickup is straightforward because most suppliers place their desks in the terminal or use a meet-and-greet service in the arrivals hall. International brands such as <strong>Enterprise</strong>, <strong>Avis</strong>, <strong>Europcar</strong>, <strong>Sixt</strong>, <strong>Garenta</strong>, and <strong>Budget</strong> usually operate a rental counter inside the terminal, while local providers like <strong>Cizgi Rent a Car</strong>, <strong>Babadan Rent a Car</strong>, <strong>Oscar Rent a Car</strong>, <strong>Yelken Rent a Car</strong>, <strong>Marin Rent a Car</strong>, <strong>Turun&ccedil; Rent a Car</strong>, <strong>TinyAkropol</strong>, <strong>Circular Car Hire</strong>, <strong>Apple Rent a Car</strong>, and <strong>Dalaman Car Hire</strong> often meet customers with a name sign at the airport exit.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The primary driver must present a valid <strong>driving license</strong>, <strong>passport or national ID</strong>, <strong>credit card</strong>, and <strong>booking confirmation</strong> at pickup. Additional drivers must also show their own licenses, and many suppliers require every named driver to be physically present at the counter.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            An International Driving Permit is usually not required for short tourist stays from the UK and EU, but rental firms can still ask for it when the driving license is not in Roman script. The minimum age is commonly 19 to 21, and some vehicle groups such as a <strong>Volkswagen Passat</strong>, <strong>Toyota Hilux</strong>, or <strong>Nissan Qashqai</strong> may require a higher age or extra surcharge.
          </p>
          <InfoBox>
            <p className="text-gray-700">
              Most international companies require a <strong>preauthorisation</strong> on an embossed credit card in the main driver&rsquo;s name, and they often reject debit cards, prepaid cards, and mobile wallets for the deposit. <strong>Localrent</strong> and some local agencies may accept debit cards or cash for selected bookings, but the exact rule depends on the supplier and the vehicle class.
            </p>
          </InfoBox>
        </div>
      </Section>

      {/* Insurance, Deposits, and Excess Rules */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Insurance, Deposits, and Excess Rules in Turkey</h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Car hire in Turkey normally includes mandatory third-party liability cover, known locally as <strong>Zorunlu Trafik Sigortas&#x131;</strong> or <strong>ZMSS</strong>, plus optional collision protection that may be sold as <strong>CDW</strong>, <strong>SCDW</strong>, <strong>FDW</strong>, <strong>Kasko</strong>, <strong>zero excess</strong>, or <strong>full coverage</strong>. The legal compulsory policy covers injury or damage to other parties, while the rental contract usually keeps an excess, deductible, or franchise on the renter&rsquo;s side unless you buy a waiver. For example, a <strong>Fiat Egea</strong> can be listed at <strong>&euro;18&ndash;&euro;28 per day</strong> with CDW and a <strong>&euro;120&ndash;&euro;250 excess</strong>, while a <strong>Dacia Duster</strong> or <strong>Hyundai Bayon</strong> often costs more because the deposit and franchise are higher.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Insurance Term</th>
                  <th className="p-3 text-left">What It Usually Means</th>
                  <th className="p-3 text-left">Typical Effect at Pickup</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 font-semibold border-b">ZMSS / Zorunlu Trafik Sigortas&#x131;</td>
                  <td className="p-3 border-b">Mandatory third-party liability insurance</td>
                  <td className="p-3 border-b">Included by law</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 font-semibold border-b">CDW</td>
                  <td className="p-3 border-b">Collision damage waiver</td>
                  <td className="p-3 border-b">Reduces damage liability</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold border-b">SCDW / FDW</td>
                  <td className="p-3 border-b">Super or full damage waiver</td>
                  <td className="p-3 border-b">Lowers or removes excess</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 font-semibold border-b">Kasko</td>
                  <td className="p-3 border-b">Local comprehensive cover term</td>
                  <td className="p-3 border-b">Often sold as broad protection</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold border-b">Zero excess / full coverage</td>
                  <td className="p-3 border-b">No renter-paid deductible in the contract</td>
                  <td className="p-3 border-b">Lowest out-of-pocket exposure</td>
                </tr>
                <tr className="bg-[#F7F5F0]">
                  <td className="p-3 font-semibold border-b">Franchise / deductible / excess / muafiyet</td>
                  <td className="p-3 border-b">Amount you pay before cover applies</td>
                  <td className="p-3 border-b">Held as a deposit or blocked amount</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            A preauthorisation block is standard at Dalaman Airport, and the amount usually ranges from about <strong>&euro;120</strong> for a <strong>Kia Picanto</strong> or <strong>Renault Clio</strong> to <strong>&euro;250 or more</strong> for a <strong>Volkswagen Passat</strong>, <strong>Ford Focus</strong>, or <strong>Nissan Qashqai</strong>. Banks may take <strong>7&ndash;14 business days</strong> to release the funds after return, so a zero excess or full coverage upgrade can be useful if you want to reduce the blocked amount, but some packages still exclude tyres, glass, underbody damage, or lost keys.
          </p>
        </div>
      </Section>

      {/* Driving Route */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Route className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Driving from Dalaman Airport to &Ouml;l&uuml;deniz</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The drive from Dalaman Airport to &Ouml;l&uuml;deniz is about <strong>60 kilometres</strong> and normally takes <strong>75&ndash;90 minutes</strong> under daylight traffic. The route leaves the airport, joins the <strong>D400 highway</strong>, passes through <strong>G&ouml;cek</strong>, continues toward <strong>Fethiye</strong>, and then climbs through <strong>Ovac&#x131;k</strong> and <strong>Hisar&ouml;n&uuml;</strong> before descending toward <strong>&Ouml;l&uuml;deniz</strong> and the <strong>Blue Lagoon</strong>. If you are staying in nearby bases such as <strong>&Ccedil;al&#x131;&#x15F; Beach</strong>, <strong>Kayak&ouml;y</strong>, <strong>Faralya</strong>, <strong>Kabak Beach</strong>, or <strong>&Uuml;z&uuml;ml&uuml;</strong>, the same road network is used for most access.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A standard compact such as a <strong>Fiat Egea</strong>, <strong>Renault Clio</strong>, <strong>Hyundai i20</strong>, <strong>Citroen C3</strong>, <strong>Opel Astra</strong>, <strong>Skoda Scala</strong>, or <strong>Renault Taliant</strong> is enough for the main route, but a <strong>Dacia Duster</strong> or <strong>Fiat Egea Cross</strong> is more comfortable if you plan to visit <strong>Babada&#x11F; Mountain</strong>, <strong>Kelebekler Vadisi/Butterfly Valley</strong>, <strong>Gemiler Island</strong>, or the higher roads around <strong>Faralya</strong>. Drivers heading farther afield to <strong>Sakl&#x131;kent Gorge</strong>, <strong>Tlos</strong>, <strong>Xanthos</strong>, <strong>Letoon</strong>, <strong>Patara Beach</strong>, <strong>Ka&#x15F;</strong>, <strong>Kalkan</strong>, <strong>Dalyan</strong>, <strong>K&ouml;yce&#x11F;iz</strong>, <strong>G&ouml;cek</strong>, or <strong>Pamukkale</strong> often choose a crossover or full-size saloon such as a <strong>Ford Focus</strong> or <strong>Volkswagen Passat</strong>.
          </p>
        </div>
      </Section>

      {/* Göcek Tunnel */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">The G&ouml;cek Tunnel and the Mountain Bypass</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The G&ouml;cek Tunnel is a <strong>900-metre private toll tunnel</strong> on the D400 corridor, and it is the fastest way through the hillside section. The standard car toll is <strong>75 TL</strong> for the 2026 season, up from 60 TL in 2025, and the charge applies in both directions. The tunnel accepts <strong>cash</strong>, <strong>credit cards</strong>, and <strong>HGS</strong>, while the older mountain bypass is free, roughly <strong>5.5 kilometres</strong> long, and known for <strong>44 bends</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The bypass is useful if you want a scenic route with views over the G&ouml;cek bays, but it can add <strong>15&ndash;20 minutes</strong> in normal traffic. Rental companies do not always explain toll handling clearly, so ask whether HGS charges are billed later with an admin fee or preloaded into your invoice.
          </p>
        </div>
      </Section>

      {/* Image Section — Göcek Tunnel */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={sectionGocekTunnel} alt="Göcek Tunnel entrance on the D400 highway near Dalaman" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The G&ouml;cek Tunnel &mdash; 75 TL Toll or 44-Bend Mountain Bypass</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Choose the fast tunnel or the scenic mountain road with views over G&ouml;cek bays</p>
        </div>
      </section>

      {/* HGS Electronic Tolls */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">HGS Electronic Tolls and Rental Billing</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Turkey uses <strong>HGS</strong>, or <strong>H&#x131;zl&#x131; Ge&ccedil;i&#x15F; Sistemi</strong>, for electronic toll collection on highways and bridges, and OGS was retired in March 2022. Most Dalaman Airport vehicles have an HGS sticker on the windshield, so tolls are usually recorded automatically as you pass through the lane. That convenience matters on routes toward <strong>Fethiye</strong>, <strong>Ka&#x15F;</strong>, and <strong>Pamukkale</strong>, where toll roads may appear on longer trips.
          </p>
          <WarningBox>
            <p className="text-gray-700">
              The important point is billing transparency, because some suppliers charge the toll plus a service fee after return and others pre-authorise a toll credit at pickup. Ask the rental counter for a written HGS policy, and keep your contract because the official portal may require a Turkish ID number that most visitors do not have.
            </p>
          </WarningBox>
        </div>
      </Section>

      {/* Night Driving */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Moon className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Night Driving Tips: Dalaman to Fethiye</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Night driving between Dalaman and Fethiye requires slower speeds because large stretches of the D400 and nearby rural roads are unlit. Wildlife crossings are common in the surrounding Mu&#x11F;la Province, especially near wooded sections where <strong>wild boars</strong>, <strong>goats</strong>, <strong>cattle</strong>, and <strong>dogs</strong> may appear suddenly on the road. If your arrival is late, a <strong>Renault Symbol</strong>, <strong>Fiat Linea</strong>, or <strong>Kia Picanto</strong> is still suitable, but only if you drive conservatively and avoid overtaking on bends.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Rain can make the asphalt slippery after long dry periods, because oil and dust collect on the surface and reduce grip when the first showers arrive. <strong>Yandex Navigasyon</strong> and <strong>Waze</strong> are useful for mobile speed-camera alerts, and the Turkish Traffic Police can be reached by dialling <strong>155</strong> in an emergency. For airport arrivals that finish after dark, a meet-and-greet or name sign pickup is often easier than trying to locate an off-airport desk in the terminal area.
          </p>
        </div>
      </Section>

      {/* Road Construction */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Construction className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Road Construction Alert on the Fethiye&ndash;&Ouml;l&uuml;deniz Corridor</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Road works on the <strong>13.5-kilometre Fethiye&ndash;&Ouml;l&uuml;deniz corridor</strong> are important for 2026 travellers because the project is backed by a <strong>328-million-TL budget</strong> and staged traffic management. Stage 1 between <strong>Patlang&#x131;&ccedil;</strong> and <strong>Ovac&#x131;k</strong> has been completed with widening to 15 metres, Stage 2 between <strong>Ovac&#x131;k</strong> and the city center is in progress, Stage 3 between <strong>Hisar&ouml;n&uuml;</strong> and <strong>&Ouml;l&uuml;deniz</strong> has been completed, and Stage 4 between <strong>&Ouml;l&uuml;deniz</strong> and <strong>Kayak&ouml;y</strong> is mostly completed.
          </p>
          <InfoBox>
            <p className="text-gray-700">
              Construction is usually paused from June to August, which means <strong>April&ndash;May</strong> and <strong>September&ndash;October</strong> are the most likely months for delays, diversions, or single-lane sections. If you are staying in <strong>Fethiye</strong>, <strong>&Ouml;l&uuml;deniz</strong>, <strong>Kayak&ouml;y</strong>, or <strong>Ovac&#x131;k</strong> during those shoulder months, allow extra time and expect variable speeds near work zones.
            </p>
          </InfoBox>
        </div>
      </Section>

      {/* FAQ */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">FAQ</h2>
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

      {/* Footer CTA */}
      <section className="relative py-16 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,46,0.6),rgba(212,160,60,0.3))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <p className="text-xl mb-6">Ready to pick up your car at Dalaman Airport? Compare deals from local and international agencies.</p>
          <Link to="/#compare" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Compare Car Rental Deals
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DalamanAirport;

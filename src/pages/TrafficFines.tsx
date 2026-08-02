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
import { ReceiptText, CreditCard, Landmark, TriangleAlert, Scale, HelpCircle } from "lucide-react";
import AffiliateWidget from "@/components/AffiliateWidget";

const faqData = [
  {
    question: "Do I have to pay a traffic fine from my Ölüdeniz rental car myself?",
    answer:
      "No. Since the 27 February 2026 change (Law No. 7574), the notice may be addressed to you as the renter once KABİS confirms the rental, but the actual government payment channels are not built for foreign tourists — no source describes a reliable procedure for a renter with no Turkish ID to settle it directly. In practice the rental company pays it and recharges your card.",
  },
  {
    question: "Can I use the GİB “Yabancı Plakalı Araç” portal to pay it myself?",
    answer:
      "No. That portal is for vehicles on foreign number plates. A car hired at Dalaman carries a Turkish plate, so the portal does not recognise it, and the underlying tax-system link (T.C. Kimlik / VKN) does not match a tourist anyway.",
  },
  {
    question: "How much extra will the rental company charge on top of the fine?",
    answer:
      "It depends entirely on the firm. Cizgi Rent a Car charges a flat 300 TL per fine. Garenta charges 30% of the base fine, plus 12% on HGS toll usage separately. Oscar Rent a Car charges 25% of the base fine, which — worked through the numbers — roughly cancels the government's 25% early-payment discount. Avis Türkiye and Budget Türkiye use the discounted fine plus an unpublished fixed service fee. Local Fethiye firms do not publish a figure at all, so ask before you sign.",
  },
  {
    question: "Will I still get the benefit of the 25% early-payment discount?",
    answer:
      "It depends on the firm, and the two documented practices point in different directions. Some rental companies pay within the one-month window, bank the 25% saving, and bill the renter only the discounted amount. Others are reported to keep the saving and bill the full, undiscounted fine regardless of when they paid. There is no way to tell in advance which practice applies to your booking, so it is worth asking directly.",
  },
  {
    question: "Can I be stopped from leaving Türkiye over an unpaid fine?",
    answer:
      "No exit ban applies to a tourist leaving on a Turkish-plated hire car with an unpaid fine — that strict rule is for foreign-plated vehicles. Turkish legal sources do indicate an unpaid fine can potentially be collected on your next entry to the country, though sources are not unanimous, so treat it as a real but not certain risk worth clearing rather than something to panic about.",
  },
  {
    question: "Is it worth appealing a fine?",
    answer:
      "Only if you are confident the offence is wrong and you are willing to either file in person at the Sulh Ceza Hâkimliği before leaving Türkiye, or pay a Turkish lawyer with power of attorney — which usually costs more than the fine. Paying the discounted amount first does not forfeit that right, and a successful appeal gets the money refunded.",
  },
  {
    question: "Are HGS toll charges handled the same way as fines?",
    answer:
      "No. HGS escalates on its own schedule: no penalty for the first 15 days, double the toll from day 16 to day 45, and after day 45 the base toll plus four times the toll — five times the original amount in total. It is tied to the rental firm's own HGS account balance, not a KABİS-linked penalty notice, and is often billed to renters simply as an “HGS usage fee”.",
  },
];

const TrafficFines = () => {
  return (
    <Layout>
      <SEOHead
        title="Traffic Fines on a Rental Car in Ölüdeniz: Who Pays in 2026"
        description="Got a fine in an Ölüdeniz hire car? Since February 2026 it is issued to you, not the rental firm. What each company adds on top, and why you cannot pay it yourself."
        canonical="https://oludeniz-rent-a-car.com/traffic-fines-rental-car-oludeniz/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src="/traffic-fines-oludeniz-hero.webp"
          alt="Coastal mountain road descending toward the Ölüdeniz lagoon with a speed limit sign at the roadside"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Traffic Fines in a Rental Car Around Ölüdeniz: Who Actually Pays, and How Much
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Since 27 February 2026 a fine caught in a hire car is normally issued to <strong>you</strong>, the renter — not to the rental company. You almost certainly cannot pay it yourself, and the figure that reaches your card is the fine plus the firm&rsquo;s own handling fee.
          </p>
        </div>
      </section>

      <AffiliateWidget />

      <div className="max-w-5xl mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "Traffic Fines" }]} />
      </div>

      {/* Intro / answer-first */}
      <Section className="intro-section">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            If you hired a car in Ölüdeniz and a fine has landed — or you are worried one might — here is the plain answer. Since 27 February 2026, a new law (No. 7574, amending Highway Traffic Law No. 2918) means the penalty for an offence committed in a hire car is now normally issued to <strong>you</strong>, the renter, not the rental company, once police confirm through KABİS (Kiralık Araç Bildirim Sistemi, the rental notification system) that the car was on hire that day.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            In practice, you almost certainly cannot rely on paying it yourself through a Turkish government payment channel — those channels are built around Turkish citizens and Turkish-registered companies, not tourists. What actually happens is that the rental firm settles the fine and then charges your card, adding its own handling fee on top. Below is that combined figure worked through for the most common offences, and an explanation of why the portal advice you will find on forums does not apply to a Turkish-plated hire car.
          </p>
        </div>
      </Section>

      {/* Who the fine is issued to */}
      <Section alt>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <ReceiptText className="w-8 h-8 text-primary" />
            Who the Fine Is Actually Issued To Now
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before 27 February 2026, a speed camera that caught a hire car&rsquo;s plate produced a penalty notice addressed to the registered owner — the rental company — under Article 116 of the Highway Traffic Law (KTK, Law No. 2918). The company then had internal terms to pass the cost to whoever had the car booked. Law No. 7574, passed by parliament on 12 February 2026 and published in the Resmî Gazete on 27 February 2026, changes that starting point: where KABİS confirms the vehicle was under an active rental contract on the date of the offence, the notice is directed to the renter instead. The law took effect on publication.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start mt-6">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                What no official source spells out is the mechanics for a foreign tourist with no Turkish address and no T.C. Kimlik number — there is simply no published procedure for serving a notice on someone who is not reachable inside the Turkish administrative system.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In practice, that gap is filled by the rental contract you signed: the company remains the party that actually clears the debt with the traffic authority and then recharges your card or deposit. If a fine reaches you, ask the firm for a copy of the penalty record (<strong>ceza tutanağı</strong>) and the date of the offence, so you can at least check it falls inside your rental period.
              </p>
            </div>
            <img
              src="/traffic-fines-oludeniz-notice.webp"
              alt="Rental car parked near the Ölüdeniz seafront with a paper notice under the windscreen wiper"
              className="rounded-lg w-full h-auto mt-6 md:mt-0"
              loading="lazy"
              width={1200}
              height={675}
            />
          </div>
        </div>
      </Section>

      {/* How the money reaches your card */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-primary" />
            How the Money Actually Reaches Your Card
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Where a notice is served on the rental company rather than the renter, it goes through <strong>e-Tebligat</strong>, the electronic notification system, and is legally deemed served at the end of the fifth day after it lands in the company&rsquo;s electronic inbox. That five-day clock is what starts the countdown to the 25% early-payment discount described below.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Either way, the contractual route to your money is the same one you signed at the pick-up desk: a clause allowing the firm to charge fines, tolls and associated fees to the card on file, sometimes weeks or months after you have flown home from Dalaman. This is standard across Turkish rental agreements and is exactly why a charge can appear with no warning — the underlying offence, the notice, and the firm&rsquo;s own payment cycle can each take weeks. For the full rundown of what else can legitimately hit your card under a Turkish rental contract, see our{" "}
            <Link to="/rental-tips-insurance" className="text-primary hover:underline">
              rental insurance and scam-avoidance guide
            </Link>.
          </p>
        </div>
      </Section>

      {/* THE MAIN TABLE */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Actually Leaves Your Card: The Real Numbers</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This table sets out the 2026 base fine, the discounted price if it is paid promptly, and what each named rental firm&rsquo;s published fee structure adds — calculated, as documented, on the <strong>base</strong> fine rather than the discounted amount actually paid.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Offence (2026 rate)</th>
                  <th className="p-3 text-right">Base fine</th>
                  <th className="p-3 text-right">Paid within 1 month (25% off)</th>
                  <th className="p-3 text-right">+ Cizgi (flat 300 TL)</th>
                  <th className="p-3 text-right">+ Garenta (30% of base)</th>
                  <th className="p-3 text-right">+ Oscar (25% of base)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-secondary/60 transition-colors">
                  <td className="p-3 border-b"><strong>Speeding, 10&ndash;30% over limit</strong></td>
                  <td className="p-3 border-b text-right">2,719 TL</td>
                  <td className="p-3 border-b text-right">2,039 TL</td>
                  <td className="p-3 border-b text-right text-green-700">2,339 TL</td>
                  <td className="p-3 border-b text-right text-red-700">2,855 TL</td>
                  <td className="p-3 border-b text-right">2,719 TL</td>
                </tr>
                <tr className="bg-[#F7F5F0] hover:bg-secondary/60 transition-colors">
                  <td className="p-3 border-b"><strong>Speeding, 30&ndash;50% over limit</strong></td>
                  <td className="p-3 border-b text-right">5,662 TL</td>
                  <td className="p-3 border-b text-right">4,247 TL</td>
                  <td className="p-3 border-b text-right text-green-700">4,547 TL</td>
                  <td className="p-3 border-b text-right text-red-700">5,945 TL</td>
                  <td className="p-3 border-b text-right">5,662 TL</td>
                </tr>
                <tr className="bg-white hover:bg-secondary/60 transition-colors">
                  <td className="p-3 border-b"><strong>Speeding, more than 50% over</strong></td>
                  <td className="p-3 border-b text-right">11,631 TL</td>
                  <td className="p-3 border-b text-right">8,723 TL</td>
                  <td className="p-3 border-b text-right text-green-700">9,023 TL</td>
                  <td className="p-3 border-b text-right text-red-700">12,213 TL</td>
                  <td className="p-3 border-b text-right">11,631 TL</td>
                </tr>
                <tr className="bg-[#F7F5F0] hover:bg-secondary/60 transition-colors">
                  <td className="p-3 border-b"><strong>Running a red light</strong></td>
                  <td className="p-3 border-b text-right">5,000 TL</td>
                  <td className="p-3 border-b text-right">3,750 TL</td>
                  <td className="p-3 border-b text-right text-green-700">4,050 TL</td>
                  <td className="p-3 border-b text-right text-red-700">5,250 TL</td>
                  <td className="p-3 border-b text-right">5,000 TL</td>
                </tr>
                <tr className="bg-white hover:bg-secondary/60 transition-colors">
                  <td className="p-3 border-b"><strong>Illegal or incorrect parking</strong></td>
                  <td className="p-3 border-b text-right">1,246 TL</td>
                  <td className="p-3 border-b text-right">935 TL</td>
                  <td className="p-3 border-b text-right">1,235 TL</td>
                  <td className="p-3 border-b text-right text-red-700">1,308 TL</td>
                  <td className="p-3 border-b text-right">1,246 TL</td>
                </tr>
                <tr className="bg-[#F7F5F0] hover:bg-secondary/60 transition-colors">
                  <td className="p-3 border-b"><strong>Driving the wrong way</strong></td>
                  <td className="p-3 border-b text-right">25,000 TL</td>
                  <td className="p-3 border-b text-right">18,750 TL</td>
                  <td className="p-3 border-b text-right text-green-700">19,050 TL</td>
                  <td className="p-3 border-b text-right text-red-700">26,250 TL</td>
                  <td className="p-3 border-b text-right">25,000 TL</td>
                </tr>
              </tbody>
            </table>
          </div>

          <WarningBox>
            <p className="text-gray-800 leading-relaxed">
              <strong>The pattern is not intuitive.</strong> At Oscar&rsquo;s 25% fee, calculated on the base fine, the fee is almost exactly the size of the 25% discount the state gives for early payment — the two cancel out and you pay close to the <strong>full, undiscounted base fine</strong>. At Garenta&rsquo;s 30%, the fee is larger than the discount, so you pay <strong>more than the base fine</strong>: the government&rsquo;s early-payment saving never reaches you at all. Cizgi&rsquo;s flat 300 TL is the only structure here that leaves you below the headline figure on a large fine — though on a small parking penalty a flat fee costs more than a percentage.
            </p>
          </WarningBox>

          <p className="text-gray-700 leading-relaxed mt-6">
            This is the documented basis for how these three firms describe their fees, not a guarantee — a firm could in principle calculate its percentage on the discounted amount instead, which would produce lower totals than shown here. Two firms sit outside the table on other terms. <strong>Garenta</strong> also charges 12% on HGS toll usage specifically, separate from its 30% fine fee. <strong>Avis Türkiye</strong> and <strong>Budget Türkiye</strong> use a variable model — the discounted fine plus a fixed service fee — but neither publishes the fixed amount, so it cannot be calculated here. The Fethiye-based local operators (Babadan, Yelken, Marin, TinyAkropol, Circular and Apple) do not publish a fine-handling fee at all. Ask for the figure in writing before you sign. For the full catalogue of Turkish fine categories beyond these six, see our{" "}
            <Link to="/rental-tips-insurance" className="text-primary hover:underline">
              rental tips and insurance guide
            </Link>.
          </p>
        </div>
      </Section>

      {/* Why you cannot pay it yourself */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Landmark className="w-8 h-8 text-primary" />
            Why You Probably Cannot Pay It Yourself
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The advice that circulates on expat forums — &ldquo;just pay it on the GİB portal&rdquo; — does not apply to your situation, and it is worth explaining why clearly. The{" "}
            <a
              href="https://dijital.gib.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Revenue Administration&rsquo;s digital tax office
            </a>{" "}
            hosts a <strong>&ldquo;Yabancı Plakalı Araç Ödemeleri&rdquo;</strong> (Foreign-Plated Vehicle Payments) section, and it is ring-fenced for exactly what its name says: vehicles carrying <strong>foreign</strong> number plates, typically someone who drove their own car across the border into Türkiye. A car hired from a desk at Dalaman carries a <strong>Turkish</strong> plate, so this section simply does not recognise it, regardless of your own nationality.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The deeper reason is structural: Turkish-plated vehicles are linked in the tax system to the registered owner&rsquo;s T.C. Kimlik number, or the corporate tax number (VKN) where the owner is a company — in this case, the rental firm. A tourist holds neither, so GİB İnteraktif and e-Devlet will ask for credentials a visitor does not have. That said, it is occasionally reported that a <strong>PTT counter or a bank branch</strong> will accept a payment against a Turkish-plated fine if you present the penalty record number and the vehicle&rsquo;s plate — but this is not documented as a reliable route, and it is not something to plan around. The rental company, holding the VKN the system recognises, remains the party you should expect to settle the debt.
          </p>
        </div>
      </Section>

      {/* Discount, interest, ceiling */}
      <Section alt>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The 25% Discount, the Interest, and the Ceiling</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Turkish traffic law gives a <strong>25% discount</strong> if the fine is paid within <strong>one month</strong> of legal notification — extended from the previous 15-day window by an amendment published on 31 January 2024. That month is counted from the date of notification, not the date of the offence, and if the notice went to the rental company via e-Tebligat, the clock starts on the fifth day after delivery.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Miss the window and the fine reverts to its full amount, then accrues interest under <strong>KTK Article 115</strong> at 5% per month, with any part-month counted as a full month. That interest is subject to a statutory ceiling, though sources differ on exactly what the ceiling caps: the prevailing reading is that the interest itself is capped at twice the original fine, which would put the maximum total debt at three times the base amount — while other readings apply the cap to the total debt directly. For a renter the distinction is largely academic, because the rental company normally settles long before any ceiling would bite. The practical point is simpler: a well-organised firm pays fast and avoids interest altogether; a slow one lets the window close and adds accruing interest to whatever it then bills you.
          </p>
        </div>
      </Section>

      {/* HGS */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Tolls (HGS): A Different Set of Rules</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Turkish motorway and bridge tolls run on <strong>HGS</strong>, a separate system with its own escalation, unconnected to KTK penalty fines.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Days since the toll passage</th>
                  <th className="p-3 text-left">What is actually owed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-secondary/60 transition-colors">
                  <td className="p-3 border-b"><strong>Days 1&ndash;15</strong></td>
                  <td className="p-3 border-b text-green-700">Base toll only — no penalty</td>
                </tr>
                <tr className="bg-[#F7F5F0] hover:bg-secondary/60 transition-colors">
                  <td className="p-3 border-b"><strong>Days 16&ndash;45</strong></td>
                  <td className="p-3 border-b text-amber-700">Base toll + 1&times; the toll amount (you pay double)</td>
                </tr>
                <tr className="bg-white hover:bg-secondary/60 transition-colors">
                  <td className="p-3 border-b"><strong>After day 45</strong></td>
                  <td className="p-3 border-b text-red-700">Base toll + 4&times; the toll amount — five times the original toll in total</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            The HGS sticker on a hire car is registered to the rental company&rsquo;s own corporate account, not yours. If the firm lets that account&rsquo;s balance run dry, the multiplier above is generated automatically on their side — and it is routinely passed straight to the renter&rsquo;s card, often appearing only as a vague &ldquo;HGS usage fee&rdquo; line with no breakdown. Garenta specifically charges 12% on top of HGS toll usage. If you are driving in from Dalaman and crossing any tolled sections en route, our{" "}
            <Link to="/dalaman-airport-car-rental" className="text-primary hover:underline">
              Dalaman Airport pickup and HGS toll guide
            </Link>{" "}
            covers what to check with the desk before you leave the lot.
          </p>
        </div>
      </Section>

      {/* Parking and towing */}
      <Section alt>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <TriangleAlert className="w-8 h-8 text-primary" />
            Parking and Towing in Fethiye and Ölüdeniz
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                An illegally parked hire car in the Fethiye area that gets towed is taken to <strong>Ecesu Oto Kurtarma – Oto Park ve İcra Deposu</strong>, on the D400 bypass in the Çamköy neighbourhood. Muğla is classified as a <strong>&ldquo;2nd Region&rdquo;</strong> zone under the 2026 official trustee (yediemin) tariff.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-3 text-left">Component</th>
                      <th className="p-3 text-right">2026 Muğla rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-secondary/60 transition-colors">
                      <td className="p-3 border-b">Recovery / hook-up base fee</td>
                      <td className="p-3 border-b text-right">735 TL</td>
                    </tr>
                    <tr className="bg-[#F7F5F0] hover:bg-secondary/60 transition-colors">
                      <td className="p-3 border-b">Per kilometre towed</td>
                      <td className="p-3 border-b text-right">73.40&ndash;98 TL / km</td>
                    </tr>
                    <tr className="bg-white hover:bg-secondary/60 transition-colors">
                      <td className="p-3 border-b">Storage</td>
                      <td className="p-3 border-b text-right">110.10 TL / day</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <img
              src="/traffic-fines-oludeniz-tow.webp"
              alt="Tow truck loading a car on the D400 bypass road outside Fethiye"
              className="rounded-lg w-full h-auto mt-6 md:mt-0"
              loading="lazy"
              width={1200}
              height={675}
            />
          </div>
          <InfoBox>
            <p className="text-gray-800 leading-relaxed">
              These release costs are paid in cash directly at the pound to get your car back. They are separate from, and additional to, the underlying illegal-parking fine (1,246 TL, or 935 TL at the 25% discount), which still reaches you later through the rental company. For everyday parking that does not end in a tow, see our{" "}
              <Link to="/parking-fuel-guide" className="text-primary hover:underline">
                Ölüdeniz parking and fuel guide
              </Link>.
            </p>
          </InfoBox>
        </div>
      </Section>

      {/* Where fines happen */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Where Fines Actually Happen Around Ölüdeniz</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Enforcement in the area is concentrated on two stretches of road. The <strong>D400</strong> through Fethiye steps down in stages — from 110 km/h out on the open road to 70, then 50 km/h through the built-up section around the Çamköy and Günlükbaşı junctions — and is monitored by fixed <strong>EDS</strong> (Electronic Supervision System) cameras. Exact camera positions are not published anywhere reliable, so treat the whole urban stretch as monitored rather than trying to spot the equipment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The mountain road linking Fethiye to Ölüdeniz via <strong>Ovacık and Hisarönü</strong> carries a 50 km/h limit for good reason: steep gradients, tight switchbacks and heavy pedestrian traffic in season. Enforcement there in high season combines fixed radar with mobile <strong>Jandarma</strong> checkpoints. A new bypass road toward Kıdrak, intended to ease the Kumburnu bottleneck, began construction in April 2026 with a target completion of June 2026 — check locally whether it is open to traffic before relying on it as a shortcut. If you are planning longer routes, our{" "}
                <Link to="/scenic-drives-from-oludeniz" className="text-primary hover:underline">
                  scenic drives and day trips guide
                </Link>{" "}
                covers the roads themselves.
              </p>
            </div>
            <img
              src="/traffic-fines-oludeniz-mountain-road.webp"
              alt="Aerial view of the switchback mountain road between Hisarönü and Ölüdeniz with the lagoon below"
              className="rounded-lg w-full h-auto mt-6 md:mt-0"
              loading="lazy"
              width={1200}
              height={675}
            />
          </div>
        </div>
      </Section>

      {/* Appeal */}
      <Section alt>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Scale className="w-8 h-8 text-primary" />
            Can You Appeal, Realistically
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Yes, but the practical route is narrow for a tourist. You have <strong>15 days from the date of notification</strong> to file an objection with the <strong>Sulh Ceza Hâkimliği</strong> (Criminal Court of Peace) covering the location of the offence. There is no filing fee, though court costs can follow if the objection is rejected. Filing online through UYAP or e-Devlet requires a Turkish qualified electronic signature or a registered mobile signature — neither of which a visiting tourist holds — so in practice your realistic options are filing in person before you leave the country, or granting power of attorney to a Turkish lawyer, which usually costs more than the fine itself. One point worth knowing before you decide: paying at the 25% discounted rate does <strong>not</strong> waive your right to appeal, and if the appeal later succeeds the money is refunded.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-primary" />
            Frequently Asked Questions
          </h2>
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
          <p className="text-xl mb-6">Know the rules, keep the deposit intact, and drive Ölüdeniz with confidence.</p>
          <Link
            to="/#compare"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Compare Ölüdeniz Car Rental Deals
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default TrafficFines;

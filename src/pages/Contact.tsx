import { useState } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import heroContact from "@/assets/hero-contact.webp";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://oludeniz-rent-a-car.com/" },
    { "@type": "ListItem", position: 2, name: "Contact" },
  ],
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Contact \u2014 \u00d6l\u00fcdeniz Car Rental"
        description="Contact the oludeniz-rent-a-car.com team for questions about car rental in \u00d6l\u00fcdeniz, Turkey. We respond within 48 hours."
        canonical="https://oludeniz-rent-a-car.com/contact"
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={heroContact} alt="Turkish coastal village with boats in harbor" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Have a question about renting a car in {"\u00d6"}l{"\u00fc"}deniz? We are happy
            to help.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8">
            We are an information and comparison site, not a car rental company.
            We cannot make or modify bookings directly. For booking-related
            issues, please contact your rental provider.
          </p>
        </div>
      </Section>

      <Section alternate>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

              {submitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <p className="text-lg font-medium mb-2">
                    Thank you for your message.
                  </p>
                  <p className="text-muted-foreground">
                    We have received your inquiry and will get back to you within
                    48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Your message..."
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" size="lg" className="bg-primary">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Other Ways to Reach Us</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a
                    href="mailto:info@oludeniz-rent-a-car.com"
                    className="text-primary hover:underline"
                  >
                    info@oludeniz-rent-a-car.com
                  </a>
                </div>

                <div>
                  <h3 className="font-medium mb-1">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond within 48 hours.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-1">Please Note</h3>
                  <p className="text-muted-foreground">
                    We are an information and comparison site, not a car rental
                    company. We do not operate rental vehicles and cannot process
                    bookings, cancellations, or refunds. For booking-related
                    issues, please contact your rental provider directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;

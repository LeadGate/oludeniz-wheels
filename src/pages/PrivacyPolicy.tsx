import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://oludeniz-rent-a-car.com/" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy" },
  ],
};

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy \u2014 \u00d6l\u00fcdeniz Car Rental"
        description="Privacy policy for oludeniz-rent-a-car.com. How we handle your data, cookies, and third-party services on our \u00d6l\u00fcdeniz car rental guide."
        canonical="https://oludeniz-rent-a-car.com/privacy"
        jsonLd={[breadcrumbSchema]}
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground">
            This privacy policy explains how oludeniz-rent-a-car.com collects,
            uses, and protects your information when you visit our website.
          </p>
        </div>
      </Section>

      <Section alternate>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>

          <p className="text-muted-foreground mb-4">
            We collect information you voluntarily provide through our contact
            form, including your name, email address, and message content. We
            also collect anonymous usage data through analytics tools, such as
            pages visited, time spent on the site, referring URLs, and general
            geographic location.
          </p>

          <p className="text-muted-foreground">
            We do not collect sensitive personal information such as payment
            details, government identification numbers, or health data.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Information
          </h2>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              To respond to inquiries submitted through our contact form
            </li>
            <li>
              To analyze site usage and improve our content and user experience
            </li>
            <li>
              To monitor site performance and detect technical issues
            </li>
          </ul>
        </div>
      </Section>

      <Section alternate>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>

          <p className="text-muted-foreground mb-4">
            This website uses the following third-party services that may collect
            data independently:
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Discover Cars</strong> {"\u2014"} our affiliate partner for car
              rental comparison. When you interact with their search widget or
              click affiliate links, you are redirected to their platform, which
              operates under its own privacy policy.
            </li>
            <li>
              <strong>Google Analytics</strong> {"\u2014"} for anonymous site usage
              statistics including page views, session duration, and traffic
              sources.
            </li>
            <li>
              <strong>Cloudflare</strong> {"\u2014"} for DNS, CDN, and security services.
              Cloudflare may process certain connection data to protect the site
              from malicious traffic.
            </li>
          </ul>

          <p className="text-muted-foreground mt-4">
            We encourage you to review the privacy policies of these services
            before interacting with them.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>

          <p className="text-muted-foreground mb-4">
            This website uses cookies for the following purposes:
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Necessary cookies</strong> {"\u2014"} required for basic site
              functionality, such as page navigation and security features.
            </li>
            <li>
              <strong>Analytics cookies</strong> {"\u2014"} used by Google Analytics to
              collect anonymous data about how visitors use the site. These
              cookies help us understand which pages are most useful and how
              users navigate through the content.
            </li>
          </ul>

          <p className="text-muted-foreground mt-4">
            You can control cookie settings through your browser preferences.
            Disabling cookies may affect certain features of the site.
          </p>
        </div>
      </Section>

      <Section alternate>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>

          <p className="text-muted-foreground">
            Contact form submissions are retained for as long as necessary to
            respond to your inquiry, typically no longer than 12 months.
            Analytics data is retained according to the default retention
            settings of the analytics platform used (currently 14 months for
            Google Analytics).
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>

          <p className="text-muted-foreground mb-4">
            You have the right to:
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Request access to any personal data we hold about you</li>
            <li>Request correction of inaccurate personal data</li>
            <li>Request deletion of your personal data from our systems</li>
            <li>Opt out of analytics tracking by adjusting your browser or cookie settings</li>
          </ul>

          <p className="text-muted-foreground mt-4">
            To exercise any of these rights, contact us at{" "}
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

      <Section alternate>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>

          <p className="text-muted-foreground">
            We do not sell, trade, or transfer your personal information to
            outside parties. Your contact form submissions are used solely to
            respond to your inquiry and are not shared with third parties.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Policy
          </h2>

          <p className="text-muted-foreground mb-4">
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Contact</h2>

          <p className="text-muted-foreground">
            For privacy-related questions, email{" "}
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

export default PrivacyPolicy;

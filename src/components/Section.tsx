import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  alt?: boolean;
  className?: string;
}

const Section = ({ children, alt, className = "" }: SectionProps) => (
  <section className={`py-12 md:py-16 ${alt ? "bg-section-alt" : "bg-background"} ${className}`}>
    <div className="container">{children}</div>
  </section>
);

export default Section;

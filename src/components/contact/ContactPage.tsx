"use client";

import ContactHero from "./ContactHero";
import ContactCards from "./ContactCards";
import AvailabilitySection from "./AvailabilitySection";
import ContactFAQ from "./ContactFAQ";

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-clip">
      <ContactHero />
      <ContactCards />
      <AvailabilitySection />
      <ContactFAQ />
    </main>
  );
}

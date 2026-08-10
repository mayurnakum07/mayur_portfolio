"use client";

import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactCards from "./ContactCards";
import AvailabilitySection from "./AvailabilitySection";
import ContactFAQ from "./ContactFAQ";

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-clip">
      <ContactHero />
      <ContactForm />
      <ContactCards />
      <AvailabilitySection />
      <ContactFAQ />
    </main>
  );
}

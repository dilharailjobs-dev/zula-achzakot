import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Businesses from "@/components/home/Businesses";
import Vision from "@/components/home/Vision";
import Values from "@/components/home/Values";
import CorporateMessage from "@/components/home/CorporateMessage";
import NewsPreview from "@/components/home/NewsPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Businesses />
      <Vision />
      <Values />
      <CorporateMessage />
      <NewsPreview />
      <ContactCTA />
    </>
  );
}

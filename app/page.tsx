import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import PromotionalBanner from "@/components/PromotionalBanner";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Value from "@/components/Value";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <PromotionalBanner />
      <Services />
      <Value />
      <Testimonials />
      <FAQ />
    </main>
  );
}

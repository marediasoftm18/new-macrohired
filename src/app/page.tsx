import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Stats from "@/components/home/stats";
import AboutBanner from "@/components/home/about-banner";
import Portfolio from "@/components/home/portfolio";
import WhyChooseUs from "@/components/home/why-choose-us";
import Approach from "@/components/home/approach";
import Team from "@/components/home/team";
import Testimonials from "@/components/home/testimonials";
import FAQAccordion from "@/components/home/faq-accordion";
import SmartTracking from "@/components/home/smart-tracking";
import WorkplaceTrends from "@/components/home/workplace-trends";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutBanner />
      <Stats />
      <Portfolio />
      <WhyChooseUs />
      <Approach />
      <Team />
      <Testimonials />
      <FAQAccordion />
      <SmartTracking />
      <WorkplaceTrends />
    </>
  );
}

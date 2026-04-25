import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import TechStats from "@/components/TechStats";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollContainer from "@/components/ScrollContainer";
import SectionDots from "@/components/SectionDots";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <SectionDots />
      <ScrollContainer>
        <Hero />
        <Products />
        <Services />
        <TechStats />
        <About />
        <CTA />
        <Footer />
      </ScrollContainer>
    </>
  );
}

import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* <Team /> */}
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

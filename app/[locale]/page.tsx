import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Certificates from "@/components/sections/Certificates";
import Testimonials from "@/components/sections/Testimonials";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <InstagramFeed />
        <Testimonials />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import PrayerRequest from "@/components/PrayerRequest";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Schedule />
        <Gallery />
        <Events />
        <PrayerRequest />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

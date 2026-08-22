import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [lightboxItem, setLightboxItem] = useState(null);

  return (
    <div className="bg-ink text-cream">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery onOpenLightbox={setLightboxItem} />
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

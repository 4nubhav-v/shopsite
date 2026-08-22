import useReveal from "../hooks/useReveal";

export default function Location() {
  const [headRef, headVisible] = useReveal();
  const [mapRef, mapVisible] = useReveal();

  return (
    <section id="location" className="py-20 px-6 bg-ink">
      <div className="max-w-5xl mx-auto">
        <div
          ref={headRef}
          className={`text-center mb-8 reveal ${headVisible ? "visible" : ""}`}
        >
          <div className="eyebrow justify-center mb-3">Where to find us</div>
          <h2
            className="font-dm leading-tight mb-2 text-cream tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Visit Our Shop 📍
          </h2>
        </div>

        <div
          ref={mapRef}
          className={`max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[#2a2218] reveal glow-ring ${
            mapVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="h-80 bg-[#111009] flex flex-col items-center justify-center gap-3">
            <iframe
              title="A.K Singh Signage location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.0430689715195!2d89.04980161120501!3d26.743001667265894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e395b3dc681f25%3A0x380cf7c6aaefe598!2sA.K%20SINGH%20SIGNAGE!5e0!3m2!1sen!2sin!4v1775739521674!5m2!1sen!2sin"
              width="700"
              height="600"
              style={{ border: 0 }}
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import useReveal from "../hooks/useReveal";

const SERVICES = [
  { emoji: "🪧", title: "Shop Signs", desc: "Eye-catching boards for your business frontage" },
  { emoji: "✨", title: "Name Plates", desc: "Elegant home & office name boards" },
  { emoji: "🎨", title: "Custom Stickers", desc: "Any shape, waterproof and long-lasting" },
  { emoji: "🎁", title: "Gift Items", desc: "Personalised keychains, frames & more" },
];

function FeatureCard({ emoji, title, desc, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`feature-card reveal ${visible ? "visible" : ""}`} style={{ transitionDelay: delay }}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="font-caveat font-bold text-xl mb-2 text-cream">{title}</h3>
      <p className="text-xs leading-relaxed font-normal text-[#5a5040]">{desc}</p>
      <div className="svc-bar mx-auto" />
    </div>
  );
}

export default function Services() {
  const [headRef, headVisible] = useReveal();

  return (
    <section
      id="services"
      className="py-20 px-6 bg-ink bg-[radial-gradient(ellipse_at_50%_100%,#120f07_0%,#0a0a0a_70%)]"
    >
      <div className="max-w-5xl mx-auto">
        <div ref={headRef} className={`text-center mb-12 reveal ${headVisible ? "visible" : ""}`}>
          <div className="eyebrow justify-center mb-3">What we offer</div>
          <h2
            className="font-dm leading-tight text-cream tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Our Specialities
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <FeatureCard key={s.title} {...s} delay={`${0.05 + i * 0.05}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}

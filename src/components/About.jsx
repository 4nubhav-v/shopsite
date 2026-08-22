import useReveal from "../hooks/useReveal";

const POINTS = [
  {
    icon: "✂",
    text: "Precision laser cutting",
    border: "#c8973a",
    shadow: "sticker-shadow",
    offset: false,
  },
  {
    icon: "★",
    text: "Vibrant full-color prints",
    border: "#c04020",
    shadow: "sticker-shadow-red",
    offset: true,
  },
  {
    icon: "✦",
    text: "Durable acrylic material",
    border: "#3a6e3a",
    shadow: "sticker-shadow-green",
    offset: false,
  },
  {
    icon: "✿",
    text: "Any shape, any size",
    border: "#c8973a",
    shadow: "sticker-shadow",
    offset: true,
  },
];

export default function About() {
  const [cardsRef, cardsVisible] = useReveal();
  const [textRef, textVisible] = useReveal();

  return (
    <section id="about" className="py-20 px-6 bg-[#0d0c09]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div
          ref={cardsRef}
          className={`flex flex-col gap-3 reveal ${cardsVisible ? "visible" : ""}`}
        >
          {POINTS.map((p) => (
            <div
              key={p.text}
              className={`about-card ${p.shadow} ${p.offset ? "ml-6" : ""}`}
              style={{ border: `1.5px solid ${p.border}` }}
            >
              <span className="text-[1.4rem]">{p.icon}</span> {p.text}
            </div>
          ))}
        </div>

        <div
          ref={textRef}
          className={`reveal ${textVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.15s" }}
        >
          <div className="eyebrow mb-3">Who we are</div>
          <h2
            className="font-dm leading-tight mb-5 text-cream tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            More than
            <br />
            just stickers
          </h2>
          <p className="leading-relaxed mb-4 text-[0.92rem] font-light text-[#7a6e60]">
            A.K Singh Signage is a local business shop in Binnaguri creating
            handcrafted acrylic stickers, decorative name boards, shop signs,
            and custom signage for homes and businesses.
          </p>
          <p className="leading-relaxed mb-7 text-[0.92rem] font-light text-[#7a6e60]">
            Every piece is made with care — bold colours, clean cuts, and
            designs that last. Whether you need a single keepsake sticker or a
            full shopfront display, we've got you covered.
          </p>
          <a href="#contact" className="btn-primary">
            Order Yours Now
          </a>
        </div>
      </div>
    </section>
  );
}

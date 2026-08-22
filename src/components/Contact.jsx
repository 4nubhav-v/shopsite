import useReveal from "../hooks/useReveal";

function ContactCard({ emoji, title, children, delay, href }) {
  const [ref, visible] = useReveal();
  const body = (
    <>
      <div className="text-3xl mb-4">{emoji}</div>
      <div className="font-caveat font-bold text-xl mb-2 text-cream">
        {title}
      </div>
      <p className="leading-relaxed text-[0.88rem] font-light text-[#5a5040]">
        {children}
      </p>
    </>
  );

  return (
    <div
      ref={ref}
      className={`contact-card text-center reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: delay }}
    >
      {href ? (
        <a href={href} className="no-underline">
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
}

export default function Contact() {
  const [headRef, headVisible] = useReveal();

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#0d0c09] bg-[radial-gradient(ellipse_at_50%_0%,#1a1408_0%,#0d0c09_60%)]"
    >
      <div className="max-w-5xl mx-auto">
        <div
          ref={headRef}
          className={`text-center mb-12 reveal ${headVisible ? "visible" : ""}`}
        >
          <div className="eyebrow justify-center mb-3">Get in touch</div>
          <h2
            className="font-dm leading-tight text-cream tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Let's Make Something Together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ContactCard
            emoji="📞"
            title="Call / WhatsApp"
            delay="0.05s"
            href="tel:+919735952700"
          >
            +91 9735952700
          </ContactCard>

          <ContactCard emoji="📍" title="Location" delay="0.1s">
            Opposite Momo Hut, Binnaguri,
            <br />
            West Bengal, India — 735203
          </ContactCard>

          <ContactCard emoji="🕐" title="Open Hours" delay="0.15s">
            Mon–Sat: 10am – 7pm
            <br />
            Sun: By appointment
          </ContactCard>
        </div>
      </div>
    </section>
  );
}

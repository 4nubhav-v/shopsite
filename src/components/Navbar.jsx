import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-ink border-b border-[#1e1810] px-5 py-3 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <a href="#" className="font-caveat font-bold text-2xl tracking-wide no-underline text-gold">
          A.K SINGH <span className="text-cream">Signage</span>
        </a>

        <ul className="hidden md:flex gap-1 list-none m-0 p-0">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${active === link.href.slice(1) ? "active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none ${
            menuOpen ? "ham-open" : ""
          }`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <div className="mobile-nav-inner">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

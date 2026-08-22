const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-[#1a1408] px-6 py-10 text-center bg-[linear-gradient(to_top,#040302,#060504)]"
    >
      <div className="font-caveat font-bold text-3xl mb-2 text-gold">A.K SINGH Signage</div>
      <p className="mb-1 text-[0.82rem] tracking-[0.04em] text-[#4a4030]">
        Handcrafted acrylic stickers &amp; signage in Binnaguri
      </p>

      <div className="flex justify-center gap-6 my-5">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="nav-link text-[0.72rem]">
            {link.label}
          </a>
        ))}
      </div>

      <p className="text-[0.75rem] text-[#2a2218]">
        Made with ♥ by{" "}
        <a
          href="https://github.com/4nubhav-v"
          className="text-[#3a3020] no-underline transition-colors duration-200 hover:text-gold"
        >
          @Anubhav
        </a>
      </p>
    </footer>
  );
}

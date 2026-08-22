export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 md:py-32 bg-[radial-gradient(ellipse_at_50%_0%,#1c1608_0%,#0a0905_55%,#0a0a0a_100%)]">
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2264%22 height=%2264%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%2264%22 height=%2264%22 filter=%22url(%23n)%22 opacity=%221%22/%3E%3C/svg%3E')",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating sticker decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="float absolute top-8 left-4"
          style={{ animationDelay: "0s" }}
        >
          <div
            className="deco-sticker sticker-shadow"
            style={{
              borderColor: "#c8973a",
              background: "#1a1408",
              transform: "rotate(-12deg)",
            }}
          >
            ✂ Custom Cuts
          </div>
        </div>

        <div
          className="float2 absolute top-24 left-20"
          style={{ animationDelay: "0.6s" }}
        >
          <div
            className="deco-sticker"
            style={{
              borderColor: "#c8973a",
              background: "#1a1408",
              transform: "rotate(5deg)",
              boxShadow: "3px 3px 0 #7a5c1e",
            }}
          >
            ★ Premium
          </div>
        </div>

        <div
          className="float3 absolute top-6 right-8"
          style={{ animationDelay: "1.2s" }}
        >
          <div
            className="deco-sticker sticker-shadow-red"
            style={{
              borderColor: "#c04020",
              background: "#1a0c08",
              transform: "rotate(10deg)",
            }}
          >
            ★ Acrylic Signs
          </div>
        </div>

        <div
          className="float4 absolute top-28 right-24"
          style={{ animationDelay: "0.4s" }}
        >
          <div
            className="relative w-20 h-20"
            style={{ transform: "rotate(8deg)" }}
          >
            <div
              className="absolute inset-0 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: "#c8973a", background: "#161209" }}
            >
              <div className="spin-slow absolute inset-0 flex items-center justify-center rounded-full">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <path
                    id="cp"
                    fill="none"
                    d="M40,40 m-28,0 a28,28 0 1,1 56,0 a28,28 0 1,1 -56,0"
                  />
                  <text
                    fontFamily="Caveat"
                    fontSize="7.5"
                    fontWeight="700"
                    fill="#c8973a"
                    letterSpacing="2.5"
                  >
                    <textPath href="#cp">
                      JSR SIGNAGE · STICKERS · ACRYLIC ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <span className="font-caveat font-bold text-lg z-10 text-gold">
                AK
              </span>
            </div>
          </div>
        </div>

        <div
          className="float5 absolute top-52 left-3"
          style={{ animationDelay: "1.9s" }}
        >
          <div
            className="deco-sticker sticker-shadow-green"
            style={{
              borderColor: "#3a6e3a",
              background: "#0a140a",
              transform: "rotate(-18deg)",
            }}
          >
            ✿ Name Boards
          </div>
        </div>

        <div
          className="float absolute bottom-16 left-10"
          style={{ animationDelay: "0.8s" }}
        >
          <div
            className="font-caveat font-bold text-sm px-4 py-2 text-ink"
            style={{
              background: "#c8973a",
              transform: "rotate(6deg)",
              boxShadow: "4px 4px 0 #7a5c1e",
            }}
          >
            MADE BY HAND
          </div>
        </div>

        <div
          className="float3 absolute bottom-12 right-14"
          style={{ animationDelay: "1.5s" }}
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 70 70"
            style={{ transform: "rotate(-20deg)" }}
          >
            <polygon
              points="35,2 42,28 68,28 47,44 54,70 35,54 16,70 23,44 2,28 28,28"
              fill="#c8973a"
              opacity="0.9"
            />
            <text
              x="35"
              y="34"
              textAnchor="middle"
              fontFamily="Caveat"
              fontSize="8"
              fontWeight="700"
              fill="#0a0a0a"
              letterSpacing="0.5"
            >
              LASER
            </text>
            <text
              x="35"
              y="46"
              textAnchor="middle"
              fontFamily="Caveat"
              fontSize="8"
              fontWeight="700"
              fill="#0a0a0a"
              letterSpacing="0.5"
            >
              CUT
            </text>
          </svg>
        </div>

        <div
          className="float2 absolute top-40 left-40"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="w-3 h-3 rounded-full bg-gold opacity-20" />
        </div>
        <div
          className="float4 absolute bottom-36 left-28"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="w-2 h-2 rotate-45 bg-gold opacity-15" />
        </div>
        <div
          className="float5 absolute top-20 right-44"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="w-4 h-4 rotate-45 bg-gold opacity-10" />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center pt-4">
        <div
          className="inline-block font-caveat font-bold text-sm px-5 py-1.5 rounded-full mb-7 text-ink bg-gold"
          style={{
            transform: "rotate(-2deg)",
            boxShadow: "0 4px 20px rgba(200,151,58,0.3)",
          }}
        >
          ✦ Handcrafted by ourselves ✦
        </div>

        <h1
          className="font-extrabold leading-tight mb-6 text-cream tracking-[-0.01em]"
          style={{ fontSize: "clamp(2.8rem, 7.5vw, 4.8rem)" }}
        >
          Acrylic Stickers &<br />
          <span className="text-gold italic">Signage that Pops</span>
        </h1>

        <p className="leading-relaxed mb-9 max-w-md mx-auto text-[0.95rem] font-light text-[#7a6e60]">
          Custom-made acrylic stickers, name boards, and signage — designed with
          character and cut with precision. Based in Binnaguri, West Bengal.
        </p>

        <div className="flex gap-4 flex-wrap justify-center mb-12">
          <a href="#gallery" className="btn-primary">
            See Our Work
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <div
            className="wiggle deco-sticker sticker-shadow"
            style={{
              borderColor: "#c8973a",
              background: "#1a1408",
              transform: "rotate(-3deg)",
            }}
          >
            ✂ Custom Cuts
          </div>
          <div
            className="wiggle deco-sticker sticker-shadow-red"
            style={{
              borderColor: "#c04020",
              background: "#1a0c08",
              transform: "rotate(2deg)",
              animationDelay: "0.5s",
            }}
          >
            ★ Acrylic Signs
          </div>
          <div
            className="wiggle deco-sticker sticker-shadow-green"
            style={{
              borderColor: "#3a6e3a",
              background: "#0a140a",
              transform: "rotate(-1deg)",
              animationDelay: "1s",
            }}
          >
            ✿ Name Boards
          </div>
        </div>
      </div>
    </section>
  );
}

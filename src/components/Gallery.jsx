import { useRef, useState } from "react";
import useReveal from "../hooks/useReveal";
import { galleryItems, galleryFilters } from "../data/gallery";
import { ICONS, IconUpload } from "./icons";

export default function Gallery({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [uploaded, setUploaded] = useState([]);
  const fileInputRef = useRef(null);

  const [headRef, headVisible] = useReveal();
  const [filtersRef, filtersVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  const handleUpload = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const name = file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
        setUploaded((prev) => [...prev, { id: `${file.name}-${Date.now()}`, src: ev.target.result, title: name }]);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  return (
    <section id="gallery" className="py-20 px-6 bg-[#0d0c09] relative overflow-hidden">
      {/* BG floating stickers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="float2 absolute top-4 right-8" style={{ animationDelay: "0.7s" }}>
          <div
            className="font-caveat font-bold text-sm px-3 py-1 rounded-full border-2"
            style={{ borderColor: "#c8973a", color: "#c8973a", background: "#161209", transform: "rotate(10deg)" }}
          >
            Portfolio ★
          </div>
        </div>
        <div className="float5 absolute bottom-8 left-4" style={{ animationDelay: "1.4s" }}>
          <div
            className="font-caveat font-bold text-sm px-3 py-1 rounded-full border-2"
            style={{ borderColor: "#3a6e3a", color: "#6a9e6a", background: "#0a140a", transform: "rotate(-8deg)" }}
          >
            Our Work
          </div>
        </div>
        <div className="float3 absolute bottom-20 right-14" style={{ animationDelay: "0.3s" }}>
          <svg width="38" height="38" viewBox="0 0 40 40" style={{ transform: "rotate(25deg)", opacity: 0.2 }}>
            <polygon points="20,2 24,15 38,15 27,24 31,37 20,28 9,37 13,24 2,15 16,15" fill="#c8973a" />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div ref={headRef} className={`text-center mb-8 reveal ${headVisible ? "visible" : ""}`}>
          <div className="eyebrow justify-center mb-3">Our work</div>
          <h2
            className="font-dm leading-tight text-cream tracking-[-0.01em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            The Gallery
          </h2>
        </div>

        {/* Filters */}
        <div
          ref={filtersRef}
          className={`flex gap-2 flex-wrap justify-center mb-8 reveal ${filtersVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          {galleryFilters.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className="font-caveat font-bold text-sm px-5 py-2 rounded-full border-2 cursor-pointer bg-transparent transition-colors duration-200"
                style={{
                  borderColor: isActive ? "#c8973a" : "#2a2218",
                  color: isActive ? "#e8ddd0" : "#6a5e50",
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`grid gap-3 reveal ${gridVisible ? "visible" : ""}`}
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", transitionDelay: "0.2s" }}
        >
          {galleryItems.map((item) => {
            const Icon = ICONS[item.icon];
            const hidden = activeFilter !== "all" && item.category !== activeFilter;
            return (
              <div
                key={item.id}
                className={`gal-item border-2 ${hidden ? "hidden-item" : ""}`}
                style={{ borderColor: item.color }}
                onClick={() => onOpenLightbox({ src: item.src, title: item.title, tag: item.tag })}
              >
                <div
                  className="w-12 h-12 border flex items-center justify-center mb-3 rounded-sm"
                  style={{ background: item.iconBg, borderColor: item.iconBorder }}
                >
                  <Icon stroke={item.color} />
                </div>
                <div className="font-caveat font-bold text-sm" style={{ color: item.labelColor }}>
                  {item.title}
                </div>
                <div className="text-xs mt-1" style={{ color: item.tagColor }}>
                  {item.tag}
                </div>
                <div className="gal-overlay" style={item.overlayBg ? { background: item.overlayBg } : undefined}>
                  <span className="font-caveat font-bold text-base text-ink">View ★</span>
                </div>
              </div>
            );
          })}

          {uploaded.map((u) => (
            <div
              key={u.id}
              className="gal-item border-2"
              style={{ borderColor: "#c8973a" }}
              onClick={() => onOpenLightbox({ src: u.src, title: u.title, tag: "Uploaded" })}
            >
              <img src={u.src} alt={u.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="gal-overlay">
                <span className="font-caveat font-bold text-base text-ink">View ★</span>
              </div>
            </div>
          ))}

          {/* Upload card */}
          <label className="gal-upload" htmlFor="gallery-upload-input">
            <input
              ref={fileInputRef}
              id="gallery-upload-input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleUpload}
            />
            <IconUpload />
            <span className="font-caveat font-bold text-sm pointer-events-none text-gold">Add Your Photo</span>
            <span className="text-xs pointer-events-none text-[#3a2e1a]">tap to upload</span>
          </label>
        </div>

        <p className="text-center text-xs mt-5 text-[#3a3020] tracking-[0.04em]">
          Replace placeholders with your real product photos. Use the upload button to add
          images.
        </p>
      </div>
    </section>
  );
}

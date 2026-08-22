import { useEffect } from "react";
import { IconPlaceholder } from "./icons";

export default function Lightbox({ item, onClose }) {
  const isOpen = Boolean(item);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`lb-wrap fixed inset-0 z-50 items-center justify-center ${isOpen ? "open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="lb-inner bg-[#111009] border border-[#2a2218] rounded-2xl p-7 max-w-md w-11/12 relative"
        style={{ borderTop: "2px solid #c8973a", boxShadow: "0 24px 64px rgba(0,0,0,0.7)" }}
      >
        <button
          className="absolute top-3 right-4 font-caveat font-bold text-base cursor-pointer bg-transparent border-none text-[#6a5e50] transition-colors duration-200 hover:text-gold"
          onClick={onClose}
        >
          ✕ Close
        </button>

        {item?.src ? (
          <img
            className="max-w-full max-h-72 object-contain rounded-xl mb-4"
            src={item.src}
            alt={item.title}
          />
        ) : (
          <div className="w-full h-48 bg-[#161209] border border-[#2a2218] rounded-xl flex items-center justify-center mb-4">
            <IconPlaceholder />
          </div>
        )}

        <div className="font-caveat font-bold text-2xl leading-tight text-cream">{item?.title}</div>
        <div className="text-xs tracking-widest mt-1 text-gold">{item?.tag}</div>
      </div>
    </div>
  );
}

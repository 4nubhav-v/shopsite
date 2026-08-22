export function IconBoard({ stroke }) {
  return (
    <svg className="w-6 h-6 fill-none" style={{ stroke }} strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="13" rx="1" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  );
}

export function IconStar({ stroke }) {
  return (
    <svg className="w-6 h-6 fill-none" style={{ stroke }} strokeWidth="1.5" viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function IconHouse({ stroke }) {
  return (
    <svg className="w-6 h-6 fill-none" style={{ stroke }} strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function IconTag({ stroke }) {
  return (
    <svg className="w-6 h-6 fill-none" style={{ stroke }} strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M12 12v10M8 22h8" />
    </svg>
  );
}

export function IconSmile({ stroke }) {
  return (
    <svg className="w-6 h-6 fill-none" style={{ stroke }} strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  );
}

export function IconMonitor({ stroke }) {
  return (
    <svg className="w-6 h-6 fill-none" style={{ stroke }} strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export const ICONS = {
  board: IconBoard,
  star: IconStar,
  house: IconHouse,
  tag: IconTag,
  smile: IconSmile,
  monitor: IconMonitor,
};

export function IconUpload() {
  return (
    <svg className="w-7 h-7 fill-none" style={{ stroke: "#3a2e1a" }} strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
    </svg>
  );
}

export function IconPlaceholder() {
  return (
    <svg className="w-14 h-14 fill-none" style={{ stroke: "#3a2e1a" }} strokeWidth="1.2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

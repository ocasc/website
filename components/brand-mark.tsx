export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <defs>
        <mask id="ocasc-cross-cut">
          <rect width="400" height="400" fill="#fff" />
          <rect x="175" y="0" width="50" height="400" fill="#000" />
          <rect x="0" y="175" width="400" height="50" fill="#000" />
        </mask>
      </defs>
      <circle
        cx="200"
        cy="200"
        r="130"
        fill="none"
        stroke="currentColor"
        strokeWidth="30"
        mask="url(#ocasc-cross-cut)"
      />
      <g stroke="currentColor" strokeWidth="5">
        <line x1="195" y1="35" x2="195" y2="65" />
        <line x1="205" y1="25" x2="205" y2="75" />
        <line x1="195" y1="325" x2="195" y2="375" />
        <line x1="205" y1="335" x2="205" y2="365" />
        <line x1="25" y1="195" x2="75" y2="195" />
        <line x1="35" y1="205" x2="65" y2="205" />
        <line x1="335" y1="195" x2="365" y2="195" />
        <line x1="325" y1="205" x2="375" y2="205" />
      </g>
    </svg>
  );
}

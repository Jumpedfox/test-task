import "./ViewSwitcher.css";

export const ViewSwitcher = ({ viewMode, onChange }) => (
  <div className="view-switcher">
    <button
      className={`view-btn ${viewMode === "tiles" ? "active" : ""}`}
      onClick={() => onChange("tiles")}
      aria-label="Tiles view"
    >
      <svg width="16" height="16" viewBox="0 0 18 18" className="switcher-svg">
        <rect width="8" height="8" rx="1" />
        <rect x="10" width="8" height="8" rx="1" />
        <rect y="10" width="8" height="8" rx="1" />
        <rect x="10" y="10" width="8" height="8" rx="1" />
      </svg>
    </button>
    <button
      className={`view-btn ${viewMode === "rows" ? "active" : ""}`}
      onClick={() => onChange("rows")}
      aria-label="Rows view"
    >
      <svg width="16" height="16" viewBox="0 0 18 18" className="switcher-svg">
        <rect width="18" height="4" rx="1" />
        <rect y="7" width="18" height="4" rx="1" />
        <rect y="14" width="18" height="4" rx="1" />
      </svg>
    </button>
  </div>
);

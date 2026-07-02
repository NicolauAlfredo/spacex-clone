import "./MenuIcon.css";

export function IconMenu() {
  return (
    <button className="header__btn" aria-label="Menu">
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path
          d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  );
}
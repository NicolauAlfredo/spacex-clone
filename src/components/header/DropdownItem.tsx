export function DropdownItem() {
  return (
    <>
      <button className="header__link" aria-expanded="false">
        VEHICLES
        <span className="header__arrow">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#FFFFFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>

      <ul className="header__submenu">
        <li>
          <a href="#">STARSHIP</a>
        </li>
        <li>
          <a href="#">DRAGON</a>
        </li>
        <li>
          <a href="#">FALCON 9</a>
        </li>
        <li>
          <a href="#">FALCON HEAVY</a>
        </li>
      </ul>
    </>
  );
}

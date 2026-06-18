type DropDownItemProps = {
  btnLabel: string;
  items: string[];
};

export function DropdownItem({ btnLabel, items }: DropDownItemProps) {
  return (
    <>
      <button className="header__link" aria-expanded="false">
        {btnLabel}

        {items.length > 0 && (
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
        )}
      </button>

      {items.length > 0 && (
        <ul className="header__submenu">
          {items.map((item) => (
            <li>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

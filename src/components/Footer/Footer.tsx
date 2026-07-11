import "./Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a
          className="footer__social-link"
          href="https://x.com/SpaceX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SpaceX on X"
        >
          <svg
            className="footer__social-icon"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91326 5.26514L10.4871 1.2002H9.64019L6.53705 4.72973L4.05857 1.2002H1.19995L4.94789 6.53748L1.19995 10.8002H2.04688L5.32388 7.07289L7.94133 10.8002H10.8L6.91305 5.26514H6.91326ZM5.75327 6.5845L5.37353 6.05303L2.35204 1.82404H3.65287L6.09125 5.23697L6.47099 5.76844L9.64059 10.2047H8.33976L5.75327 6.5847V6.5845Z"
              fill="#F0F0FA"
            />
          </svg>
        </a>

        <nav className="footer__nav" aria-label="Footer navigation">
          <a className="footer__nav-link" href="#">
            Careers
          </a>
          <a className="footer__nav-link" href="#">
            Updates
          </a>
          <a className="footer__nav-link" href="#">
            Privacy Policy
          </a>
          <a className="footer__nav-link" href="#">
            Suppliers
          </a>
        </nav>

        <div className="footer__brand">© 2026 SpaceX</div>
      </div>
    </footer>
  );
}

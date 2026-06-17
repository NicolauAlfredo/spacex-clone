export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <svg
            _ngcontent-yny-c29=""
            xmlns="http://www.w3.org/2000/svg"
            width="147"
            height="19"
            viewBox="0 0 147 19"
            fill="none"
          >
            <g _ngcontent-yny-c29="">
              <path
                _ngcontent-yny-c29=""
                d="M33.4556 7.10059C35.9425 7.10059 37.5024 8.14389 37.5024 9.99707V11.2383C37.5024 13.2081 36.1594 14.0693 33.6704 14.0693H24.7524V18.4062H21.3345V7.10059H33.4556ZM146.805 0.544922V0.561523C141.398 1.00137 120.15 3.63015 105.414 18.4062H99.9458L100.557 17.7988C103.641 14.8268 117.282 2.23051 146.803 0.542969L146.805 0.544922ZM56.2397 18.4043H52.1655L50.3599 15.9287H39.8169L41.6274 14H48.9526L45.4292 9.17285L47.5093 6.62012L56.2397 18.4043ZM72.1841 7.09863C74.0086 7.09865 75.3021 7.72865 75.6343 9.07031H62.8081V16.2803H75.6343C75.2694 17.7734 74.4885 18.4042 72.2827 18.4043H62.5786C60.9037 18.4043 59.3268 17.7248 59.3267 15.9209V9.58203C59.3267 7.778 60.9037 7.09868 62.5786 7.09863H72.1841ZM90.7222 12.834H83.8247V16.2803H95.6489V18.4043H80.3481V10.8975H90.7222V12.834ZM120.998 18.4043H115.584L110.775 14.9082H110.777C111.663 14.2168 112.602 13.5232 113.51 12.9014L120.998 18.4043ZM12.9351 7.09863C14.8252 7.09865 15.9037 8.0272 16.2358 9.07031H3.59424V11.5049H13.3979V11.5029C15.3722 11.6154 16.5677 12.4597 16.5679 14.0488V15.8535C16.5677 17.6083 15.5242 18.4014 13.4331 18.4014H3.43018C1.52352 18.4014 0.428522 17.6897 0.112793 16.2783H13.4849V13.6934H3.54541C1.70432 13.7036 0.459473 12.8582 0.459473 11.3691V9.58203C0.459473 7.87612 1.66924 7.09863 3.77686 7.09863H12.9351ZM24.7524 12H33.0435C34.3863 12 34.5356 11.5512 34.5356 10.7412V10.2979C34.5356 9.50218 34.3371 9.07228 32.8774 9.07227H24.7729L24.7524 12ZM109.604 9.87891C108.627 10.4554 107.562 11.1202 106.646 11.7334L100.298 7.09863H105.705L109.604 9.87891ZM109.607 9.88086L109.604 9.87891L109.607 9.87793V9.88086ZM95.811 9.07031H80.3481V7.09863H95.811V9.07031Z"
                fill="#F0F0FA"
              ></path>
            </g>
          </svg>
        </a>

        <button
          className="header__toggle"
          aria-label="Open menu"
          aria-expanded="false"
        >
          <svg
            _ngcontent-yny-c31=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-yny-c31=""
              d="M24 19L0 19L1.74849e-07 18L24 18V19Z"
              fill="#D9D9D9"
            ></path>
            <path
              _ngcontent-yny-c31=""
              d="M24 12L0 12L1.74849e-07 11L24 11V12Z"
              fill="#D9D9D9"
            ></path>
            <path
              _ngcontent-yny-c31=""
              d="M24 5L0 5L1.74849e-07 4L24 4V5Z"
              fill="#D9D9D9"
            ></path>
          </svg>
        </button>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item header__item--dropdown">
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
            </li>

            <li className="header__item header__item--dropdown">
              <button className="header__link" aria-expanded="false">
                HUMAN SPACEFLIGHT
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
                  <a href="#">OVERVIEW</a>
                </li>
                <li>
                  <a href="#">SPACE STATION</a>
                </li>
                <li>
                  <a href="#">EARTH ORBIT</a>
                </li>
                <li>
                  <a href="./pages/moon.html">THE MOON</a>
                </li>
                <li>
                  <a href="#">MARS & BEYOND</a>
                </li>
              </ul>
            </li>

            <li className="header__item">
              <a href="./pages/starlink.html" className="header__link">
                STARLINK
              </a>
            </li>

            <li className="header__item">
              <a href="#" className="header__link">
                STARSHIELD
              </a>
            </li>

            <li className="header__item header__item--dropdown">
              <button className="header__link" aria-expanded="false">
                xAI
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
                  <a href="#">GROK</a>
                </li>
                <li>
                  <a href="#">GROKIPEDIA</a>
                </li>
                <li>
                  <a href="#">X</a>
                </li>
              </ul>
            </li>

            <li className="header__item">
              <a href="#" className="header__link">
                TERAFAB
              </a>
            </li>

            <li className="header__item header__item--dropdown">
              <button className="header__link" aria-expanded="false">
                COMPANY
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
                  <a href="#">MISSION</a>
                </li>
                <li>
                  <a href="#">CAREERS</a>
                </li>
                <li>
                  <a href="#">UPDATES</a>
                </li>
                <li>
                  <a href="#">CONTENT</a>
                </li>
              </ul>
            </li>

            <li className="header__item header__item--dropdown">
              <button className="header__link" aria-expanded="false">
                SHOP
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
                  <a href="#">SPACEX</a>
                </li>
                <li>
                  <a href="./pages/shop-x.html">xAI</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="upcoming-launch">
            <div className="upcoming-launch__header">
              <span className="upcoming-launch__title">UPCOMING LAUNCHES</span>

              <span className="upcoming-launch__toggle">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="upcoming-launch__icon upcoming-launch__icon--down"
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
            </div>

            <div className="upcoming-launch__cards">
              <div className="upcoming-launch__card">
                <div className="upcoming-launch__image">
                  <img src="./assets/pages/home/images/slc-4-e.jpg" alt="" />
                </div>

                <div className="upcoming-launch__content">
                  <span className="upcoming-launch__mission-title">
                    Starlink Mission
                  </span>
                  <span className="upcoming-launch__countdown">
                    June 7, 2026 04:00 - 08:00 Italy Time
                  </span>
                </div>

                <span className="upcoming-launch__arrow upcoming-launch__arrow--right">
                  <svg
                    _ngcontent-jna-c39=""
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      _ngcontent-jna-c39=""
                      d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z"
                      fill="#F0F0FA"
                      fill-opacity="0.8"
                    ></path>
                  </svg>
                </span>
              </div>

              <div className="upcoming-launch__card">
                <div className="upcoming-launch__image">
                  <img
                    src="./assets/pages/home/images/crew-12-mobile.jpg"
                    alt=""
                  />
                </div>

                <div className="upcoming-launch__content">
                  <span className="upcoming-launch__mission-title">
                    Starlink Mission
                  </span>
                  <span className="upcoming-launch__countdown">
                    June 8, 2026 12:07 - 16:07 Italy Time
                  </span>
                </div>

                <span className="upcoming-launch__arrow upcoming-launch__arrow--right">
                  <svg
                    _ngcontent-jna-c39=""
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      _ngcontent-jna-c39=""
                      d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z"
                      fill="#F0F0FA"
                      fill-opacity="0.8"
                    ></path>
                  </svg>
                </span>
              </div>

              <a href="#" className="upcoming-launch__link">
                <svg
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.875 10.0003H1L1 9.12527H1.875L1.875 10.0003ZM4.9375 10.0003H4.0625L4.0625 9.12527H4.9375L4.9375 10.0003ZM8 10.0003H7.125V9.12527H8V10.0003ZM1.875 6.93777H1L1 6.06277H1.875V6.93777ZM4.9375 6.93777H4.0625V6.06277H4.9375V6.93777ZM8 6.93777L7.125 6.93777V6.06277L8 6.06277V6.93777ZM1.875 3.87527H1L1 3.00027H1.875V3.87527ZM4.9375 3.87527H4.0625V3.00027H4.9375V3.87527ZM8 3.87527L7.125 3.87527V3.00027L8 3.00027V3.87527Z"
                    fill="#F0F0FA"
                  />
                </svg>

                <span className="upcoming-launch__link-text">
                  ALL UPCOMING LAUNCHES
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function UpcomingLaunch() {
  return (
    <>
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
            <img src="./assets/pages/home/images/crew-12-mobile.jpg" alt="" />
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
    </>
  );
}

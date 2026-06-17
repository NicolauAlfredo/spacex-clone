import "./HomePage.css";
import "./components/Header.css";
import "./components/Footer.css";
import "./components/button.css";

import { Header } from "./components/Header";

export function HomePage() {
  return (
    <>
      <Header />

      <main className="home">
        {/* SECTION 01 */}
        {/* Starship's Twelfth Flight Test */}
        {/* Owner: Felice */}
        {/* Branch: feature/home-starship */}
        <section className="hero-section hero-section--starship">
          <video
            className="hero-section__video"
            autoPlay
            muted
            loop
            playsInline
            poster="./assets/pages/home/images/revolutionizing-space-tech-mobile.jpg"
          >
            {/* MOBILE FIRST */}
            <source
              src="./public/assets/pages/home/videos/Starships-twelfth-flight-test-mobile.mp4"
              media="(max-width: 767px)"
              type="video/mp4"
            />
            {/* DESKTOP */}
            <source
              src="./assets/pages/home/videos/Starships-twelfth-flight-test.mp4"
              media="(min-width: 768px)"
              type="video/mp4"
            />
          </video>

          <div className="hero-section__overlay">
            <div className="hero-section__content">
              <span className="hero-section__date">MAY 22, 2026</span>

              <h2 className="hero-section__title">
                STARSHIP'S TWELFTH FLIGHT TEST
              </h2>

              <p className="hero-section__description"></p>

              {/* Button */}
              <a className="button button--primary" href="#">
                <span className="button__text">WATCH</span>

                <span className="button__icon">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <path d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z" />
                  </svg>
                </span>
              </a>
              {/* Button */}
            </div>
          </div>
        </section>
        {/* FINE SECTION 01 */}

        {/* SECTION 02 */}
        {/* Making Life Multiplanetary */}
        {/* Owner: Felice */}
        {/* Branch: feature/home-making-life */}
        <section className="hero-section hero-section--multiplanetary">
          <video
            className="hero-section__video"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/pages/home/images/mars-mobile.jpg"
          >
            {/* MOBILE FIRST */}
            <source
              src="/assets/pages/home/videos/mars-rotation-mobile.mp4"
              media="(max-width: 767px)"
              type="video/mp4"
            />
            {/* DESKTOP */}
            <source
              src="/assets/pages/home/videos/mars-rotation.mp4"
              media="(min-width: 768px)"
              type="video/mp4"
            />
          </video>

          <div className="hero-section__overlay">
            <div className="hero-section__content">
              <h2 className="hero-section__title">
                MAKING LIFE MULTIPLANETARY
              </h2>

              <p className="hero-section__description">
                SpaceX was founded under the belief that a future where humanity
                is out exploring the stars is fundamentally more exciting than
                one where we are not.
              </p>

              {/* Button */}
              <a className="button button--primary" href="#">
                <span className="button__text">EXPLORE</span>

                <span className="button__icon">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <path d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z" />
                  </svg>
                </span>
              </a>
              {/* Button */}
            </div>

            {/* UPCOMING LAUNCHES */}
            <div className="upcoming-launch">
              <div className="upcoming-launch__header">
                <span className="upcoming-launch__title">
                  UPCOMING LAUNCHES
                </span>

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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div className="upcoming-launch__cards">
                <div className="upcoming-launch__card">
                  <div className="upcoming-launch__image">
                    <img src="/assets/pages/home/images/slc-4-e.jpg" alt="" />
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
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z"
                        fill="#F0F0FA"
                        fillOpacity="0.8"
                      ></path>
                    </svg>
                  </span>
                </div>

                <div className="upcoming-launch__card">
                  <div className="upcoming-launch__image">
                    <img
                      src="/assets/pages/home/images/crew-12-mobile.jpg"
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
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z"
                        fill="#F0F0FA"
                        fillOpacity="0.8"
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
          </div>
          {/* FINE UPCOMING LAUNCHES */}
        </section>
        {/* FINE SECTION 02 */}

        {/* SECTION 03 */}
        {/* Revolutionizing Space Technology */}
        {/* Owner: Federico */}
        {/* Branch: feature/home-space */}
        <section className="hero-section hero-section--technology">
          <picture>
            <source
              srcSet="
                    /assets/pages/home/images/revolutionizing-space-tech-desktop.jpg
                  "
              media="(min-width: 1024px)"
            />
            <img
              className="hero-section__image"
              src="/assets/pages/home/images/revolutionizing-space-tech-mobile.jpg"
              alt=""
            />
          </picture>

          <div className="hero-section__overlay">
            <div className="hero-section__content">
              <h2 className="hero-section__title">
                REVOLUTIONIZING SPACE TECHNOLOGY
              </h2>

              <p className="hero-section__description">
                SpaceX’s Starship spacecraft and Super Heavy rocket is a fully
                reusable transportation system designed to carry both crew and
                cargo to Earth orbit, the Moon, Mars, and beyond.
              </p>

              {/* Button */}
              <a className="button button--primary" href="#">
                <span className="button__text">LEARN MORE</span>

                <span className="button__icon">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <path d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z" />
                  </svg>
                </span>
              </a>
              {/* Button */}
            </div>
          </div>
        </section>
        {/* FINE SECTION 03 */}

        {/* SECTION 04 */}
        {/* World's Leading Launch Service Provider */}
        {/* Owner: Federico */}
        {/* Branch: feature/home-launch */}
        <section className="hero-section hero-section--launch-provider">
          <video
            className="hero-section__video"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/pages/home/images/leading-launch-service-mobile.jpg"
          >
            <source
              src="/assets/pages/home/videos/leading-launch-service-mobile.mp4"
              media="(max-width: 767px)"
              type="video/mp4"
            />
            <source
              src="/assets/pages/home/videos/leading-launch-service.mp4"
              media="(min-width: 768px)"
              type="video/mp4"
            />
          </video>

          <div className="hero-section__overlay">
            <div className="hero-section__content">
              <h2 className="hero-section__title">
                WORLD'S LEADING LAUNCH SERVICE PROVIDER
              </h2>

              <p className="hero-section__description">
                SpaceX leads the world in launches with its reliable, reusable
                rockets and is developing the fully and rapidly reusable rockets
                necessary to transform humanity’s ability to access space into
                something as routine as air travel.
              </p>

              {/* Button */}
              <a className="button button--primary" href="#">
                <span className="button__text">RESERVE YOUR RIDE</span>

                <span className="button__icon">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <path d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z" />
                  </svg>
                </span>
              </a>
              {/* Button */}
            </div>
          </div>
        </section>
        {/* FINE SECTION 04 */}

        {/* SECTION 05 */}
        {/* Advancing Human Spaceflight */}
        {/* Owner: Fidel */}
        {/* Branch: feature/home-advancing */}
        <section className="hero-section hero-section--spaceflight">
          <picture>
            <source
              srcSet="
                    /assets/pages/home/images/advancing-human-spaceflight-desktop.jpg
                  "
              media="(min-width: 1024px)"
            />
            <img
              className="hero-section__image"
              src="/assets/pages/home/images/advancing-human-spaceflight-mobile.jpg"
              alt=""
            />
          </picture>

          <div className="hero-section__overlay">
            <div className="hero-section__content">
              <h2 className="hero-section__title">
                Advancing human spaceflight
              </h2>

              <p className="hero-section__description">
                Since returning human spaceflight capabilities to the United
                States in 2020, SpaceX is helping build a new era where not just
                hundreds of people, but thousands and ultimately millions will
                be able to explore space.
              </p>

              {/* Button */}
              <a className="button button--primary" href="#">
                <span className="button__text">JOIN A MISSION</span>

                <span className="button__icon">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <path d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z" />
                  </svg>
                </span>
              </a>
              {/* Button */}
            </div>
          </div>
        </section>
        {/* FINE SECTION 05 */}

        {/* SECTION 06 */}
        {/* Delivering High-Speed Internet From Space */}
        {/* Owner: Rosario */}
        {/* Branch: feature/home-starlink-section */}
        <section className="hero-section hero-section--starlink">
          <video
            className="hero-section__video"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/pages/home/images/delivering-highspeed-mobile.jpg"
          >
            <source
              src="/assets/pages/home/videos/delivering-high-speed-mobile.mp4"
              media="(max-width: 767px)"
              type="video/mp4"
            />
            <source
              src="/assets/pages/home/videos/delivering-high-speed.mp4"
              media="(min-width: 768px)"
              type="video/mp4"
            />
          </video>

          <div className="hero-section__overlay">
            <div className="hero-section__content">
              <h2 className="hero-section__title">
                Delivering high-speed internet from space
              </h2>

              <p className="hero-section__description">
                Starlink is the world’s most advanced satellite constellation in
                low-Earth orbit, delivering reliable broadband internet capable
                of supporting streaming, online gaming, video calls, and more.
              </p>

              {/* Button */}
              <a className="button button--primary" href="#">
                <span className="button__text">ORDER NOW</span>

                <span className="button__icon">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <path d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z" />
                  </svg>
                </span>
              </a>
              {/* Button */}
            </div>
          </div>
        </section>
        {/* FINE SECTION 06 */}
      </main>

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
    </>
  );
}

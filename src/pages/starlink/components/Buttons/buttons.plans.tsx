import { SectionContent } from "../content/Content";

export function StarlinkPlansHome() {
  return (
    <div className="starlink-plans__group" data-group="home">
      <div className="starlink-plans__cards">
        <div className="starlink-section__content">
          <SectionContent
            title="Residential - 100 Mbps"
            description="Reliable, affordable home internet service for seamless connectivity."
            classNameTitle="starlink-section__title"
            classNameText="starlink-section__label"
          />
          <ul className="starlink-section__list">
            <li>Unlimited Data</li>
            <li>Good Wi-Fi</li>
          </ul>
          <div className="starlink-section__price-container">
            <p className="starlink-section__subtitle">STARTING AT</p>
            <p className="starlink-section__subtitle--price">
              <span className="starlink-section__price">$55</span>
              <span className="mo_class">/mo</span>
            </p>
          </div>
        </div>

        <div className="starlink-section__content">
          <SectionContent
            title="Residential - 200 Mbps"
            description="Fast, reliable internet service for everyday home use."
            classNameTitle="starlink-section__title"
            classNameText="starlink-section__label"
          />
          <ul className="starlink-section__list">
            <li>Unlimited Data</li>
            <li>Good Wi-Fi</li>
          </ul>
          <div className="starlink-section__price-container">
            <p className="starlink-section__subtitle">STARTING AT</p>
            <p className="starlink-section__subtitle--price">
              <span className="starlink-section__price">$85</span>
              <span className="mo_class">/mo</span>
            </p>
          </div>
        </div>

        <div className="starlink-section__content">
          <SectionContent
            title="Residential - Max"
            description="Our best performing home internet service with maximum speeds available."
            classNameTitle="starlink-section__title"
            classNameText="starlink-section__label"
          />
          <ul className="starlink-section__list">
            <li>Up to 400+ Mbps</li>
            <li>Unlimited Data</li>
            <li>Good Wi-Fi</li>
          </ul>
          <div className="starlink-section__price-container">
            <p className="starlink-section__subtitle">STARTING AT</p>
            <p className="starlink-section__subtitle--price">
              <span className="starlink-section__price">$130</span>
              <span className="mo_class">/mo</span>
            </p>
          </div>
        </div>
      </div>
      <p className="starlink-section--plans__footer">
        Speeds referenced are maximum available speeds, are not guaranteed, and
        will be slower during times of congestion.
      </p>
    </div>
  );
}

export function StarlinkPlansGo() {
  return (
    <div className="starlink-plans__group" data-group="go">
      <div className="starlink-plans__cards">
        <div className="starlink-section__content">
          <SectionContent
            title="Roam - 100GB"
            description="Up to 300+ Mbps for approximately 1 week of typical use. Reliable connectivity for occasional trips, camping, and getaways. Get unlimited low-speed data after using your Roam data."
            classNameTitle="starlink-section__title"
            classNameText="starlink-section__label"
          />
          <div className="starlink-section__price-container">
            <p className="starlink-section__subtitle">STARTING AT</p>
            <p className="starlink-section__subtitle--price">
              <span className="starlink-section__price">$55</span>
              <span className="mo_class">/mo</span>
            </p>
          </div>
        </div>

        <div className="starlink-section__content">
          <SectionContent
            title="Roam - 300GB"
            description="Up to 300+ Mbps. Reliable connectivity for regular travelers with multiple trips a month. Get unlimited low-speed data after using your Roam data."
            classNameTitle="starlink-section__title"
            classNameText="starlink-section__label"
          />
          <div className="starlink-section__price-container">
            <p className="starlink-section__subtitle">STARTING AT</p>
            <p className="starlink-section__subtitle--price">
              <span className="starlink-section__price">$80</span>
              <span className="mo_class">/mo</span>
            </p>
          </div>
        </div>

        <div className="starlink-section__content">
          <SectionContent
            title="Roam - Unlimited"
            description="Up to 300+ Mbps. Our best performing internet on the go with unlimited high-speed data."
            classNameTitle="starlink-section__title"
            classNameText="starlink-section__label"
          />
          <div className="starlink-section__price-container">
            <p className="starlink-section__subtitle">STARTING AT</p>
            <p className="starlink-section__subtitle--price">
              <span className="starlink-section__price">$175</span>
              <span className="mo_class">/mo</span>
            </p>
          </div>
        </div>
      </div>
      <p className="starlink-section--plans__footer">
        Speeds referenced are maximum available speeds, are not guaranteed, and
        will be slower during times of congestion.
      </p>
    </div>
  );
}

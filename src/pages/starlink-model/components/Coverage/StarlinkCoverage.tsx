import { StarlinkButton } from "../../../../components/Buttons/Buttons"
import { content } from "../../../../content/starlinkCoverage.content"
import "./starlinkCoverage.css"

export function Coverage() {
    return (
        <>
        {/* <section className="starlink-section starlink-section-Coverage">
            <div className="img-container"><img className="starlink-section__image-car" src={CarIce} alt="Car on ice" /></div>
            <div className="starlink-section__gradient">
                <div className="starlink-section__text--container">
                    <SectionContent 
                        classNameTitle="starlink-section__inner--title"
                        title="Internet for travel, road trips, and commutes"
                        description="High-speed internet that moves with you, even in dead zones. In-motion use available in select areas."
                        classNameText="starlink-section__inner--text"/>
                    <div className="starlink-section__link--container">
                    <StarlinkButton href="#" label="Learn More" variant="primary"/>
                    </div>
                </div>
            </div>
      </section> */}
        <section className="starlink-section starlink-section-Coverage">
            
            <picture >
                <source
                srcSet={content.background.desktop}
                media="(min-width: 1024px)"
                />

                <img
                src={content.background.mobile}
                alt={content.background.alt}
                className="starlink-section__image-car"
                />
            </picture>
                <div className="starlink-section__gradient">
                    <div className="starlink-section__text--container">
                        <h1 className="starlink-section__inner--title">{content.title}</h1>
                        <p className="starlink-section__inner--text">{content.description}</p>
                        <div className="starlink-section__link--container">
                            <StarlinkButton href="#" label="Learn More" variant="primary"/>
                        </div>
                    </div>
                </div>
        </section>
      </>
    )
}

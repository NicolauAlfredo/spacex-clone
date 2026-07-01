
import CarIce from "../../../../public/assets/pages/starlink/images/car_on_ice.webp";
import { StarlinkButton } from "../../../components/Buttons/buttons";
import { SectionContent } from "../../../components/content/Content";
import "../starlink-coverage/starlinkCoverage.css"


type StarlinkCoverageProps = {
    classNameSection: string
}

function StarlinkCoverage({classNameSection}: StarlinkCoverageProps) {
    return (
        <>
        <section className={`starlink-section ${classNameSection}`}>
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
      </section>
      </>
    )
}

export default StarlinkCoverage
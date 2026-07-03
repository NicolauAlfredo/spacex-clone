import GreenRoof from "../../../../public/assets/pages/starlink/images/green_roof.webp";
import { StarlinkButton } from "../../../components/Buttons/buttons";
import { SectionContent } from "../../../components/content/Content";
import "./starlinkGlobal.css"


type StarlinkCoverageProps = {
    classNameSection: string
}

function StarlinkGlobal({classNameSection}: StarlinkCoverageProps) {
    return (
        <>
        <section className={`starlink-section ${classNameSection}`}>
            <div className="img-container"><img className="starlink-section__image-green-roof" src={GreenRoof} alt="Car on ice" /></div>
            <div className="starlink-section__gradient">
                <div className="starlink-section__text--container starlink-section__text--container-available-globally">
                    <SectionContent 
                        classNameTitle="starlink-section__inner--title"
                        title="Available globally"
                        description="Delivering reliable connectivity in 160+ countries, territories, and other markets around the world."
                        classNameText="starlink-section__inner--text"/>
                    <div className="starlink-section__link--container">
                    <StarlinkButton href="#" label="Check availability" variant="primary"/>
                    </div>
                </div>
            </div>
      </section>
      </>
    )
}

export default StarlinkGlobal
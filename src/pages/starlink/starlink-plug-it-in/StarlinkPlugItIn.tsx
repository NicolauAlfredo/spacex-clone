import SunRoof from "../../../../public/assets/pages/starlink/images/roof_sunny.webp";
import Yard from "../../../../public/assets/pages/starlink/images/residential_yard.webp";
import { StarlinkButton } from "../../../components/Buttons/buttons";
import { SectionContent } from "../../../components/content/Content";
import "./starlinkPlugItIn.css"


type StarlinkPlugItInProps = {
    classNameSection: string
}

function StarlinkPlugItIn({classNameSection}: StarlinkPlugItInProps) {
    return (
        <>
        <section className={`starlink-section ${classNameSection}`}>
            <div className="img-container">
                <img className="starlink-section__image-sun-roof" src={SunRoof} alt="Sunny Roof" />
                <img className="starlink-section__image-yard" src={Yard} alt="Yard" />
            </div>
            <div className="starlink-section__gradient">
                <div className="starlink-section__text--container">
                    <SectionContent 
                        classNameTitle="starlink-section__inner--title"
                        title="Plug it in. Point at sky."
                        description="Starlink is built for self-installation and comes with everything you need to get online in minutes."
                        classNameText="starlink-section__inner--text"/>
                    <div className="starlink-section__link--container">
                    <StarlinkButton href="#" label="Get the App" variant="primary"/>
                    </div>
                </div>
            </div>
      </section>
      </>
    )
}

export default StarlinkPlugItIn
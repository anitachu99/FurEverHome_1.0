import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import Faq from "./Faq";

const Routing = ({homepageRef, aboutUsRef, faqRef}) => {

    return (
        <section>
            <div ref={homepageRef}>
                <Homepage 
                    aboutUsRef={aboutUsRef}
                    faqRef={faqRef}
                />
            </div>
            <div ref={aboutUsRef}>
                <AboutUs />
            </div>
            <div ref={faqRef}>
                <Faq />
            </div>

        </section>
    )
}

export default Routing
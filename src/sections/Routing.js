import { useRef } from "react";
import { useNavigate, Routes, Route, Switch, Link} from "react-router-dom";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import Adopt from "./Adopt";
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
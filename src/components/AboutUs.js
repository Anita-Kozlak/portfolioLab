import React from "react";
import Decoration from '../components/Decoration'
const AboutUs = () => {
    return (
        <div className="aboutUs" id="aboutus">
            <div className="aboutUs__left">
                <h1>O nas</h1>
                <Decoration />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="aboutUs__sign" src="Signature.png" alt="signatureImage"></img>
           </div>
           <div className="aboutUs__right">
                <img src="People.png" alt="peopleImage"></img>
            </div>

        </div>
    )
}
export default AboutUs
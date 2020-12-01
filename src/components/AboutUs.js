import React from "react";
import Decoration from '../components/Decoration'
import Signature from '../assets/Signature.png'
import People from '../assets/People.png'

const AboutUs = () => {
    return (
        <div className="aboutUs" id="aboutus">
            <div className="aboutUs__left">
                <h1>O nas</h1>
                <Decoration />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="aboutUs__sign" src={Signature} alt="signatureImage"></img>
           </div>
           <div className="aboutUs__right">
                <img src={People} alt="peopleImage"></img>
            </div>

        </div>
    )
}
export default AboutUs
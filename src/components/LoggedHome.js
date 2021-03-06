import React from 'react';
import { withRouter } from 'react-router-dom';
import AboutUs from './AboutUs';
import Contact from './Contact';
import FourSteps from './FourSteps';
import HomeThreeColumns from './HomeThreeColumns';
import WhoWeHelp from './WhoWeHelp';
import { HashLink as Link } from 'react-router-hash-link';
import SignOut from './SignOut';
import HeroImage from '../assets/HeroImage.png';
import Decoration from './Decoration';


const LoggedHome = () => {
  

  return (
    <>
      <div className="header__menu">
        <img className="heroImage" src={HeroImage} alt="heroImage"></img>
        <div className="header__menu-right">
          <div className="header" id="start">
            <SignOut />
            <div className="header__nav">
              <button>Start</button>
              <Link smooth to="#foursteps">
                <button>O co chodzi?</button>
              </Link>
              <Link smooth to="#aboutus">
                <button>O nas</button>
              </Link>
              <Link smooth to="#whowehelp">
                <button>Fundacja i organizacje</button>
              </Link>
              <Link smooth to="#contact">
                <button>Kontakt</button>
              </Link>
            </div>
          </div>
          <div className="header__menu-container">
            <p className="header__text">
              Zacznij pomagać! <br></br> Oddaj niechciane rzeczy w zaufane ręce
            </p>
            <Decoration />
            <div className="menu__buttons">
              <Link to="/givethings">
                <button>Oddaj rzeczy</button>
              </Link>
              <Link to="/givethings">
                <button>Zorganizuj zbiórkę</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HomeThreeColumns />
      <FourSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
    </>
  );
};
export default withRouter(LoggedHome);

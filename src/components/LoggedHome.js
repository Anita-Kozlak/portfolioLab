import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from './firebase';
import AboutUs from './AboutUs';
import Contact from './Contact';
import FourSteps from './FourSteps';
import HomeThreeColumns from './HomeThreeColumns';
import WhoWeHelp from './WhoWeHelp';
import { HashLink as Link } from 'react-router-hash-link';

const LoggedHome = (props) => {
  const onSignout = async () => {
    await firebase.auth().signOut();
    props.history.push('/loggout');
  };

  return (
    <>
      <div className="header__menu">
        <img className="heroImage" src="HeroImage.png" alt="heroImage"></img>
        <div className="header__menu-right">
          <div className="header" id="start">
            <div className="header__user">
              <h2>Cześć {firebase.auth().currentUser.email}!</h2>
              <Link to="./givethings"><button>Oddaj rzeczy</button></Link>
              <button onClick={onSignout}>Wyloguj</button>
            </div>
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
          <span className="header__text">Zacznij pomagać! </span>
          <br />
          <span className="header__text">
            Oddaj niechciane rzeczy w zaufane ręce
          </span>
          <img src="Decoration.png" alt="decorationImage"></img>
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
      <HomeThreeColumns />
      <FourSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
    </>
  );
};
export default withRouter(LoggedHome);

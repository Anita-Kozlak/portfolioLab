
import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from './firebase';
import Contact from './Contact';
import { HashLink as Link } from 'react-router-hash-link';
import FormStepOne from './FormStepOne';




const GiveThings = (props) => {
  const onSignout = async () => {
    await firebase.auth().signOut();
    props.history.push('/loggout');
  };

  return (
    <>
      <div className="header__menu">
        <img
          className="heroImage"
          src="Header-Form-Background.png"
          alt="heroImage"
        ></img>
        <div className="header__menu-right">
          <div className="header" id="start">
            <div className="header__user">
              {/* <h2>Cześć {firebase.auth().currentUser.email}!</h2> */}
              <Link to="./givethings">
                <button>Oddaj rzeczy</button>
              </Link>
              <button onClick={onSignout}>Wyloguj</button>
            </div>
            <div className="header__nav">
              <button>Start</button>
              <Link to="/loggedhome">
                <button>O co chodzi?</button>
              </Link>
              <Link to="/loggedhome">
                <button>O nas</button>
              </Link>
              <Link to="/loggedhome">
                <button>Fundacja i organizacje</button>
              </Link>
              <Link to="/loggedhome">
                <button>Kontakt</button>
              </Link>
            </div>
          </div>

          <span className="header__text">
            Oddaj rzeczy których nie chcesz, POTRZEBUJĄCYM!
          </span>
          <img src="Decoration.png" alt="decorationImage"></img>
          <p className="giveThings__text">Wystarczą 4 proste kroki:</p>
          <div className="giveThings__steps">
            <div className="giveThings__step">
              <span className="step__number">1</span>
              <span>Wybierz rzezczy</span>
            </div>
            <div className="giveThings__step">
              <span className="step__number">2</span>
              <span>Spakuj je w worki</span>
            </div>
            <div className="giveThings__step">
              <span className="step__number">3</span>
              <span>Wybierz fundację</span>
            </div>
            <div className="giveThings__step">
              <span className="step__number">4</span>
              <span>Zamów kuriera</span>
            </div>
          </div>
        </div>
      </div>
      <FormStepOne />
      <Contact />
    </>
  );
};
export default withRouter(GiveThings);
import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../components/firebase';
import HomeLoggNavHeader from './HomeLoggNavHeader';
import SignOut from './SignOut';


const HomeLoggMenuHeader = (props) => {
//  const onSignout = async () => {
//    await firebase.auth().signOut();
//    props.history.push('/loggout');
//  };
    
    return (
      <>
        <div className="header__menu">
          <img className="heroImage" src="Header-Form-Background.png" alt="heroImage"></img>
          <div className="header__menu-right">
            {/* <div className="header" id="start"> */}
              <HomeLoggNavHeader />
        
      
            {/* </div> */}
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
      </>
    );
};
export default HomeLoggMenuHeader;

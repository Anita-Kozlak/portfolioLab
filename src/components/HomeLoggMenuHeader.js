import React from 'react';
import HomeLoggNavHeader from './HomeLoggNavHeader';
import Decoration from '../components/Decoration';
import FormBackground from '../assets/Header-Form-Background.png'

const HomeLoggMenuHeader = () => {

    return (
      <>
        <div className="header__menu">
          <img
            className="heroImage"
            src={FormBackground}
            alt="heroImage"
          ></img>
          <div className="header__menu-right">
            <HomeLoggNavHeader />
             <div className="header__menu-container">

            <p className="header__text">
              Oddaj rzeczy których nie chcesz <br></br> POTRZEBUJĄCYM!
            </p>
            <Decoration />
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
        </div>
      </>
    );
};
export default HomeLoggMenuHeader;

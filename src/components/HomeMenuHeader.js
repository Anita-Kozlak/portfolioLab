import React from "react";
import HomeNavHeader from './HomeNavHeader'
import { Link } from "react-router-dom";


const HomeMenuHeader = () => {
    return (
      <div className="header__menu">
        <img className="heroImage" src="HeroImage.png" alt="heroImage"></img>
        <div className="header__menu-right">
          <HomeNavHeader />
          <div className="header__menu-container">
            <p className="header__text">
              Zacznij pomagać! <br></br> Oddaj niechciane rzeczy w zaufane ręce
            </p>
            <img src="Decoration.png" alt="decorationImage"></img>
            <div className="menu__buttons">
              <Link to="/login">
                <button>Oddaj rzeczy</button>
              </Link>
              <Link to="/login">
                <button>Zorganizuj zbiórkę</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
export default HomeMenuHeader
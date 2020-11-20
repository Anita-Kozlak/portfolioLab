import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const HomeNavHeader = () => {
    return (
      <div className="header" id="start">
        <div className="header__buttons">
          <Link to="/login">
            <button>Zaloguj</button>
          </Link>
          <Link to="/register">
            <button>Załóż konto</button>
          </Link>
        </div>
        <div className="header__nav">
            <Link to="/">
              <button>Start</button>
            </Link>
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
    );
}
export default HomeNavHeader
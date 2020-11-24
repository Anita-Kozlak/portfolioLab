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
            <Link to="/">
              <button>O co chodzi?</button>
            </Link>
          </Link>

          <Link smooth to="#aboutus">
            <Link to="/">
              <button>O nas</button>
            </Link>
          </Link>
          <Link smooth to="#whowehelp">
            <Link to="/">
              <button>Fundacja i organizacje</button>
            </Link>
          </Link>
          <Link smooth to="#contact">
            <Link to="/">
              <button>Kontakt</button>
            </Link>
          </Link>
        </div>
      </div>
    );
}
export default HomeNavHeader
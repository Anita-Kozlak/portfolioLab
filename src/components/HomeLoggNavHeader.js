import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SignOut from './SignOut';

const HomeLoggNavHeader = () => {

  return (
    <div className="header" id="start">
      <SignOut />
      <div className="header__nav">
        <Link to="/loggedhome">
          <button>Start</button>
        </Link>
        <Link smooth to="#foursteps">
          <Link to="/loggedhome">
            <button>O co chodzi?</button>
          </Link>
        </Link>

        <Link smooth to="#aboutus">
          <Link to="/loggedhome">
            <button>O nas</button>
          </Link>
        </Link>
        <Link smooth to="#whowehelp">
          <Link to="/loggedhome">
            <button>Fundacja i organizacje</button>
          </Link>
        </Link>
        <Link smooth to="#contact">
          <Link to="/loggedhome">
            <button>Kontakt</button>
          </Link>
        </Link>
      </div>
    </div>
  );
};
export default HomeLoggNavHeader;

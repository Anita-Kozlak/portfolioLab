import React from 'react';
import { Link } from 'react-router-dom';

const HomeLoggNavHeader = () => {
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
        <Link to="/">
          <button>O co chodzi?</button>
        </Link>
        <Link to="/">
          <button>O nas</button>
        </Link>
        <Link to="/">
          <button>Fundacja i organizacje</button>
        </Link>
        <Link to="/">
          <button>Kontakt</button>
        </Link>
      </div>
    </div>
  );
};
export default HomeLoggNavHeader;

import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import firebase from '../components/firebase';
import SignOut from './SignOut';

const HomeLoggNavHeader = (props) => {

    const onSignout = async () => {
      await firebase.auth().signOut();
      props.history.push('/loggout');
    };
  return (
    <div className="header" id="start">
      <SignOut />

      {/* <div className="header__buttons"> */}
        {/* <div className="header__user">
          <h2>Cześć {firebase.auth().currentUser.email}!</h2>
          <Link to="./givethings">
            <button>Oddaj rzeczy</button>
          </Link>
          <button onClick={onSignout}>Wyloguj</button>
        </div> */}
      {/* </div> */}
      {/* <div className="header__nav">
        <Link to="/login">
          <button>Zaloguj</button>
        </Link>
        <Link to="/register">
          <button>Załóż konto</button>
        </Link>
      </div> */}
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

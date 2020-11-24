import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../components/firebase';
import { withRouter } from 'react-router-dom';

const SignOut = (props) => {
  const onSignout = async () => {
    await firebase.auth().signOut();
    props.history.push('/loggout');
  };

  return (
            <div className="header__user">
              {/* <h2>Cześć {firebase.auth().currentUser.email}!</h2> */}
              <Link to="./givethings">
                <button>Oddaj rzeczy</button>
              </Link>
              <button onClick={onSignout}>Wyloguj</button>
            </div>
            
  );
};
export default withRouter(SignOut);

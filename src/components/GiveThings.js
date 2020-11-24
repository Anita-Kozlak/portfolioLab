
// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import firebase from './firebase';
// import Contact from './Contact';
// import { HashLink as Link } from 'react-router-hash-link';
// import FormStepOne from './FormStepOne';


// const GiveThings = (props) => {  


//   const { handleChange, formData } = props;

//   const onSignout = async () => {
//     await firebase.auth().signOut();
//     props.history.push('/loggout');
//   };

//   return (
//     <>
//       <div className="header__menu">
//         <img
//           className="heroImage"
//           src="Header-Form-Background.png"
//           alt="heroImage"
//         ></img>
//         <div className="header__menu-right">
//           <div className="header" id="start">
//             <div className="header__user">
//               {/* <h2>Cześć {firebase.auth().currentUser.email}!</h2> */}
//               <Link to="./givethings">
//                 <button>Oddaj rzeczy</button>
//               </Link>
//               <button onClick={onSignout}>Wyloguj</button>
//             </div>
//             <div className="header__nav">
//               <button>Start</button>
//               <Link to="/loggedhome">
//                 <button>O co chodzi?</button>
//               </Link>
//               <Link to="/loggedhome">
//                 <button>O nas</button>
//               </Link>
//               <Link to="/loggedhome">
//                 <button>Fundacja i organizacje</button>
//               </Link>
//               <Link to="/loggedhome">
//                 <button>Kontakt</button>
//               </Link>
//             </div>
//           </div>

//           <span className="header__text">
//             Oddaj rzeczy których nie chcesz, POTRZEBUJĄCYM!
//           </span>
//           <img src="Decoration.png" alt="decorationImage"></img>
//           <p className="giveThings__text">Wystarczą 4 proste kroki:</p>
//           <div className="giveThings__steps">
//             <div className="giveThings__step">
//               <span className="step__number">1</span>
//               <span>Wybierz rzezczy</span>
//             </div>
//             <div className="giveThings__step">
//               <span className="step__number">2</span>
//               <span>Spakuj je w worki</span>
//             </div>
//             <div className="giveThings__step">
//               <span className="step__number">3</span>
//               <span>Wybierz fundację</span>
//             </div>
//             <div className="giveThings__step">
//               <span className="step__number">4</span>
//               <span>Zamów kuriera</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FormStepOne props={props} />
//       <Contact />
//     </>
//   );
// };
// export default withRouter(GiveThings);

import React, { useState } from 'react';
import Important from './Important';
import FormStepOne from './FormStepOne';
import FormStepTwo from './FormStepTwo';
import FormStepThree from './FormStepThree';
import FormStepFour from './FormStepFour';
import FormSummary from './FormSummary';
import FormThankYou from './FormThankYou';
import Contact from './Contact';
import HomeLoggMenuHeader from './HomeLoggMenuHeader';
import LoggedHome from './LoggedHome';
import HomeLoggNavHeader from './HomeLoggNavHeader';


export default function GiveThings() {
  const [counter, setCounter] = useState(1);
  const [formData, setFormData] = useState({
    gift: '',
    bags: '0',
    localization: '0',
    whom: [],
    specLocalization: '',
    street: '',
    city: '',
    code: '',
    phone: '',
    date: '',
    hour: '',
    desc: '',
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCheckbox = (whom) => {
    console.log(whom);
    setFormData((prev) => ({ ...prev, whom: whom }));
  };
  const Minus = () => {
    setCounter((prev) => prev - 1);
  };
  const Plus = () => {
    setCounter((prev) => prev + 1);
  };
  const props = { counter, handleChange, formData, Minus, Plus };
  return (
    <>
      <HomeLoggMenuHeader />
      {counter > 4 ? null : <Important counter={counter} />}
      <div className="thingsToGive">
        {counter === 1 ? <FormStepOne props={props} /> : null}
        {counter === 2 ? <FormStepTwo props={props} /> : null}
        {counter === 3 ? (
          <FormStepThree props={props} handleCheckbox={handleCheckbox} />
        ) : null}
        {counter === 4 ? <FormStepFour props={props} /> : null}
        {counter === 5 ? <FormSummary props={props} /> : null}
        {counter === 6 ? <FormThankYou props={props} /> : null}
      </div>
      <Contact />
    </>
  );
}


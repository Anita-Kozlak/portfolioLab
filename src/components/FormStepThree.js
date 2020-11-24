// import React, { useState } from 'react';
// import FormStepTwo from './FormStepTwo';
// import FormStepFour from './FormStepFour';
// import Important from './Important';


// const FormStepThree = () => {
//     const [color1, setColor1] = useState('rgb(238,237,233)');
//     const [color2, setColor2] = useState('rgb(238,237,233)');
//     const [color3, setColor3] = useState('rgb(238,237,233)');
//     const [color4, setColor4] = useState('rgb(238,237,233)');
//     const [color5, setColor5] = useState('rgb(238,237,233)');
//     const [color6, setColor6]= useState('rgb(238,237,233)');
//     const [on, setOn] = useState(false)
//     const [stepTwo, setStepTwo] = useState(false);
//     const [stepThree, setStepThree] = useState(true);
//     const [stepFour, setStepFour] = useState(false);
//     const [important, setImportant] = useState(true);



//     const changeColor1 = () => {
//         setColor1((prevState) =>
//           prevState === 'rgb(238,237,233)' ? 'yellow' : 'rgb(238,237,233)',
//         );
//     }
//     const changeColor2 = () => {
//         setColor2((prevState) =>
//           prevState === 'rgb(238,237,233)' ? 'yellow' : 'rgb(238,237,233)',
//         );
//         }
//     const changeColor3 = () => {
//         setColor3((prevState) =>
//           prevState === 'rgb(238,237,233)' ? 'yellow' : 'rgb(238,237,233)',
//         );
//     }
//     const changeColor4 = () => {
//         setColor4((prevState) =>
//           prevState === 'rgb(238,237,233)' ? 'yellow' : 'rgb(238,237,233)',
//         );
//     }
//     const changeColor5 = () => {
//         setColor5((prevState) =>
//              prevState === 'rgb(238,237,233)' ? 'yellow' : 'rgb(238,237,233)',
//            );
//          };
//     const changeColor6 = () => {
//          setColor6((prevState) =>
//                 prevState === 'rgb(238,237,233)'
//                     ? 'yellow'
//                     : 'rgb(238,237,233)',
//                 );
//               };

//     const changeArrrow = () => {
//     setOn((prevState) => (prevState === false ? true : false));
//     }; 
    
//     const stepBack = () => {
//       setStepTwo(true)
//       setStepThree(false)
//       setImportant(false)

//     }
//     const stepNext = () => {
//       setStepFour(true)
//       setStepThree(false);
//       setImportant(false)

//      }
    


//   return (
//     <>
//       {important &&<Important />}
//       {stepTwo && <FormStepTwo />}{' '}
//       {stepThree && (
//         <div className="formStepThree">
//           <div className="formStepThree__container">
//             <h4>Krok 3/4</h4>
//             <div className="formStepThree__options">
//               <h1>Lokalizacja:</h1>
//               <select onClick={changeArrrow}>
//                 <option> - wybierz -</option>
//                 <option>Poznań</option>
//                 <option>Warszawa</option>
//                 <option>Kraków</option>
//                 <option>Wrocław</option>
//                 <option>Katowice</option>
//               </select>
//               {on && <img src="ArrowUp.png" alt="arrowUp"></img>}
//               {on === false && <img src="ArrowDown.png" alt="arrowDown"></img>}

//               <h2>Komu chcesz pomóc?</h2>
//               <div className="formStepThree__buttons">
//                 <button onClick={changeColor1} style={{ background: color1 }}>
//                   dzieciom
//                 </button>
//                 <button onClick={changeColor2} style={{ background: color2 }}>
//                   samotnym matkom
//                 </button>
//                 <button onClick={changeColor3} style={{ background: color3 }}>
//                   samotnym matkom
//                 </button>
//                 <button onClick={changeColor4} style={{ background: color4 }}>
//                   bezdomnym
//                 </button>
//                 <button onClick={changeColor5} style={{ background: color5 }}>
//                   niepełnosprawnym
//                 </button>
//                 <button onClick={changeColor6} style={{ background: color6 }}>
//                   osobom starszym
//                 </button>
//               </div>
//               <div className="name">
//                 <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
//                 <input></input>
//               </div>
//             </div>
//             <button onClick={stepBack} className="btn">
//               Wstecz
//             </button>
//             <button onClick={stepNext} className="btn">
//               Dalej
//             </button>
//           </div>
//         </div>
//       )}
//       {stepFour && <FormStepFour />}
//     </>
//   );

// };

// export default FormStepThree;


// import React, { useState } from 'react';



// const FormStepThree = ({ props, handleCheckbox }) => {
//   const { counter, handleChange, formData, Plus, Minus } = props;
//   const [error, setError] = useState({
//     localization: '',
//     whom: '',
//   });

//   const handleChangeWhom = (e) => {
//     handleChange(e);
//   };
//   const changeArrrow = () => {
//     setOn((prevState) => (prevState === false ? true : false));
//   };

//   const three = () => {
//     let whom;
//     let localization;

//     if (formData.whom) {
//       Plus();
//     } else {
//       whom = 'Zaznacz jedną z opcji!';
//     }

//     if (!formData.localization === '-wybierz-') {
//       Plus();
//     } else {
//       localization = 'Zaznacz jedną z opcji';
//     }

//     if (localization || whom) {
//       setError((prev) => ({ ...prev, whom: whom, localization: localization }));
//     }
//   };

//   const handleCheckbox1 = (e) => {
//     let arr = formData.whom;
//     let el = e.target.value;
//     if (arr.includes(el)) {
//       arr = arr.filter((element) => {
//         return element !== el;
//       });
//     } else {
//       arr.push(el);
//     }
//     handleCheckbox(arr);
//   };

//   return (
//     <>
//       <div className="formStepThree">
//         <form className="formStepThree__container">
//           <h4>{counter}/4</h4>
//           <div className="formStepThree__options">
//             <h1>Lokalizacja:</h1>
//             <select
//               name="localization"
//               value={formData.localization}
//               onClick={changeArrrow}
//               onChange={handleChange}
//             >
//               <option> - wybierz -</option>
//               <option value="Poznań">Poznań</option>
//               <option value="Warszawa">Warszawa</option>
//               <option value="Kraków">Kraków</option>
//               <option value="Wrocław">Wrocław</option>
//               <option value="Katowice">Katowice</option>
//             </select>
//             {on && <img src="ArrowUp.png" alt="arrowUp"></img>}
//             {on === false && <img src="ArrowDown.png" alt="arrowDown"></img>}

//             <h2>Komu chcesz pomóc?</h2>
//             <div className="formStepThree__buttons">
//               <input
//                 name="whom"
//                 value="dzieciom"
//                 type="radio"
//                 onChange={handleChangeWhom}
//                 checked={formData.whom === 'dzieciom' ? 'checked' : null}
//               ></input>
//               <input
//                 name="whom"
//                 value="samotnym matkom"
//                 type="radio"
//                 onChange={handleChangeWhom}
//                 onClick={handleCheckbox1}
//                 checked={formData.whom === 'samotnym matkom' ? 'checked' : null}
//               ></input>
//               <input
//                 name="whom"
//                 value="bezdomnym"
//                 type="radio"
//                 onChange={handleChangeWhom}
//                 onClick={handleCheckbox1}
//                 checked={formData.whom === 'bezdomnym' ? 'checked' : null}
//               ></input>
//               <input
//                 name="whom"
//                 value="niepełnosprawnym"
//                 type="radio"
//                 onChange={handleChangeWhom}
//                 onClick={handleCheckbox1}
//                 checked={
//                   formData.whom === 'niepełnosprawnym' ? 'checked' : null
//                 }
//               ></input>
//               <input
//                 name="whom"
//                 value="niepełnosprawnym"
//                 type="radio"
//                 onChange={handleChangeWhom}
//                 checked={formData.whom === 'osobom starszym' ? 'checked' : null}
//                 onClick={handleCheckbox1}
//               ></input>{' '}
//             </div>
//             <div className="name">
//               <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
//               <input></input>
//             </div>
//           </div>
//           {error && <p className="error">{error}</p>}

//           {counter > 5 ? null : (
//             <div>
//               {counter === 1 ? null : (
//                 <button className="btn" onClick={Minus}>
//                   Wstecz
//                 </button>
//               )}
//               <button className="btn" onClick={three}>
//                 {counter === 5 ? 'Potwierdź' : 'Dalej'}
//               </button>
//             </div>
//           )}
//         </form>
//       </div>
//     </>
//   );
// };

// export default FormStepThree;


import React, { useState } from 'react';

export default function FormStepThree({ props, handleCheckbox }) {
  const [on, setOn] = useState(false);

  const [errors, setErrors] = useState({
    localization: '',
    whom: '',
  });
  const { counter, handleChange, formData, Minus, Plus } = props;
  const three = () => {
    let localization = '';
    let whom = '';
    if (formData.localization === '0' && !formData.specLocalization) {
      localization = 'Zaznacz lub wpisz lokalizację!';
    }
    if (!formData.whom[0]) {
      whom = 'Zaznacz jedną z opcji!';
    }
    if (localization || whom) {
      setErrors((prev) => ({
        ...prev,
        localization: localization,
        whom: whom,
      }));
      return;
    }
    Plus();
  };

  const handleCheckbox1 = (e) => {
    let arr = formData.whom;
    let el = e.target.value;
    if (arr.includes(el)) {
      arr = arr.filter((element) => {
        return element !== el;
      });
    } else {
      arr.push(el);
    }
    handleCheckbox(arr);
  };
  
  const changeArrrow = () => {
    setOn((prevState) => (prevState === false ? true : false));
  };
  return (
    <>
      <div className="formStepThree">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="formStepThree__form"
        >
          <h4>Krok {counter} /4</h4>

          <h1>Lokalizacja:</h1>

          <label>
            <select
              onChange={handleChange}
              name="localization"
              value={formData.localization}
              onClick={changeArrrow}
            >
              <option value="0" disabled>
                -Wybierz-
              </option>
              <option value="Poznań">Poznań</option>
              <option value="Warszawa">Warszawa</option>
              <option value="Kraków">Kraków</option>
              <option value="Wrocław">Wrocław</option>
              <option value="Katowice">Katowice</option>
            </select>
            {on && <img src="ArrowUp.png" alt="arrowUp"></img>}
            {on === false && <img src="ArrowDown.png" alt="arrowDown"></img>}
          </label>
          {errors.localization && (
            <p className="error">{errors.localization}</p>
          )}
          <h2>Komu chcesz pomóc?</h2>
          <div className="formStepThree__buttons">
            <label className="checkbox">
              <input
                onClick={handleCheckbox1}
                type="checkbox"
                value="dzieciom"
                checked={formData.whom.includes('dzieciom') ? 'checked' : null}
              />

              <span>dzieciom</span>
            </label>
            <label className="checkbox">
              {' '}
              <input
                onClick={handleCheckbox1}
                type="checkbox"
                value="samotnym matkom"
                checked={
                  formData.whom.includes('samotnym matkom') ? 'checked' : null
                }
              />
              <span>samotnym matkom</span>{' '}
            </label>
            <label className="checkbox">
              {' '}
              <input
                onClick={handleCheckbox1}
                type="checkbox"
                value="bezdomnym"
                checked={formData.whom.includes('bezdomnym') ? 'checked' : null}
              />
              <span>bezdomnym </span>
            </label>
            <label className="checkbox">
              {' '}
              <input
                onClick={handleCheckbox1}
                type="checkbox"
                value="niepełnosprawnym"
                checked={
                  formData.whom.includes('niepełnosprawnym') ? 'checked' : null
                }
              />
              <span>niepełnosprawnym</span>{' '}
            </label>
            <label className="checkbox">
              {' '}
              <input
                onClick={handleCheckbox1}
                type="checkbox"
                value="osobom starszym"
                checked={
                  formData.whom.includes('osobom starszym') ? 'checked' : null
                }
              />
              <span>osobom starszym</span>
            </label>
          </div>
          {errors.whom && <p className="error">{errors.whom}</p>}

          <div className="name">
            <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
            <label>
              <input
                onChange={handleChange}
                name="specLocalization"
                value={formData.specLocalization}
                className="org"
                type="text"
              />
            </label>
          </div>
          {errors.localization && (
            <p className="error">{errors.localization}</p>
          )}
          {counter > 5 ? null : (
            <div>
              {counter === 1 ? null : (
                <button className="btn" onClick={Minus}>
                  Wstecz
                </button>
              )}
              <button className="btn" onClick={three}>
                {counter === 5 ? 'Potwierdź' : 'Dalej'}
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

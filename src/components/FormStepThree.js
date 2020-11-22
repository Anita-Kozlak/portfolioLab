import React, { useState } from 'react';
import FormStepTwo from './FormStepTwo';
import FormStepFour from './FormStepFour';
import Important from './Important';


const FormStepThree = () => {
    const [color1, setColor1] = useState('rgb(238,237,233)');
    const [color2, setColor2] = useState('rgb(238,237,233)');
    const [color3, setColor3] = useState('rgb(238,237,233)');
    const [color4, setColor4] = useState('rgb(238,237,233)');
    const [color5, setColor5] = useState('rgb(238,237,233)');
    const [color6, setColor6]= useState('rgb(238,237,233)');
    const [on, setOn] = useState(false)
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(true);
    const [stepFour, setStepFour] = useState(false);
    const [important, setImportant] = useState(true);



    const changeColor1 = () => {
        setColor1((prevState) =>
          prevState === 'rgb(238,237,233)' ? 'yellow' : 'rgb(238,237,233)',
        );
    }
    const changeColor2 = () => {
        setColor2((prevState) =>
          prevState === 'rgb(238,237,233)' ? 'yellow' : 'rgb(238,237,233)',
        );
        }
    const changeColor3 = () => {
        setColor3((prevState) =>
          prevState === 'rgb(238,237,233)' ? 'yellow' : 'rgb(238,237,233)',
        );
    }
    const changeColor4 = () => {
        setColor4((prevState) =>
          prevState === 'rgb(238,237,233)' ? 'yellow' : 'rgb(238,237,233)',
        );
    }
    const changeColor5 = () => {
        setColor5((prevState) =>
             prevState === 'rgb(238,237,233)' ? 'yellow' : 'rgb(238,237,233)',
           );
         };
    const changeColor6 = () => {
         setColor6((prevState) =>
                prevState === 'rgb(238,237,233)'
                    ? 'yellow'
                    : 'rgb(238,237,233)',
                );
              };

    const changeArrrow = () => {
    setOn((prevState) => (prevState === false ? true : false));
    }; 
    
    const stepBack = () => {
      setStepTwo(true)
      setStepThree(false)
      setImportant(false)

    }
    const stepNext = () => {
      setStepFour(true)
      setStepThree(false);
      setImportant(false)

     }
    


  return (
    <>
      {important &&<Important />}
      {stepTwo && <FormStepTwo />}{' '}
      {stepThree && (
        <div className="formStepThree">
          <div className="formStepThree__container">
            <h4>Krok 3/4</h4>
            <div className="formStepThree__options">
              <h1>Lokalizacja:</h1>
              <select onClick={changeArrrow}>
                <option> - wybierz -</option>
                <option>Poznań</option>
                <option>Warszawa</option>
                <option>Kraków</option>
                <option>Wrocław</option>
                <option>Katowice</option>
              </select>
              {on && <img src="ArrowUp.png" alt="arrowUp"></img>}
              {on === false && <img src="ArrowDown.png" alt="arrowDown"></img>}

              <h2>Komu chcesz pomóc?</h2>
              <div className="formStepThree__buttons">
                <button onClick={changeColor1} style={{ background: color1 }}>
                  dzieciom
                </button>
                <button onClick={changeColor2} style={{ background: color2 }}>
                  samotnym matkom
                </button>
                <button onClick={changeColor3} style={{ background: color3 }}>
                  samotnym matkom
                </button>
                <button onClick={changeColor4} style={{ background: color4 }}>
                  bezdomnym
                </button>
                <button onClick={changeColor5} style={{ background: color5 }}>
                  niepełnosprawnym
                </button>
                <button onClick={changeColor6} style={{ background: color6 }}>
                  osobom starszym
                </button>
              </div>
              <div className="name">
                <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
                <input></input>
              </div>
            </div>
            <button onClick={stepBack} className="btn">
              Wstecz
            </button>
            <button onClick={stepNext} className="btn">
              Dalej
            </button>
          </div>
        </div>
      )}
      {stepFour && <FormStepFour />}
    </>
  );

};

export default FormStepThree;

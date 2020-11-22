import React, { useState } from 'react';
import FormStepOne from './FormStepOne'
import FormStepThree from './FormStepThree';
import Important from './Important';

const FormStepTwo = () => {

  const [on, setOn] = useState(true)
  const [stepTwo, setStepTwo] = useState(true);
  const [stepOne, setStepOne] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [important, setImportant] = useState(true);


 
    const changeArrrow = () => {
       setOn((prevState) => (prevState === false ? true : false));
     }; 

      const nextStep = () => {
        setStepThree(true);
        setStepTwo(false);
        setStepOne(false)    
        setImportant(false)


      };
      const backStep = () => {
        setStepOne(true);
        setStepTwo(false)
        setStepThree(false)
        setImportant(false);


      }
  return (
    <>
      {important && <Important />}

      {stepOne && <FormStepOne />}
      {stepTwo && (
        <div className="formStepTwo">
          <div className="formStepTwo__container">
            <h4>Krok 2/4</h4>

            <p>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
            <div className="formStepTwo__options">
              <p>Liczba 60l worków:</p>
              <select onClick={changeArrrow}>
                <option> - wybierz -</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              {on && <img src="ArrowUp.png"></img>}
              {on === false && <img src="ArrowDown.png"></img>}
            </div>
            <button onClick={backStep} className="btn">
              Wstecz
            </button>
            <button onClick={nextStep} className="btn">
              Dalej
            </button>
          </div>
        </div>
      )}
      {stepThree && <FormStepThree />}
    </>
  );

};

export default FormStepTwo;

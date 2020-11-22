import { Link } from 'react-router-dom'
import FormStepTwo from './FormStepTwo';
import React, { useState } from 'react';
import Important from './Important';

const FormStepOne = () => {

  const [stepTwo, setStepTwo] = useState(false)
  const [stepOne, setStepOne] = useState(true)
  const [important, setImportant] = useState(true)

  const nextStep = () => {
    setStepTwo(true)
    setStepOne(false)
    setImportant(false)
  }
  return (
    <>
      {important &&<Important />}

      {stepOne && (
        <div className="formStepOne">
          <div className="formStepOne__container">
            <h4>Krok 1/4</h4>
            <p>Zaznacz co chcesz oddać:</p>

            <div className="formStepOne__checkbox">
              <input type="checkbox" name="test" />
              <p>ubrania, które nadają się do ponownego użycia</p>
            </div>
            <div className="formStepOne__checkbox">
              {' '}
              <input type="checkbox"></input>
              <p>ubrania do wyrzucenia</p>
            </div>
            <div className="formStepOne__checkbox">
              {' '}
              <input type="checkbox"></input>
              <p>zabawki</p>
            </div>
            <div className="formStepOne__checkbox">
              <input type="checkbox"></input>
              <p>książki</p>
            </div>
            <div className="formStepOne__checkbox">
              {' '}
              <input type="checkbox"></input>
              <p>inne</p>
            </div>
            <button onClick={nextStep}>Dalej</button>
          </div>
        </div>
      )}

      {stepTwo && <FormStepTwo />}
    </>
  );
};

export default FormStepOne;

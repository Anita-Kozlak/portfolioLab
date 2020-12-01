import React, { useState } from 'react';
import ArrowUp from '../assets/ArrowUp.png';
import ArrowDown from '../assets/ArrowDown.png';
const FormStepTwo = ({props}) => {

  const [on, setOn] = useState(true)
  const [error, setError] = useState('')
  const { counter, handleChange, formData, Plus, Minus } = props;


  const changeArrrow = () => {
       setOn((prevState) => (prevState === false ? true : false));
     }; 

  const two = () => {
    if(formData.bags !== '0') {
      Plus()
    } else {
      setError('Zaznacz jedną z opcji!')
    }
  }
  return (
    <>
      <div className="formStepTwo">
        <div className="formStepTwo__container">
          <h4>Krok {counter}/4</h4>

          <p>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
          <div className="formStepTwo__options">
            <p>Liczba 60l worków:</p>
            <select
              name="bags"
              value={formData.bags}
              onChange={handleChange}
              onClick={changeArrrow}
            >
              <option> - wybierz -</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {on && <img src={ArrowUp} alt="ArrowUp"></img>}
            {on === false && <img src={ArrowDown} alt="ArrowDown"></img>}
          </div>
          {error && <h8 className="error">{error}</h8>}
        </div>
        {counter > 5 ? null : (
          <div>
            {counter === 1 ? null : (
              <button className="btn" onClick={Minus}>
                Wstecz
              </button>
            )}
            <button className="btn" onClick={two}>
              {counter === 5 ? 'Potwierdź' : 'Dalej'}
            </button>
          </div>
        )}
      </div>
    </>
  );

};

export default FormStepTwo;
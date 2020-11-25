import React, { useState } from 'react';

const FormStepOne = ({props}) => {

  const [error, setError] = useState('')
  const {counter, handleChange, formData, Plus, Minus} = props;

  const handleChangeGift = (e) => {
      handleChange(e);
  }
  const one = () => {
    if(formData.gift) {
      Plus()

    } else {
      setError("Zaznacz jedną z opcji!")
    }
  }

  return (
    <>
      <div className="formStepOne" id="formStepOne">
        <form className="formStepOne__form">
          <h4>Krok {counter}/4</h4>
          <p>Zaznacz co chcesz oddać:</p>
          <div className="formStepOne__checkbox">
            <input
              value="ubrania, które nadają się do ponownego użycia"
              type="radio"
              name="gift"
              onChange={handleChangeGift}
              checked={
                formData.gift ===
                'ubrania, które nadają się do ponownego użycia'
                  ? 'checked'
                  : null
              }
            />
            <p>ubrania, które nadają się do ponownego użycia</p>
          </div>
          <div className="formStepOne__checkbox">
            {' '}
            <input
              name="gift"
              value="ubrania do wyrzucenia"
              type="radio"
              onChange={handleChangeGift}
              checked={
                formData.gift === 'ubrania, do wyrzucenia' ? 'checked' : null
              }
            ></input>
            <p>ubrania do wyrzucenia</p>
          </div>
          <div className="formStepOne__checkbox">
            {' '}
            <input
              name="gift"
              value="zabawki"
              type="radio"
              onChange={handleChangeGift}
              checked={formData.gift === 'zabawki' ? 'checked' : null}
            ></input>
            <p>zabawki</p>
          </div>
          <div className="formStepOne__checkbox">
            <input
              name="gift"
              value="książki"
              type="radio"
              onChange={handleChangeGift}
              checked={formData.gift === 'książki' ? 'checked' : null}
            ></input>
            <p>książki</p>
          </div>
          <div className="formStepOne__checkbox">
            {' '}
            <input
              name="gift"
              value="inne"
              type="radio"
              onChange={handleChangeGift}
              checked={formData.gift === 'inne' ? 'checked' : null}
            ></input>
            <p>inne</p>
          </div>
          {error && <h8 className="error">{error}</h8>}
        </form>
        {counter > 5 ? null : (
          <div>
            {counter === 1 ? null : (
              <button className="btn" onClick={Minus}>
                Wstecz
              </button>
            )}
            <button className="btn" onClick={one}>
              {counter === 5 ? 'Potwierdź' : 'Dalej'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default FormStepOne;
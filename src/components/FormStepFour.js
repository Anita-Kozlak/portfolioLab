import React, { useState } from 'react';

export default function FormStepFour({ props }) {
  const [errors, setErrors] = useState({
    street: '',
    city: '',
    code: '',
    phone: '',
    date: '',
    hour: '',
  });

  const { counter, handleChange, formData, Minus, Plus } = props;

  const four = () => {
    let street = '';
    let city = '';
    let code = '';
    let phone = '';
    let date = '';
    let hour = '';
    if (formData.street.length < 2) {
      street = 'Minimum 2 znaki!';
    }
    if (formData.city < 2) {
      city = 'Minimum 2 znaki!';
    }
    if (formData.code.length !== 5) {
      code = 'Kod musi składać się z 5 cyfr!!';
    }
    if (formData.phone.length !== 9) {
      phone = 'Numer musi składać się z 9 cyfr!';
    }
    if (!formData.date || !formData.hour) {
      date = 'Proszę uzupełnić to pole';
    }
    if (street || city || code || phone || date || hour) {
      setErrors({
        ...errors,
        street: street,
        city: city,
        code: code,
        phone: phone,
        date: date,
        hour: date,
      });
      return;
    }
    Plus();
  };

  return (
    <>
      <div className="formStepFour">
        <form onSubmit={e => e.preventDefault()} className="formStepFour__form">
          <h4>Krok {counter} /4</h4>
          <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
          <div className="formStepFour__options">
            <div className="formStepFour__column">
              <h2>Adres odbioru:</h2>
              <label className="formStepFour__option">
                {' '}
                <h3>Ulica</h3>{' '}
                <input
                  onChange={handleChange}
                  value={formData.street}
                  name="street"
                  type="text"
                />{' '}
              </label>
              {errors.street && <p className="error">{errors.street}</p>}
              <label className="formStepFour__option">
                {' '}
                <h3>Miasto</h3>
                <input
                  onChange={handleChange}
                  value={formData.city}
                  name="city"
                  type="text"
                />{' '}
              </label>
              {errors.city && (
                <p p className="error">
                  {errors.city}
                </p>
              )}
              <label className="formStepFour__option">
                {' '}
                <h3>Kod pocztowy</h3>
                <input
                  onChange={handleChange}
                  value={formData.code}
                  name="code"
                  type="text"
                />{' '}
              </label>
              {errors.code && <p className="error">{errors.code}</p>}
              <label className="formStepFour__option">
                {' '}
                <h3>Numer telefonu</h3>{' '}
                <input
                  onChange={handleChange}
                  value={formData.phone}
                  name="phone"
                  type="tel"
                />{' '}
              </label>
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className="formStepFour__column">
              <h2>Termin odbioru:</h2>
              <label className="formStepFour__option">
                {' '}
                <h3>Data</h3>{' '}
                <input
                  onChange={handleChange}
                  value={formData.date}
                  name="date"
                  type="date"
                />{' '}
              </label>
              {errors.date && <p className="error">{errors.date}</p>}
              <label className="formStepFour__option">
                {' '}
                <h3>Godzina</h3>{' '}
                <input
                  onChange={handleChange}
                  value={formData.hour}
                  name="hour"
                  type="time"
                />{' '}
              </label>
              {errors.date && <p className="error">{errors.date}</p>}
              <label className="formStepFour__option">
                {' '}
                <h3>Uwagi dla kuriera</h3>{' '}
                <textarea
                  onChange={handleChange}
                  value={formData.desc}
                  name="desc"
                />{' '}
              </label>
            </div>
          </div>
          {counter > 5 ? null : (
            <div>
              {counter === 1 ? null : (
                <button className="btn" onClick={Minus}>
                  Wstecz
                </button>
              )}
              <button className="btn" onClick={four}>
                {counter === 5 ? 'Potwierdź' : 'Dalej'}
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

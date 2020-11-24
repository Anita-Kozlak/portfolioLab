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

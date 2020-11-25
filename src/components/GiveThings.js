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
    <div className="giveThings">
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
    </div>
  );
}


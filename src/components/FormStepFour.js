import React, { useState } from 'react';
import FormStepThree from './FormStepThree';
import FormStepSummary from './FormSummary'
import Important from './Important';
import { useForm } from 'react-hook-form';

const FormStepFour = () => {
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(true);
  const [stepSummary, setStepSummary] = useState(false)
  const [important, setImportant] = useState(true);
  const [street, setStreet] = useState('')

  const { register, handleSubmit, errors } = useForm();


   const stepBack = () => {
     setStepThree(true);
     setStepFour(false);
     setImportant(false)
     
    };
   const stepNext = () => {
     setStepThree(false);
     setStepFour(false);
     setStepSummary(true)
     setImportant(false)
   };
    const onSubmit = async (data) => 
      console.log(data);


  return (
    <>
      {important && <Important />}

      {stepThree && <FormStepThree />}
      {stepFour && (
        <div className="formStepFour">
          <form
            className="formStepFour__container"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h4>Krok 4/4</h4>
            <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>

            <div className="formStepFour__options">
              <div className="formStepFour__column">
                <h1>Adres odbioru:</h1>
                <div className="formStepFour__option">
                  <h3>Ulica</h3>
                  <input ref={register({
                      required: 'Pole jest wymagane!',

                      maxLength: {
                        value: 2,
                        message: 'Podane ulica jest nieprawidłowa! ',
                      },
                    })}
                    placeholder=""
                    name="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
                <div className="formStepFour__option">
                  <h3>Miasto</h3>
                  <input></input>
                </div>
                <div className="formStepFour__option">
                  <h3>Kod pocztowy</h3>
                  <input></input>
                </div>
                <div className="formStepFour__option">
                  <h3>Numer telefonu</h3>
                  <input></input>
                </div>
              </div>
              <div className="formStepFour__column">
                <h1>Termin odbioru:</h1>
                <div className="formStepFour__option">
                  <h3>Data</h3>
                  <input></input>
                </div>
                <div className="formStepFour__option">
                  <h3>Godzina</h3>
                  <input></input>
                </div>
                <div className="formStepFour__option">
                  <h3>Kod pocztowy</h3>
                  <input></input>
                </div>
                <div className="formStepFour__option">
                  <h3>Uwagi dla kuriera</h3>
                  <textarea rows={10} type="text"></textarea>
                </div>
              </div>
            </div>
            <div>
              <button onClick={stepBack} className="btn">
                Wstecz
              </button>
              <button onClick={stepNext} className="btn">
                Dalej
              </button>
            </div>
          </form>
        </div>
      )}
      {stepSummary && <FormStepSummary />}
    </>
  );
};

export default FormStepFour;

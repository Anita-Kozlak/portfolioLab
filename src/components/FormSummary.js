import React, { useState } from 'react';
import FormStepFour from './FormStepFour';
import FormThankYou from './FormThankYou'
import Important from './Important';

const FormStepOne = () => {

    const [stepFour, setStepFour] = useState(false);
    const [stepSummary, setStepSummary] = useState(true);
    const [stepThankYou, setStepThankYou] = useState(false);
    const [important, setImportant] = useState(true);



    const stepBack = () => {
      setStepFour(true);
      setStepSummary(false)
      setImportant(false)
    };
    const stepConfirm = () => {
      setStepSummary(false);
      setStepThankYou(true)
      setImportant(false)
    };
 return (
   <>
     {important && <Important />}

     {stepFour && <FormStepFour />}
     {stepSummary && (
       <div className="formSummary">
         <div className="formSummary__container">
           <h1>Podsumowanie Twojej darowizny</h1>
           <h2>Oddajesz:</h2>
           <div className="summary">
             <img src="Icon.png" alt="Icon"></img>
             <h2>4 worki, ubrania w dobrym stanie, dzieciom</h2>
           </div>
           <div className="summary">
             <img src="Icon4.png" alt="Icon"></img>
             <h2>dla lokalizacji Warszawa</h2>
           </div>
           <div className="formSummary__options">
             <div className="formSummary__column">
               <h1>Adres odbioru:</h1>
               <div className="formSummary__option">
                 <h3>Ulica</h3>
                 <input></input>
               </div>
               <div className="formSummary__option">
                 <h3>Miasto</h3>
                 <input></input>
               </div>
               <div className="formSummary__option">
                 <h3>Kod pocztowy</h3>
                 <input></input>
               </div>
               <div className="formSummary__option">
                 <h3>Numer telefonu</h3>
                 <input></input>
               </div>
             </div>
             <div className="formSummary__column">
               <h1>Termin odbioru:</h1>
               <div className="formSummary__option">
                 <h3>Data</h3>
                 <input></input>
               </div>
               <div className="formSummary__option">
                 <h3>Godzina</h3>
                 <input></input>
               </div>
               <div className="formSummary__option">
                 <h3>Kod pocztowy</h3>
                 <input></input>
               </div>
               <div className="formSummary__option">
                 <h3>Uwagi dla kuriera</h3>
                 <input></input>
               </div>
             </div>
           </div>
           <div>
             <button onClick={stepBack} className="btn">
               Wstecz
             </button>
             <button onClick={stepConfirm} className="btn">
               Potwierdzam
             </button>
           </div>
         </div>
       </div>
     )}
     {stepThankYou && <FormThankYou />}
   </>
 );
};

export default FormStepOne;

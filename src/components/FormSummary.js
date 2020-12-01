import React from 'react';
import firebase from '../components/firebase';
import Icon1 from '../assets/Icon.png';
import Icon4 from '../assets/Icon4.png';


export default function FormSummary({ props }) {
  const { formData, Minus, Plus } = props;


  const addForm = async () => {
    const gifts = firebase.database().ref('gifts')
      Plus();
    try {
       await firebase.database().ref('gifts');
        gifts.push(formData);
     } catch (error) {
          console.log(error);
 }
};
  return (
    <>
      <div className="formSummary">
        <div className="formSummary__container">
          <h1>Podsumowanie Twojej darowizny</h1>
          <h3>Oddajesz: </h3>
          <div className="summary">
            <img src={Icon1} alt="Icon"></img>{formData.bags} worki, {formData.gift}
          </div>
          <div className="summary">
            <img src={Icon4} alt="icon" />
            dla lokalizacji: {formData.localization}
          </div>
          <div className="formSummary__options">
            <div className="formSummary__column">
              <h1>Adres odbioru:</h1>
              <div>
                <h3>Ulica</h3> <span>{formData.street}</span>{' '}
              </div>
              <div>
                <h3>Miasto </h3>
                <span>{formData.city}</span>{' '}
              </div>
              <div>
                <h3>Kod pocztowy</h3> <span>{formData.code}</span>{' '}
              </div>
              <div>
                <h3>Numer telefonu </h3>
                <span>{formData.phone}</span>{' '}
              </div>
            </div>
            <div className="formSummary__column">
              <h1>Termin odbioru:</h1>
              <div>
                <h3>Data </h3>
                <span>{formData.date}</span>
              </div>
              <div>
                <h3>Godzina </h3>
                <span>{formData.hour}</span>
              </div>
              <div>
                <h3>Uwagi dla kuriera</h3> <span>{formData.desc}</span>
              </div>
            </div>
          </div>
          <div>
            <button className="btn" onClick={Minus}>
              Wstecz
            </button>
            <button className="btn" onClick={addForm}>
              Potwierdzam
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import PasswordChange from './PasswordChange'
import firebase from '../components/firebase';
import Gift from '../components/Gift'
import Users from '../components/Users'
import { Link } from "react-router-dom";



const Admin = ({formData}) => {
  const [giftList, setGiftList] = useState();
  const [active, setActive] = useState('')
 


  useEffect(() => {
    const giftRef = firebase.database().ref('gifts');
    giftRef.on('value', (snapshot) => {
      const gifts = snapshot.val();
      const list = [];
      for (let id in gifts) {
        list.push({ id, ...gifts[id] });
      }
      setGiftList(list);
    });
  }, []);

  const btnPasswordChange = () => {
    setActive('passwordChange')
  }
  const btnForm = () => {
    setActive('form')
  }
  const btnUsers = () => {
    setActive('users')
  }

  //wyświetlanie danych w konsoli
  // const showForm = () => {
  //   const gifts = firebase.database().ref('gifts');

  //   gifts.on(
  //     'value',
  //     function (data) {
  //       console.log(data.val());
  //     },
  //     function (error) {
  //       console.log('Error: ' + error.code);
  //     },
  //   );
  // };

 

  return (
    <>
      <div className="admin">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YL-ULXrcmLoBfL1GgzkA3lW8y437pMaB8A&usqp=CAU"
          alt="adminIcon"
        ></img>
        <h1 className="panel">Panel administracyjny:</h1>

          <Link to="/loggedhome">
            <button className="btnAdmin">Strona główna</button>
          </Link>
          <button onClick={btnPasswordChange} className="btnAdmin">
            Zmień hasło
          </button>
          <button onClick={btnForm} className="btnAdmin">
            Formularze
          </button>
          <button onClick={btnUsers} className="btnAdmin">Zarejestrowani użytkownicy</button>
        {active === 'passwordChange' && <PasswordChange />}
        {active === 'form' && (
          <div className="forms">
            <h1>Formularze:</h1>
            {giftList
              ? giftList.map((gift, index) => (
                  <Gift gift={gift} key={index} index={index} />
                ))
              : ''}
          </div>
        )}

        {active==="users" && <Users />}
      </div>
    </>
  );
}

export default Admin;
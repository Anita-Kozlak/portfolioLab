import React, { useEffect, useState } from 'react';
import PasswordChange from './PasswordChange'
import firebase from '../components/firebase';
import Gift from '../components/Gift'
import Users from '../components/Users'
import { Link } from "react-router-dom";



const Admin = ({gift}) => {
  const [giftList, setGiftList] = useState();

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


  //wyświetlanie danych w konsoli
  const showForm = () => {
    const gifts = firebase.database().ref('gifts');

    gifts.on(
      'value',
      function (data) {
        console.log(data.val());
      },
      function (error) {
        console.log('Error: ' + error.code);
      },
    );
  };

 

  return (
    <>
      <div className="admin">
        <Link to="/loggedhome">
          <button className="btn">Strona główna</button>
        </Link>
        <h1 className="panel">Panel administracyjny:</h1>
        <div className="menu__buttons"></div>
        <PasswordChange />
        <div>
          <h1>Formularze:</h1>
          {giftList
            ? giftList.map((gift, index) => (
                <Gift gift={gift} key={index} index={index} />
              ))
            : ''}
        </div>
        {firebase.auth().currentUser.email === 'admin@gmail.com' && <Users />}
      </div>
    </>
  );
}

export default Admin;
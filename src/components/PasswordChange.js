import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import firebase from './firebase';

const PasswordChange = () => {
  const [email, setEmail] = useState('');

 
  const onChange = async () => {
    var auth = firebase.auth();
    var emailAddress = email;

    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        console.log('hasło wysłane')
      })
      .catch(function (error) {
        console.log('błąd')
      });
  };
  return (
    <div className="changePassword">
      <h1>
        Zmień hasło użytkownika: <br></br>
        <h4>(wpisz email użytkownika, a my wyślemy do niego maila)</h4>
      </h1>
      <form>
        <label>Email użytkownika:</label>
        <Input
          name="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={onChange}>wyślij</Button>
      </form>
    </div>
  );
};

export default PasswordChange;
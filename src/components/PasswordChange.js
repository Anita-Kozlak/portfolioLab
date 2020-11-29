import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import firebase from './firebase';

const PasswordChange = (props) => {
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');

  const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

 
  const onChange = async () => {
    try {
      await firebase.auth().currentUser.updatePassword(passwordOne)
      props.history.push('/loggedhome')

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="changePassword">
      <h1>Zmień hasło:</h1>
      <form>
        <label>Zmień hasło</label>
        <Input
          name="text"
          value={passwordOne}
          onChange={(e) => setPasswordOne(e.target.value)}
        />
        <label>Powtórz nowe hasło</label>
        <Input
          name="text"
          value={passwordTwo}
          onChange={(e) => setPasswordTwo(e.target.value)}
        />
        <Button onClick={onChange} disabled={isInvalid} type="submit">
          Zresetuj hasło
        </Button>
      </form>
    </div>
  );
};

export default PasswordChange;
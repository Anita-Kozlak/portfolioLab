import React, { useEffect, useState } from 'react';
import PasswordChange from './PasswordChange';
import firebase from '../components/firebase';
import Gift from '../components/Gift';
import Delete from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import User from '../components/User'
import Input from '@material-ui/core/Input';

const Users = () => {
  const [userList, setUserList] = useState([]);

  
  useEffect(() => {
    const userRef = firebase.database().ref('users');
    userRef.on('value', (snapshot) => {
      const users = snapshot.val();
      const list = [];
      for (let id in users) {
        list.push(users[id]);
      }
      console.log(list)
      setUserList(list);
    });
  }, []);
  const usun = () => {
    // const userRef = firebase.database().ref('users').child(userList)
    // userRef.remove();
    console.log(userList)
  }
  return (
    <div className="users">
      <h1>Zarejestrowani użytkownicy:</h1>
      <div>
        {userList
          ? userList.map((user, index) => <User key={index} index={index} user={user}></User>)
          : ''}
      </div>
      {/* <button onClick={usun}>Usuń</button> */}
    </div>
  );
};

export default Users;
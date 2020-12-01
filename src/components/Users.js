import React, { useEffect, useState } from 'react';
import firebase from '../components/firebase';
import User from '../components/User'

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
      console.log(list);
      setUserList(list);
    });
  }, []);

  return (
    <div className="users">
      <h1>Zarejestrowani użytkownicy:</h1>
      <div>
        {userList
          ? userList.map((user, index) => (
              <User key={index} index={index} user={user}>
                {' '}
              </User>
            ))
          : ''}
      </div>
    </div>
  );
};

export default Users;
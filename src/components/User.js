import React from 'react';
import firebase from '../components/firebase';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function User({ user, index}) {


  const deleteUser = (id) => {
  const userRef = firebase.database().ref('users')
  userRef.remove();
  console.log(user);
  }

 
  return (
    <>
      <div className="user">
        <h3>
          {index + 1}.{user}
          <DeleteOutlineIcon onClick={deleteUser} />
        </h3>
      </div>
    </>
  );
}

 
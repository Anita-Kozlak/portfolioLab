import React, { useState } from 'react';
import firebase from '../components/firebase';
import Delete from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
export default function User({ user, index}) {
  
    const deleteUser = () => {
    const userRef = firebase.database().ref('users').child(user.email)
    userRef.remove();
    console.log(user.email)
   
    }

    
   const editUser = () => {
   const giftRef = firebase.database().ref('users');
   giftRef.set({
     email: email,
   });
    

   };
   return (
     <>
       <div>
         <h3>
           {index + 1}.{user}
           <Delete onClick={deleteUser}>Usuń</Delete>
           <EditIcon onClick={editUser} Edycja></EditIcon>
         </h3>
       </div>
     </>
   );


}

 
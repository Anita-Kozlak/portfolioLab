import React, { useState } from 'react';
import firebase from '../components/firebase';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Delete from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

export default function Gift({ gift, index}) {
    const [street, setStreet] = useState('')
     const [city, setCity] =   useState('')
     const [code, setCode] = useState('');
     const [phone, setPhone] = useState('');
     const [date, setDate] = useState('');
     const [hour, setHour] = useState('');
     const [gifts, setGifts] = useState('')
     const [edit, setEdit] = useState('')
        
    const deleteGift = () => {
    const giftRef = firebase.database().ref('gifts').child(gift.id);
    giftRef.remove();
  };
   const editGift = () => {
     const giftRef = firebase.database().ref('gifts').child(gift.id)
     giftRef.set({
        'street': street,
        'city': city,
        'code': code,
        'phone': phone,
        'date': date,
        'gift': gifts,
        'hour': hour

     });
      setEdit(false);
   };
   const showEdit = () => {
       setEdit(prevState => prevState===false ? true : false)
   }

 const addGift = () => {
    const giftRef = firebase.database().ref('gifts')
     giftRef.push({
        'street': street,
        'city': city,
        'code': code,
        'phone': phone,
        'date': date,
        'gift': gifts,
        'hour': hour

     });
     setEdit(false)
   };
 
 return (
   <>
     <div className="things">
       <div>
         <h2>
           {index + 1}.<EditIcon onClick={showEdit}>Zmień</EditIcon>
           <Delete onClick={deleteGift}>Usuń</Delete>
           <AddIcon onClick={showEdit}></AddIcon>
         </h2>
         <br></br>
         <h3>Co oddajesz: {gift.gift} </h3>
         <br></br>
         <h3>Ile worków: {gift.bags} </h3>
         <br></br>
         <h3>MIasto:{gift.city} </h3> <br></br>
         <h3>Ulica: {gift.street}</h3> <br></br>
         <h3>Kod pocztowy: {gift.code}</h3> <br></br>
         <h3>Data odbioru: {gift.date}</h3> <br></br>
         <h3>Godzina: {gift.hour} </h3>
         <br></br>
         <h3>Informacje dla kuriera: {gift.desc}</h3>
         <br></br>
       </div>
       <div>
         {edit && (
           <div className="formChange">
             <h4>Co oddajesz</h4>{' '}
             <Input
               onChange={(e) => setGifts(e.target.value)}
               value={gifts}
             ></Input>{' '}
             <h4>Ulica</h4>{' '}
             <Input
               onChange={(e) => setStreet(e.target.value)}
               value={street}
             ></Input>{' '}
             <h4>Miasto </h4>
             <Input
               onChange={(e) => setCity(e.target.value)}
               value={city}
             ></Input>{' '}
             <h4>Kod pocztowy</h4>{' '}
             <Input
               onChange={(e) => setCode(e.target.value)}
               value={code}
             ></Input>{' '}
             <h4>Numer telefonu </h4>
             <Input
               onChange={(e) => setPhone(e.target.value)}
               value={phone}
             ></Input>{' '}
             <h4>Data </h4>
             <Input
               onChange={(e) => setDate(e.target.value)}
               value={date}
             ></Input>{' '}
             <h4>Godzina </h4>
             <Input
               onChange={(e) => setHour(e.target.value)}
               value={hour}
             ></Input>{' '}
             <h4>Uwagi dla kuriera</h4> <Input></Input>{' '}
             <Button onClick={editGift}>Zmień</Button>
             <Button onClick={addGift}>Dodaj</Button>
           </div>
         )}
       </div>
     </div>
   </>
 );
    

}

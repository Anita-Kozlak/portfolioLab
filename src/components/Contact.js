import Input from '@material-ui/core/Input';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => 
        
            console.log(data)
        
    //     const newContact = {
    //         name,
    //         email,
    //         message,
    //     };
    //     console.log({newContact})
    //     await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
    //         method: 'POST',
    //         body: JSON.stringify(newContact),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((newContact) => {
    //             console.log({ newContact});
    //             console.log(`dodana nowa wiadomosć`);
    //             Contact({addContact});
    //             setName('');
    //             setEmail('');
    //             setMessage('');
    //         })
    
    // }

    const sendContact = () => {
      console.log('ok')
    }

   
    
    return (
        <>
        <div className="contact" id="contact">
            <div className="contact__left">
                <img src="BackgroundImage.png" alt="decorationImage"></img>
            </div>
            <div className="contact__right">
                <h1>Skontaktuj się z nami</h1>
                <img src="Decoration.png" alt="decorationImage"></img>
                <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
                <p>Wiadomość została wysłana! Wkrótce się skontaktujemy.</p>
                    <div className="contact__inputs">
                        <div className="contact__input">
                            <label>Wpisz swoje imię</label>
                            <Input 
                                inputRef={register({ required: "Podane imię jest nieprawidłowe!", 
                                
                                maxLength: {
                                    value: 20,
                                    message: "Podane imię jest nieprawidłowe! "
                                  }
                                 })}
                                name="name" 
                                value={name} onChange={e => setName(e.target.value)}/>
                            <span>{errors.name && errors.name.message}<br /></span>

                        </div>

                        <div className="contact__input">
                            <label>Wpisz swój email</label>
                            <Input name="email" 
                            inputRef={
                                register({
                                    required: "Podany email jest nieprawidłowy!",
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Podany email jest nieparwidłowy!"
                                    },
                                    
                                })
                            }
                            value={email} onChange={e => setEmail(e.target.value)}
                                />
                            <span>{errors.email && errors.email.message}<br /></span>

                        </div>

                    </div>

                    <label className="contact__message">Wpisz swoją wiadomość</label>
                    <textarea 
                    name="message"
                    ref={register({ required: "Wiadomosć musi mieć conajmniej 120 znaków!", 
                                 
                                minLength: {
                                    value: 120,
                                    message: "Wiadomosć musi mieć conajmniej 120 znaków!"
                                  }
                                 })}
                        rows={10}
                        type="text"
                        value={message} onChange={e => setMessage(e.target.value)}
                         />
                <span>{errors.message && errors.message.message}<br /></span>

                 <button onClick={sendContact} className="contact__send">Wyślij</button>
                 </form>
            </div>
            
        </div>
        <div className="contact__footer">
                    <p>Copyright by Coders Lab</p>
                    <div>
                        <img src="Facebook.png" alt="Facebook"></img>
                        <img src="Instagram.png" alt="Instagram"></img>
                    </div>
            </div>
        </>
    )
}


export default Contact



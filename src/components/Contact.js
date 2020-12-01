/* eslint no-useless-escape: 0 */
import Input from '@material-ui/core/Input';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Decoration from '../components/Decoration';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';
import BackgroundImage from '../assets/BackgroundImage.png'

const Contact = () => {


    const contact = (newContact) => {
      setCars((prevCars) => [...prevCars, newContact]);
    };

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [cars, setCars] = useState('')
       
    const { register, handleSubmit, errors } = useForm();

     const onSubmit = async (data) =>  {

        console.log(data);

        const newContact = {
        name,
        email,
        message,
        };
        console.log({ newContact });
    
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then((res) => res.json())
        .then((newContact) => {
            console.log({ newContact });
            console.log(`dodana nowa wiadomosć`);
            contact(newContact);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch(error => {
        console.log(error);
        });
    }
     
    return (
      <>
        <div className="contact" id="contact">
          <div className="contact__left">
            <img src={BackgroundImage} alt="decorationImage"></img>
          </div>
          <div className="contact__right">
            <h1>Skontaktuj się z nami</h1>
            <Decoration />
            <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
              {cars.length > 0 && (
                <p>Wiadomość została wysłana! Wkrótce się skontaktujemy.</p>
              )}
              <div className="contact__inputs">
                <div className="contact__input">
                  <label>Wpisz swoje imię</label>
                  <Input
                    inputRef={register({
                      required: 'Podane imię jest nieprawidłowe!',

                      maxLength: {
                        value: 20,
                        message: 'Podane imię jest nieprawidłowe! ',
                      },
                    })}
                    placeholder="Krzysztof"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span>
                    {errors.name && errors.name.message}
                    <br />
                  </span>
                </div>

                <div className="contact__input">
                  <label>Wpisz swój email</label>
                  <Input
                    name="email"
                    placeholder="abc@xyz.pl"
                    inputRef={register({
                      required: 'Podany email jest nieprawidłowy!',
                      pattern: {
                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Podany email jest nieparwidłowy!',
                      },
                    })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span>
                    {errors.email && errors.email.message}
                    <br />
                  </span>
                </div>
              </div>

              <label className="contact__message">Wpisz swoją wiadomość</label>
              <textarea
                name="message"
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
                ref={register({
                  required: 'Wiadomosć musi mieć conajmniej 120 znaków!',

                  minLength: {
                    value: 120,
                    message: 'Wiadomosć musi mieć conajmniej 120 znaków!',
                  },
                })}
                rows={8}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span>
                {errors.message && errors.message.message}
                <br />
              </span>

              <button className="contact__send">Wyślij</button>
            </form>
          </div>
        </div>
        <div className="contact__footer">
          <p>Copyright by Coders Lab</p>
          <div>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="Facebook"></img>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Instagram"></img>
            </a>
          </div>
        </div>
      </>
    );
}


export default Contact



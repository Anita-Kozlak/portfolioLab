/* eslint no-useless-escape: 0 */
import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import firebase from '../components/firebase'
import { useForm } from "react-hook-form";
import HomeNavHeader from './HomeNavHeader'


const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

      
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    const onLogin = async () => {
        try { await 
            firebase.auth().signInWithEmailAndPassword(email,password)
            props.history.push('/loggedhome')
         } catch (error) {
             console.log(error)
         }
    }
    return (
      <>
        {' '}
        <div className="login">
          <HomeNavHeader />

          <div className="form">
            <h1>Zaloguj się</h1>
            <img src="Decoration.png" alt="DecorationImage"></img>
            <form className="form__login" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__loginGrey">
                <label>Email</label>
                <Input
                  name="email"
                  inputRef={register({
                    required: 'Email jest wymagany!',
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
                <label>Hasło</label>
                <Input
                  inputRef={register({ required: true, minLength: 6 })}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div>
                    {errors.password.type === 'required' && (
                      <span>Hasło jest wymagane!</span>
                    )}
                    {errors.password.type === 'minLength' && (
                      <span>Hasło jest za krótkie! </span>
                    )}
                  </div>
                )}
              </div>
              <div className="login__buttons">
                <button onClick={onLogin} type="submit">
                  Zaloguj się
                </button>
                <button type="submit">Załóż konto</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );

}

export default Login
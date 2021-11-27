import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function SignUp() {

    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();

    const [ firstName, setFirstName ] = useState('');
    const [ emailAddress, setEmailAddress ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();

        return firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) =>
          result.user
            .updateProfile({
              displayName: firstName,
              photoURL: Math.floor(Math.random() * 4) + 1,
            })
            .then(() => {
              history.push(ROUTES.BROWSE);
            })
        )
        .catch((error) => {
          setFirstName('');
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        });
    }

    const isInvalid = firstName === '' || emailAddress === '' || password === '';

    return (
        <>
       <HeaderContainer>
           <Form>
               <Form.Title>Sign Up</Form.Title>
               {error && <Form.Error>{error}</Form.Error>}

               <Form.Base onSubmit={handleSignUp} method="Post">
                  <Form.Input
                  placeholder="First Name"
                  value={firstName}
                  onChange={({ target }) => setFirstName(target.value)}
                   />
                   <Form.Input
                   placeholder="Email Address"
                   value={emailAddress}
                   type="email"
                   onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                   placeholder="Password"
                   value={password}
                   type="password"
                   onChange={({ target }) => setPassword(target.value)}
                    />

                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up
                    </Form.Submit>
               </Form.Base>

               <Form.Text>
                 Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
               </Form.Text>
                <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                </Form.TextSmall>
           </Form>
       </HeaderContainer>
       <FooterContainer />
       </>
    )
}

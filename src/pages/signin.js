import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function SignIn() {
    const history = useHistory();    
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = (event) => {
        event.preventDefault();

      return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  }

    const isInvalid = password === '' || emailAddress === '';

    return (
        <>
        <HeaderContainer>
        <Form>           
                <Form.Title>Sign In</Form.Title>
                { error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method="Post"> 
                <Form.Input 
                placeholder="Email" 
                type="email"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}                    
                />
                <Form.Input 
                placeholder="password" 
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                />
                <Form.Submit disabled={isInvalid} type="submit">
                    Sign In
                </Form.Submit>
                </Form.Base>

                <Form.Text>
                New to Netflix? <Form.Link to="/signup">Sign Up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>           
        </Form>
        </HeaderContainer> 
        <FooterContainer />
        </>
    )
}

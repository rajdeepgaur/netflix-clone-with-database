import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { AccordionContainer } from '../containers/accordion';
import { HeaderContainer } from '../containers/header';
import { Feature, OptForm } from '../components';

export default function Home(){
    return (
        <>
        <HeaderContainer>
           <Feature>
             <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
             <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
             <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
          </OptForm>
           </Feature>      
        </HeaderContainer> 

        <JumbotronContainer />
        <AccordionContainer />
        <FooterContainer />
        </>
    )
}
import React from 'react';
import { Container, Title, List, Name, Picture, Item } from './styles/profiles';

export default function Profiles({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfilesTitle({ children, ...restProps }){
    return <List {...restProps}>{children}</List>
}

Profiles.Name = function ProfilesName({ children, ...restProps }){
    return <Name {...restProps}>{children}</Name>
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }){
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}></Picture>
}

Profiles.User = function ProfilesUser({ children, ...restProps }){
    return <Item {...restProps}>{children}</Item>
}
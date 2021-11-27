import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

export function IsUserRedirect({ children, user, loggedInPath, ...rest }){
    return (
        <Route {...rest}
        render={() => {
            if(!user){
                return children;
            }
            
            if(user){
                return (
                    <Redirect 
                    to={{
                     pathname:loggedInPath
                    }}
                    />
                );
            }
            return null;
        }}
        />
    )
}

export function ProtectedRoute({ children, user, ...rest }){
    return (
        <Route {...rest}
        render={({ location }) => {
            if(user){
                return children
            }

            if(!user){
                return (
                    <Redirect
                    to={{
                        pathname:'signin',
                        state:{ from: location },
                    }}
                    />
                );
            }
        }}
        />
    )
}
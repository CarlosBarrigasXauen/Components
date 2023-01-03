//  Que informacion tendre aqui 

import React, { createContext, useReducer } from "react";
import { authReducer } from './AuthReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?:string;
    favouriteIcon ?: string;
}

export const AuthInitialState:AuthState = {
isLoggedIn:false,
username:undefined,
favouriteIcon:undefined


}

//Lo usaremos para decirle a react como luce y que expone el context

export interface AuthContextProps {
authState: AuthState;
signIn: () => void;
changeFavIcon: (iconName:string) => void;
logOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps)

//Componente proveedor del estado

export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer,AuthInitialState)

    const signIn = () => {
        dispatch({type:'signIn'});
    }

    const changeFavIcon = (iconName:string) => {
        dispatch({type:'changeFavIcon',payload:iconName})
    }
    const logOut = () => {
        dispatch({type:'logout'})
    }
    return (
        <AuthContext.Provider value={{
            authState,
            signIn, 
            changeFavIcon,
            logOut
        }}>
            { children }
        </AuthContext.Provider>
    )
}
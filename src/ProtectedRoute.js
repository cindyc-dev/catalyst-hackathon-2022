import React, { useContext } from 'react';
import {AuthContext}from './FirebaseAuthContext';
import {Navigate} from 'react-router-dom';

export default function ProtectedRoute(props){
   
    const authValue=useContext(AuthContext)
    if (authValue.userDataPresent){
        if(authValue.user==null){
            return(<Navigate to="/login" />)
        }
        else{
            return(props.element);
        }
    }
    else{
        
        return null
    }
}
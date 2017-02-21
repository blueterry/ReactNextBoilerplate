//import fetch from 'isomorphic-fetch';
//import moment from 'moment';

import loginAPI from '../api/loginAPI';

export const NOT_LOGIN_YET = "NOT_LOGIN_YET";
export const LOGGED_IN = "LOGGED_IN";
export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const GET_LOCAL_USER = "GET_LOCAL_USER";

//Actions must be pure function...

export var checkLocal = () =>{
    var user = loginAPI.getLocalUser();
    return{
        type: GET_LOCAL_USER,
        loggingIn:false,
        password: undefined,
        ...user        
    }
}

export var login = (userName, password) =>{
    //console.log('login action: userName, password:', userName, password);
    return {
        type: LOGGING_IN,
        userName,
        password,
        userId: -1,        
        loggingIn: true
    };
};

export var loginSuccess = (userId,userName) =>{
    console.log('loginSuccess action:',userId)
    
    return{
        type: LOGGED_IN,
        loggingIn: false,        
        userName,
        userId              
    }
};

export var loginFail = (userName)=>{
    console.log('loginFail action:')
    return {
        type: LOGIN_FAIL,
        loggingIn:false,
        userId: -1,
        userName,
        password: undefined        
    }
}

export var logOut = ()=>{
    console.log('loginOut action:')
    return {
        type: NOT_LOGIN_YET,
        userId: undefined,
        userName: undefined,
        password: undefined,
        loginAt: undefined,
        loggingIn:false
    }
}


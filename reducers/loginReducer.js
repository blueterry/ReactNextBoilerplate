import moment from 'moment';
import {GET_LOCAL_USER, NOT_LOGIN_YET, LOGGED_IN, LOGGING_IN, LOGIN_FAIL} from '../actions/loginActions';

const initialState = {
    userInfo:{
        userId: -1,
        userName: undefined,
        password: undefined,
        loginAt: undefined    
    }
}

export var loginReducer  = (state=initialState, action) =>{
    
    switch(action.type){
        case NOT_LOGIN_YET:
            return Object.assign({}, state, {                                
                userInfo:{
                    ...state.userInfo,
                    userId: -1,
                    passwrod: undefined,
                    loginAt: undefined
                }
            }).userInfo;
        case LOGGED_IN:
            return Object.assign({}, state,{
                userInfo:{
                    ...state.userInfo,
                    userId: action.userId,
                    userName: action.userName,
                    loginAt: moment().unix(),
                    password: undefined
                }
                
            }).userInfo
            
        case LOGIN_FAIL:  
            return Object.assign({}, state, { 
                userInfo:{
                    ...state.userInfo,
                    userId: -1, 
                    userName: action.userName,
                    password:undefined,
                    loginAt: undefined
                }                                
            }).userInfo;              
        case LOGGING_IN:  
            let ur = Object.assign({}, state, { 
                userInfo:{
                    //...state.userInfo,
                    userName: action.userName,
                    password: action.password,
                    loginAt: undefined,                               
                    userId:-1
                }                
            }).userInfo;
            //console.log('loginReducer->LOGGING_IN->ur:',ur);
            return ur;
        case GET_LOCAL_USER: 
            return Object.assign({}, state, {                
                userInfo:{
                    //...state.userInfo,
                    userId: action.userId,
                    userName: action.userName,
                    password:action.password,
                    loginAt: action.loginAt                
                }                
            }).userInfo;
        default:
            return state;
    }
}
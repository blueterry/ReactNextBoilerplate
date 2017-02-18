import moment from 'moment';
import {GET_LOCAL_USER, NOT_LOGIN_YET, LOGGED_IN, LOGGING_IN, LOGIN_FAIL} from '../actions/loginActions';

const initialState = {
    userId: -1
}

export var loginReducer  = (state=initialState, action) =>{
    
    switch(action.type){
        case NOT_LOGIN_YET:
            return Object.assign({}, state, {
                userId: -1,
                passwrod: undefined,
                loginAt: undefined
            })
        case LOGGED_IN:
            return Object.assign({}, state,{              
                userId: action.userId,
                userName: action.userName,
                loginAt: moment().unix(),
                password: undefined
            })
            
        case LOGIN_FAIL:  
            return Object.assign({}, state, { 
                userId: -1, 
                userName: action.userName,
                password:undefined,
                loginAt: undefined
            })

        case LOGGING_IN:  
            return Object.assign({}, state, { 
                    userName: action.userName,
                    password: action.password,
                    loginAt: undefined,                               
                    userId:-1
            })
            
        case GET_LOCAL_USER: 
            return Object.assign({}, state, {                
                    userId: action.userId,
                    userName: action.userName,
                    password:action.password,
                    loginAt: action.loginAt                              
            })
        default:
            return state;
    }
}
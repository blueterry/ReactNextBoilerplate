import redux,{combineReducers, compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {initMainMenu} from '../actions/menuActions';
import {loginReducer} from '../reducers/loginReducer';
import {langReducer} from '../reducers/langReducer';
import {menuReducer} from '../reducers/menuReducer';
import loginAPI from '../api/loginAPI';

export const reducer = combineReducers({
    mainMenus: menuReducer,
    lang: langReducer,
    userInfo: loginReducer
});

export const loadInitData = () => dispatch =>{
    let user = JSON.parse(localStorage.getItem('user'));
    let lang = localStorage.getItem('lang');
    console.log('store->loadInitData->user.lang:', user, lang);
    return dispatch({userInfo: user, lang: lang});
}

let store = null;
export const initialState ={
    mainMenus:[{   
            miName: 'Tasks & Jobs', 
            activeFlag: true, 
            miIcon: 'fa-dashboard', 
            url:'',
            subItems:[{
                activeFlag: true, 
                url: "jobs", 
                name:"Jobs list"
            },{
                activeFlag: false,
                url: "/",
                name: "Add New"
            }
        ]},{
            activeFlag: false,
            miName: 'Orchards',
            miIcon: 'fa-leaf',
            url: '',                
            subItems:[{
                activeFlag:false,
                url: 'orchards',
                miIcon: 'fa-tree',
                name: 'Orchard list'
            },{
                activeFlag: false,
                url: 'weatherinfo',
                name: 'Weather Data'
            }]
        },{
            activeFlag: false,
            miName: 'Login Form',
            miIcon: 'fa-user',
            url:'loginform',
            subItems:[]
        }
    ],
    lang: "en",
    userInfo:{}
}

export const initStore = (reducer, initState = initialState, isServer) => {
    if(isServer && typeof window === 'undefined'){
        return createStore(reducer, initState, applyMiddleware(thunkMiddleware));
    }
    if(!store){
        //console.log('store->initStore->!store->isServer:', isServer);
        //if(isServer !== undefined && isServer !== null && !isServer){
        //console.log('--init store from client side--');
            //console.log('localStorage->user', localStorage.getItem('user'));
        var user = JSON.parse(localStorage.getItem('user'));
        //console.log('store initStore user, initState:', user, initState);
        initState.userInfo = {...user};
        initStore.lang = localStorage.getItem('lang');
            //store.dispatch(initMainMenu());
        //}
        store = createStore(reducer, initState, compose(
            applyMiddleware(thunkMiddleware),
            typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
        ));
    }
    return store;
};
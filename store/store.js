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
                miName: 'SideMenu1', 
                activeFlag: true, 
                miIcon: 'fa-dashboard', 
                url:'',
                subItems:[{
                    activeFlag: true, 
                    url: "/", 
                    name:"SubMenuItem1"
                },{
                    activeFlag: false,
                    url: "/",
                    name: "SubMenuItem2"
                }
            ]},{
                activeFlag: false,
                miName: 'SideMenu2',
                miIcon: 'fa-leaf',
                url: '',                
                subItems:[{
                    activeFlag:false,
                    url: '/',
                    miIcon: 'fa-tree',
                    name: 'SubMenuItem1'
                },{
                    activeFlag: false,
                    url: '/',
                    name: 'SubMenuItem2'
                }]
            },{
                activeFlag: false,
                miName: 'SideMenu3',
                miIcon: 'fa-user',
                url:'/',
                subItems:[]
            }
            ],
    lang: "en",
    userInfo:{}
}

export const initStore = (reducer, initState = initialState, isServer) => {
    
    if(typeof localStorage !== 'undefined'){
        //Get Init data from localStorage
        var user = JSON.parse(localStorage.getItem('user'));        
        initState.userInfo = {...user};
        initState.lang = localStorage.getItem('lang');
    }
    if(isServer && typeof window === 'undefined'){
        return createStore(reducer, initState, applyMiddleware(thunkMiddleware));
    }
    if(!store){                
        store = createStore(reducer, initState, compose(
            applyMiddleware(thunkMiddleware),
            typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
        ));
    }
    return store;
};
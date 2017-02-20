import redux,{combineReducers, compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {loginReducer} from '../reducers/loginReducer';
import {langReducer} from '../reducers/langReducer';
import {menuReducer} from '../reducers/menuReducer';
import {clientReducer} from '../reducers/clientReducer';

import {checkLocal} from '../actions/loginActions';

export const reducer = combineReducers({
    userInfo: loginReducer,
    lang: langReducer,
    mainMenus: menuReducer,
    isClient: clientReducer
})

const initState = ()=>{    
    let user
    let lang = "en"
    const isClient = typeof window === 'object'
    const menu = [{   
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
        }]
    try{
        user = JSON.parse(localStorage.getItem('user'))
    } catch(err){
        user = undefined;
    }
    try{
        lang = localStorage.getItem('lang');
        if(lang === undefined || lang === ''){
            lang = "en"
        }

    } catch(err){
        lang = "en"
    }

    return {userInfo:user, lang, mainMenus: menu, isClient}
}
const saveState = (state)=>{
    try {
        const serState = JSON.stringify(state.userInfo)
        localStorage.setItem('user',serState);
    } catch(err){
        //later add log.
    }
}

export const subscribeStore =(store)=>{
    store.subscribe(()=>{
        saveState(store.getState())
    })
}

let store;
export const initStore = () =>{
    store = createStore(reducer, 
                        initState(), 
                        compose(
                            applyMiddleware(thunkMiddleware),
                                typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' 
                                ? window.devToolsExtension() 
                                : f => f
                        )
            );    
    return store;
}


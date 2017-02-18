import{SET_TO_ENGLISH, SET_TO_SCHINESE} from '../actions/langActions';

export var saveLang = (lang)=>{
    //console.log('langReducer:saveLang:',lang);

    localStorage.setItem('lang', lang);
}

export var langReducer = (state='en', action) =>{    
    //console.log('langReducer->state:',state);
    switch(action.type){
        case SET_TO_ENGLISH:            
            localStorage.setItem('lang','en');
            return 'en';

        case SET_TO_SCHINESE:            
            localStorage.setItem('lang','zh');
            return 'zh'
        default:
            return state;
    }
}
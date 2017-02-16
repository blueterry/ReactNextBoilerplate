export const SET_TO_ENGLISH = "SET_TO_ENGLISH";
export const SET_TO_SCHINESE = "SET_TO_SCHINESE";

export var changeToEnglish = ()=>{
    //console.log('changeToEnglish action');
    return{
        type: SET_TO_ENGLISH
    }
}

export var changeToSimpChinese = ()=>{
    //console.log('changeToSimpChinese action');
    return{
        type: SET_TO_SCHINESE
    }
}
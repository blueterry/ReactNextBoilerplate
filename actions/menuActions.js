export const INIT_MAIN_MENU ="INIT_MAIN_MENU";
export const ACTIVE_MENU_ITEM_CHANGED="ACTIVE_MENU_ITEM_CHANGED";
export const ACTIVE_SUB_MENU_ITEM_CHANGED="ACTIVE_SUB_MENU_ITEM_CHANGED";

export var initMainMenu = ()=>{
    //console.log('menuActions.initMainMenu');
    return{
        type: INIT_MAIN_MENU
    }
}

export var activeMenuChanged =(miName)=>{
    return {
        type: ACTIVE_MENU_ITEM_CHANGED,
        activeMiName: miName
    }
}

export var activeSubMenuChanged =(miName, subMiName)=>{
    return{
        type: ACTIVE_SUB_MENU_ITEM_CHANGED,
        activeMiName: miName,
        activeSubMiName: subMiName
    }
}
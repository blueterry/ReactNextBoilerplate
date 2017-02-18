import {INIT_MAIN_MENU,ACTIVE_MENU_ITEM_CHANGED, ACTIVE_SUB_MENU_ITEM_CHANGED} from '../actions/menuActions';

function mainMenu (state=[],action){
    switch(action.type){
        case INIT_MAIN_MENU:
            return Object.assign([],state, [{   
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
            ]);
        case ACTIVE_MENU_ITEM_CHANGED:
            //console.log('state.mainMenus:', state.mainMenus);
            let obj= Object.assign([],state);
            //console.log('state.mainMenus.obj:',obj);
            for(var o in obj)
            {
                obj[o].activeFlag = (obj[o].miName === action.activeMiName)
            }
            //console.log('ACTIVE_MENU_ITEM_CHANGED:', obj);
            return obj;
        case ACTIVE_SUB_MENU_ITEM_CHANGED:
            let obj1 = Object.assign([], state);
            for(var o in obj1){
                obj1[o].activeFlag = (obj1[o].miName === action.activeMiName);
                if(obj1[o].activeFlag){   
                    for(var os in obj1[o].subItems){
                        obj1[o].subItems[os].activeFlag = (obj1[o].subItems[os].name === action.activeSubMiName);
                    }                                     
                }
            };
            //console.log('ACTIVE_SUB_MENU_ITEM_CHANGED:', obj1)
            return obj1;
        default:
            //console.log('default:', state)
            return state;
    }
}

export var menuReducer = (state=[], action) =>{
    //console.log('menuReducer-state:', state);
    switch(action.type){
        case INIT_MAIN_MENU:
        case ACTIVE_MENU_ITEM_CHANGED:
        case ACTIVE_SUB_MENU_ITEM_CHANGED:
            let mm = mainMenu(state, action);
            //console.log('menuReducer-action:', action.type, mm)
            return mm;
        default:
            return state;
    }
}
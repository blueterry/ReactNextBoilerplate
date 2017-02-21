import expect from 'expect';
import * as menuActions from '../../actions/menuActions';

describe('menuActions',()=>{
    it('Should Exist',()=>{
        expect(menuActions).toExist();
    })

    it('Should generate initMainMenu Action',()=>{
        let theAct = {
            type: menuActions.INIT_MAIN_MENU
        }
        let actRet = menuActions.initMainMenu()
        expect(actRet).toEqual(theAct);
    })

    it('Should generate activeMenuchanged Action',()=>{
        const mi = 'test menu item'
        let theAct = {
            type: menuActions.ACTIVE_MENU_ITEM_CHANGED,
            activeMiName: mi
        }
        let actRet = menuActions.activeMenuChanged(mi)
        expect(actRet).toEqual(theAct);
    })

    it('Should generate activeSubMenuchanged Action',()=>{
        const mi = 'test menu item'
        const smi = 'test sub menu item'
        let theAct = {
            type: menuActions.ACTIVE_SUB_MENU_ITEM_CHANGED,
            activeMiName: mi,
            activeSubMiName: smi
        }
        let actRet = menuActions.activeSubMenuChanged(mi, smi)
        expect(actRet).toEqual(theAct);
    })
})
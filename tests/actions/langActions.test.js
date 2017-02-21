import expect from 'expect';
import * as langActions from '../../actions/langActions';

describe('langActions',()=>{
    it('Should Exist',()=>{
        expect(langActions).toExist();
    })

    it('Should generate changeToEnglish Action',()=>{
        let toEngAct = {
            type: langActions.SET_TO_ENGLISH
        }
        let actRet = langActions.changeToEnglish();
        expect(actRet).toEqual(toEngAct);
    })

    it('Should generate changeToSimpChinese Action',()=>{
        let toAct = {
            type: langActions.SET_TO_SCHINESE
        }
        let actRet = langActions.changeToSimpChinese();
        expect(actRet).toEqual(toAct);
    })
})
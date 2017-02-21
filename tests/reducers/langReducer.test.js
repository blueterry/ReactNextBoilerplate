import expect from 'expect';
import * as langReducer from '../../reducers/langReducer';
import * as langActions from '../../actions/langActions';

describe('langReducer',()=>{
    beforeEach(()=>{
        localStorage.removeItem('lang');
    })

    it('Should Exist',()=>{
        expect(langReducer).toExist();
    })

    it('Should save Lang to localStorage', ()=>{
        const lang = "abc";
        langReducer.saveLang(lang);
        let res = localStorage.getItem("lang")
        expect(res).toEqual(lang);        
    })

    it('Should return en as lang and save to localStorage',()=>{
        const en = "en";
        let res = langReducer.langReducer('',langActions.changeToEnglish());

        const lang = localStorage.getItem("lang");

        expect(res).toEqual(en);
        expect(lang).toEqual(en);
    })

    it('Should return zh as lang and save to localStorage',()=>{
        const en = "zh";
        let res = langReducer.langReducer('',langActions.changeToSimpChinese());

        const lang = localStorage.getItem("lang");

        expect(res).toEqual(en);
        expect(lang).toEqual(en);
    })

    it('should return asis when wrong action',()=>{
        const state = 'asdf';
        let res = langReducer.langReducer(state, {});
        expect(res).toEqual(state);
    })

    it('should return en when wrong action and no state',()=>{
        const state = undefined;
        let res = langReducer.langReducer(state, {});
        expect(res).toEqual("en");
    })
})
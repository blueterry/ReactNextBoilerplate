import expect from 'expect';
import global from '../../api/global';
import df from 'deep-freeze-strict';

import zh_CN from '../../locale/zh_CN';
import en_US from '../../locale/en_US';

//todo: 2 more functions need to be tested: showLoginButton() & fetchData()

describe('global',()=>{
    it('Should Exist',()=>{
        expect(global).toExist();
    })

    it('Should have urls', ()=>{
        const server = 'http://www.rkete.com:9000/query/';
        const upload = 'http://www.rkete.com:9000/uploads/';

        let ser = global.serverUrl;
        let up = global.uploadUrl;
        expect(ser).toEqual(server);        
        expect(up).toEqual(upload);
    })

    it('Should load locale message files',()=>{
        const zh = global.getLangs("zh");
        expect(zh).toEqual(zh_CN);

        const en = global.getLangs("en");
        expect(en).toEqual(en_US);

        const defaultLan = global.getLangs();
        expect(defaultLan).toEqual(en_US);
    })

    it('Should check user login state',()=>{
        const userEmpty={}
        const userLogin={
            userId : 123
        }
        expect(global.checkLogin(df(userEmpty))).toBeFalsy();
        expect(global.checkLogin()).toBeFalsy();
        expect(global.checkLogin(df(userLogin))).toBeTruthy();
    })

    
})
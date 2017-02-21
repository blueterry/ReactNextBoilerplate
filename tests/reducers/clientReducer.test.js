import expect from 'expect';
import * as clientReducer from '../../reducers/clientReducer';

describe('clientReducer',()=>{
    it('Should Exist',()=>{
        expect(clientReducer).toExist();
    })

    it('Should determin window object', ()=>{
        const isWin = (typeof window === 'object');
        //console.log('window object:',isWin, clientReducer);
        let res = clientReducer.clientReducer(false, {});
        expect(res).toEqual(isWin);        
    })
})
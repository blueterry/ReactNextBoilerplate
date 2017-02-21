import expect from 'expect';
import * as loginActions from '../../actions/loginActions';

//
// todo: cannot test because of {...user} not be handled properly
//
describe('loginActions',()=>{
    beforeEach(()=>{
        localStorage.removeItem('user');
    })

    it('Should Exist',()=>{
        expect(loginActions).toExist();
    })
    
    it('Should generate getLocalUser Action',()=>{
        const userInfo={
            userId: '123',
            userName: 'user name'
        }
        localStorage.setItem('user', JSON.stringify(userInfo))
        let theAct = {
            type: loginActions.GET_LOCAL_USER,
            loggingIn: false,
            password: undefined,
            ...userInfo
        }
        let actRet = loginActions.checkLocal()
        expect(actRet).toEqual(theAct);
    })

    it('Should generate login Action',()=>{
        let theAct = {
            type: loginActions.LOGGING_IN,
            userName: 'user name',
            password: 'password',
            userId: -1,
            loggingIn: true
        }
        let actRet = loginActions.login('user name', 'password')
        expect(actRet).toEqual(theAct);
    })

    it('Should generate loginSuccess Action',()=>{
        let theAct = {
            type: loginActions.LOGGED_IN,
            userName: 'user name',            
            userId: 123,
            loggingIn: false
        }
        let actRet = loginActions.loginSuccess(123, 'user name')
        expect(actRet).toEqual(theAct);
    })

    it('Should generate loginFail Action',()=>{
        let theAct = {
            type: loginActions.LOGIN_FAIL,
            userName: 'user name',
            password: undefined,
            userId: -1,
            loggingIn: false
        }
        let actRet = loginActions.loginFail('user name')
        expect(actRet).toEqual(theAct);
    })

    it('Should generate loginOut Action',()=>{
        let theAct = {
            type: loginActions.NOT_LOGIN_YET,
            userId: undefined,
            userName: undefined,
            password: undefined,
            loginAt: undefined,
            loggingIn:false            
        }
        let actRet = loginActions.logOut()
        expect(actRet).toEqual(theAct);
    })
})
var expect = require('expect');

//import df from 'deep-freeze-strict';

//var loginReducer = require('../../reducers/loginReducer.js');
//var {loginReducer} = require('../../reducers/loginReducer');
var lr = require("../../reducers/loginReducer");

var {loginReducer} = lr;

describe('loginReducer tests',()=>{
    it('Should Exist',()=>{
            expect(loginReducer).toExist();
    })    
})
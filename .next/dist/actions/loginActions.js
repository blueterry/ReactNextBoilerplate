"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logOut = exports.loginFail = exports.loginSuccess = exports.login = exports.checkLocal = exports.GET_LOCAL_USER = exports.LOGIN_FAIL = exports.LOGGING_IN = exports.LOGGED_IN = exports.NOT_LOGIN_YET = undefined;

var _extends2 = require("..\\node_modules\\babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _loginAPI = require("../api/loginAPI");

var _loginAPI2 = _interopRequireDefault(_loginAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOT_LOGIN_YET = exports.NOT_LOGIN_YET = "NOT_LOGIN_YET";
//import fetch from 'isomorphic-fetch';
//import moment from 'moment';

var LOGGED_IN = exports.LOGGED_IN = "LOGGED_IN";
var LOGGING_IN = exports.LOGGING_IN = "LOGGING_IN";
var LOGIN_FAIL = exports.LOGIN_FAIL = "LOGIN_FAIL";
var GET_LOCAL_USER = exports.GET_LOCAL_USER = "GET_LOCAL_USER";

//Actions must be pure function...

var checkLocal = exports.checkLocal = function checkLocal() {
    var user = _loginAPI2.default.getLocalUser();
    return (0, _extends3.default)({
        type: GET_LOCAL_USER,
        loggingIn: false,
        password: undefined
    }, user);
};

var login = exports.login = function login(userName, password) {
    console.log('login action: userName, password:', userName, password);
    return {
        type: LOGGING_IN,
        userName: userName,
        password: password,
        userId: -1,
        loggingIn: true
    };
};

var loginSuccess = exports.loginSuccess = function loginSuccess(userId, userName) {
    console.log('loginSuccess action:', userId);

    return {
        type: LOGGED_IN,
        loggingIn: false,
        userName: userName,
        userId: userId
    };
};

var loginFail = exports.loginFail = function loginFail(userName) {
    console.log('loginFail action:');
    return {
        type: LOGIN_FAIL,
        loggingIn: false,
        userId: -1,
        userName: userName,
        password: undefined
    };
};

var logOut = exports.logOut = function logOut() {
    console.log('loginOut action:');
    return {
        type: NOT_LOGIN_YET,
        userId: undefined,
        userName: undefined,
        password: undefined,
        loginAt: undefined,
        loggingIn: false
    };
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('../node_modules/babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('../node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _loginActions = require('../actions/loginActions');

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    logOut: function logOut() {
        var locUser = JSON.parse(localStorage.getItem('user'));
        var theUser = (0, _loginActions.logOut)();
        locUser = (0, _extends3.default)({}, theUser.user);

        localStorage.setItem('user', (0, _stringify2.default)(theUser));
        //console.log('localStorage:', localStorage.getItem('user'));
        return theUser;
    },
    setLocalUser: function setLocalUser(user) {
        //console.log('setLocalUser->user:',user)
        localStorage.setItem('user', (0, _stringify2.default)(user));
    },
    getLocalUser: function getLocalUser() {
        //console.log('loginAPI->getLocalUser:', localStorage.getItem('user'));
        var user = void 0;
        try {
            user = JSON.parse(localStorage.getItem('user'));
        } catch (err) {
            user = null;
        }
        return user;
    },
    verifyUser: function verifyUser(userName, password) {

        var url = new URL('http://www.rkete.com:9000/query/UserMan.asmx/VerifyUser');
        // const res = await fetch(url,{
        //     method:'POST',
        //     headers:{
        //         "Content-type": "application/x-www-form-urlencoded",
        //         "Accept": "application/json"
        //     },
        //     body: "userName=" + userName + "&password=" + password + "&deviceId=react"

        // });
        // const json = await res.json()

        return function (dispatch) {
            console.log('dispatching....');
            dispatch((0, _loginActions.login)(userName, password));
            //fetchMock.get('*', {userId: 1});
            var res = fetch(url, {
                method: 'POST',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
                },
                body: "userName=" + userName + "&password=" + password + "&deviceId=react"
            }).then(function (abc) {
                return abc.json();
            }).then(function (json) {
                var userId = parseInt(json);
                console.log('3. json-json-userId:', json, userId);
                var user = {
                    userId: -1,
                    userName: ''
                };
                if (userId > 0) {
                    user = {
                        userId: userId,
                        userName: userName
                    };
                }
                console.log('loginAPI.verifyUser.savingLocUser', user);
                localStorage.setItem('user', (0, _stringify2.default)(user)); //
                console.log('localStorage user: ', localStorage.getItem('user'));
                dispatch(userId > 0 ? (0, _loginActions.loginSuccess)(userId, userName) : (0, _loginActions.loginFail)(userName));
            });
            //fetchMock.restore();
            return res;
        };
    }
};
//import Link from 'next/prefetch';
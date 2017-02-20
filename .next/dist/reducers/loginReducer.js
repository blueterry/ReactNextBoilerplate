'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginReducer = undefined;

var _assign = require('../node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _loginActions = require('../actions/loginActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    userId: -1
};

var loginReducer = exports.loginReducer = function loginReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _loginActions.NOT_LOGIN_YET:
            return (0, _assign2.default)({}, state, {
                userId: -1,
                passwrod: undefined,
                loginAt: undefined
            });
        case _loginActions.LOGGED_IN:
            return (0, _assign2.default)({}, state, {
                userId: action.userId,
                userName: action.userName,
                loginAt: (0, _moment2.default)().unix(),
                password: undefined
            });

        case _loginActions.LOGIN_FAIL:
            return (0, _assign2.default)({}, state, {
                userId: -1,
                userName: action.userName,
                password: undefined,
                loginAt: undefined
            });

        case _loginActions.LOGGING_IN:
            return (0, _assign2.default)({}, state, {
                userName: action.userName,
                password: action.password,
                loginAt: undefined,
                userId: -1
            });

        case _loginActions.GET_LOCAL_USER:
            return (0, _assign2.default)({}, state, {
                userId: action.userId,
                userName: action.userName,
                password: action.password,
                loginAt: action.loginAt
            });
        default:
            return state;
    }
};
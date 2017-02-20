'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initStore = exports.subscribeStore = exports.reducer = undefined;

var _stringify = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = require('redux');

var _redux2 = _interopRequireDefault(_redux);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _loginReducer = require('../reducers/loginReducer');

var _langReducer = require('../reducers/langReducer');

var _menuReducer = require('../reducers/menuReducer');

var _clientReducer = require('../reducers/clientReducer');

var _loginActions = require('../actions/loginActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = exports.reducer = (0, _redux.combineReducers)({
    userInfo: _loginReducer.loginReducer,
    lang: _langReducer.langReducer,
    mainMenus: _menuReducer.menuReducer,
    isClient: _clientReducer.clientReducer
});

var initState = function initState() {
    var user = void 0;
    var lang = "en";
    var isClient = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object';
    var menu = [{
        miName: 'SideMenu1',
        activeFlag: true,
        miIcon: 'fa-dashboard',
        url: '',
        subItems: [{
            activeFlag: true,
            url: "/",
            name: "SubMenuItem1"
        }, {
            activeFlag: false,
            url: "/",
            name: "SubMenuItem2"
        }] }, {
        activeFlag: false,
        miName: 'SideMenu2',
        miIcon: 'fa-leaf',
        url: '',
        subItems: [{
            activeFlag: false,
            url: '/',
            miIcon: 'fa-tree',
            name: 'SubMenuItem1'
        }, {
            activeFlag: false,
            url: '/',
            name: 'SubMenuItem2'
        }]
    }, {
        activeFlag: false,
        miName: 'SideMenu3',
        miIcon: 'fa-user',
        url: '/',
        subItems: []
    }];
    try {
        user = JSON.parse(localStorage.getItem('user'));
    } catch (err) {
        user = undefined;
    }
    try {
        lang = localStorage.getItem('lang');
        if (lang === undefined || lang === '') {
            lang = "en";
        }
    } catch (err) {
        lang = "en";
    }

    return { userInfo: user, lang: lang, mainMenus: menu, isClient: isClient };
};
var saveState = function saveState(state) {
    try {
        var serState = (0, _stringify2.default)(state.userInfo);
        localStorage.setItem('user', serState);
    } catch (err) {
        //later add log.
    }
};

var subscribeStore = exports.subscribeStore = function subscribeStore(store) {
    store.subscribe(function () {
        saveState(store.getState());
    });
};

var store = void 0;
var initStore = exports.initStore = function initStore() {
    store = (0, _redux.createStore)(reducer, initState(), (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
        return f;
    }));
    return store;
};
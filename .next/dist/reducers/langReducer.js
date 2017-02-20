'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.langReducer = exports.saveLang = undefined;

var _langActions = require('../actions/langActions');

var saveLang = exports.saveLang = function saveLang(lang) {
    //console.log('langReducer:saveLang:',lang);

    localStorage.setItem('lang', lang);
};

var langReducer = exports.langReducer = function langReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
    var action = arguments[1];

    //console.log('langReducer->state:',state);
    switch (action.type) {
        case _langActions.SET_TO_ENGLISH:
            localStorage.setItem('lang', 'en');
            return 'en';

        case _langActions.SET_TO_SCHINESE:
            localStorage.setItem('lang', 'zh');
            return 'zh';
        default:
            return state;
    }
};
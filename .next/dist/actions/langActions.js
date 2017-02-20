"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var SET_TO_ENGLISH = exports.SET_TO_ENGLISH = "SET_TO_ENGLISH";
var SET_TO_SCHINESE = exports.SET_TO_SCHINESE = "SET_TO_SCHINESE";

var changeToEnglish = exports.changeToEnglish = function changeToEnglish() {
    //console.log('changeToEnglish action');
    return {
        type: SET_TO_ENGLISH
    };
};

var changeToSimpChinese = exports.changeToSimpChinese = function changeToSimpChinese() {
    //console.log('changeToSimpChinese action');
    return {
        type: SET_TO_SCHINESE
    };
};
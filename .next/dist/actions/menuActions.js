"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var INIT_MAIN_MENU = exports.INIT_MAIN_MENU = "INIT_MAIN_MENU";
var ACTIVE_MENU_ITEM_CHANGED = exports.ACTIVE_MENU_ITEM_CHANGED = "ACTIVE_MENU_ITEM_CHANGED";
var ACTIVE_SUB_MENU_ITEM_CHANGED = exports.ACTIVE_SUB_MENU_ITEM_CHANGED = "ACTIVE_SUB_MENU_ITEM_CHANGED";

var initMainMenu = exports.initMainMenu = function initMainMenu() {
    //console.log('menuActions.initMainMenu');
    return {
        type: INIT_MAIN_MENU
    };
};

var activeMenuChanged = exports.activeMenuChanged = function activeMenuChanged(miName) {
    return {
        type: ACTIVE_MENU_ITEM_CHANGED,
        activeMiName: miName
    };
};

var activeSubMenuChanged = exports.activeSubMenuChanged = function activeSubMenuChanged(miName, subMiName) {
    return {
        type: ACTIVE_SUB_MENU_ITEM_CHANGED,
        activeMiName: miName,
        activeSubMiName: subMiName
    };
};
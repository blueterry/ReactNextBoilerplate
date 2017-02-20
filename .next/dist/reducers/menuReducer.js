'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.menuReducer = undefined;

var _assign = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _menuActions = require('../actions/menuActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mainMenu() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _menuActions.INIT_MAIN_MENU:
            return (0, _assign2.default)([], state, [{
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
            }]);
        case _menuActions.ACTIVE_MENU_ITEM_CHANGED:
            //console.log('state.mainMenus:', state.mainMenus);
            var obj = (0, _assign2.default)([], state);
            //console.log('state.mainMenus.obj:',obj);
            for (var o in obj) {
                obj[o].activeFlag = obj[o].miName === action.activeMiName;
            }
            //console.log('ACTIVE_MENU_ITEM_CHANGED:', obj);
            return obj;
        case _menuActions.ACTIVE_SUB_MENU_ITEM_CHANGED:
            var obj1 = (0, _assign2.default)([], state);
            for (var o in obj1) {
                obj1[o].activeFlag = obj1[o].miName === action.activeMiName;
                if (obj1[o].activeFlag) {
                    for (var os in obj1[o].subItems) {
                        obj1[o].subItems[os].activeFlag = obj1[o].subItems[os].name === action.activeSubMiName;
                    }
                }
            };
            //console.log('ACTIVE_SUB_MENU_ITEM_CHANGED:', obj1)
            return obj1;
        default:
            //console.log('default:', state)
            return state;
    }
}

var menuReducer = exports.menuReducer = function menuReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    //console.log('menuReducer-state:', state);
    switch (action.type) {
        case _menuActions.INIT_MAIN_MENU:
        case _menuActions.ACTIVE_MENU_ITEM_CHANGED:
        case _menuActions.ACTIVE_SUB_MENU_ITEM_CHANGED:
            var mm = mainMenu(state, action);
            //console.log('menuReducer-action:', action.type, mm)
            return mm;
        default:
            return state;
    }
};
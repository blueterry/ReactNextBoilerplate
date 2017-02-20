'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuMain = function (_Component) {
    (0, _inherits3.default)(MenuMain, _Component);

    function MenuMain() {
        (0, _classCallCheck3.default)(this, MenuMain);

        return (0, _possibleConstructorReturn3.default)(this, (MenuMain.__proto__ || (0, _getPrototypeOf2.default)(MenuMain)).apply(this, arguments));
    }

    (0, _createClass3.default)(MenuMain, [{
        key: 'render',
        value: function render() {
            var mainMenus = this.props.mainMenus;

            //console.log('MenuMain->props, mainMenus:', this.props, mainMenus)

            var menuMap = function menuMap() {
                return mainMenus.map(function (mi) {
                    return _react2.default.createElement(_MenuItem2.default, { key: mi.miName, menuData: mi });
                });
            };
            return _react2.default.createElement('ul', { className: 'sidebar-menu' }, _react2.default.createElement('li', { className: 'header' }, 'MAIN Navigation'), menuMap());
        }
    }]);

    return MenuMain;
}(_react.Component);

exports.default = MenuMain;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('../node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('../node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _store = require('../store/store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactIntl = require('react-intl');

var _loginForm = require('../components/loginForm');

var _loginForm2 = _interopRequireDefault(_loginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '..\\pages\\login.js?entry';


var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login() {
        (0, _classCallCheck3.default)(this, Login);

        return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).apply(this, arguments));
    }

    (0, _createClass3.default)(Login, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                lang = _props.lang,
                userInfo = _props.userInfo;

            console.log('login-> lang -> the user:', lang, userInfo, userInfo !== undefined);
            var hello = lang === "zh" ? userInfo.userName + "您好" : "Hello " + userInfo.userName;
            var verify = lang === "zh" ? "系统验证" : "Verification";
            var welcome = lang === "zh" ? "验证通过，欢迎回来！" : "Welcome back";
            var needVerify = lang === "zh" ? "请输入用户名密码进行验证" : "Please input user name and password";

            var loggedIn = userInfo !== undefined && userInfo.userId > 0;
            var title = loggedIn ? hello : verify;
            var subTitle = loggedIn ? welcome : needVerify;

            console.log('Login->loggedIn,title,subTitle:', loggedIn, title, subTitle);

            var renderLogin = function renderLogin() {
                if (loggedIn) {
                    return _react2.default.createElement('div', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'currentUser', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    }), ' : ', userInfo.userName, ' ');
                }
                return _react2.default.createElement(_loginForm2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                });
            };
            return _react2.default.createElement(_layout2.default, { title: title, subTitle: subTitle, breadcrumb: 'Login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, renderLogin());
        }
    }]);

    return Login;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, function (state) {
    console.log('login->state:', state);
    return state;
})(Login);
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('..\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('..\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('..\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('..\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('..\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _loginAPI = require('../api/loginAPI');

var _loginAPI2 = _interopRequireDefault(_loginAPI);

var _InputEx = require('./InputEx');

var _InputEx2 = _interopRequireDefault(_InputEx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '..\\components\\loginForm.js';


var LoginForm = function (_Component) {
    (0, _inherits3.default)(LoginForm, _Component);

    function LoginForm(props) {
        (0, _classCallCheck3.default)(this, LoginForm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LoginForm.__proto__ || (0, _getPrototypeOf2.default)(LoginForm)).call(this, props));

        _this.onLogin = _this.onLogin.bind(_this);
        _this.onLogout = _this.onLogout.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(LoginForm, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var userInfo = this.props.userInfo;
            //console.log('loginForm.userInfo:', userInfo);

            var renderMessage = function renderMessage() {
                var _refs = _this2.refs,
                    userNameEx = _refs.userNameEx,
                    passwordEx = _refs.passwordEx;

                if (userInfo === undefined || passwordEx === undefined) {
                    return _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'loginPrompt', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    });
                } else if (passwordEx !== undefined) {
                    var password = passwordEx.refs.wrappedInstance.refs.password;

                    password.value = '';
                }

                if (userNameEx !== undefined) {
                    var userName = userNameEx.refs.wrappedInstance.refs.userName;

                    userName.select();
                }
                return _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'loginFailPrompt', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                });
            };

            var renderForm = function renderForm() {
                if (userInfo !== undefined && userInfo.userId > 0) {
                    //Already logged in
                    return _react2.default.createElement('div', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    }, _react2.default.createElement('h1', { className: 'title', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'loginSuccessTitle', values: { userName: userInfo.userName }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    })), _react2.default.createElement('button', { className: 'button expanded', onClick: _this2.onLogout, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'logoutButton', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    })));
                }

                //console.log('fail login:', userInfo);

                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                }, _react2.default.createElement('h1', { className: 'title', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'loginTitle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                })), _react2.default.createElement('form', { onSubmit: _this2.onLogin, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                }, _react2.default.createElement(_InputEx2.default, { locId: 'phUserName', ref: 'userNameEx', refName: 'userName', type: 'text', className: 'text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }), _react2.default.createElement(_InputEx2.default, { locId: 'phPassword', ref: 'passwordEx', refName: 'password', type: 'password', className: 'password', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                }), _react2.default.createElement(_InputEx2.default, { type: 'submit', className: 'button expanded', locId: 'loginButton', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                })), renderMessage());
            };
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, renderForm());
        }
    }, {
        key: 'onLogin',
        value: function onLogin(e) {
            e.preventDefault();
            //console.log('login.props:',this.props);
            //console.log("the state:", this.refs.wrappedInstance);
            var dispatch = this.props.dispatch;
            var _refs2 = this.refs,
                userNameEx = _refs2.userNameEx,
                passwordEx = _refs2.passwordEx;
            //console.log('userNameEx, passwordEx:', userNameEx, passwordEx);
            //console.log('InputEx.refs:', userNameEx.value);

            var userName = userNameEx.refs.wrappedInstance.refs.userName;
            var password = passwordEx.refs.wrappedInstance.refs.password;

            //console.log('userName:', userName.value)
            //console.log('password:', password.value);

            if (userName.value.length > 0 && password.value.length > 0) {
                //console.log('try login')
                dispatch(_loginAPI2.default.verifyUser(userName.value, password.value));
            } else {
                //console.log('login failed');
                userName.focus();
                password.value = "";
            }
        }
    }, {
        key: 'onLogout',
        value: function onLogout(e) {
            e.preventDefault();
            //console.log('logout');
            var dispatch = this.props.dispatch;

            dispatch(_loginAPI2.default.logOut());
        }
    }]);

    return LoginForm;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(LoginForm);
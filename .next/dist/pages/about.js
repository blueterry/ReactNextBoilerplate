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

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _store = require('../store/store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _global = require('../api/global');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '..\\pages\\about.js?entry';
//import reactjsAdminlte  from 'adminlte-reactjs';

var About = function (_Component) {
    (0, _inherits3.default)(About, _Component);

    function About() {
        (0, _classCallCheck3.default)(this, About);

        return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
    }

    (0, _createClass3.default)(About, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                lang = _props.lang,
                isClient = _props.isClient;

            var theLang = _global2.default.getLangs(lang);
            //const {InfoTile} = reactjsAdminlte;
            console.log('About-lang,isClient,theLang:', lang, isClient, theLang);
            var showClient = function showClient() {
                console.log('About-isClient:', isClient);
                if (isClient) {
                    var InfoTile = require('adminlte-reactjs').InfoTile;
                    console.log('About-Client-InfoTile:', InfoTile);
                    return _react2.default.createElement(InfoTile, { width: '3',
                        content: '',
                        icon: 'fa-envelope-o',
                        stats: '1410',
                        subject: 'Messages',
                        theme: 'bg-aqua', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    });
                }
            };
            return _react2.default.createElement(_layout2.default, { title: theLang.aboutTitle, subTitle: theLang.aboutSubTitle, breadcrumb: theLang.aboutBreadcrumb, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Packages installed in this web app'), _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Next.js 1.2.3'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'React'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Redux'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'React intl'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'isomorphic-fetch'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'adminlte-reactjs', _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, showClient())))), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'font-awesome', _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('i', { className: 'fa fa-anchor', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }))))));
        }
    }]);

    return About;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, function (state) {
    return state;
})(About);
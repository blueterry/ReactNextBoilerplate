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

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _store = require('../store/store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _global = require('../api/global');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                        theme: 'bg-aqua' });
                }
            };
            return _react2.default.createElement(_layout2.default, { title: theLang.aboutTitle, subTitle: theLang.aboutSubTitle, breadcrumb: theLang.aboutBreadcrumb }, _react2.default.createElement('h3', null, 'Packages installed in this web app'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Next.js 1.2.3'), _react2.default.createElement('li', null, 'React'), _react2.default.createElement('li', null, 'Redux'), _react2.default.createElement('li', null, 'React intl'), _react2.default.createElement('li', null, 'isomorphic-fetch'), _react2.default.createElement('li', null, 'adminlte-reactjs', _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('div', { className: 'row' }, showClient())))), _react2.default.createElement('li', null, 'font-awesome', _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('i', { className: 'fa fa-anchor' }))))));
        }
    }]);

    return About;
}(_react.Component);
//import reactjsAdminlte  from 'adminlte-reactjs';

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, function (state) {
    return state;
})(About);
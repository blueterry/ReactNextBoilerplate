'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _link = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _zh_CN = require('../locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _en_US = require('../locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

var _zh = require('react-intl/locale-data/zh');

var _zh2 = _interopRequireDefault(_zh);

var _reactIntl = require('react-intl');

var _lang = require('./lang');

var _lang2 = _interopRequireDefault(_lang);

var _InputEx = require('./InputEx');

var _InputEx2 = _interopRequireDefault(_InputEx);

var _MenuMain = require('./MenuMain');

var _MenuMain2 = _interopRequireDefault(_MenuMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import reactjsAdminlte from 'adminlte-reactjs';

(0, _reactIntl.addLocaleData)([].concat((0, _toConsumableArray3.default)(_en2.default), (0, _toConsumableArray3.default)(_zh2.default)));

//import {reducer, initStore, initialState, loadInitData} from '../store/store';

//import {getLang} from '../reducers/langReducer';


//import Document, { Head, Main, NextScript } from 'next/document'
//import styleSheet from 'styled-components/lib/models/StyleSheet'

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(function (_ref) {
    var children = _ref.children,
        mainMenus = _ref.mainMenus,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "Rekete Admin" : _ref$title,
        _ref$subTitle = _ref.subTitle,
        subTitle = _ref$subTitle === undefined ? "Version 0.1.2" : _ref$subTitle,
        _ref$breadcrumb = _ref.breadcrumb,
        breadcrumb = _ref$breadcrumb === undefined ? "Page" : _ref$breadcrumb,
        lang = _ref.lang,
        isClient = _ref.isClient;

    console.log('Layout->props:', isClient);

    if (!isClient) {
        //No need to keep loading it.
        return _react2.default.createElement('div', null, 'Loading...');
    }

    var showBreadcrumb = function showBreadcrumb() {
        var bc = breadcrumb.split('>');
        return _react2.default.createElement('ol', { className: 'breadcrumb' }, _react2.default.createElement('li', { key: 'bc-home' }, _react2.default.createElement('a', { href: '/' }, _react2.default.createElement('i', { className: 'fa fa-dashboard' }), ' Home')), bc.map(function (item) {
            var sItems = item.indexOf('|') > 0 ? item.split('|') : item;
            return _react2.default.createElement('li', { key: 'bc-' + item }, Array.isArray(sItems) ? _react2.default.createElement('a', { href: './' + sItems[1] }, sItems[0]) : item);
        }));
    };
    return _react2.default.createElement(_reactIntl.IntlProvider, { locale: lang, messages: lang === "en" ? _en_US2.default : _zh_CN2.default }, _react2.default.createElement('div', { className: 'hold-transition skin-blue sidebar-mini full-height' }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, title), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }), _react2.default.createElement('meta', { content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no', name: 'viewport' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/bootstrap/css/bootstrap.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/font-awesome470/css/font-awesome.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/ionicons201/css/ionicons.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/adminlte232/css/AdminLTE.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/adminlte232/css/skins/_all-skins.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/main.css' })), _react2.default.createElement('div', { className: 'full-height' }, _react2.default.createElement('header', { className: 'main-header' }, _react2.default.createElement('a', { href: '#', className: 'logo' }, _react2.default.createElement('span', { className: 'logo-mini' }, _react2.default.createElement('b', null, 'R'), 'KT'), _react2.default.createElement('span', { className: 'logo-lg' }, isClient && _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'appName' }))), _react2.default.createElement('nav', { className: 'navbar navbar-static-top' }, _react2.default.createElement('a', { href: '#', className: 'sidebar-toggle' }, _react2.default.createElement('span', { className: 'sr-only' }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'toggleNav' }))), _react2.default.createElement('div', { className: 'navbar-custom-menu' }, _react2.default.createElement('ul', { className: 'nav navbar-nav' }, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'homeMenu' })))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'aboutMenu' })))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/login' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'loginButton' })))), _react2.default.createElement('li', null, _react2.default.createElement(_lang2.default, null)))))), _react2.default.createElement('div', { className: 'full-height' }, _react2.default.createElement('aside', { className: 'main-sidebar' }, _react2.default.createElement('section', { className: 'sidebar' }, _react2.default.createElement('div', { className: 'user-panel' }), _react2.default.createElement('form', { action: '#', className: 'sidebar-form', method: 'get' }, _react2.default.createElement('div', { className: 'input-group' }, _react2.default.createElement(_InputEx2.default, { locId: 'phSearch', refName: 'search', type: 'text', className: 'text' }), _react2.default.createElement('span', { className: 'input-group-btn' }, _react2.default.createElement('button', { type: 'submit', name: 'search', className: 'btn btn-float', id: 'search-btn' }, _react2.default.createElement('i', { className: 'fa fa-search' }))))), _react2.default.createElement(_MenuMain2.default, { mainMenus: mainMenus }))), _react2.default.createElement('div', { className: 'full-height' }, _react2.default.createElement('div', { className: 'full-height wrapper' }, _react2.default.createElement('div', { className: 'content-wrapper' }, _react2.default.createElement('section', { className: 'content-header' }, _react2.default.createElement('h1', null, title, _react2.default.createElement('small', null, subTitle)), showBreadcrumb()), _react2.default.createElement('section', { className: 'content' }, children))), _react2.default.createElement('footer', { className: 'main-footer no-margin-right' }, _react2.default.createElement('div', { className: 'pull-right hidden-xs' }, _react2.default.createElement('b', null, 'Version'), ' 1.0.0'), _react2.default.createElement('strong', null, 'Copyright \xA9 2007~', (0, _moment2.default)().year(), _react2.default.createElement('a', { href: 'http://www.rkete.com' }, 'Rekete')), '. All rights reserved.'))))));
});
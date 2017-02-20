'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('..\\node_modules\\babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _link = require('..\\node_modules\\next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('..\\node_modules\\next\\dist\\lib\\head.js');

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

var _jsxFileName = '..\\components\\layout.js';

//import Document, { Head, Main, NextScript } from 'next/document'
//import styleSheet from 'styled-components/lib/models/StyleSheet'

//import reactjsAdminlte from 'adminlte-reactjs';

//import {getLang} from '../reducers/langReducer';


//import {reducer, initStore, initialState, loadInitData} from '../store/store';

(0, _reactIntl.addLocaleData)([].concat((0, _toConsumableArray3.default)(_en2.default), (0, _toConsumableArray3.default)(_zh2.default)));

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
        return _react2.default.createElement('div', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 33
            }
        }, 'Loading...');
    }

    var showBreadcrumb = function showBreadcrumb() {
        var bc = breadcrumb.split('>');
        return _react2.default.createElement('ol', { className: 'breadcrumb', __source: {
                fileName: _jsxFileName,
                lineNumber: 39
            }
        }, _react2.default.createElement('li', { key: 'bc-home', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }, _react2.default.createElement('a', { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }, _react2.default.createElement('i', { className: 'fa fa-dashboard', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }), ' Home')), bc.map(function (item) {
            var sItems = item.indexOf('|') > 0 ? item.split('|') : item;
            return _react2.default.createElement('li', { key: 'bc-' + item, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, Array.isArray(sItems) ? _react2.default.createElement('a', { href: './' + sItems[1], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, sItems[0]) : item);
        }));
    };
    return _react2.default.createElement(_reactIntl.IntlProvider, { locale: lang, messages: lang === "en" ? _en_US2.default : _zh_CN2.default, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, _react2.default.createElement('div', { className: 'hold-transition skin-blue sidebar-mini full-height', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }), _react2.default.createElement('meta', { content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no', name: 'viewport', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/bootstrap/css/bootstrap.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/font-awesome470/css/font-awesome.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/ionicons201/css/ionicons.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/adminlte232/css/AdminLTE.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/adminlte232/css/skins/_all-skins.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/main.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    })), _react2.default.createElement('div', { className: 'full-height', __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, _react2.default.createElement('header', { className: 'main-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, _react2.default.createElement('a', { href: '#', className: 'logo', __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, _react2.default.createElement('span', { className: 'logo-mini', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, _react2.default.createElement('b', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, 'R'), 'KT'), _react2.default.createElement('span', { className: 'logo-lg', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, isClient && _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'appName', __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }))), _react2.default.createElement('nav', { className: 'navbar navbar-static-top', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }, _react2.default.createElement('a', { href: '#', className: 'sidebar-toggle', __source: {
            fileName: _jsxFileName,
            lineNumber: 77
        }
    }, _react2.default.createElement('span', { className: 'sr-only', __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'toggleNav', __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }))), _react2.default.createElement('div', { className: 'navbar-custom-menu', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement('ul', { className: 'nav navbar-nav', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'homeMenu', __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    })))), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'aboutMenu', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    })))), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }, _react2.default.createElement(_link2.default, { href: '/login', __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'loginButton', __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    })))), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }, _react2.default.createElement(_lang2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    })))))), _react2.default.createElement('div', { className: 'full-height', __source: {
            fileName: _jsxFileName,
            lineNumber: 99
        }
    }, _react2.default.createElement('aside', { className: 'main-sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, _react2.default.createElement('section', { className: 'sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, _react2.default.createElement('div', { className: 'user-panel', __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }), _react2.default.createElement('form', { action: '#', className: 'sidebar-form', method: 'get', __source: {
            fileName: _jsxFileName,
            lineNumber: 103
        }
    }, _react2.default.createElement('div', { className: 'input-group', __source: {
            fileName: _jsxFileName,
            lineNumber: 104
        }
    }, _react2.default.createElement(_InputEx2.default, { locId: 'phSearch', refName: 'search', type: 'text', className: 'text', __source: {
            fileName: _jsxFileName,
            lineNumber: 105
        }
    }), _react2.default.createElement('span', { className: 'input-group-btn', __source: {
            fileName: _jsxFileName,
            lineNumber: 106
        }
    }, _react2.default.createElement('button', { type: 'submit', name: 'search', className: 'btn btn-float', id: 'search-btn', __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    }, _react2.default.createElement('i', { className: 'fa fa-search', __source: {
            fileName: _jsxFileName,
            lineNumber: 108
        }
    }))))), _react2.default.createElement(_MenuMain2.default, { mainMenus: mainMenus, __source: {
            fileName: _jsxFileName,
            lineNumber: 113
        }
    }))), _react2.default.createElement('div', { className: 'full-height', __source: {
            fileName: _jsxFileName,
            lineNumber: 116
        }
    }, _react2.default.createElement('div', { className: 'full-height wrapper', __source: {
            fileName: _jsxFileName,
            lineNumber: 117
        }
    }, _react2.default.createElement('div', { className: 'content-wrapper', __source: {
            fileName: _jsxFileName,
            lineNumber: 118
        }
    }, _react2.default.createElement('section', { className: 'content-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 119
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 120
        }
    }, title, _react2.default.createElement('small', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 120
        }
    }, subTitle)), showBreadcrumb()), _react2.default.createElement('section', { className: 'content', __source: {
            fileName: _jsxFileName,
            lineNumber: 123
        }
    }, children))), _react2.default.createElement('footer', { className: 'main-footer no-margin-right', __source: {
            fileName: _jsxFileName,
            lineNumber: 128
        }
    }, _react2.default.createElement('div', { className: 'pull-right hidden-xs', __source: {
            fileName: _jsxFileName,
            lineNumber: 129
        }
    }, _react2.default.createElement('b', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 130
        }
    }, 'Version'), ' 1.0.0'), _react2.default.createElement('strong', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 132
        }
    }, 'Copyright \xA9 2007~', (0, _moment2.default)().year(), _react2.default.createElement('a', { href: 'http://www.rkete.com', __source: {
            fileName: _jsxFileName,
            lineNumber: 133
        }
    }, 'Rekete')), '. All rights reserved.'))))));
});
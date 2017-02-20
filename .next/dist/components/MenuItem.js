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

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _menuActions = require('../actions/menuActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '..\\components\\MenuItem.js';


var MenuItem = function (_Component) {
    (0, _inherits3.default)(MenuItem, _Component);

    function MenuItem(props) {
        (0, _classCallCheck3.default)(this, MenuItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call(this, props));

        _this.onMiClick = _this.onMiClick.bind(_this);
        _this.onSubMiClick = _this.onSubMiClick.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(MenuItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$menuData = this.props.menuData,
                activeFlag = _props$menuData.activeFlag,
                miIcon = _props$menuData.miIcon,
                miName = _props$menuData.miName,
                url = _props$menuData.url,
                subItems = _props$menuData.subItems;

            var mainClass = "";
            if (activeFlag) mainClass = "active ";
            if (subItems !== undefined && subItems.length > 0) {
                mainClass += " treeview";
                //subItems = JSON.parse(subItems);
            }
            //debug
            //console.log('subItems:',subItems);
            //end debug
            //var theUrl = url.length > 0? "href="+url:"";
            var renderSubItems = function renderSubItems(mi) {
                //console.log('post-subItems:', subItems);
                if (subItems !== undefined && subItems.length > 0) {
                    var subMenuItems = subItems.map(function (si) {
                        return _react2.default.createElement('li', { key: si.name, className: si.activeFlag ? "active" : "", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            }
                        }, _react2.default.createElement('a', { onClick: function onClick(e) {
                                return _this2.onSubMiClick(e, mi, si.name, si.url);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31
                            }
                        }, _react2.default.createElement('i', { className: 'fa fa-circle-o', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 32
                            }
                        }), _react2.default.createElement(_reactIntl.FormattedMessage, { id: si.name, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            }
                        })));
                    });
                    //console.log('subMenuItems:', subMenuItems);

                    if (subItems !== undefined && subItems.length > 0) {
                        return _react2.default.createElement('ul', { className: 'treeview-menu', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 41
                            }
                        }, subMenuItems);
                    }
                }
            };
            return _react2.default.createElement('li', { className: mainClass, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('a', { onClick: function onClick(e) {
                    return _this2.onMiClick(e, miName, url);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('i', { className: "fa " + miIcon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: miName, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement('span', { className: 'pull-right-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('i', { className: 'fa fa-angle-left pull-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }))), renderSubItems(miName));
        }
    }, {
        key: 'onMiClick',
        value: function onMiClick(e, mi, url) {
            e.preventDefault();
            var dispatch = this.props.dispatch;

            console.log('mItemname:', mi);
            dispatch((0, _menuActions.activeMenuChanged)(mi));
            if (url.length > 0) location.assign('#/' + url);
        }
    }, {
        key: 'onSubMiClick',
        value: function onSubMiClick(e, mi, smi, url) {
            e.preventDefault();
            var dispatch = this.props.dispatch;

            console.log('smItemName:', e, mi, smi);
            dispatch((0, _menuActions.activeSubMenuChanged)(mi, smi));
            if (url.length > 0) location.assign('#/' + url);
        }
    }]);

    return MenuItem;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(MenuItem);
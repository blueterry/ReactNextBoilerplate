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

var _reactRedux = require('react-redux');

var _langActions = require('../actions/langActions');

var langAction = _interopRequireWildcard(_langActions);

var _reactNotificationSystem = require('react-notification-system');

var _reactNotificationSystem2 = _interopRequireDefault(_reactNotificationSystem);

var _reactIntl = require('react-intl');

var _en_US = require('../locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _zh_CN = require('../locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lang = function (_Component) {
    (0, _inherits3.default)(Lang, _Component);

    function Lang(props) {
        (0, _classCallCheck3.default)(this, Lang);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Lang.__proto__ || (0, _getPrototypeOf2.default)(Lang)).call(this, props));

        _this._notificationSystem = null;

        _this.SetToChinese = _this.SetToChinese.bind(_this);
        _this.SetToEnglish = _this.SetToEnglish.bind(_this);
        _this._addNotification = _this._addNotification.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Lang, [{
        key: '_addNotification',
        value: function _addNotification(message) {

            this._notificationSystem.addNotification({
                message: message,
                level: 'success',
                position: 'br'
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._notificationSystem = this.refs.notificationSystem;
        }
    }, {
        key: 'render',
        value: function render() {
            var lang = this.props.lang;
            //console.log('Lang.lang:', lang);

            return _react2.default.createElement('ul', { className: 'nav navbar-nav' }, _react2.default.createElement('li', null, _react2.default.createElement(_reactNotificationSystem2.default, { ref: 'notificationSystem' })), _react2.default.createElement('li', null, _react2.default.createElement('a', { className: 'hand-cursor', onClick: this.SetToEnglish }, 'EN')), _react2.default.createElement('li', null, _react2.default.createElement('a', { className: 'hand-cursor', onClick: this.SetToChinese }, '\u4E2D')));
        }
    }, {
        key: 'SetToChinese',
        value: function SetToChinese() {
            console.log('set to chn');
            var dispatch = this.props.dispatch;

            this._addNotification(_zh_CN2.default.langChanged);
            return dispatch(langAction.changeToSimpChinese());
        }
    }, {
        key: 'SetToEnglish',
        value: function SetToEnglish() {
            console.log('set to eng');
            var dispatch = this.props.dispatch;

            this._addNotification(_en_US2.default.langChanged);
            return dispatch(langAction.changeToEnglish());
        }
    }]);

    return Lang;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Lang);
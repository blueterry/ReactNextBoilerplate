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

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '..\\components\\InputEx.js';


var InputEx = function (_Component) {
    (0, _inherits3.default)(InputEx, _Component);

    function InputEx() {
        (0, _classCallCheck3.default)(this, InputEx);

        return (0, _possibleConstructorReturn3.default)(this, (InputEx.__proto__ || (0, _getPrototypeOf2.default)(InputEx)).apply(this, arguments));
    }

    (0, _createClass3.default)(InputEx, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                locId = _props.locId,
                _props$type = _props.type,
                type = _props$type === undefined ? 'text' : _props$type,
                _props$className = _props.className,
                className = _props$className === undefined ? 'text' : _props$className,
                _props$refName = _props.refName,
                refName = _props$refName === undefined ? '' : _props$refName,
                intl = _props.intl;

            switch (type) {
                case 'button':
                case 'submit':
                    return _react2.default.createElement('input', { type: type, value: intl.formatMessage({ id: locId }), className: className, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    });
                default:
                    return _react2.default.createElement('input', { type: type, ref: refName, placeholder: intl.formatMessage({ id: locId }), className: className, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    });
            }
        }
    }]);

    return InputEx;
}(_react.Component);

InputEx.propTypes = {
    locId: _react.PropTypes.any.isRequired,
    intl: _reactIntl.intlShape.isRequired
};

exports.default = (0, _reactIntl.injectIntl)(InputEx, { withRef: true });
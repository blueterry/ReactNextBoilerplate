'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientReducer = undefined;

var _typeof2 = require('E:\\NewWorks\\work_react\\ReactNextBoilerplate\\node_modules\\babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientReducer = exports.clientReducer = function clientReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var action = arguments[1];
  return (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object';
};
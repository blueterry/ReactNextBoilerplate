'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _zh_CN = require('../locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _en_US = require('../locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '..\\api\\global.js';


var serverUrl = 'http://www.rkete.com:9000/query/';
var uploadUrl = 'http://www.rkete.com:9000/uploads/';

exports.default = {

    serverUrl: serverUrl,
    uploadUrl: uploadUrl,

    getLangs: function getLangs(lang) {
        return lang === "zh" ? _zh_CN2.default : _en_US2.default;
    },
    checkLogin: function checkLogin(user) {
        //console.log('global->checkLogin:',user);
        if (user === undefined || user.userId === undefined || parseInt(user.userId) <= 0) {
            //console.log('Jobs->not Logged in');
            return false;
        }
        return true;
    },
    showLoginButton: function showLoginButton() {
        return _react2.default.createElement('button', { onClick: function onClick() {
                return location.assign('./#/loginform');
            }, className: 'btn btn-default', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'notLoginYet', __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            }
        }));
    },
    fetchData: function fetchData(url, param, successFunc, failFunc) {
        //var url = new URL(server + "jobman.asmx/GetCommentsByWsjId");
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: param //"wsJobId=" + jobId
        }).then(function (response) {
            if (response.status >= 400) {
                //fail to load comments
                if (typeof failFunc === 'function') {
                    failFunc(param);
                }
            }
            return response.json();
        }).then(function (json) {
            //console.log('jobAPI->getComments->json:',json);
            //dispatch(JobCommentsLoaded(jobId, json.wsComments))
            if (typeof successFunc === 'function') {
                successFunc(json);
            }
        });
    }
};
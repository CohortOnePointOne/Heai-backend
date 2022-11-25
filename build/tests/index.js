"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _supertest = _interopRequireDefault(require("supertest"));
var _app = _interopRequireDefault(require("../app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var version = '/api/v1';
var appInstance = (0, _supertest["default"])(_app["default"]);
var testBase = /*#__PURE__*/function () {
  function testBase() {
    _classCallCheck(this, testBase);
  }
  _createClass(testBase, null, [{
    key: "post",
    value: function post(url) {
      return appInstance.post("".concat(version).concat(url));
    }
  }, {
    key: "get",
    value: function get(url) {
      return appInstance.get("".concat(version).concat(url));
    }
  }, {
    key: "patch",
    value: function patch(url) {
      return appInstance.patch("".concat(version).concat(url));
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      return appInstance["delete"]("".concat(version).concat(url));
    }
  }]);
  return testBase;
}();
var _default = testBase;
exports["default"] = _default;
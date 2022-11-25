"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _ref = process.env || 3000,
  PORT = _ref.PORT;
_app["default"].listen(PORT, function () {
  console.log("Connecting on port ".concat(PORT, " ..."));
});
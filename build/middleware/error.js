"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
function _default(err, req, res) {
  return res.status(500).json({
    message: err
  });
}
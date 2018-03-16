"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readHTML = undefined;

var _util = require("util");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _fp = require("lodash/fp");

var _fp2 = _interopRequireDefault(_fp);

var _immutable = require("immutable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readFile = (0, _util.promisify)(_fs2.default.readFile);
var re = /class="(.*?)"/g;

function readHTML(file) {
  readFile(file, "utf8")
  // .then(text => text.match(re))
  .then(processText).then(_immutable.List).then(function (m) {
    return console.log(m);
  }).catch(function (err) {
    return console.log(err);
  });
}

exports.readHTML = readHTML;


function processText(text) {
  var x = void 0;
  while (x = re.exec(text)) {
    console.log("-> " + x[1] + "\n   @ " + x.index);
  }
}
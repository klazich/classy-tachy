'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.htmlText = undefined
exports.readHtml = readHtml

var _fs = require('fs')

var _lodash = require('lodash')

var _lodash2 = _interopRequireDefault(_lodash)

var _immutable = require('immutable')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _marked = /*#__PURE__*/ regeneratorRuntime.mark(readHtml)

var re = /class="(.*?)"/g

var htmlText = (exports.htmlText = function htmlText(file) {
  return (0, _fs.readFileSync)(file, 'utf8')
})

function readHtml(text) {
  var x
  return regeneratorRuntime.wrap(
    function readHtml$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            x = void 0

          case 1:
            if (!(x = re.exec(text))) {
              _context.next = 6
              break
            }

            _context.next = 4
            return x

          case 4:
            _context.next = 1
            break

          case 6:
          case 'end':
            return _context.stop()
        }
      }
    },
    _marked,
    this
  )
}

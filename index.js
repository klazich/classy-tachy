// require("babel-register");

// const { rgxHTML,  htmlText } = require("./lib/readHtml")

// _.countBy(collection, [iteratee=_.identity])
// _.groupBy(collection, [iteratee=_.identity])

const fs = require('fs')
const _ = require('lodash')

const rgxClassName = /class="(.*?)"/g
const htmlText = file => fs.readFileSync(file, 'utf8')

const testText = htmlText('./test.html')

// testText.match(rgxClassName).forEach(e => console.log(e))

function* g(text) {
  let x
  while ((x = rgx.exec(text))) {
    yield x
  }
}

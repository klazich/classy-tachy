// require("babel-register");

// const { rgxHTML,  htmlText } = require("./lib/readHtml")

// _.countBy(collection, [iteratee=_.identity])
// _.groupBy(collection, [iteratee=_.identity])

const fs = require('fs')
const _ = require('lodash')
const { Set } = require('immutable')

const rgxClassName = /class="(.*?)"/g
const htmlText = file => fs.readFileSync(file, 'utf8')

const testText = htmlText('./test.html')

function* g(text) {
  let x
  while ((x = rgxClassName.exec(text))) yield x
}

let matches
while ((matches = rgxClassName.exec(text))) {}

/**
 * 1. Typography    – sets the visual hierarchy and is one of the most important parts of web design
 * 2. Positioning   – can severely change document flow
 * 3. Layout        – can affect other elements and document flow
 * 4. Color & Theme – has little or no effect on layout
 * 5. State         – is dynamic and often unnecessary
 */

const htmlString = htmlText('./test.html')

/*
Typography
Type Scale              tachyons-type-scale
Measure                 tachyons-typography
Line Height / Leading   tachyons-line-height
Tracking
Font Weights
Font Style
Vertical Align
Text Align
Text Transform
Text Decoration
White Space
Font Families
Avenir Next
Helvetica
Roboto
San Francisco
System Sans-Serif
Athelas
Baskerville
Garamond
Georgia
System Serif

Layout
Debugging
Debug with a Grid
Basic Grid
Flexbox
Box Sizing
Spacing
Floats
Clearfix
Display
Widths
Max Widths
Heights
Position

Theming
Skins
Skins animations
Hovers
Background Size
Borders
Border Radius
Box Shadow
Opacity

Elements
Images
Links
Lists
Forms
Tables
*/

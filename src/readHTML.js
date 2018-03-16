import { readFileSync } from 'fs'
import _ from 'lodash'

import { Map, List } from 'immutable'

const re = /class="(.*?)"/g

export const htmlText = file => readFileSync(file, 'utf8')

export function* readHtml(text) {
  let x
  while ((x = re.exec(text))) {
    yield x
  }
}

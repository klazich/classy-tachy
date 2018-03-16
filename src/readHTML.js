import { promisify } from "util";
import fs from "fs";

import fp from "lodash/fp";
import { Map, List } from "immutable";

const readFile = promisify(fs.readFile);
const re = /class="(.*?)"/g;

function readHTML(file) {
  readFile(file, "utf8")
    // .then(text => text.match(re))
    .then(processText)
    .then(List)
    .then(m => console.log(m))
    .catch(err => console.log(err));
}

export { readHTML };

function processText(text) {
  let x;
  while ((x = re.exec(text))) console.log(`-> ${x[1]}\n   @ ${x.index}`);
}

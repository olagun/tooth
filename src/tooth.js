"use strict";

import Tokenizer from "./tokenizer";
import parsePrimitive from "./parsers/primitive";

/**
 * @param {string} string
 * @returns {*}
 */
export default function(string) {
  var tokenizer = new Tokenizer(string);
  return parsePrimitive(tokenizer);
}

// console.log(parseJSON(`'\nay'`));

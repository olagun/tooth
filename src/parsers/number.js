"use strict";

import Constants from "../constants";

/**
 * @param {Tokenizer} tokenizer
 * @param {string} firstDigit
 * @returns {number}
 */
export default function(tokenizer, firstDigit) {
  var token,
    number = firstDigit;

  while ((token = tokenizer.nextToken())) {
    if (/\-|\+|\d|e|E|\./.test(token)) number += token;
    else break;
  }

  console.log(number);

  return +number;
}

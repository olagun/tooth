"use strict";

import Constants from "../constants";

/**
 * @function parseNumber
 * @param {Tokenizer} tokenizer
 * @param {string} firstDigit
 * @returns {number}
 */
export default function(tokenizer, firstDigit) {
  var token,
    number = firstDigit;

  while ((token = tokenizer.nextToken())) {
    if (token === Constants.COMMA) break;
    number += token;
  }

  return +number;
}

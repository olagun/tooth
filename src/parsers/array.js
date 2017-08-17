"use strict";

import Constants from "../constants";
import parsePrimitive from "./primitive";

/**
 * @param {Tokenizer} tokenizer
 * @returns {*[]}
 */
export default function(tokenizer) {
  var array = [],
    commaCount = 0,
    token;

  while ((token = tokenizer.nextToken())) {
    if (token === Constants.RIGHT_SQUARE_BRACKET) return array;
    else if (/\s/.test(token)) continue;
    else if (token === Constants.COMMA) {
      commaCount++;
      if (array.length >= 1) continue;
      else if (array.length === commaCount) continue;
      throw SyntaxError("tooth: malformed array");
    }

    var primitive = parsePrimitive(tokenizer, token);
    array.push(primitive);
  }
}

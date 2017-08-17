"use strict";

import Constants from "../constants";
import parsePrimitive from "./primitive";
import parseString from "./string";

/**
 * @function parseObject
 * @param {Tokenizer} tokenizer
 * @returns {object}
 */
export default function(tokenizer) {
  var object = {},
    token;

  while ((token = tokenizer.nextToken())) {
    switch (token) {
      case Constants.COMMA:
        // TODO: Add SyntaxError.
        break;
      case Constants.RIGHT_CURLY_BRACKET:
        return object;
      case Constants.QUOTATION_MARK:
      case Constants.APOSTROPHE:
        var key = parseString(tokenizer, token);

        while ((token = tokenizer.nextToken())) {
          if (token === Constants.COLON) break;
          // else if (/\s/.test(token)) continue;
          // else throw SyntaxError;
        }

        var value = parsePrimitive(tokenizer);

        object[key] = value;
        break;
      default:
        // Skip if white space character.
        if (/\s/.test(token)) break;
        throw SyntaxError("tooth: malformed object");
    }
  }
};

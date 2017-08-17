"use strict";

import Constants from "../constants";
import parseObject from "./object";
import parseArray from "./array";
import parseString from "./string";
import parseBoolean from "./boolean";
import parseNumber from "./number";

/**
 * @function parsePrimitive
 * @param {Tokenizer} tokenizer
 * @param {string} token
 * @returns {*}
 */
export default function(tokenizer, entry) {
  var token;

  if (entry) {
    token = entry;
  } else {
    // Get entry token.
    while ((token = tokenizer.nextToken())) {
      if (/\S/.test(token)) break;
    }
  }

  switch (token) {
    case Constants.COMMA:
      throw new SyntaxError();
      break;
    case Constants.LEFT_CURLY_BRACKET:
      return parseObject(tokenizer);
    case Constants.LEFT_SQUARE_BRACKET:
      return parseArray(tokenizer);
    case Constants.QUOTATION_MARK:
    case Constants.APOSTROPHE:
      return parseString(tokenizer, token);
    case "t":
    case "f":
      return parseBoolean(tokenizer, token);
    default:
      // Skip if white space character.
      if (/\s/.test(token)) return;

      if (/[.|\d]/.test(token)) {
        // Try to parse as number.
        var number = parseNumber(tokenizer, token);

        // Error if cannot be parsed as one.
        if (Object.is(number, NaN))
          throw SyntaxError("tooth: value cannot be parsed");

        return number;
      }
  }

  throw SyntaxError("tooth: value cannot be parsed");
}

"use strict";

/**
 * @function parseBoolean
 * @param {Tokenizer} tokenizer
 * @param {string} entry
 * @returns {boolean}
 */
export default function(tokenizer, entry) {
  var type = entry === "t" ? "true" : "false",
    boolean = entry,
    token;

  while ((token = tokenizer.nextToken())) {
    boolean += token;
    if (boolean === type) break;
  }

  if (boolean === "true") return true;
  else if (boolean === "false") return false;

  throw SyntaxError("tooth: malformed boolean");
}

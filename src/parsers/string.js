"use strict";

/**
 * @function parseString
 * @param {Tokenizer} tokenizer
 * @param {string} mark
 * @returns {string}
 */
// TODO: Implement escaping and standards.
export default function(tokenizer, mark) {
  var token,
    string = "";

  while ((token = tokenizer.nextToken())) {
    // // Consume the next character.
    // if (token === '\\') {
    //   console.log(tokenizer.nextToken());
    //   debugger;
    //   // continue;
    // }
    if (token === mark) return string;
    string += token;
  }

  throw SyntaxError("tooth: malformed string");
}

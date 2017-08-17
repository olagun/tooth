"use strict";

export default function Tokenizer(string) {
  this.string = string;
  this.pointer = 0;
}

Tokenizer.prototype.nextToken = function() {
  return this.string[this.pointer++];
};

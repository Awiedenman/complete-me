class Node {
  constructor(letter = null) {
   this.letter = letter;
   this.isWord = false;
  //  this.prefixes = 0;
   this.child = {};
  }
}

module.exports = Node;
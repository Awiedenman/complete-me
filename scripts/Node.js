class Node {
  constructor(letter = null) {
   this.letter = letter;
   this.isWord = false;
   this.child = {};
   this.weight = 0;
  }
}

module.exports = Node;
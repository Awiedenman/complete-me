class Node {
  constructor(letter = null) {
   this.letter = letter;
   this.isWord = false;
   this.child = {};
   this.weight = 0;
  }
}


// const Node = require('./scripts/Node');
// const Trie = require('./scripts/Trie');

// module.exports = { 
//     Node,
//     Trie 
// };


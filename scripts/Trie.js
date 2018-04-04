const Node = require('../scripts/Node');

class Trie {
  constructor(word = null) {
    // needs head, children, wordcount
    this.root = new Node();
    this.count = 0;
  }

  insert(word) {
    let lowerCaseWord = word.toLowerCase().split('');
    let currentNode = this.root;

    toLowerCase.forEach(( letter ) => {
      if (!currentNode.child[letter]){
        currentNode.children[letter] = newNode(letter)
      }
      currentNode = currentNode.chlid[letter];
    })
    if (!currentNode.wordEnd) {
      this.count++;
    }
    curretnNOde.wordEnd = true;
  }
}


    // for ( let i = 0 ; i < word.length ; i++) {
      //check child node for first letter.
  //     if (!node.child.data){
  //       node.child = new Node(lowerCaseWord[0]);
  //     }
  //   if (node.child.data === lowerCaseWord[0]) {
  //     currentNode = node.child;
  //     insert(word[ i + 1])
  //   }
  // }


//if it exists, then it becomes the current node and 
  //then we check for the next letter.
// if it doesnt exisdt then we create a new node
  //then we check for the next letter.
//then we repeat until the end of the word.

// set word to true. (base case)

module.exports = Trie;
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
    // let child = currentNode.child;

    lowerCaseWord.forEach(( letter ) => {
      if (!currentNode.child[letter]){
        currentNode.child[letter] = new Node(letter)
      }
      currentNode = currentNode.child[letter];
    })

    if (!currentNode.wordEnd) {
      currentNode.isWord = true;
      this.count++;
    }
    currentNode.wordEnd = true;
// if it exists, then it becomes the current node and 
  //then we check for the next letter.
// if it doesnt exisdt then we create a new node
  //then we check for the next letter.
//then we repeat until the end of the word.

// set word to true. (base case)
  }

  // suggest(word) {
  //   let currentNode = this.root;
  //   let suggestions = [];
  //   let lowerCaseWord = word.toLowerCase().split('');

  //   lowerCaseWord.forEach((letter) => {
  //     if (currentNode.child){
  //       while (currentNode.child[letter]){
  //         currentNode = currentNode.child;
  //       }   
  //     }
  //     endOfWord(){
  //       if (currentNode)
  //     }
  //   })

  
  // Check if the node in the string has a child.
  // keep track of each letter.
  // push each letter in to word array.
  // check if the child is an End Of Word.
  // if EOW, push into an array and the completed word is now the current word and join.
  // check the next node for child and repeat.
  // once you have reached the EOW and it has no child, return array.
}

module.exports = Trie;
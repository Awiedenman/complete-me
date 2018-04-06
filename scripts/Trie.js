const Node = require('../scripts/Node');

class Trie {
  constructor(word = null) {
    this.root = new Node();
    this.count = 0;
  }

  insert(word) {
    let lowerCaseWord = word.toLowerCase().split('');
    let currentNode = this.root;

    lowerCaseWord.forEach(( letter ) => {
      if (!currentNode.child[letter]){
        currentNode.child[letter] = new Node(letter)
      }
      currentNode = currentNode.child[letter];
    })

    if (!currentNode.isWord) {
      currentNode.isWord = true;
      this.count++;
    }
  }

  suggest(string) {
    let currentNode = this.root;
    let lowerCaseWord = string.toLowerCase().split('');
    let suggestions = [];

    if (!currentNode.child[lowerCaseWord[0]]){
      return [];
    }

    lowerCaseWord.forEach((letter) => {
      if (currentNode.child[letter]){
        currentNode = currentNode.child[letter]
      }
    })

    const findWord = (string, currentNode) => {
      if (currentNode.isWord){
        suggestions.push(string);
      }

      let childKeys = Object.keys(currentNode.child);
      
      if (childKeys.length > 0) {
        console.log(childKeys)
        childKeys.forEach((key) => {
          currentNode = currentNode.child[key];
          console.log(currentNode)
          let newString = string + key;

          findWord(newString, currentNode)
        });
      }
    }
    findWord(string, currentNode);
    return suggestions
  }

  // delete(string) {
  //   let currentNode = this.root;
  //   let lowerCaseWord = string.toLowerCase().split('');

  //   lowerCaseWord.forEach((letter) => {
  //     if (currentNode.child[letter]) {
  //       currentNode = currentNode.child[letter]
  //     }
  //   })

  //   if (currentNode.isWord === true){
  //     currentNode.isWord = false;
  //   }
  // }

  //   populate(wordArray) {
  //     wordArray.forEach((word) => this.insert(word))
  //   }
}

module.exports = Trie;



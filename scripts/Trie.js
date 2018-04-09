const Node = require('../scripts/Node');

class Trie {
  constructor(word = null) {
    this.root = new Node();
    this.count = 0;
  }

  insert(word) {
    let lowerCaseWord = word.toLowerCase().split('');
    let currentNode = this.root;

    lowerCaseWord.forEach((letter) => {
      if (!currentNode.child[letter]) {
        currentNode.child[letter] = new Node(letter)
      }
      currentNode = currentNode.child[letter];
    })

    if (!currentNode.isWord) {
      currentNode.isWord = true;
      this.count++;
    }
    currentNode.isWord = true;
  }

  suggest(string) {
    let currentNode = this.root;
    let lowerCaseWord = string.toLowerCase().split('');
    let suggestions = [];

    if (!currentNode.child[lowerCaseWord[0]]) {
      return [];
    }

    lowerCaseWord.forEach((letter) => {
      if (currentNode.child) {
        currentNode = currentNode.child[letter]
      }
    })

    const findWord = (string, currentNode) => {
      if (currentNode.isWord) {
        if (currentNode.weight >= 1){
          suggestions.unshift(string);
        } else {
        suggestions.push(string);
        }
      }

      if (currentNode.child) {
        let childKeys = Object.keys(currentNode.child);

        childKeys.forEach((key) => {
          let childNode = currentNode.child[key];
          let newString = string + key;

          findWord(newString, childNode)
        });
      }
    }

    findWord(string, currentNode);
    return suggestions
  }

  populate(wordArray) {
    wordArray.forEach((word) => this.insert(word))
  }
  
  select(suggestion) {
    let lowerCaseWord = [...suggestion.toLowerCase()];
    let currentNode = this.root;

    lowerCaseWord.forEach((letter) => {
      currentNode = currentNode.child[letter];
    })
    currentNode.weight++
    
    return currentNode
  }
}





module.exports = Trie;

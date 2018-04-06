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
    //wont suggest anything.  will only work if someone puts in dub shit or number.

    lowerCaseWord.forEach((letter) => {
      if (currentNode.child) {
        currentNode = currentNode.child[letter]
      }
    })

    const findWord = (string, currentNode) => {
      //current node that is passed in is the last letter of string from suggest().
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
          //going to run through the findWOrd for each key (s,t,o)
          let childNode = currentNode.child[key];
          let newString = string + key;

          findWord(newString, childNode)
        });
      }
    }

    findWord(string, currentNode);
    // console.log(suggestions);
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
    console.log(currentNode)

    return currentNode
  }
}


// Check if the node in the string has a child.
// check if the child is an End Of Word.
// if EOW, push into an array and the completed word is now the current word and join.
// check the next node for child and repeat.
// once you have reached the EOW and it has no child, return array.


module.exports = Trie;

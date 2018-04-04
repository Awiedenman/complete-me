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

  suggest(string) {
    let currentNode = this.root;
    let suggestions = [];
    let lowerCaseWord = string.toLowerCase().split('');

    if (!currentNode.child[lowerCaseWord[0]]){
      return [];
    }

    lowerCaseWord.forEach((letter) => {
      if (currentNode.child){
        currentNode = currentNode.child[letter]
      }
    })

      const findWord = (string, currentNode) => {
        if (currentNode.endOfWord){
          suggestions.push(word);
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
    }


// if (!currentNode.child && currentNode.endOfWord) {
//   return this.suggestions;
// }
  // Check if the node in the string has a child.
  // check if the child is an End Of Word.
  // if EOW, push into an array and the completed word is now the current word and join.
  // check the next node for child and repeat.
  // once you have reached the EOW and it has no child, return array.


module.exports = Trie;


// get the end node of the prefix.
//start with the end node of the prefix.
//take that end node and the prefix and pass them into a function.
// method takes a starting node and a prefix
  // first thing it will do is check if isWiord is true.
  // if it is true, then pass it into the suggestions array.
// if the currentNode.isWord = false, but has children.  
  //iterate over the children and set teh currentode to child, add the child to the prefix.
// give your recursive call your new node with updated prefix and check for endOfWord = true;    
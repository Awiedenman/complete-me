const { expect } = require('chai');
const Node = require('../scripts/Node');
const Trie = require('../scripts/Trie');
require('locus');

describe('TRIE', () => {
  let trie;
  
  beforeEach(() => {
    trie = new Trie();
  });
  
  it('should start with zero elements', () => {
    expect(trie.count).to.eq(0);
  });

  it('should increase the count as you insert words', () => {
    trie.insert('cat');
    trie.insert('Krista');
    trie.insert('desk');

    expect(trie.count).to.eq(3);
  });
  
  it('should set its default head to null', () => {
    expect(trie.root).to.deep.eq(new Node());
  });
  
  describe('INSERT', () => {
    it('should add a letter to the trie', () => {
      trie.insert('pizza');
      console.log(JSON.stringify(trie, null, 2));
      expect(trie.count).to.equal(1)
      expect(trie.root.child.p.letter).to.equal('p')
      expect(trie.root.child.p.child.i.letter).to.equal('i')
    })
  })

  // describe('SUGGEST', () => {
  //   it ('should provide suggestions based on input', () => {
  //       trie.suggest('')
  //   })
  // })
})  

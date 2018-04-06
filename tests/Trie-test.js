import { expect } from 'chai';
import { assert } from 'chai';
import fs from 'fs'
const Node = require('../scripts/Node');
const Trie = require('../scripts/Trie');

const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')

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

  it('should not increase the count as you insert same word', () => {
    trie.insert('cat');
    trie.insert('Krista');
    trie.insert('desk');
    trie.insert('cat');

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

  describe('SUGGEST', () => {
    it('should provide suggestions based on input', () => {
      let trie = new Trie();
      trie.insert('bat');
      trie.insert('bats');
      trie.insert('batter');
      trie.insert('baton');

      console.log(trie.suggest('ba'))

      expect(trie.suggest('ba')).to.deep.equal(['bat', 'bats', 'batter', 'baton'])
    })
  })

  describe('POPULATE',  () => {
    it('should have 235,886 words in the dictionary', () => {
      trie.populate(dictionary);

      expect(trie.count).to.equal(234371);
    })
  }) 
  })


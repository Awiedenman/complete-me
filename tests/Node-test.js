const { expect } = require('chai');
const Node = require('../scripts/Node');

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node()
  })

  it('should be a thing', () => {
    expect(node).to.exist
  })

  it('should not be a complete word by default', () => {

    expect(node.isWord).to.equal(false);
  })

  it('should not have children by default', () => {

    expect(Object.keys(node.child).length).to.equal(0);
  })

  it('should have four properties', () => {
    expect(Object.keys(node).length).to.eq(4);
    expect(Object.keys(node)).to.deep.equal(['letter', 'isWord', 'child', 'weight']);
  })
})

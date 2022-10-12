const { NotImplementedError } = require('../extensions/index.js');

class ChainMaker {
  #chain = []

  addLink(value) {
    this.#chain.push(value)

    return this
  }

  removeLink(position) {
    if (this.#chain[position - 1] === undefined)
    {
      this.#chain = []
      throw new Error('You can\'t remove incorrect link!')
    }

    this.#chain.splice(position - 1, 1)

    return this
  }

  reverseChain() {
    this.#chain.reverse()

    return this
  }

  finishChain() {
    const _ = [...this.#chain]
    this.#chain = []

    return _.map(e => `( ${e} )`).join('~~')
  }

  getLength() {
    this.#chain = []

    return this.#chain.length
  }
}

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = new ChainMaker()

module.exports = {
  chainMaker
};

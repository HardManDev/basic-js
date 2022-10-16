const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  #symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  constructor(isNotReverse = true) {
    Array.prototype.getAnyway = function(index) {
      const getAnyway = (index) => {
        return index > 0
            ? this.at(index) !== undefined ? this.at(index) : getAnyway(index - this.length)
            : this.at(index) !== undefined ? this.at(index) : getAnyway(this.length - index - 1)
      }

      return getAnyway(index)
    }

    this.isNotReverse = isNotReverse
  }

  encrypt(str, key) {
    return this.#process('encrypt', str, key)
  }

  decrypt(str, key) {
    return this.#process('decrypt', str, key)
  }

  #process(type, str, key) {
    let offset = 0
    const result = []

    if (!(str && key))
      throw new Error('Incorrect arguments!')

    str = str.toUpperCase().split('')
    key = key.toUpperCase().split('')

    str.forEach((e, i) => {
      if (!this.#symbols.includes(e)) {
        offset++
        result.push(e)
        return
      }

      const strPos = this.#symbols.indexOf(e)
      const keyPos = this.#symbols.indexOf(key.getAnyway(Math.abs(i - offset)))

      switch (type) {
        case 'encrypt':
          result.push(this.#symbols.getAnyway(strPos + keyPos % this.#symbols.length))
          break;
        case 'decrypt':
          result.push(this.#symbols.getAnyway(strPos - keyPos % this.#symbols.length))
          break;
      }
    });

    return (this.isNotReverse ? result : result.reverse()).join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};

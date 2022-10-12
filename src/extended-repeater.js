const { NotImplementedError } = require('../extensions/index.js');

class Repeater {
  #result = []

  constructor(str, { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' }) {
    this.str = String(str);
    this.repeatTimes = repeatTimes;
    this.separator = separator;
    this.addition = String(addition);
    this.additionRepeatTimes = additionRepeatTimes;
    this.additionSeparator = additionSeparator;
  }

  getResult() {
    this.#result = new Array(this.repeatTimes).fill(this.str)

    this.#result = [...this.#result].map(e =>
        e += new Array(this.additionRepeatTimes)
            .fill(this.addition)
            .join(this.additionSeparator)
    )

    return this.#result.join(this.separator)
  }

  get result() {
    return this.#result
  }
}

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  return new Repeater(str, options).getResult()
}

module.exports = {
  repeater
};

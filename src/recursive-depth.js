const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  #count = 1

  calculateDepth(arr) {
    if (arr.some(e => Array.isArray(e))) {
      this.#count++
      return this.calculateDepth(arr.flat(1))
    }

    const _ = this.#count
    this.#count = 1
    return _
  }
}

module.exports = {
  DepthCalculator
};

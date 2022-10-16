const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = []

  n.toString().split('').forEach((e, i,self) => {
    const _ = [...self]
    _.splice(i, 1)

    result.push([Number(_.join('')), i])
  })

  return result.sort((a, b) => b[0] - a[0])[0][0]
}

module.exports = {
  deleteDigit
};

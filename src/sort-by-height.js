const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const statics = [...arr].map(e => e === -1 ? e : null)
  let sortedArr = arr.filter(e => e !== -1).sort((a, b) => a -b)

  sortedArr = sortedArr.concat(
      new Array(statics.length - sortedArr.length)
          .fill(null)
  )

  sortedArr.forEach((e, i) => {
    if (statics[i] === -1)
      sortedArr.splice(i, 0, statics[i])
  })

  return sortedArr.filter(e => e !== null)
}

module.exports = {
  sortByHeight
};

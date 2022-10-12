const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let _ = []

  for (let i = 0; i < matrix.length + 1; i++) {
    _.push([])

    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][i] === 0)
        break

      _[i].push(matrix[k][i])
    }
  }

  try {
    return _.flat()
        .filter(e => !Number.isNaN(Number(e)))
        .reduce((a, c) => a + c)
  } catch (e) {
    return 0
  }
}

module.exports = {
  getMatrixElementsSum
};

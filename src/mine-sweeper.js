const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array<boolean>>} matrix
 * @return {Array<Array<Number>>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = []

  for (let i = 0; i < matrix.length; i++) {
    result.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      const _ =[
        matrix[i - 1] ? matrix[i - 1][j - 1] : null,
        matrix[i - 1] ? matrix[i - 1][j] : null,
        matrix[i - 1] ? matrix[i - 1][j + 1] : null,
        matrix[i] ? matrix[i][j - 1] : null,
        matrix[i] ? matrix[i][j + 1] : null,
        matrix[i + 1] ? matrix[i + 1][j - 1] : null,
        matrix[i + 1] ? matrix[i + 1][j] : null,
        matrix[i + 1] ? matrix[i + 1][j + 1] : null
      ].filter(e => typeof(e) === 'boolean' && e === true).length

      result[i].push(_)
    }
  }

  return result
}

module.exports = {
  minesweeper
};

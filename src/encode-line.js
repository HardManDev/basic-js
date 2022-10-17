const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let _ = ''
  const arr = str.split('')
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      _ += arr[i]
      continue
    }

    _ += arr[i]
    result.push(_ === '' ? arr[i] : _)
    _ = ''
  }

  return result.map(e => e = `${e.length > 1 ? e.length : ''}${e[0]}`).join('')
}

module.exports = {
  encodeLine
};

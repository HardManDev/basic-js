const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let res = []
  const str1arr = str1.split('')
  const str2arr = str2.split('')

  str2arr .forEach((e, i) => {
    if (str1arr.includes(e))
    {
      res.push(e)
      str1arr[str1arr.indexOf(e)] = ''
      str2arr[i] = ''
    }
  })

  return res.length
}

module.exports = {
  getCommonCharacterCount
};

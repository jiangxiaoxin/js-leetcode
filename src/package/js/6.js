/**
 * 6. ZigZag Conversion
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = [];
  let downInserting = true;
  let lastRow = -1;
  let lastColumn = 0;
  let index = 0;
  while (index < s.length) {
    if (downInserting === true) {
      result[lastRow + 1][lastColumn] = s.charAt(index);
      lastRow = lastRow + 1;
      let nextRow = lastRow + 1;
      if (nextRow === numRows) {
        downInserting = false;
      }
    } else {
      result[lastRow - 1][lastColumn + 1] = s.charAt(index);
      lastRow = lastRow - 1;
      lastColumn = lastColumn + 1;
      if (nextRow === 0) {
        downInserting = true;
      }
    }
  }
};

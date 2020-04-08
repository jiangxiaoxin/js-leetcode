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
      let currentRow = lastRow + 1;
      if (currentRow === numRows) {
        currentRow = numRows - 1;
        lastColumn = lastColumn + 1;
      }
      if (!result[currentRow]) {
        result[currentRow] = [];
      }
      result[currentRow][lastColumn] = s.charAt(index);
      lastRow = currentRow;
      let nextRow = currentRow + 1;
      if (nextRow === numRows) {
        downInserting = false;
      }
    } else {
      let currentRow = lastRow - 1;
      if (currentRow === -1) {
        currentRow = 0;
      }
      let currentColumn = lastColumn + 1;

      result[currentRow][currentColumn] = s.charAt(index);
      lastRow = currentRow;
      lastColumn = currentColumn;
      let nextRow = currentRow - 1;
      if (nextRow === -1) {
        downInserting = true;
      }
    }
    index += 1;
  }
  // console.log(lastRow, lastColumn, numRows, result);
  let str = "";
  for (let i = 0; i < numRows; i++) {
    if (result[i]) {
      for (let j = 0; j <= lastColumn; j++) {
        if (result[i][j]) {
          str += result[i][j];
        }
      }
    }
  }
  return str;
};

let r1 = convert("PAYPALISHIRING", 3);
console.log(r1 === "PAHNAPLSIIGYIR", r1);
let r2 = convert("PAYPALISHIRING", 4);
console.log(r2 === "PINALSIGYAHRPI", r2);
let r3 = convert("ABC", 1);
console.log(r3);
let r4 = convert("AB", 1);
console.log(r4);

/**
 * 数列计算的结果增长很快，如果要确切计算大数的值要用到 BitInt
 * @param {number} num
 */
function f1(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return f1(num - 1) + f1(num - 2);
  }
}

function f2(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let a = BigInt(0);
    let b = BigInt(1);
    let local = 2;
    let temp;
    while (local <= num) {
      temp = BigInt(a + b);
      a = b;
      b = temp;
      local++;
    }
    return b;
  }
}

var num = 8181;

// console.time('f 1')
// console.log(f1(num))
// console.timeEnd('f 1')

console.time("f 2");
console.log(f2(num));
console.timeEnd("f 2");

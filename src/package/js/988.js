const { makeTree } = require("../base");

// let numbers = [0,1,2,3,4,3,4];
// let numbers = [25,1,3,1,3,0,2];
let numbers = [2,2,1,null,1,0,null,0];
let root = makeTree(numbers);




// 按字母序比较，最小的字符串
// js里面对于两个字符串，天然就有按照字母序比较，那这里是利用此特性还是要自己实现字母序比较呢？
var smallestFromLeaf = function(root) {
  // 0-25
  // a-z
  // 97-122
  const offset = 97;
  let smallest_arr = null;

  const helper = (root, prev_arr) => {
    if (root != null && root.val != null) {
      let __arr = [].concat(prev_arr);
      __arr.unshift(root.val);
      if (root.left == null && root.right == null) {
        // 走到叶子节点了
        if (smallest_arr == null) {
          smallest_arr = __arr;
        } else {
          // smallest_arr已经有个值了，那就比较当前的叶子结点路径和smallest_arr谁更小，然后更新smallest_arr
          smallest_arr = getSmallerOne(smallest_arr, __arr);
        }
      } else {
        // 不是叶子节点,走左右两个分支
        helper(root.left, __arr);
        helper(root.right, __arr);
      }
    }
  }

  // 比较两个数组，获取字典序小的那个
  // 官解直接就是用的字符串比较，那就不用写这个方法了。构建好一个完整的路径字符之后，直接比较就完事了
  const getSmallerOne = (arr_a, arr_b) => {
    let length_a = arr_a.length;
    let length_b = arr_b.length;
    let min_length = Math.min(length_a, length_b);
    for(let i=0;i<min_length;i++) {
      if (arr_a[i] == arr_b[i]) {
        // 两个值一样，比较不出来，继续下一位
        continue;
      }
      // 值不一样了，可以比较了，小的就是字母序靠前的
      return arr_a[i] < arr_b[i] ? arr_a : arr_b;
    }
    // 正常走到min_length了，看看剩下没有。没剩的就是小的。都没剩那就随便一个，因为找的就是最小字符串，两个数组表示的字符串是一样的
    if (min_length == arr_a.length) {
      return arr_a;
    }
    return arr_b;
  }

  helper(root, []);

  if (!smallest_arr || smallest_arr.length == 0) {
    console.log("smallest_arr空，错了")
  }

  let small = smallest_arr.reduce((previousValue, currentValue) => {
    return previousValue + String.fromCharCode(currentValue + offset)
  }, "");
  return small;

};

console.log(smallestFromLeaf(root));
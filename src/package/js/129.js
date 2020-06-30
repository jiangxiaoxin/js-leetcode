const { Node, makeTree, isNode } = require("../base");

// let numbers = [1,2,3];
let numbers = [4,9,0,5,1];
let root = makeTree(numbers);

var sumNumbers = function(root) {
  let sum = 0;
  const helper = (root, val) => {
    if (root != null && root.val != null) {
      let _val = root.val;
      let _next_val = val * 10 + _val;
      if (root.left == null && root.right == null) {
        // 到达叶子节点
        sum += _next_val;
      } else {
        helper(root.left, _next_val);
        helper(root.right, _next_val);
      }
    }
  }
  helper(root, 0);
  return sum;
};

console.log(sumNumbers(root));
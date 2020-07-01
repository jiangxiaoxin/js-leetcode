const { makeTree } = require("../base")

// let numbers = [5,4,5,1,1,5];
// let numbers = [1,4,5,4,4,5]
// let numbers = [5, 4,5, 1, 1, 5, null, null, 1, 3, null, 12]
// let numbers = [1]
let numbers = [1,null,1,1,1,1,1,1]

let root = makeTree(numbers);

// 给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。
// 注意：两个节点之间的路径长度由它们之间的边数表示。
// 这条路劲可以是这个二叉树上任意的两个节点之间的路径

var longestUnivaluePath = function (root) {
  let max = 0;

  // 找出从root点出发，可以走的最长远的路
  const helper = (root) => {
    if(root == null) {
      return 0;
    }
    let leftRes = helper(root.left);
    let rightRes = helper(root.right);

    let left = 0;
    let right = 0;

    if (root.left && root.val == root.left.val) {
      left = leftRes + 1;
    }
    if (root.right && root.val == root.right.val) {
      right = rightRes + 1;
    }
    // 从某点出发，能走的最长的路径，就是它左边最长和右边最长之和。
    // 因为从某点出发，只要能继续走，就说明子节点的值是跟这个点一样的
    max = Math.max(max, left + right);
    return Math.max(left, right); // 从left和right里选一个大的返回，这样此节点的上层节点在走的时候就只能选左或者右一支来走，而不会出现祖父-父-左子-右子在一起变成一条路径的情况

  }

  helper(root);

  return max;
};

console.log(longestUnivaluePath(root))
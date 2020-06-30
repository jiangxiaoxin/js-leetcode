const { Node, makeTree, isNode } = require("../base");

// let numbers = [10,5,-3,3,2,null,11,3,-2,null,1];
let numbers = [5,4,8,11,null,13,4,7,2,null,null,null,1];
let root = makeTree(numbers);
let sum = 22;


/**
 * 给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。。
 */

var pathSum = function(root, sum) {
  let count = 0;

  return count;
};

let res = pathSum(root, sum);
console.log("共有:", res);





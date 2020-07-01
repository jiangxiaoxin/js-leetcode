const { Node, makeTree, isNode } = require("../base");

// let numbers = [10,5,-3,3,2,null,11,3,-2,null,1];
// let sum = 22;


// let numbers = [5,4,8,11,null,13,4,7,2,null,null,null,1];
// let sum = 8;


let numbers = [-2,null,-3]
let sum = -3


let root = makeTree(numbers);




/**
 * 给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。。
 */

 /**
  * 对问题的目标进行分解，
  * 题目要找出所有和为给定值的路径，那可以先找出从一点出发，到叶子节点，这些路径中满足条件的路径数量，这需要一次全体的遍历
  * 然后再遍历一次整个树，以每个节点都作为一次起点，看所有的路径中，满足条件的路径数
  */

 /**
  * 
  * @param {Node} root 
  * @param {Number} sum 
  */

var pathSum = function(root, sum) {
  let count = 0;

  const inOrder = (root) => {
    if (root != null && root.val != null) {
      findPath(root);
      if (root.left) {
        inOrder(root.left);
      }
      if (root.right) {
        inOrder(root.right);
      }
    }
  }

  const findPath = (root, prefixSum = 0) => {
    if (root != null && root.val != null) {
      let curr = prefixSum + root.val;
      if (curr == sum) {
        count += 1;
      }
      if (root.left) {
        findPath(root.left, curr);
      }
      if (root.right) {
        findPath(root.right, curr);
      }
    }
  }

  inOrder(root);

  return count;
};


let res = pathSum(root, sum);
console.log("共有:", res);





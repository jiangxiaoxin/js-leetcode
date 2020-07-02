const { makeTree } = require("../base")

let numbers = [4,2,7,1,3];
let num = 2

let root = makeTree(numbers)

/**
 * 二叉搜索树中的搜索
 * 要返回的是以给定值对应的节点为根节点的子树，那返回这个节点就行了，题目里设定返回值就是一个TreeNode
 */

 // 就是利用二叉搜索树的各节点间值的大小关系这个特性来做

 /**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root == null) {
    return null;
  }
  if (root.val == val) {
    return root;
  } else if (root.val < val) {
    return searchBST(root.right, val)
  } else if (root.val > val) {
    return searchBST(root.left, val)
  }
};

let node = searchBST(root, num);
console.log(node ? node.val : "找不到")
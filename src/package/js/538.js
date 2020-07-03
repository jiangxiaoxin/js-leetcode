const { makeTree } = require("../base")

/**
 * 把二叉搜索树转换为累加树
 * 
 * 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。
 */

 /**
  * 学了个morris遍历算法。它讲的是如何在节点间建立联系然后通过联系去快速遍历，并在遍历完后去掉这些联系。
  */


 /**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  

};


let list = [5,2,13];
let root = makeTree(list);

const node = convertBST(root);
console.log(node);



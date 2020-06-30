const { makeTree } = require("../base");
let numbers = [1,2,3,null,5];
let root = makeTree(numbers);

/**
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * @param {Node} root 
 */
var binaryTreePaths = function(root) {
  let pathes = [];
  const helper = (root, path) => {
    if (root != null && root.val != null) {
      let __path = path ? path + "->" + root.val : "" + root.val;
      if (root.left == null && root.right == null) {
        pathes.push(__path);
      } else {
        helper(root.left, __path);
        helper(root.right, __path);
      }
    }
  }
  helper(root);
  return pathes;
};

let res = binaryTreePaths(root);
res.forEach(path => {
  console.log("path:", path);
})
const { makeTree } = require("../base")

let list = [3,9,20,null,null,15,7]
let root = makeTree(list);

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

  let martix = [];

  let stack = [root];
  while(stack.length > 0) {
    let length = stack.length;
    let level = [];
    while(length) {
      let node = stack.shift();
      level.push(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
      length--;
    }
    martix.push(level);
  }

  return martix;
};

let res = levelOrder(root);
console.log(res);
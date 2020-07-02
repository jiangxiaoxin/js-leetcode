const { makeTree } = require("../base")

// let list = [4,2,6,1,3,null,null];
let list = [90,69,null,49,89,null,52,null,null,null,null]
let root = makeTree(list);

/**
 * 二叉搜索树节点最小距离
 * 给定一个二叉搜索树的根节点 root，返回树中任意两节点的差的最小值。差算绝对值就行了
 * 二叉树总是有效的，每个节点的值都是整数，且不重复。
 */

 /**
  * 充分利用二叉搜索树的值关系的特性
  * 
  * 783.png
  * 
  * 
  * 如果只是说给定一个二叉树，问任意两个节点的差值的最小值，那就麻烦了，只能暴力，没有任何的条件可以用。
  */

 /**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
  let min = Number.MAX_SAFE_INTEGER;
  const inOrder = (root) => {
    if (root == null) {
      return
    }
    compare(root);
    if (root.left) {
      inOrder(root.left);
    }
    if (root.right) {
      inOrder(root.right);
    }
  }
  const compare = (root) => {
    if (root == null) {
      return ;
    }
    if (root.left == null && root.right == null) {
      // 如果节点没有左和右，那就不能做差，没必要计算了
      return ;
    }
    if (root.left) {
      let rightest = findRightest(root.left);
      let val = root.val - rightest.val;
      if (val < min) {
        min = val;
      }
    }
    if(root.right) {
      let leftest = findLeftest(root.right);
      let val = leftest.val - root.val;
      if (val < min) {
        min = val;
      }
    }
  }

  const findLeftest = (root) => {
    let pp;
    while(root) {
      pp = root;
      root = root.left;
    }
    return pp;
  }

  const findRightest = (root) => {
    let pp;
    while(root) {
      pp = root;
      root = root.right;
    }
    return pp;
  }

  inOrder(root)

  return min;
};

let res = minDiffInBST(root);
console.log(res);

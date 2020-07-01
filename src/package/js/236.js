const { Node, makeTree, findTargetNode, isNode } = require("../base")

/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 这回是个任意的二叉树了，节点之间没有明确的大小关系了
 * 
 * !!! 条件
 * 所有节点的值都是唯一的。
 * p、q 为不同节点且均存在于给定的二叉树中。
 */

 let numbers = [3,5,1,6,2,0,8,null,null,7,4];
 let root = makeTree(numbers);
 let p = findTargetNode(root, 5);
 let q = findTargetNode(root, 4);



 /**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 这是种最原始的方法，从根节点开始遍历整个树，如果某个节点是他们的祖先就记录下来，遍历完之后，最后的那个祖先就是最近祖先了

var lowestCommonAncestor = function(root, p, q) {
  let prevParent = null;
  
  const inOrder = (root) => {
    if (isSubTree(root, p) && isSubTree(root, q)) {
      prevParent = root;
    }
    if (root.left) {
      inOrder(root.left)
    }
    if (root.right) {
      inOrder(root.right)
    }
  }

  inOrder(root);

  return prevParent;
};

// 判断node节点是否在root的子树上.如果node跟root是一个节点，那也认为是在子树上
const isSubTree = (root, node) => {
  if(root == null || node == null) {
    return false;
  }
  if (root.val == node.val) {
    // 这么比较就要求所有节点的值都是唯一的，而恰好这里也满足这个条件。否则就要判断root对象和node对象是不是一个对象
    return true
  }
  if (root.left && root.left.val == node.val) {
    return true;
  }
  if (root.right && root.right.val == node.val) {
    return true;
  }
  return isSubTree(root.left, node) || isSubTree(root.right, node)
}

console.log(lowestCommonAncestor(root, p, q).val)

// 官解也是够暴力的，其中存储父节点法，就是从root开始遍历一次树，然后记录下每个节点的父指针，然后从p开始往root走，走一遍就把p->root的路径上所有点记下来。
// 然后从q开始，也往root走，每走一步就判断下这个父节点在p->root里出现过没。出现了就找到了，退出循环了。没找到就继续往root那走
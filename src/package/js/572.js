const { makeTree } = require("../base")

// let a = [3, 4, 5, 1, 2];
// let a = [3,4,5,1,2,null,null,null,null,0]
// let b = [4, 1, 2]

let a = [1,1]
let b = [1]

let ra = makeTree(a);
let rb = makeTree(b);

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  const isSameTree = (roota, rootb) => {
    if (roota == null && rootb == null) {
      return true;
    }
    if ((roota == null && rootb != null) || (roota != null && rootb == null)) {
      return false;
    }
    if (roota.val != rootb.val) {
      return false;
    }
    return isSameTree(roota.left, rootb.left) && isSameTree(roota.right, rootb.right);
  }

  // 将t的根节点在s中遍历，找到所有相同的节点，然后判断以这个节点为根节点的树根t是不是一个树。题目中没说s中的关键字都是唯一的，所以只能遍历所有的节点
  let rt = t.val;
  let result = false;
  const loop = (root) => {
    if (root == null) {
      return ;
    }
    if (root.val == rt) {
      // 检测一下
      const isSame = isSameTree(root, t)
      if (isSame) {
        result = true; // 只要有一个是对的就行了
        return ;
      }
    }
    loop(root.left);
    loop(root.right);
  }

  loop(s);
  return result;
};

console.log(isSubtree(ra, rb))
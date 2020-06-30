const { Node, makeTree, isNode } = require("../base");
let numbers = [5,4,8,11,null,13,4,7,2,null,null,null,1];
let root = makeTree(numbers);
let sum = 22;

// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
var hasPathSum = function(root, sum) {
  const helper = (root, __sum) => {
    if (isNode(root)) {
      let $sum = __sum + root.val;
      if (root.left == null && root.right == null) {
        // 叶子节点，一条路径终结了
        if ($sum == sum) {
          // 只要有一条路径的和跟sum相等就可以了
          return true;
        }
      } else {
        // 不是叶子节点
        return helper(root.left, $sum) || helper(root.right, $sum);
        
      }
    }
  }

  let res = helper(root, 0);
  return res == true;
}

console.log(hasPathSum(root, sum));

/**
 * 还可以将题目分拆成几步，每一步都是一个好问题。
 * 要想判断是否有满足条件的路径，那就先找出所有的到叶子节点的路径，然后对每条路径求和，比较。
 * 这里面就涉及如何判断一个节点是叶子节点，并记录下路径上所有的点。
 * 找到所有叶子节点，想记录下路径点，可以跟上面那样每次传已经构成的路径进去.还有一个方法，也是个不错的问题，就是对所有的节点，翻转指针，设置他们的parent指针
 */

 // 找到二叉树中所有的叶子节点
// ！！！根节点不算叶子节点
var findAllLeaves = function(root) {
  let leaves = [];

  let helper = function(root) {
    if (root && root.val != null) {
      // 确实是真实存在的节点，才有判断的必要
      if(root.left == null && root.right == null) {
        leaves.push(root);
      } else {
        helper(root.left);
        helper(root.right);
      }
    }
  }

  helper(root);

  leaves.forEach(leaf => {
    console.log("leaf:", leaf.val);
  })

  return leaves;
}


/**
 * 找出二叉树中所有的从根节点到叶子节点的路径
 * 不考虑空树和只有根节点的树
 * @param {Node} root 
 */
var findPathes = function(root) {
  let pathes = [];
  const helper = (root, path) => {
    if (isNode(root)) {
      let _path = path.concat(root.val);
      if (root.left == null && root.right == null) {
        // 叶子节点，一条路径终结了
        pathes.push(_path);
        console.log("一条路径出来了", _path);
      } else {
        // 不是叶子节点，以当前的路径作为参数，走左右两个节点
        helper(root.left, _path);
        helper(root.right, _path);
      }
    }
  }

  helper(root, []);

  return pathes;
}

// 给树中所有的节点设置parent指针，根的parent为null
var setNodeParent = function(root) {
  let helper = function(root, parentNode) {
    if (isNode(root)) {
      // 是有效节点
      root.parent = parentNode;
      helper(root.left, root);
      helper(root.right, root);
    }
  }
  helper(root, null);
  // 到此所有节点都找到了父节点指针
}

// 找出树中所有到叶子节点的路径的数值和
// 不会是空树或者单根节点？
var pathSumI = function(root) {
  let leaves = findAllLeaves(root);
  setNodeParent(root);
  let sums = [];
  leaves.forEach(leaf => {
    let sum = 0;
    console.log("新路径开启");
    while(leaf) {
      sum += leaf.val;
      console.log("\t", leaf.val);
      leaf = leaf.parent;
    }
    console.log("路径和:", sum);
    sums.push(sum);
  })
  return sums;
};
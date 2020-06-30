const { makeTree } = require("../base");
let numbers = [5,4,8,11,null,13,4,7,2,null,null,5,1];
let sum = 22;
let root = makeTree(numbers);

// 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
var pathSum = function(root, sum) {
  let paths = [];
  const helper = (root, $path, $sum) => {
    if (root != null && root.val != null) {
      let __sum = $sum + root.val;
      let __path = $path.concat(root.val);
      if (root.left == null && root.right == null) {
        // 叶子节点
        if (__sum == sum) {
          paths.push(__path);
        }
      } else {
        helper(root.left, __path, __sum);
        helper(root.right, __path, __sum);
      }
    }
  }

  helper(root, [], 0);

  return paths;
};

let res = pathSum(root, sum);
res.forEach(path => {
  console.log("新路径:");
  
  path.forEach(val => {
    console.log(val);
  })
})
const { Node, makeTree } = require("../base")

let numbers = [6,2,8,0,4,7,9,null,null,3,5];
let a = new Node(2);
let b = new Node(4);

let root = makeTree(numbers);

/**
 * 二叉搜索树的最近公共祖先
 * 
 * !!!!!!!条件很重要
 * 所有节点的值都是唯一的。
 * p、q 为不同节点且均存在于给定的二叉搜索树中。
 * 二叉搜索树的性质就是左 < 父 < 右
 */

 // root是根节点 p和q是节点
var lowestCommonAncestor = function(root, p, q) {
    let min = p.val < q.val ? p : q;
    let max = p.val < q.val ? q : p;
    while(root) {
      // 这个while一定会通过返回一个节点而跳出的，因为前面题干的条件
      if (min.val <= root.val && root.val < max.val) {
        return root
      }
      if (min.val < root.val && root.val <= max.val) {
        return root
      }
      if (root.val < min.val) {
        root = root.right;
      }
      if (max.val < root.val) {
        root = root.left;
      }
    }
};

console.log(lowestCommonAncestor(root, a, b).val)

/**
 * 利用二叉搜索树的特性，和题目的要求，p和q一定存在且不同，那么只有p<q或者p>q两种关系
 * 以p<q为例，因为是二叉搜索树，那p要么在q的左子树上，要么在q的某个祖先节点的“左子树”上（如果p恰好是q的祖先节点，也满足p<q的关系，也当成p在q的某个祖先节点的左树上），只有这样才能满足二叉搜索树中p<q的关系
 * 如果p在q的左子树上，那最近公共祖先就是q。
 *    那如何判断这种情况，那就是从q开始，往他的左子树去遍历，如果遍历中能找到p，那就直接返回q。如果最后找不到，那就排除了p在q的左子树上
 * 如果p是q的祖先节点，公共祖先就是p
 * 如果p在q的某祖先的左枝上，那就从root开始，判断当前考察节点值跟p和q的值的关系:
 *    如果p<node<q,那node就是最近祖先了
 *    如果p<q<node,那就更新当前节点为node.left
 *    如果node<p<q,那就更新当前节点为node.right.
 * 祖先节点一定是满足p < node <= q p<=node < q的
 * 
 * 
 * 如何找任意二叉树中两个节点的最近公共祖先？完全没有大小性质可言，只能硬来
 */


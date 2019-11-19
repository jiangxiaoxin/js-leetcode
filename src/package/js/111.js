import { TreeNode, makeCompleteBinaryTree } from '../../utils/TreeNode'

/**
 * @param {TreeNode} root
 * @return {number}
 */

var minDepth = function(root) {
  if (root === null || root.val === null) {
    return 0
  }
  if (root.left === null && root.right === null) {
    return 1
  }
  let min_depth = Number.MAX_SAFE_INTEGER
  if (root.left !== null) {
    min_depth = Math.min(minDepth(root.left), min_depth)
  }
  if (root.right !== null) {
    min_depth = Math.min(minDepth(root.right), min_depth)
  }
  return min_depth + 1
}

export function minDepthCheck() {
  // let arr = [3, 9, 20, null, null, 15, 7]
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8]
  // let arr = [3, 9, 20, 4, null, 15, 7, 8, null, null, null, null, 11]
  // let arr = [0]
  let arr = [1, 2, 3]
  // let arr = [3, null, 20, null, null, 15, 7]
  let root = makeCompleteBinaryTree(arr)
  let min = minDepth(root)
  console.log(min)
}

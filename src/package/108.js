import { TreeNode } from '../utils/TreeNode'

/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 这道题利用了已经升序排列这个点，可以简单处理。
 * 如果是随机的数组，那这就是构建AVL树
 * @param {Array} nums
 */

var sortedArrayToBST = function(nums) {
  if (!nums || nums.length === 0) {
    return null
  }
  return make(nums, 0, nums.length - 1)
}

function make(nums, left, right) {
  if (left > right) {
    return null
  }
  let mid = Math.floor((left + right) / 2)
  let node = new TreeNode(nums[mid])
  node.left = make(nums, left, mid - 1)
  node.right = make(nums, mid + 1, right)
  return node
}

export function sortedArrayToBSTCheck() {
  let nums = [-10, -3, 0, 5, 9]
  let bst = sortedArrayToBST(nums)
  console.log(bst)
}

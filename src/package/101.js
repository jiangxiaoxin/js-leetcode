/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const utils = require('../utils')
const { TreeNode, makeCompleteBinaryTree } = utils.default
var isSymmetric = function(root) {}

export function isSymmetricCheck() {
  check(treea())
  check(treeb())
  check(treec())
  check(treed())
}

function check(root) {
  console.log(isSymmetric1(root))
  console.log(isSymmetric2(root))
  console.log(isSymmetric3(root))
  console.log('-------\n')
}

function treea() {
  let nums = [1, 2, 2, 3, 4, 4, 3]
  return makeCompleteBinaryTree(nums)
}

function treeb() {
  let nums = [1, 2, 2, null, 3, null, 3]
  return makeCompleteBinaryTree(nums)
}

function treec() {
  let nums = []
  return makeCompleteBinaryTree(nums)
}

function treed() {
  let nums = [1, 2, 2, 4, 3, 3, 4, 5, 6, 6, 5, 7, 8, 8, 7]
  return makeCompleteBinaryTree(nums)
}

/**
 * 方法1在构建队列时限放了2个root node进去，这样子就导致root.left和root.right对应放入一次，然后root.right和root.left又对应放入一次
 * 这就造成了重复的比较
 * @param {TreeNode} root
 */
function isSymmetric1(root) {
  let queue = []
  queue.push(root)
  queue.push(root)
  let time = 0
  while (queue.length > 0) {
    time += 1
    let tn1 = queue.shift()
    let tn2 = queue.shift()
    if (!tn1 && !tn2) {
      continue
    }
    if (!tn1 || !tn2) {
      console.log('isSymmetric1:', time)
      return false
    }
    if (tn1.val !== tn2.val) {
      console.log('isSymmetric1:', time)
      return false
    }
    queue.push(tn1.left)
    queue.push(tn2.right)
    queue.push(tn1.right)
    queue.push(tn2.left)
  }
  console.log('isSymmetric1:', time)
  return true
}
/**
 * 方法2先对root进行了判断，然后直接把root.left和root.right放入队列，这样队列从一开始就比方法1少一倍的元素，比较次数整体少一半
 * @param {TreeNode} root
 */
function isSymmetric2(root) {
  let time = 0
  if (!root) {
    console.log('isSymmetric2:', time)
    return true
  }

  let queue = [root.left, root.right]
  while (queue.length > 0) {
    time += 1
    let tn1 = queue.shift()
    let tn2 = queue.shift()
    if (!tn1 && !tn2) {
      continue
    }
    if (!tn1 || !tn2) {
      console.log('isSymmetric2:', time)
      return false
    }
    if (tn1.val !== tn2.val) {
      console.log('isSymmetric2:', time)
      return false
    }
    queue.push(tn1.left)
    queue.push(tn2.right)
    queue.push(tn1.right)
    queue.push(tn2.left)
  }
  console.log('isSymmetric2:', time)
  return true
}

function isSymmetric3(root) {
  if (!root) {
    return true
  }
  return __symmetric(root.left, root.right)
}

function __symmetric(n1, n2) {
  if (!n1 && !n2) {
    return true
  }
  if (!n1 || !n2) {
    return false
  }

  return n1.val === n2.val && __symmetric(n1.left, n2.right) && __symmetric(n1.right, n2.left)
}

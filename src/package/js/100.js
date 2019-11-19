const utils = require('../../utils')
const { TreeNode, makeCompleteBinaryTree } = utils.default

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true
  }
  if (!p || !q) {
    return false
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

export function isSameTreeCheck() {
  let p = [1, 2, null, 3]
  let q = [1, 2, null]
  let pRoot = makeCompleteBinaryTree(p)
  let qRoot = makeCompleteBinaryTree(q)
  let r1 = isSameTree(pRoot, qRoot)
  console.log(r1)
  let r2 = isSameTree2(pRoot, qRoot)
  console.log(r2)
}

var isSameTree2 = function(p, q) {
  let queue = [p, q]
  while (queue.length > 0) {
    let t1 = queue.shift()
    let t2 = queue.shift()
    if (!t1 && !t2) {
      continue
    }
    if (!t1 || !t2) {
      return false
    }
    if (t1.val !== t2.val) {
      return false
    }
    queue.push(t1.left)
    queue.push(t2.left)
    queue.push(t1.right)
    queue.push(t2.right)
  }
  return true
}

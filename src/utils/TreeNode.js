export function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * 从数组构建完全二叉树
 * @param {Array} nums
 * @returns {TreeNode} root
 */
export function makeCompleteBinaryTree(nums) {
  let nodes = nums.map(val => new TreeNode(val))
  let __queue = []
  let root = nodes.shift()
  __queue.push(root)
  while (__queue.length > 0 && nodes.length > 0) {
    let tempParent = __queue.shift()
    let leftChild = nodes.shift()
    if (leftChild) {
      tempParent.left = leftChild
      __queue.push(leftChild)
    }
    let rightChild = nodes.shift()
    if (rightChild) {
      tempParent.right = rightChild
      __queue.push(rightChild)
    }
  }
  return root
}

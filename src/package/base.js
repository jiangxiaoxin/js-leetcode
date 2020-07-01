const Node = function(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * 按照Leetcode提供的数组形式，变换成二叉树形式
 * @param {Array} numbers 
 */
const makeTree = function(numbers) {
  if (!numbers || numbers.length == 0) {
    return null;
  }
  let nodes = [];
  for (let i = 0; i < numbers.length; i++) {
    let node = new Node(numbers[i]);
    node.index = i;
    nodes.push(node);
  }

  /**
   * 按照leetcode上的二叉树的数组表示法，构建对应的二叉树结构
   * [1,null,2,3] 层序排列各个节点，null表示此处没有实际节点，后面层序排列时，这里就不安排节点了，
   */
  let offset = 0;
  for (let j = 0; j < nodes.length; j++) {
    let node = nodes[j];
    if (node.val == null) {
      // 如果节点值为null，表示这个节点不存在，后面也没有了，不需要给他算左右子节点
      offset += 2;
      continue;
    }
    let left = j * 2 + 1 - offset;
    let right = j * 2 + 2 - offset;
    if (left >= nodes.length) {
      // 左节点的序号超界了，后面的节点就不可能有子节点了，并且当前节点也不可能有右节点
      break;
    }
    let __left = nodes[left];
    if (__left.val != null) {
      // 是个真的节点。在数组表示里，有的元素是null，表示这里就不再有节点了
      node.left = nodes[left];
    }
    if (right >= nodes.length) {
      // 右节点超界，后面的节点就不会再有子节点了
      break;
    }
    let __right = nodes[right];
    if (__right.val != null) {
      node.right = nodes[right];
    }
  }

  return nodes[0];
}

const isNode = function(node) {
  return node != null && node.val != null;
}

// 以root为根的二叉树，树中元素全部唯一，找出指定val的节点
// 它有些题参数是树中的节点，但是我们模拟时只能输入节点值，或者自己new一个节点，那都不行，就从树中先找出来再传进去
const findTargetNode = function(root, val) {
  if (!root) {
    return null;
  }
  if (root.val == val) {
    return root;
  }
  let left = findTargetNode(root.left, val);
  if (left) {
    return left;
  }
  return findTargetNode(root.right, val);
}

// 改成Node模块方式，这样不用在启动时用babel-node对代码进行转化，调试起来更快
module.exports.Node = Node;
module.exports.makeTree = makeTree;
module.exports.isNode = isNode;
module.exports.findTargetNode = findTargetNode;


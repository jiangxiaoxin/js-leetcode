/**
 * 这么实现并不是这道题的本意，下面这个做法可以实现，但是对于这道题来说就臃肿了。
 * 同时下面的算法对于一般的链表也不适用，缺少很多必要的判断，
 * 实际的移除可以参考203来做
 */
var deleteNode = function(head, node) {
  let temp = head
  while (temp.next) {
    if (temp.next.val === node) {
      temp.next = temp.next.next
      break
    } else {
      temp = temp.next
    }
  }
  return head
}

function ListNode(val) {
  this.val = val
  this.next = null
}

export function deleteNodeCheck() {
  let arr = [4, 5, 1, 9]
  let val = 1
  let nodes = []
  for (var i = 0; i < arr.length; i++) {
    let node = new ListNode(arr[i])
    nodes.push(node)
    let prev = i - 1
    if (prev > -1) {
      nodes[prev].next = node
    }
  }
  let head = deleteNode(nodes[0], val)
  console.log('---result---')
  while (head) {
    console.log(head.val)
    head = head.next
  }
}

var removeElements = function(head, val) {
  let signal = new ListNode()
  signal.next = head
  let temp = signal
  while (temp.next) {
    if (temp.next.val === val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }
  return signal.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}

export function removeElementsCheck() {
  // let arr = [6, 6, 1, 2, 6, 3, 4, 5, 6, 6, 1]
  let arr = [6, 6, 6, 6, 6]
  let val = 6
  let nodes = []
  for (var i = 0; i < arr.length; i++) {
    let node = new ListNode(arr[i])
    nodes.push(node)
    let prev = i - 1
    if (prev > -1) {
      nodes[prev].next = node
    }
  }
  let head = removeElements(nodes[0], val)
  console.log('---result---')
  while (head) {
    console.log(head.val)
    head = head.next
  }
}

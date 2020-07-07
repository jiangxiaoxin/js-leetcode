const { makeTree } = require("../base")

let a = [3,4,5,1,2]
let b = [3,4,5,1,2]
// let b = [3,4,5,,1,null, null, 2]

let ra = makeTree(a)
let rb = makeTree(b)

const isSameTree = (roota, rootb) => {
  if (roota == null && rootb == null) {
    return true;
  }
  if ((roota == null && rootb != null) || (roota != null && rootb == null)) {
    return false;
  }
  if (roota.val != rootb.val) {
    return false;
  }
  return isSameTree(roota.left, rootb.left) && isSameTree(roota.right, rootb.right);
}

console.log(isSameTree(ra, rb));
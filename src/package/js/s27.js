var removeElement = function(nums, val) {
  let index = nums.indexOf(val)
  if (index === -1) {
    return nums.length
  }
  let i = index
  let j = i + 1
  let length = nums.length
  for (; j < length; j++) {
    if (nums[j] !== val) {
      nums[i++] = nums[j]
    }
  }
  return i
}

export function removeElementCheck() {
  let arr = [3, 2, 2, 3]
  let val = 3
  let r = removeElement(arr, val)
  console.log('length:', r, 'arr:', arr)
}

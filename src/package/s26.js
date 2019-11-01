var removeDuplicates = function(nums) {
  let i = 0
  let j = i + 1
  let length = nums.length
  for (; j < length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j]
    }
  }
  return i + 1
}

export function removeDuplicatesCheck() {
  // let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  // let arr = [1, 1, 2]
  let arr = [1, 1, 1]
  const len = removeDuplicates(arr)
  console.log('len:', len, 'arr:', arr)
}

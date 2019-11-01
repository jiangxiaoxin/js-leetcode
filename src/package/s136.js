export function singleNumber(nums) {
  // return nums.reduce((previousValue, currentValue) => previousValue ^ currentValue)
  let i = undefined
  for (var item of nums) {
    i = i ^ item
  }
  return i
}

export function singleNumberCheck() {
  const nums = [4, 1, 2, 4, 1, 2, 3]
  const r = singleNumber(nums)

  console.log('r:', r)
}

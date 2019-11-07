/**
 * 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 *
 * 将n个字符串的LCP问题拆解为前面的n-1个字符串的LCP和最后1个字符串的LCP，然后再依次拆解下去
 * 将一个整的问题，拆解成局部的问题，然后再由局部的结果拼出最终的结果。
 * 这种思想通常很有用，但也不能保证每次都好用。
 * 大问题拆解成小问题后要证明再合起来的结果是对的才行
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) {
    return ''
  }
  // let time = 0
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    let t = strs[i]
    while (t.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      // time += 1
      if (!prefix) {
        return ''
      }
    }
  }
  // console.log('1 time:', time)
  return prefix
}

var longestCommonPrefix2 = function(strs) {
  if (!strs || strs.length === 0) {
    return ''
  }
  let prefix = strs[0]
  // let time = 0
  for (let i = 1; i < strs.length; i++) {
    let t = strs[i]
    // prefix通常会比数组里的字符串短，毕竟都是些随机的字符串，能共同的部分一般还是少的。
    // 那么当前面检查出来的 prefix 跟后面的 t 比较时，
    // 并不需要prefix依次从末尾减少1位再去看indexOf，可以直接把prefix截短到t的长度然后再开始比较
    // 而且在比较过程中，如果prefix为空了，那后续就不用比较了，最后的结果肯定是空，直接返回就行了
    // 典型例子就是[0]的长度巨长，[1]是个空字符串，而后面的字符串很多，本方法能极大的提高性能
    if (t.length < prefix.length) {
      prefix = prefix.substring(0, t.length)
    }
    if (!prefix) {
      return ''
    }
    while (t.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      // time += 1
      if (!prefix) {
        return ''
      }
    }
  }
  // console.log('2 time:', time)
  return prefix
}

export function longestCommonPrefixCheck() {
  let strs = ['', 'flower', 'flowerflowwe', 'flower', 'flow', 'flow']
  let s = 'flower'
  strs.unshift(s.repeat(10000))
  let i = 10000
  while (i > 0) {
    strs.push('fl')
    i--
  }
  // let strs = ['dog', 'racecar', 'car']
  console.time('longestCommonPrefix')
  let r = longestCommonPrefix(strs)
  console.timeEnd('longestCommonPrefix')
  console.log('1:', r)
  console.time('longestCommonPrefix2')
  r = longestCommonPrefix2(strs)
  console.timeEnd('longestCommonPrefix2')
  console.log('2:', r)
}

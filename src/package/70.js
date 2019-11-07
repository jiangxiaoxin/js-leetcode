/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
// if (n === 1) {
//   return 1
// }
// if (n === 2) {
//   return 2
// }
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }

var climbStairs = function(n) {
  let steps = [1, 2]
  for (let i = 2; i < n; i++) {
    let s = steps[i - 1] + steps[i - 2]
    steps.push(s)
  }
  return steps[n - 1]
}

export function climbStairsCheck() {
  let n = 2
  let r = climbStairs(n)
  console.log(r)
}

/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 *
 * ----------------
 *
 * 要想到达 n 阶，要么是从 n-1 -> n 一次走1阶上去, 要么是 n-2 -> n 一次走2阶上去,就这两种方法
 * 那就得出 f(n) = f(n-1) + f(n-2)
 * 从式子看这很典型的斐波那契数列
 *
 * 要注意：
 * 不能用递归的方法，因为递归解法会有很多重复计算
 * 比如计算 f(10) = f(9) + f(8),继而就要计算 f(9) = f(8) + f(7),这时候 f(8)的计算就出现两遍了，其余项依此类推
 * 如果使用递归去做，可以外加一个数组，将计算过的值保存下来，这样后续用到时就不需要计算了。
 * 所以索性从底下开始往上计算
 *
 * [动态规划]
 */

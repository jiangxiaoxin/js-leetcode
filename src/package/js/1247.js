var minimumSwap = function(s1, s2) {
  if (s1 === s2) {
    return 0
  }
  let index = 0
  let length = s1.length
  let xy = 0
  let yx = 0
  while (index < length) {
    if (s1[index] === 'x' && s2[index] === 'y') {
      xy += 1
    } else if (s1[index] === 'y' && s2[index] === 'x') {
      yx += 1
    }
    index += 1
  }
  let swap = 0
  let a = Math.floor(xy / 2)
  let b = xy % 2
  let c = Math.floor(yx / 2)
  let d = yx % 2
  if (b !== d) {
    swap = -1
  } else {
    swap = a * 1 + c * 1 + b * 2
  }
  return swap
}

var Det = require('./index')

var a = []

console.log(Det.isDet(a))

var d = [
  [1, 2, 6],
  [2, 5, 4],
  [3, 4, 5]
]

console.log('rank: ', Det.getRank(d))
console.log('row 1: ', Det.getRow(d, 1))
console.log('row -2: ', Det.getRow(d, -2))
console.log('value: ', Det.getValue(d))
console.log('Dt: ', Det.getT(d))

var d2 = [
  [1, 2],
  [3, 4]
]
console.log('value: ', Det.getValue(d2))

var d = 2

Det.getRank(d)
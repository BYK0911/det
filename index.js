
function Det () {}

// 判断传入的参数是不是行列式
Det.isDet = function (det) {
  if (!Array.isArray(det)) {
    return false
  }

  var rank = det.length

  if (rank === 0) {
    return false
  }

  for (var r = 0; r < rank; r++) {
    if (!Array.isArray(det[r]) || det[r].length !== rank) {
      return false
    }
  }

  return true
}

// 获取行列式的阶数
Det.getRank = function (det) {
  if (!this.isDet(det)) {
    throw new Error('Param Exception: param is not a determinant!')
  }

  return det.length
}

// 获取行列式的行
Det.getRow = function (det, rowIndex) {
  var rank = this.getRank(det)

  rowIndex = rowIndex < 0 ? rank + rowIndex : rowIndex

  if (rowIndex >= rank) {
    throw new Error('Index out of bounds')
  }

  return [...det[rowIndex]]
}

// 获取行列式的列
Det.getCol = function (det, colIndex) {
  var rank = this.getRank(det)

  colIndex = colIndex < 0 ? rank + colIndex : colIndex

  if (colIndex >= rank) {
    throw new Error('Index out of bounds')
  }

  var col = []

  det.forEach(row => col.push(row[colIndex]))

  return col
}

// 获取行列式的元素
Det.getItem = function (det, rowIndex, colIndex) {
  var rank = this.getRank(det)

  rowIndex = rowIndex < 0 ? rank + rowIndex : rowIndex
  colIndex = colIndex < 0 ? rank + colIndex : colIndex

  if (rowIndex >= rank || colIndex >= rank) {
    throw new Error('Index out of bounds')
  }
  
  return det[rowIndex][colIndex]
}

// 获取行列式的值
Det.getValue = function (det) {
  var rank = this.getRank(det)

  if (rank === 1) {
    return det[0][0]
  } else {
    var res = 0

    for( var i = 0; i < rank; i++) {
      res += this.getItem(det, 0, i) * this.getA(det, 0, i)
    }

    return res
  }
}

// 获取 i，j 元的余子式
Det.getM = function (det, rowIndex, colIndex) {
  var rank = this.getRank(det)

  rowIndex = rowIndex < 0 ? rank + rowIndex : rowIndex
  colIndex = colIndex < 0 ? rank + colIndex : colIndex

  if (rowIndex >= rank || colIndex >= rank) {
    throw new Error('Index out of bounds')
  }

  var res = []

  for (var r = 0; r < rank; r++) {
    if (r !== rowIndex) {
      var row = [...det[r]]

      row.splice(colIndex, 1)
      res.push(row)
    }
  }

  return res
}

// 获取 i, j 元的代数余子式
Det.getA = function (det, rowIndex, colIndex) {
  return Math.pow(-1, rowIndex + colIndex) * this.getValue(this.getM(det, rowIndex, colIndex))
}

// 获取转置行列式
Det.getT = function (det) {
  var rank = this.getRank(det)
  var res = []

  for (var r = 0; r < rank; r++) {
    res[r] = []
    for(var c = 0; c < rank; c++) {
      res[r][c] = det[c][r]
    }
  }

  return res
}

module.exports = Det
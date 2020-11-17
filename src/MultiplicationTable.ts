
export class MultiplicationTable {
  public render(start: number, end: number): string {
    const isValid = inputCheck(start, end)
    if (isValid) {
      const expressions: Expression[][] = buildExpressions(start, end)
      return generateTable(expressions, start, end)
    }
    else return ''
  }
}

function inputCheck(start: number, end: number): boolean {
  const isInOrder = checkOrder(start, end)
  const isInRange = false
  if (isInOrder) {
    const isInRange = checkInRange(start, end)
    if (!isInRange) {
      console.log('Out of range.')
    }
    return isInRange
  }
  else {
    return isInOrder
  }

}
function checkInRange(start: number, end: number): boolean {
  return (start > 0) && (end < 11)
}
function checkOrder(start: number, end: number): boolean {
  return start < end
}

function buildExpressions(start: number, end: number): Expression[][] {
  const expressions = [...Array(end - start + 1).keys()]
  const a = expressions.map((row, rowIndex) => [...Array(rowIndex + 1).keys()].map(
    (col, colIndex) => generateSingleExpression(start + colIndex, start + rowIndex)
  )
  )
  return a
}

function generateSingleExpression(expressionStart: number, expressionEnd: number): Expression {
  return new Expression(expressionStart, expressionEnd, expressionStart * expressionEnd)
}


function generateTable(expressions: Expression[][], start: number, end: number): string {
  // const outputWithoutSpace = expressions.map((row, rowIndex) =>
  //   row.map((col, colIndex) => {
  //     let current = printSingleMultiplication(col)
  //     if (colIndex < expressions[rowIndex].length - 1) {
  //       current.concat(getAdjustedSpace(start, end, rowIndex, colIndex))
  //     }
  //     return current
  //   }).join('  ')
  // ).join('\n')
  let outputWithoutSpace  = ''
  for (let i = 0; i < expressions.length; i++) {
    for (let j = 0; j < expressions[i].length; j++) {
      outputWithoutSpace += printSingleMultiplication(expressions[i][j])
      if (j < expressions[i].length - 1)
        outputWithoutSpace += getAdjustedSpace(start, end, i, j)
    }
    if (i < expressions.length - 1)
      outputWithoutSpace += '\n'
  }
  console.log(outputWithoutSpace)
  return outputWithoutSpace

}

function printSingleMultiplication(inputExpression: Expression): string {
  return `${inputExpression.factor1}*${inputExpression.factor2}=${inputExpression.product}`
}

function getAdjustedSpace(start: number, end: number, currentRow: number, currentCol: number): string {
  if ((start + currentCol) * end > 9 && (start + currentRow) * (start + currentCol) < 10) {
    return ' '.repeat(3)
  }
  else return ' '.repeat(2)
}



class Expression {
  constructor(factor1: number, factor2: number, product: number) {
    this.factor1 = factor1
    this.factor2 = factor2
    this.product = product
  }
  factor1: number
  factor2: number
  product: number
}

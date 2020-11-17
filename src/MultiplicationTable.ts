
export class MultiplicationTable {
  public render(start: number, end: number): string {
    const isValid = inputCheck(start, end)
    if (isValid) {
      // return 'success'
      const expressions: Expression[][] = buildExpressions(start, end)
      return generateTable(expressions)
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
  // console.log(a)
  return a
  // console.log(a)

  // return [[new Expression(2,4,8)]]

}

function generateSingleExpression(expressionStart: number, expressionEnd: number): Expression {
  return new Expression(expressionStart, expressionEnd, expressionStart * expressionEnd)
}


function generateTable(expressions: Expression[][]): string {
  // let outputexpression = [...Array(expressions.length).keys()]
  //   .map((row, rowIndex) => [...Array(expressions[rowIndex].length).keys()])
  // console.log(outputexpression)
  const outputWithoutSpace = expressions.map((row) =>
    row.map((col) => printSingleMultiplication(col)).join('  ')
    // (col, colIndex) => printSingleMultiplication(expressions[rowIndex][colIndex])
  ).join('\n')
  console.log(outputWithoutSpace)
  return outputWithoutSpace

}

function printSingleMultiplication(inputExpression: Expression): string {
  // console.log(`${inputExpression.factor1}*${inputExpression.factor2}=${inputExpression.product}`)
  return `${inputExpression.factor1}*${inputExpression.factor2}=${inputExpression.product}`
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

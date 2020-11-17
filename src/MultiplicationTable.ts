import { Console } from 'console'

export class MultiplicationTable {
  public render(start: number, end: number): string {
    const isValid = inputCheck(start, end)
    if (isValid) {
      return 'success'
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

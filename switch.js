// switch

/*
let expression = 'b'
switch(expression) {
  case 'a':
    // codigo
    console.log('a')
    break
  case 'b':
    // codigo
    console.log('b')
    break
  default:
    console.log('default')
    break
}
*/
function calculate(numberOne, operator, numberTwo) {
  let result = 0

  switch (operator) {
    case '+':
      result = numberOne +  numberTwo
      break;
    case '-':
      result = numberOne - numberTwo
      break;
    case '*':
      result = numberOne *  numberTwo
      break;
    case '/':
      result = numberOne /  numberTwo
      break;
    default:
      console.log('não implementado')
      break;
  }
  return result
}

console.log(calculate(12, '-', 12))
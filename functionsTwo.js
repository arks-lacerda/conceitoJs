
//function expression
//function anonymous

//parameters
let total = 0
const sum = function(number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 34
let number2 = 25
sum(number1, number2)
//sum(2, 3) // arguments 
//sum(3, 4)
//sum(56, 443.3434)

//console.log(`O numero 1 é ${number1}`)
//console.log(`O numero 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)
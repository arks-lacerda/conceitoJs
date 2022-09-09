// Operadores Condicional (Ternary)

// Dependendo da condição, nós recebemos valores diferentes

// Condição então valores 1 se não 2

// condition ? value1 : value2

// exemplos
// café da manhã top
let pao = false
let queijo = false

/* const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)
*/

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

// Maior de 18

let age = 19
const majorEighteen = age > 18 ? 'Maior de 18' : 'Menor de 18'
console.log(majorEighteen)
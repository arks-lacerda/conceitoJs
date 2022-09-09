/* Function() constructor
  * expression new
  * create a new object
  * this keyword

*/

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name +  " está andando!"
  }
}

const mayk = new Person("Mayk");
const joao = new Person("João");
const joana = new Person("Joana");

console.log(mayk.walk())
console.log(joao.walk())
console.log(joana.walk())

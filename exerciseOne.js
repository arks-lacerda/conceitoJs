// 1. Declare a variable named weight
  var weight
  weight= 78.9
  //let weight
  //const weight = 78.9

// 2. What type of data is a variable on top?
  console.log(typeof weight) //Type of number.

/* 3. Declare a variable and assign values to each of the data:
  * name: String
  * age: Number (integer)
  * stars: Number (float)
  * isSubscribed: Boolean (boolean)
*/
  let name = "Mike"
  let age = 23
  let stars = 4.7
  let isSubscribed = false

  console.log(typeof name)
  console.log(typeof age)
  console.log(typeof stars)
  console.log(typeof isSubscribed)

  const youtuber = {
    name: 'João',
    age: 28,
    stars: 4.6,
    isSubscribed: true
  }
  console.log(typeof youtuber)

  console.log(youtuber.name)
  console.log(youtuber.age)
  console.log(youtuber.stars)
  console.log(youtuber.isSubscribed)

  console.log(typeof youtuber.name)
  console.log(typeof youtuber.age)
  console.log(typeof youtuber.stars)
  console.log(typeof youtuber.isSubscribed)

/*  4. What type of data is the student variable below?

      4.1 Assign it the same properties and values ​​as in Exercise 3
      4.2 Display the following message on the console:
            <name> de idade <age> pesa <weight> kg.

            Attention, to replace <name> <age> e <weight> by the values ​​of each property of the object.
*/
let student =  {
  name: 'Bruno',
  age: 38,
  weight: 74.6,
  isSubscribed: true,
}

const studentTwo =  {
  name: 'Arthur',
  age: 38,
  weight: 99.6,
  isSubscribed: true,
}

//students[1] = studentTwo
console.log(typeof student)
console.log(`${student.name} de idade ${student.age} pesa ${weight}`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela valor, ou seja, somente o Array vazio.
//let students = [];
//console.log(typeof students)

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. ( Não copiar e colar objeto, mas usar o objeto criado e inseris el no array.)
let students = [
  student,
  studentTwo
]

// 7. Coloque no console o valor da posição zero do Array acima.
console.log(students)
console.log(students[0])
console.log(students[0].name)

// 8. Crie um novo student e coloque na pasição 1 do array students.
console.log(students[1].name)

/* 9. Sem rodar o código responda qual é a resposta do código abaixo e por que?
Após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1
*/
//undefined

console.log(a)
var a = 1

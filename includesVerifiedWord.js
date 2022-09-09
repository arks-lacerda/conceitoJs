//Manipulando String

// Verificar se o texto contém a palavra Amor.

let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"))
//false

let phraseTwo = "Eu quero viver o amor!"
console.log(phraseTwo.includes("Amor"))
//false, Porque ele case sensitive

let phraseThree = "Eu quero viver o Amor!"
console.log(phraseThree.includes("Amor"))
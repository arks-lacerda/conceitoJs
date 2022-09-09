//Manipulando Strings e Números

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transfome o array em um texto e onde eram espaço, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLocaleLowerCase())
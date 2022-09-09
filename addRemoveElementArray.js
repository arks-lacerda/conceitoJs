//Manipulando Array

let techs = ["html", "css","Js"]

// adicionar um item no fim
console.log(techs.push("node.js"))

// adicionar no começo
console.log(techs.unshift("Sqlite"))

// remover do final
//console.log(techs.pop())

// remover do começo
//console.log(techs.shift())

// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3)) // retira o primeiro só vai até a posição 2 do Array --- css and js
//console.log(techs.slice(1, 2)) // retira o primeiro só vai até a posição 1 do Array --- css
//console.log(techs.slice(1, 1)) // retira o primeiro só vai até a posição 0 do Array --- Array vazio

// remover 1 ou mais items em qualquer posição do array
//console.log(techs.splice(1, 1)) // Primero argumento posição / segundo quantos elemento vou retirar - retiro só css.
//console.log(techs.splice(1, 2)) // retiro -  css and js.
//console.log(techs.splice(1, 3)) // retiro - css and js. Ele começa a retirar apartir posiçãodo primeiro argumento.

// Encontar a posição de um elemento no Array
let index = techs.indexOf('css') // remove qualquer um. 'o_que_remover'
techs.splice(index, 1)
console.log(techs)
//Pegando um elemento
const h1 = document.querySelector('h1') //HTMLElement

const links = document.querySelectorAll("a") //Array Like. NodeList

//Recebendo e modificando valores
//Podemos pegar qualquer valor das tags e, também, alterar eles.

//innerText
console.log(h1.innerText)

//innerHMTL
console.log(h1.innerHTML)

//alterando o texto (ou HMTL)
h1.innerText = "New title"
console.log(h1)

// alterar o estilo
h1.style.backgroundColor = "red"

//adicionado classes
h1.classList.add('hide')

// removendo classes
h1.classList.remove('hide')

// alterando entre classes
h1.classList.toggle('hide') //tira se tiver e coloca se não tiver
h1.classList.toggle('hide')
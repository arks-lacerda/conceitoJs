// throw

function sayMyName(name = '') {
  if(name === '') {
    throw 'Nome é obrigatório'
    //throw new Error("Nome é necessario!")
  }
  console.log(name)
}

// try ... catch
try {
  sayMyName('Mayk')
}catch(e) {
  console.log(e)
}

console.log('após o try/catch')
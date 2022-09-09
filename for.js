// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

/*
for (let i = 0; i < 10; i++) {
  console.log(i)
}

for (let i = 100; i > 0; i--) {
  if(i === 50) {
    break
  }
  console.log(i)
}
*/
for(let i = 10; i > 0; i--) { 
  if(i === 5) {
    continue
  }
  console.log(i)
}
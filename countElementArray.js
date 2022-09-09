//Manipulando Array

// Contando elementos de um array.
console.log(["a", "b", "c"].length)

console.log([
  "a", 
  {type: "array"},
  function() { return "alo"}
])

console.log([
  "a", 
  {type: "array"},
  function() { return "alo"}
].length)

console.log([
  "a", 
  {type: "array"},
  function() { return "alo"}
][2]()) //acessando e executando a função

console.log([
  "a", 
  {type: "array"},
  function() { return "alo"}
][1].type) //acessando e exibindo valor de propriedade do objeto - type.
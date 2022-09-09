// for .. in

let person = {
  name: 'John',
  age: 34,
  weight: 88.6
}

for(let property in person) {
  console.log(property)
  //console.log(person["name"])
  //console.log(person.name)
  console.log(person[property])
}
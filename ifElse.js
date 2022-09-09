// if ... else

let temperature = 36.9
highTemperature = temperature >= 38
mediumTemperature = temperature  >= 37 && temperature < 38
/*
if(temperature >= 37) {
  console.log("Você está com febre")
}
*/

if(highTemperature) {
  console.log("Você está com febre alta")
} else if(mediumTemperature) {
  console.log("Você está com febre")
} else {
  console.log("Você não está com febre")
}
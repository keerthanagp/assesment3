//1. For the given JSON iterate over all for loops (for, forin , for of, forEach)
let persons = [{
  "name":"Bala",
  "age":25,
  "gender":"male",
  "state": "tamilnadu",
  "country":"indian"
},
{
  "name":"Sathish",
  "age":30,
  "gender":"male",
  "state": "tamilnadu",
  "country":"china"
},
{
  "name":"Harish",
  "age":35,
  "gender":"male",
  "state": "tamilnadu",
  "country":"japan"
},
{
  "name":"sabari",
  "age":25,
  "gender":"male",
  "state": "tamilnadu",
  "country":"phillipines"
}]
console.log("This is original object", persons)

//  for of 
console.log("1. This is for of loop:-")
for(i of persons){
  console.log(`Name: ${i.name},  Age: ${i.age}`)
}

//  for in 
console.log("")
console.log("2. this is for in loop:-")
for(e in persons){
  console.log(`Name: ${persons[e].name},  Age: ${persons[e].age}`)
}
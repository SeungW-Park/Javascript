let patient =  {
  name : "jimin",
  age : 17,
  disease : "cold"
}

console.log(patient)
console.log(patient.age)
console.log(patient["age"])
patient.name = "jk"
patient["age"] = 25

let patientList = [{name : "jimin", age : 13}, {name : "jk", age: 25}, {name : "jhope", age : 40}]

console.log(patientList)
console.log("첫번째 환자는: ", patientList[0].age)
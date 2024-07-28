// let bts = {
//   name: "방탄소년단",
//   member: 7,
// };

// let {name, member} = bts;

console.log(name, member);

let person = {
  name: "박승원",
  age: 31,
  major: "항공운항학",
};

let { name, ...args } = person;

console.log(name);
console.log(args);

let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

let resultArr = [...a, ...b, ...c];
console.log(resultArr);

function foo() {
  console.log("hello");
}

let foo = function() {
  console.log("hello");
}

let foo = () => {
  console.log("hello");
}

let age = 17;
let person1 = {
  name: "hehe",
  age: 20,
  getInfo:function() {
    console.log(this.age);
  }
}

let person2 = {
  name: "gege",
  age: 22,
  getInfo: () => {
    console.log(this);
  }
}

let people = [person1, person2];

people[people.length - 1].getInfo();
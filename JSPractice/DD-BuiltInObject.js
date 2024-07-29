// eval('1 + 2;');
// eval('var x = 5;');

// console.log(x);

// const o = eval('({ x : 1 })');
// console.log(o);

// const f = eval('(function() { return 1; })');
// console.log(f());

// const x = 1;

// function foo() {
//   // 'use strict';

//   eval('let x = 2; console.log(x);');
//   console.log(x);
// }

// foo();
// console.log(x);

// const uri = 'http://example.com?name=박승원&job=programmer&teacher';
// const enc = encodeURI(uri);
// console.log(enc);

// const dec = decodeURI(enc);
// console.log(dec);

// var x = 10;

// function foo() {
//   y = 20;
//   console.log(x + y);
// }

// foo();

// console.log(globalThis.x);
// console.log(globalThis.y);

// delete y;

// console.log(globalThis.y);

// const circle = {
//   radius: 5,
//   getDiameter() {
//     return 2 * this.radius;
//   }
// };

// console.log(circle.getDiameter());

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getDiamter = function () {
//   return 2 * this.radius;
// };

// const circle = new Circle(5);

// console.log(this);

// function square(number) {
//   console.log(this);
//   return number * number;
// }

// square(2);

// const person = {
//   name: 'Lee',
//   getName() {
//     console.log(this);
//     return this.name;
//   }
// };

// console.log(person.getName());

// function Person(name) {
//   this.name = name;
//   console.log(this);
// }

// const me = new Person('Lee');\

// var value = 1;

// const obj = {
//   value: 100,
//   foo() {
//     // console.log("foo's this :", this);
//     // console.log("foo's this.value :", this.value);

//     // function bar() {
//     //   console.log("bar's this :", this);
//     //   console.log("bar's this.value :", this.value);
//     // }

//     // bar();
    
//     // setTimeout(function () {
//     //   console.log(this.value);
//     // }.bind(this), 100);
    
//     setTimeout(() => {
//      console.log(this.value); 
//     }, 100);
//   }
// };

// obj.foo();

// const person = {
//   name: 'Lee',
//   getName() {
//     return this.name;
//   }
// };

// // console.log(person.getName());

// const anotherPerson = {
//   name: 'Kim'
// };

// anotherPerson.getName = person.getName;

// // console.log(anotherPerson.getName());

// const getName = person.getName;

// console.log(getName());

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// const me = new Person('Lee');

// Person.prototype.name = 'Kim';

// console.log(me.getName());
// console.log(Person.prototype.getName());

// function getThisBinding() {
//   console.log(arguments);
//   return this;
// }

// const thisArg = { a: 1 };

// // console.log(getThisBinding());

// console.log(getThisBinding.call(thisArg, 1, 2, 3));
// console.log(getThisBinding.apply(thisArg, [1, 2, 3]));

// function convertArgsToArray() {
//   // console.log(arguments);

//   const arr = Array.prototype.slice.call(arguments);
//   console.log(arr);

//   return arr;
// }

// convertArgsToArray(1, 2, 3);

// const person = {
//   name: 'Lee',
//   foo(callback) {
//     // 1. this -> person 객체
//     setTimeout(callback.bind(this), 100);
//   }
// };

// person.foo(function() {
//   // 2. this -> 전역 객체(window, global, globalThis)
//   console.log(`Hi! My name is ${this.name}`);
// });
// function foo() {}
// const bar = function() {}
// new foo();
// new bar();

// const baz = {
//   x: function() {}
// };

// new baz.x();

// // non-constructor
// // const arrow = () => {}
// // new arrow();

// const meth = {
//   x() {}
// };

// new meth.x();

// function createUser(name, role) {
//   return {
//     name: name,
//     role: role
//   };
// }

// let inst = new createUser('Park', 'Dev');
// console.log(inst);

// function Circle(radius) {
//   // if called by [[Constructor]] : new.target = this function
//   // if called by [[Call]] : new.target = undefined
//   if (!(this instanceof Circle)) { // == !new.target
//     return new Circle(radius);
//   }
//   this.radius = radius;
//   this.getDiameter = function() {
//     return 2 * this.radius;
//   };
// }

// const circle = Circle(5);

// console.log(circle.getDiameter());

// const str = new String(123);
// console.log(str, typeof str);

// const str2 = String(123);
// console.log(str2, typeof str2);

// const increase = function (num) {
//   return ++num;
// }

// const decrease = function (num) {
//   return --num;
// }

// const auxs = { increase, decrease };

// function makeCounter(aux) {
//   let num = 0;

//   return function () {
//     num = aux(num);
//     return num;
//   };
// }

// const increaser = makeCounter(auxs.increase);
// console.log(increaser());
// console.log(increaser());

// const obj = new Object();
// obj.x = 1;

// console.log(obj.hasOwnProperty('x'));
// console.log(obj.constructor === Object);
// console.log(obj.__proto__ === Object.prototype);

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   console.log('Hi, my name is ' + this.name);
// }

// const me = new Person('Lee');

// console.log(Object.prototype.hasOwnProperty.call(me, 'name')); // 간접호출

// function Person(name) {
//   this.name = name;
// }

// const me = new Person('Lee');

// const parent = {
//   constructor: Person,
//   sayHello() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// };

// Person.prototype = parent;
// Object.setPrototypeOf(me, parent);

// console.log(Person.prototype);

// function Person(name) {
//   this.name = name;
// }

// const me = new Person('Lee');

// const parent = {
  
// };

// Person.prototype = parent;
// Object.setPrototypeOf(me, parent);

// console.log(Person.prototype === parent);
// console.log(parent.constructor === Person);

// console.log(me instanceof Person);
// console.log(me instanceof Object);

// function Person(name) {
//   this.name = name;
// }

// const obj = Object.create(Person.prototype, {
//   name: {value: 'Lee', writable: true, enumerable:true, configurable: true}
// });
// // const obj = new Person();
// // obj.name = 'Lee';

// console.log(obj);
// console.log(Object.getPrototypeOf(obj) === Person.prototype);

// const myProto = { x: 10 };

// const obj = {
//   y: 20,
//   __proto__: myProto
// };

// console.log(obj);
// console.log(obj.x, obj.y);
// console.log(Object.getPrototypeOf(obj) === myProto);

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   console.log(`Hi! My name is ${this.name}`);
// };

// // const me = new Person('Lee');
// // me.prototypeProp = 'Prototype Prop';
// // me.prototypeMethod = function () {
// //   console.log('Prototype Method');
// // };

// // const you = new Person('Kim');

// // console.log(me);
// // console.log(you);

// Person.age = 31;
// Person.getAge = function () {
//   console.log('function :', this.age);
// }

// console.log(Person.age);
// Person.getAge();

// const person = {
//   name: 'Lee',
//   address: 'Seoul',
//   __proto__: Object.create(Object.prototype, {
//     age: { value: 31, writable: true, enumerable: true, configurable: true}
//   })
// };

// console.log('name' in person);
// console.log(Reflect.has(person, 'address'));
// console.log('hasOwnProperty' in person);
// console.log(person.hasOwnProperty('toString'));

// .. in .., Reflect.has !== hasOwnProperty

// for (const key in person) {
//   if (!person.hasOwnProperty(key)) continue;
//   console.log(`${key} : ${person[key]}`);
// }

// const arr = [1, 2, 3];
// arr.x = 10;

// for (const i in arr) {
//   console.log(`${i} : ${arr[i]}`);
// };

//Array.prototype.forEach()
// arr.forEach(v => console.log(v));

// for (const v of arr) {
//   console.log(v);
// }

// const person = {
//   name: 'Lee',
//   address: 'Seoul',
//   __proto__: { age: 31 }
// };

// console.log(Object.entries(person));